# 🎋 Eat Heat — The Bamboo Restaurant

**An elegant Andhra Pradesh-style fine-dining restaurant website built with pure HTML, CSS & JavaScript.**

> *Savor the Heat of Andhra Flavors — Authentic biryanis, sizzling pulkas, and fiery Andhra curries served in an elegant bamboo ambiance in Narasaraopet.*

---

## ✨ Live Preview

Open `index.html` in any browser, or serve locally:

```bash
python -m http.server 8080
# Visit http://localhost:8080
```

---

## 📸 Features

| Feature | Description |
|---------|-------------|
| 🖼️ **Hero Slider** | Full-screen image slider with Ken Burns zoom effect and auto-advance |
| 🍽️ **Interactive Menu** | 6 tabbed categories, 18+ dishes with prices, veg/non-veg/spicy indicators |
| 📅 **Reservation Form** | Date picker, time slots (12 PM–11 PM), guest count, special requests |
| 🗺️ **Google Maps** | Embedded map on Reservations and Contact pages |
| 🖼️ **Photo Gallery** | Masonry grid with category filters and lightbox modal |
| ⭐ **Testimonials** | Auto-rotating carousel with 5 customer reviews |
| 📊 **Animated Stats** | Counter animation triggered on scroll |
| 🎯 **Scroll Animations** | Fade-in, slide-in, and scale effects on all sections |
| 📱 **Fully Responsive** | Mobile-first design with hamburger nav, works on all devices |
| 🔍 **SEO Optimized** | Meta tags, semantic HTML, ARIA labels, heading hierarchy |

---

## 📁 Project Structure

```
resturant/
├── index.html              # Homepage — hero, about, specialties, testimonials, reservation
├── menu.html               # Full menu with tabbed categories & Add to Cart
├── about.html              # Restaurant story, team bios, timeline, video section
├── reservations.html       # Booking form with calendar & Google Maps
├── contact.html            # Address, phone, email, form, map, social links
├── gallery.html            # Masonry photo grid with filters & lightbox
├── events.html             # Private dining, bamboo events, catering
├── blog.html               # 3 articles on Andhra cuisine & newsletter
├── css/
│   └── style.css           # Complete design system (~1000 lines)
├── js/
│   └── main.js             # All interactivity & animations (~250 lines)
├── images/                 # AI-generated food & restaurant photography
└── README.md
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--gold` | `#C9A96E` | Primary accent, buttons, highlights |
| `--red-deep` | `#8B0000` | Non-veg badges, CTA sections |
| `--black` | `#0D0D0D` | Primary background |
| `--bamboo-green` | `#4A7C59` | Logo, veg badges, bamboo accents |
| `--cream` | `#FAF3E0` | Body text, headings |

**Typography:** Playfair Display (headings) · Open Sans (body) · Great Vibes (script accents)

---

## 🍛 Menu Highlights

| Dish | Price | Type |
|------|-------|------|
| Chicken Biryani | ₹250 | 🔴 Non-Veg |
| Mutton Biryani | ₹300 | 🔴 Non-Veg |
| Special Bamboo Biryani | ₹350 | 🔴 Chef's Special |
| Veg Biryani | ₹200 | 🟢 Veg |
| Chicken Pulka | ₹180 | 🔴 Non-Veg |
| Gongura Chicken | ₹280 | 🔴 Spicy |
| Chicken 65 | ₹200 | 🔴 Non-Veg |
| Double Ka Meetha | ₹100 | 🟢 Veg |

---

## 🚀 Deployment

This is a **zero-dependency static site** — no build step, no Node.js, no frameworks required.

| Platform | How to Deploy |
|----------|--------------|
| **Netlify** | Drag & drop the folder at [netlify.com/drop](https://app.netlify.com/drop) |
| **GitHub Pages** | Push to repo → Settings → Pages → Deploy from `main` branch |
| **Vercel** | Run `npx vercel` from the project directory |
| **Any Hosting** | Upload all files via FTP / cPanel |
| **WordPress** | Convert to theme or import via Elementor/WPBakery |

---

## 📍 Restaurant Details

**Eat Heat — The Bamboo Restaurant**
Near Hosanna Mandir Church, Sisumandir Road, Barampet
Narasaraopet, Andhra Pradesh 522601

📧 info@eatheatbamboo.com
🕐 Open Daily: 12:00 PM – 11:00 PM

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup with ARIA accessibility
- **CSS3** — Custom properties, Grid, Flexbox, animations, parallax
- **Vanilla JavaScript** — No dependencies, IntersectionObserver API, DOM manipulation
- **Google Fonts** — Playfair Display, Open Sans, Great Vibes
- **Google Maps Embed** — Location integration

---

## 📄 License

© 2026 Eat Heat The Bamboo Restaurant. All rights reserved.

---

<p align="center">
  Crafted with ❤️ and 🌶️ in Narasaraopet, Andhra Pradesh
</p>
