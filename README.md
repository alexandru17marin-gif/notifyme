[README.md](https://github.com/user-attachments/files/26313381/README.md)
# 📲 NotifyMe PWA — Ghid de instalare

## Ce este această aplicație?

**NotifyMe** este o aplicație web progresivă (PWA) care funcționează ca o aplicație nativă Android.
Nu necesită Google Play Store. Se instalează direct din browser în câteva secunde.

---

## 🚀 Cum o instalez pe Android?

### Pasul 1 — Găzduiește fișierele
Ai nevoie de o gazdă web. Cel mai simplu, **gratuit**:

**Varianta A: Netlify Drop (recomandat, 30 secunde)**
1. Mergi la [netlify.com/drop](https://app.netlify.com/drop)
2. Trage dosarul `NotifyMe-PWA` direct în browser
3. Primești instant un link de tipul `https://xyz123.netlify.app`

**Varianta B: GitHub Pages (gratuit)**
1. Creează cont pe [github.com](https://github.com)
2. Creează un nou repository public
3. Uploadează fișierele `index.html`, `manifest.json`, `sw.js`
4. Mergi la Settings → Pages → Deploy from branch main
5. Linkul tău: `https://username.github.io/repository`

**Varianta C: Vercel**
1. Mergi la [vercel.com](https://vercel.com)
2. Import GitHub repo sau drag & drop
3. Primești link instant

---

### Pasul 2 — Instalează pe telefon

1. **Deschide Chrome pe Android** (nu alt browser!)
2. Navighează la linkul tău (ex: `https://xyz.netlify.app`)
3. Apasă meniul **⋮** (trei puncte) din dreapta sus
4. Selectează **"Adaugă pe ecranul principal"**
5. Confirmă cu **"Adaugă"**

✅ Aplicația apare acum ca o iconiță pe ecranul principal, exact ca un APK instalat!

---

## 📋 Funcționalități incluse

| Funcție | Status |
|---------|--------|
| 📁 Upload poze (JPG, PNG, GIF) | ✅ Complet |
| 📄 Upload PDF | ✅ Complet |
| 📝 Upload text / DOCX | ✅ Complet |
| 💾 Salvare locală (offline) | ✅ Complet |
| 🔔 Notificări push native | ✅ Complet |
| ⏰ Programare notificări | ✅ Complet |
| 📧 Trimitere email (mailto) | ✅ Complet |
| 📋 Istoric activitate | ✅ Complet |
| ⚙️ Setări personalizabile | ✅ Complet |
| 🌐 Funcționare offline | ✅ Complet (Service Worker) |

---

## 📧 Email automat zilnic — Configurare avansată

Aplicația deschide clientul email implicit cu conținut pregătit.
Pentru **trimitere complet automată** (fără a deschide manual emailul):

### Opțiunea 1: EmailJS (gratuit, 200 emailuri/lună)
1. Creează cont la [emailjs.com](https://emailjs.com)
2. Configurează un serviciu email (Gmail, Outlook)
3. Creează un template
4. Adaugă în `index.html` cheia API EmailJS

### Opțiunea 2: Formspree (gratuit, 50 emailuri/lună)
1. Mergi la [formspree.io](https://formspree.io)
2. Creează un form endpoint
3. Trimite un POST request din JavaScript

---

## 📱 Cerințe sistem

- **Android**: 5.0+ cu Chrome 80+
- **iOS**: 14.5+ cu Safari (notificările push nu sunt suportate pe iOS)
- **Desktop**: Chrome, Edge, Firefox

---

## 🔔 Notificări pe Android — Important

- Permite notificările când aplicația întreabă
- Mergi la **Setări Android → Aplicații → Chrome → Notificări** dacă le-ai blocat accidental
- Pentru notificări în background, aplicația trebuie să fie **instalată** (nu doar deschisă în browser)

---

## 📂 Structura fișierelor

```
NotifyMe-PWA/
├── index.html      ← Aplicația principală
├── manifest.json   ← Configurație PWA (iconițe, nume, culori)
├── sw.js           ← Service Worker (offline + notificări)
└── README.md       ← Acest ghid
```

---

## 🛠️ Personalizare rapidă

Deschide `index.html` în Notepad și modifică:
- **Linia 7** — `theme-color`: culoarea barei de status Android
- **`:root`** în CSS — culorile aplicației (--accent = violet)
- **`notif-msg`** — mesajul implicit al notificărilor

---

*Creat cu ❤️ · NotifyMe PWA v1.0*
