# Velour — Niche Parfumerie

React webshop gebouwd met Vite + React Router.

## Installeren & opstarten

```bash
# 1. Installeer dependencies
npm install

# 2. Start de development server
npm run dev

# 3. Open in browser
http://localhost:5173
```

## Bouwen voor productie

```bash
npm run build
```

De `/dist` map kun je uploaden naar Vercel, Netlify of een andere host.

## Projectstructuur

```
src/
  components/     → Navbar, Footer
  context/        → CartContext (winkelwagen state)
  data/           → products.js (alle producten + categorieën)
  pages/          → Home, CategoryPage, ProductPage, CartPage, CheckoutPage, ContactPage
  styles/         → global.css (brand tokens)
```

## Pagina's

| Route | Pagina |
|---|---|
| `/` | Homepage |
| `/collectie/woody-warm` | Categorie: Woody & Warm |
| `/collectie/floral-abstract` | Categorie: Floral & Abstract |
| `/parfum/:slug` | Productpagina |
| `/winkelwagen` | Winkelwagen |
| `/bestellen` | Checkout |
| `/contact` | Contactformulier |

## Checklist status

- [x] Homepage met realistische content
- [x] Contactformulier
- [x] 2 productcategoriepagina's met beschrijving
- [x] 6 producten (3 simpel, 3 variabel) met korte + lange beschrijving + 3 afbeeldingen
- [x] Variabele en simpele producten
- [x] 3 betaalmogelijkheden (iDEAL, Creditcard, PayPal)
- [x] 2 bezorgopties (standaard, express)
- [x] BTW-berekening in winkelwagen en checkout
- [x] Werkend checkout-proces
- [ ] Google Analytics → voeg toe in index.html
- [ ] SSL → geregeld via hostingpartij (Vercel/Netlify doet dit automatisch)
- [ ] GTmetrix → testen na deployment

## Volgende stap: Stripe koppelen

Voor echte betalingen heb je Stripe nodig:
1. Account aanmaken op stripe.com
2. `npm install @stripe/stripe-js`
3. Publishable key toevoegen aan checkout
