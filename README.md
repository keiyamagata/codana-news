# Codana News App | Assessment Kei Yamagata

Als bron van de nieuwsartikelen heb ik [NewsApi](https://newsapi.org/) gebruikt. De gratis versie ondersteunt enkel gebruik voor lokale ontwikkeling en daarom is er geen gedeployde versie. Om de app lokaal te kunnen testen moet je een api key aanvragen op de website van NewsApi of de door mij bezorgde api key opslaan in een `.env.local` bestand en gebruiken zoals volgt:

```bash
// .env.local

NEXT_PUBLIC_NEWS_API_KEY=...
```

Om de development server te starten:

```bash
npm run dev
```

### Geimplementeerde features

- Timeline UI element
- Dynamische content
- Interactiviteit
