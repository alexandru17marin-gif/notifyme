// NotifyMe Service Worker v1.0
const CACHE_NAME = 'notifyme-v1';
const ASSETS = ['./index.html', './manifest.json'];

// Install
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Activate
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch - Cache first, network fallback
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (resp && resp.status === 200) {
          const clone = resp.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        }
        return resp;
      }).catch(() => caches.match('./index.html'));
    })
  );
});

// Push notifications (for future backend integration)
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  const title = data.title || 'NotifyMe 🔔';
  const options = {
    body: data.body || 'Ai fișiere de revizuit azi!',
    icon: data.icon || '',
    badge: data.badge || '',
    vibrate: [200, 100, 200],
    data: { url: data.url || '/' },
    actions: [
      { action: 'open', title: 'Deschide' },
      { action: 'dismiss', title: 'Ignoră' }
    ]
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

// Notification click
self.addEventListener('notificationclick', e => {
  e.notification.close();
  if (e.action === 'dismiss') return;
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(list => {
      for (const client of list) {
        if (client.url && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('/');
    })
  );
});

// Background sync (for scheduled notifications)
self.addEventListener('sync', e => {
  if (e.tag === 'daily-notification') {
    e.waitUntil(sendDailyNotification());
  }
});

async function sendDailyNotification() {
  return self.registration.showNotification('NotifyMe 🔔', {
    body: 'Reminder-ul tău zilnic este gata!',
    vibrate: [200, 100, 200],
    tag: 'daily-reminder'
  });
}
