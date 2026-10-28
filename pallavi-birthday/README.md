# For Pallavi Akka 💗

A playful, mobile-responsive birthday surprise made with React, Vite, Framer Motion and Lucide icons.

## Run locally

1. Install Node.js LTS from https://nodejs.org if you don't already have it.
2. Extract this ZIP.
3. Open the extracted `pallavi-birthday` folder in VS Code.
4. Open **Terminal → New Terminal**.
5. Run:

   ```bash
   npm install
   npm run dev
   ```

6. Open the local URL Vite prints (usually `http://localhost:5173`).

## Personalise it

- Birthday letter and story text: `src/App.jsx`
- Colours, layout, responsive styling: `src/styles.css`
- Browser title: `index.html`

Search in `src/App.jsx` for `Dear Pallavi Akka` to find the letter. Replace or tweak any line so it sounds exactly like you. If you want to add real photos, place image files in `public/` and add image elements in the story section.

## Build check

```bash
npm run build
```

Vite outputs the deployable site to `dist/`.

## Publish free with Netlify Drop (quickest)

1. Run `npm install` and `npm run build`.
2. Open https://app.netlify.com/drop in your browser and sign in if prompted.
3. Drag the generated `dist` folder onto the page.
4. Netlify will provide a public website URL. Open it on your phone to test, then send the link to Pallavi Akka.

Alternative: deploy to Vercel by importing the project into a GitHub repository and choosing the Vite preset.

## Before sending

- Test the page on a phone-sized browser.
- Open the letter and tap all four reason cards.
- Test the final birthday surprise.
- If you add personal photos, only use pictures you are comfortable sharing through the public link.
