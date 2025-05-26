# PN Creatives Website

A modern, responsive website for PN Creatives, built with React, Vite, and Tailwind CSS.

## Features

- ⚡ Fast development with [Vite](https://vitejs.dev/)
- 🎨 Custom design using [Tailwind CSS](https://tailwindcss.com/)
- 🧩 Modular React components
- 📄 Dynamic routing (React Router ready)
- 📝 Booking form (with email integration possible)
- 🖼️ Portfolio and services showcase
- 🎬 Animations with [Framer Motion](https://www.framer.com/motion/) (optional)
- 🦄 Custom fonts and branding

## Project Structure

```
├── public/
│   ├── logo.svg
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   ├── constants/
│   ├── pages/
│   ├── index.css
│   ├── Layout.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── ...
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```zsh
   git clone <your-repo-url>
   cd pncreatives-website
   ```

2. Install dependencies:

   ```zsh
   npm install
   # or
   yarn install
   ```

### Development

Start the development server:

```zsh
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build for production:

```zsh
npm run build
# or
yarn build
```

### Preview Production Build

```zsh
npm run preview
# or
yarn preview
```

## Customization

- **Services & Portfolio:** Edit service and portfolio data in `src/constants/index.js` and `src/constants/works.js`.
- **Branding & Assets:** Replace images and SVGs in `src/assets/`.
- **Styling:** Modify Tailwind config in `tailwind.config.js` and global styles in `src/index.css`.

## Deployment

You can deploy the production build (`dist/` folder) to any static hosting service (e.g., Netlify, Vercel, GitHub Pages).

## License & Usage

This project is copyright © PN Creatives. 

This repository is provided for viewing and understanding purposes only. All content, code, and assets are the property of PN Creatives and may not be copied, reused, or redistributed without explicit permission from the company.

---

**Made with ❤️ by PN Creatives**
