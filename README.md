# Pranay Roberts - My Developer Portfolio

A modern, responsive developer portfolio built with React. This portfolio showcases your bio, skills, work experience, education, and projects, and is easily customizable through a single data file.

## Features
- **Bio Section:** Brief introduction and social links
- **Skills:** Categorized technical skills with icons
- **Experience:** Work history with roles, companies, and skills used
- **Education:** Academic background
- **Projects:** Highlighted projects with tags, team members, and links
- **Contact:** Ways to reach out (socials, email, etc.)
- **Dark/Light Theme Toggle**

## Tech Stack
- React (Create React App)
- Styled-components for styling
- Responsive design for all devices

## Customization
All content (bio, skills, experience, education, projects) is managed in the [`src/data/constants.js`](src/data/constants.js) file.  
Update this file to personalize the portfolio—no need to touch component code for content changes.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

## Live Demo

Check out the deployed portfolio here: [portfolio-pranay-roberts.vercel.app](https://portfolio-pranay-roberts.vercel.app/)

## Project Structure

- `src/data/constants.js` – All my portfolio data (bio, skills, experience, education, projects)
- `src/components/` – All React components (Cards, Sections, etc.)
- `src/App.js` – Main app component

---

© Pranay Roberts
