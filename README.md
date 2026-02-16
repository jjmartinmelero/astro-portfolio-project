<div align="center">

# 🌐 Astro Portfolio & Blog

[![Astro](https://img.shields.io/badge/Astro-5.14-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Node.js](https://img.shields.io/badge/Node.js-SSR-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

A modern, server-rendered **portfolio & blog** built with **Astro 5**, **React**, and **Tailwind CSS v4**. It features a headless CMS integration via [Content Island](https://contentisland.com), a newsletter subscription system, a contact form powered by [Resend](https://resend.com), syntax-highlighted blog posts, and a responsive design with fluid typography.

**Built by [Juan Jesús Martín Melero](https://github.com/jjmartinmelero)** following a course by [midudev](https://midu.dev).

</div>

---

## ✨ Features

| Feature                  | Description                                                                                                |
| ------------------------ | ---------------------------------------------------------------------------------------------------------- |
| 📝 **Blog**              | Dynamic posts fetched from Content Island CMS with Markdown rendering & syntax highlighting (highlight.js) |
| 🧑‍💼 **About / Portfolio** | Personal bio, experience timeline, and tool/skill showcase                                                 |
| 📰 **Newsletter**        | Subscription form integrated with Content Island                                                           |
| ✉️ **Contact Form**      | Server-side email delivery via Resend                                                                      |
| 🎨 **Fluid Typography**  | Responsive type scale powered by Utopia CSS clamp                                                          |
| 📱 **Fully Responsive**  | Mobile-first layout with Tailwind CSS v4                                                                   |
| 🖥️ **SSR**               | Server-side rendering with `@astrojs/node` (standalone mode)                                               |

---

## 📂 Project Structure

```
/
├── public/                    # Static assets
├── src/
│   ├── actions/               # Server actions (contact form, newsletter)
│   ├── assets/                # Images & media
│   ├── components/            # Shared UI (Header, Footer, Hero, etc.)
│   ├── layouts/               # Page layouts
│   ├── lib/                   # Utilities & helpers
│   ├── pages/
│   │   ├── index.astro        # Home page
│   │   ├── about.astro        # About page
│   │   └── posts/             # Blog post pages
│   ├── pods/                  # Feature modules
│   │   ├── experience-collection/
│   │   ├── mini-bio/
│   │   ├── newsletter/
│   │   ├── popular-posts/
│   │   ├── post/
│   │   ├── post-collection/
│   │   └── tool-collection/
│   └── styles/                # Global CSS & typography
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🛠️ Tech Stack

- **[Astro 5](https://astro.build)** — Static + SSR site framework
- **[React](https://react.dev)** — Interactive UI components
- **[Tailwind CSS v4](https://tailwindcss.com)** — Utility-first styling via `@tailwindcss/vite`
- **[TypeScript](https://www.typescriptlang.org)** — Type safety
- **[Content Island](https://contentisland.com)** — Headless CMS for blog posts
- **[Resend](https://resend.com)** — Transactional email API
- **[Marked](https://marked.js.org)** + **[highlight.js](https://highlightjs.org)** — Markdown rendering & syntax highlighting
- **[Prettier](https://prettier.io)** — Code formatting (with Astro & Tailwind plugins)

---

## ⚙️ Environment Variables

> [!IMPORTANT]
> This project **requires** a `.env` file at the root of the project to run correctly. The environment schema is defined in [`astro.config.mjs`](./astro.config.mjs).

Create a `.env` file in the project root with the following variables:

```env
# --- Content Island (CMS) ---
# API token used to authenticate with Content Island.
# 👇 You can use this test token to try the blog features:
CONTENT_ISLAND_SECRET_TOKEN=98bfcafff2e649ed1fccec36abde3379

# --- Resend (Email) ---
# API key from https://resend.com — required for the contact form.
RESEND_API_KEY=your_resend_api_key

# Sender email address (must be verified in Resend)
FROM_EMAIL=your_sender@example.com

# Recipient email address for contact form submissions
TO_EMAIL=your_inbox@example.com
```

| Variable                      | Required | Description                                                                 |
| ----------------------------- | :------: | --------------------------------------------------------------------------- |
| `CONTENT_ISLAND_SECRET_TOKEN` |    ✅    | Token for Content Island API. Use the test token above to explore the blog. |
| `RESEND_API_KEY`              |    ✅    | Your Resend API key for sending emails from the contact form.               |
| `FROM_EMAIL`                  |    ✅    | Verified sender email address in Resend.                                    |
| `TO_EMAIL`                    |    ✅    | Email address that receives contact form submissions.                       |

> [!TIP]
> If you only want to explore the blog and portfolio (without the contact form), you can set `RESEND_API_KEY`, `FROM_EMAIL`, and `TO_EMAIL` to any placeholder value — the app will still run, but the contact form won't send emails.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** (or pnpm / yarn)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/jjmartinmelero/astro-portfolio-project.git
cd astro-portfolio-project

# 2. Install dependencies
npm install

# 3. Create your .env file (see section above)
cp .env.example .env   # or create it manually

# 4. Start the development server
npm run dev
```

Open **[http://localhost:4321](http://localhost:4321)** in your browser 🎉

### Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the development server |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the production build |
| `npm run astro`   | Run Astro CLI commands       |

---

## 🎨 Design Highlights

- **Color palette** — Custom greens (`#EAF4F0`, `#318C66`, `#236348`)
- **Typography** — _Instrument Sans_ (headings) + _Geist_ (body), fluid scale via Utopia (360 → 1440 px)
- **Components** — Header, Footer, Hero, Article cards, Mini-bio, Experience timeline, Tool badges, Newsletter form, Contact buttons
- **Responsive** — Mobile-first grid layouts with smooth transitions

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

Made with ❤️ by **Juan Jesús Martín Melero**

</div>
