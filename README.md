# Sumit Pramanik Portfolio

A responsive Next.js portfolio built with TypeScript, CSS design tokens, Lucide, and Simple Icons from `react-icons`. Portfolio copy and project data live in `src/data/portfolio.ts`.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. The resume is served from `/Sumit-Pramanik-Resume.pdf`.

## Contact email

The contact form sends mail through the existing Nodemailer route. Add SMTP settings to `.env.local` to enable delivery:

```env
NEXT_URL_SMTP_HOST=smtp.gmail.com
NEXT_URL_SMTP_PORT=587
NEXT_URL_SMTP_SECURE=false
NEXT_URL_SMTP_USER=your-sender-address
NEXT_URL_SMTP_PASS=your-smtp-app-password
NEXT_URL_RECEIVER_EMAIL=your-inbox-address
```

SMTP credentials are read only by the server. Without them, the form displays a mailto fallback. Verify the contact address printed in the resume before publishing; its domain appears to have a duplicated `.com` suffix.

## Production checks

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the deployed site origin (for example, `https://your-domain.example`) in the Vercel project settings. This value is used by metadata, the sitemap, and robots output. Import the repository into Vercel and deploy; no paid services are required by the app.

## Content and project links

Edit `src/data/portfolio.ts` to update resume-backed text and links. Project artwork is generated in CSS. Add a verified local screenshot path to a project's optional `image` field when one is available; optional `liveUrl`, `storeUrl`, and `repoUrl` fields are rendered only when present.