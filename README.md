# React Navbar

A small React and Vite project that demonstrates a reusable navigation bar. The navbar includes a logo, links for Home, About, and Company, and a Contact Us button.

## Features

- React component-based structure
- Flexbox layout for the navigation bar
- Separate JSX and CSS files for the navbar
- Vite development and build setup

## Getting Started

Follow these steps to run the project locally on your machine. Make sure Node.js and npm are installed.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Bohanos/react-intro-navbar.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd react-intro-navbar
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

   Open the local URL printed by Vite in your terminal.

### Build for production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project structure

```text
new-app/
├── public/                   # Static files served as-is
├── src/
│   ├── assets/               # Images and other imported assets
│   ├── components/
│   │   ├── footer/            # Footer component area
│   │   └── navbar/
│   │       ├── Navbar.jsx     # Navbar component and Contact Us button
│   │       └── Navbar.css     # Navbar layout and styles
│   ├── App.css                # App-level styles
│   ├── App.jsx                # Application view; renders Navbar
│   ├── index.css              # Global styles and reset
│   └── main.jsx               # React entry point
├── index.html                 # Vite HTML entry page
├── package.json               # Project metadata, dependencies, and scripts
├── package-lock.json          # Locked npm dependency versions
├── vite.config.js             # Vite configuration
└── README.md
```

## Navbar overview

`src/App.jsx` renders the `Navbar` component. The component is defined in `src/components/navbar/Navbar.jsx`, with its layout styles in `Navbar.css`. The global stylesheet resets default spacing and applies `box-sizing: border-box`.

The current navigation links have empty `href` values and are placeholders. Update them with the relevant page paths or URLs when those pages are available.

## Built with

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- CSS

