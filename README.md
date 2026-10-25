# Abelito.Visuals portfolio website

A fast, single-page portfolio built with React and Vite. You do not need to be a coder to maintain it: almost everything you will ever change lives in **two text files**:

| What you want to change | File |
| --- | --- |
| Email, WhatsApp, Instagram, headline text, About, Services | `src/data/site.js` |
| Portfolio projects, images, briefs, deliverables | `src/data/projects.js` |
| Brand colours and fonts | `src/styles/tokens.css` |

Everything on the site is clearly labelled **Placeholder** until you add your real artwork. The site never presents placeholders as your work, and it never invents contact details, clients or testimonials.

---

## 3. Run the project on your laptop (do this first)

1. Install **Node.js** (the "LTS" version, 20.19 or newer) from <https://nodejs.org>.
2. Install **VS Code** (free) from <https://code.visualstudio.com> to edit files comfortably.
3. Unzip the project and open the folder in VS Code (File > Open Folder).
4. Open the built-in terminal (Terminal > New Terminal) and run:

```bash
npm install     # downloads the tools the site needs (first time only, takes a minute)
npm run dev     # starts the site on your laptop
```

5. Open the address it prints (usually <http://localhost:5173>). Every time you save a file, the page updates by itself.

To stop it, click the terminal and press `Ctrl + C`.

To test the real, final version: `npm run build` then `npm run preview`.

---

## 1. Replace the placeholder images with your artwork

1. Export your finished designs as **JPG or WebP**, about **1200 to 1800 px wide**. Keep each file under roughly 400 KB so the site stays fast.
   - Easy route: create a folder called `artwork-originals`, drop your originals in, run `npm install --save-dev sharp` once, then `npm run images`. It makes small WebP versions in `public/work` for you.
2. Put the files in the **`public/work`** folder.
3. Open `src/data/projects.js`. In a project, change the image slots, for example:

```js
cover: { src: '/work/summer-fest-poster.webp', alt: 'Orange and blue poster for a summer festival' },
images: [
  { src: '/work/summer-fest-poster.webp', alt: 'Full poster' },
  { src: '/work/summer-fest-social.webp', alt: 'Instagram version of the poster' },
],
```

4. Change `placeholder: true` to `placeholder: false` for that project. The "Placeholder" labels and sample-project notice disappear automatically.
5. Write the real `brief`, `approach` and `deliverables`.

Notes:
- Always fill in `alt`. It is a short description for people using screen readers, and it helps search engines.
- A motion project can show a video: put the file in `public/work` and set `video: '/work/my-clip.mp4'`.
- **Add a project:** copy a whole `{ ... },` block and change the `slug` (lowercase, dashes, unique). **Remove one:** delete its block.
- Your portrait (optional): put it in `public`, then set `photo: '/me.webp'` and `photoAlt` in `site.js`.

---

## 2. Edit text, colours and project details

- **Text:** open `src/data/site.js` and change the words between the quote marks. Save. Done.
- **Contact details** (also in `site.js`):

```js
contact: {
  email: 'hello@yourdomain.com',
  whatsapp: '254712345678',   // Kenya: drop the first 0, start with 254, no spaces or +
  instagram: 'abelito.visuals',
},
```

  Once filled in, the email, WhatsApp and Instagram buttons become real links, the "Placeholder" tags vanish, and the contact form's "Send by email" and "Send on WhatsApp" buttons start working. The form needs no server: it opens the visitor's email app or WhatsApp with the message already written.
- **Colours and fonts:** `src/styles/tokens.css`. Change a hex code once and it updates everywhere.
- **Page title, description and share preview:** `index.html` (top of the file).
- **Share image:** replace `public/og-image.png` (1200 x 630 px) with your own. This is the picture shown when your link is shared on WhatsApp, X and others.

---

## 4. Export or download the source code

- If you received this as a zip, you already have it. **Never upload the `node_modules` or `dist` folders**; they are rebuilt automatically.
- Best practice is to keep it on **GitHub** (free), which also makes deploying easy:
  1. Create an account at <https://github.com> and click **New repository** (name it `abelito-visuals`).
  2. Easiest way: on the new repository page click **uploading an existing file**, drag in the project files (not `node_modules`), and click **Commit changes**.
  3. After that, every edit you upload updates your live site.

---

## 5. Deploy to Vercel (free)

1. Go to <https://vercel.com> and sign up with your GitHub account.
2. Click **Add New > Project**, pick the `abelito-visuals` repository, and click **Import**.
3. Vercel detects Vite automatically. Leave the settings as they are and click **Deploy**.
4. In about a minute you get a live address like `abelito-visuals.vercel.app`.
5. **Important, once:** open `index.html` and replace every `YOUR-DOMAIN.com` with your real address (the `.vercel.app` one for now, your own domain later) so link previews work. Save and upload again.

From then on, each time you change a file on GitHub, Vercel republishes the site within a minute.

---

## 6. Connect a custom domain you bought

1. Buy a domain from a registrar (for Kenya, many people use a `.co.ke` from Kenya's registrars, or `.com` from Namecheap, Cloudflare or similar).
2. In Vercel open your project > **Settings > Domains**, type your domain (e.g. `abelitovisuals.com`) and click **Add**.
3. Vercel shows the DNS records to create. Log in to your registrar's DNS settings and add exactly those:
   - usually an **A record** for `@` pointing to the IP address Vercel shows, and
   - a **CNAME record** for `www` pointing to the value Vercel shows.
4. Wait from a few minutes up to a few hours. Vercel shows a green tick and switches on the free HTTPS padlock by itself.
5. Update `YOUR-DOMAIN.com` in `index.html` to the new domain and re-upload.

(Always copy the exact records from Vercel's screen; they can change.)

---

## What's inside

```
index.html            page title, description, share preview
public/               favicon, share image, and /work for your artwork
scripts/              the optional image optimiser
src/data/site.js      text + contact details   <- edit often
src/data/projects.js  portfolio projects       <- edit often
src/styles/           tokens.css (colours/fonts), base.css, sections.css
src/components/       the building blocks of each section
src/lib/              small helpers (contact links, shapes)
```

## Built-in quality features

Keyboard navigation and visible focus rings, a "skip to content" link, accessible case-study dialog (Esc to close, shareable links like `/#work/motion-01`), reduced-motion support, responsive layouts from 320 px phones to wide desktops, lazy-loaded images, and no heavy libraries (React only). Fonts: Bricolage Grotesque (headlines) and DM Sans (body), both free open-licence fonts from Google Fonts.
