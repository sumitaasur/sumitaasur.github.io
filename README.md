# Sumit Pramanik - Portfolio

A modern, responsive portfolio built with Next.js, React, and Tailwind CSS. Showcasing my work as a React JS & React Native Developer with 6+ years of professional experience.

## 🌟 Features

- **Modern Design**: Clean, minimalist UI with gradient effects and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **3D Card Component**: Interactive 3D card displaying contact information
- **Contact Form**: Integrated email functionality to receive messages directly
- **Social Links**: Quick access to LinkedIn, GitHub, and email
- **Dark Theme**: Professional dark theme with blue and purple accents
- **Fast Performance**: Built with Next.js for optimal performance and SEO

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email**: [Nodemailer](https://nodemailer.com/)
- **Language**: TypeScript
- **Deployment**: Vercel

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 16+ 
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-private-repo-url>
cd nextjs-portfolio-main
```

> **Note**: This is a private repository. Ensure you have the necessary SSH keys or access credentials configured.

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```env
EMAIL_USER=your-outlook-email@outlook.com
EMAIL_PASSWORD=your-app-password
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
nextjs-portfolio-main/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── send-email/
│   │   │       └── route.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── ThreeDCard.tsx
│       ├── FlipTitle.tsx
│       ├── Navbar.tsx
│       ├── InputBox.tsx
│       └── FloatingIcons.tsx
├── public/
├── package.json
└── tsconfig.json
```

## 📧 Email Configuration

The portfolio includes a contact form that sends emails using Nodemailer with Outlook:

1. Generate an [App Password](https://support.microsoft.com/en-us/account-billing/using-app-passwords-with-two-step-verification) for your Outlook account
2. Add your email and app password to `.env.local`
3. Messages sent through the contact form will be delivered to `sumitpramanick@outlook.com`

## 🎨 Customization

### Update Personal Information

Edit the following files to customize the portfolio:
- `src/components/ThreeDCard.tsx` - Contact card details
- `src/components/FlipTitle.tsx` - Greeting and introduction
- `src/components/FloatingIcons.tsx` - Social media links
- `src/app/api/send-email/route.ts` - Email recipient address

### Styling

The project uses Tailwind CSS for styling. Modify colors and styles in component files or update `globals.css` for global changes.

## 🚢 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com) from the creators of Next.js:

1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Import your private repository
4. Add environment variables in the Vercel dashboard
5. Click Deploy

[View Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Deploy on Other Platforms

You can also deploy to:
- Netlify
- AWS Amplify
- Digital Ocean
- Any Node.js hosting provider

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

This is a private repository. Access is restricted to authorized users only.

## 📄 License

This project is private and confidential. All rights reserved.

## 👤 About

**Sumit Pramanik**  
React JS & React Native Developer  
6+ Years of Professional Experience

📧 Email: [sumitpramanick@outlook.com](mailto:sumitpramanick@outlook.com)  
📱 Phone: +91-9929242693  
📍 Location: Jaipur, Rajasthan  
🔗 LinkedIn: [sumitaasur](https://www.linkedin.com/in/sumitaasur/)  
🐙 GitHub: [sumitaasur](https://github.com/sumitaasur)

---

Made Sumit Pramanik