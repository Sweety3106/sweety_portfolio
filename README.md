# ✨ Next.js Portfolio Template

A modern, highly customizable, and stunning developer portfolio template built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. 

This portfolio is designed to be completely **data-driven**. You do not need to touch any React components or understand the underlying logic to personalize it. Just update **one** configuration file and swap out the images, and you have your own stunning portfolio ready to deploy!

![Template Preview](https://via.placeholder.com/1200x600.png?text=Next.js+Portfolio+Template) *(Feel free to add your own screenshot here)*

---

## 🌟 Key Features

- **100% Data-Driven:** All data (text, skills, projects, links) is centralized in a single configuration file (`data/portfolio.js`).
- **Modern Design:** Utilizes glassmorphism, smooth scrolling, entrance animations, and premium glowing gradients.
- **Dark/Light Mode:** Seamless theming support out of the box using `next-themes`.
- **Pre-built Sections:** Hero, About, Journey/Timeline, Technical Skills, Featured Projects, Achievements, and Contact.
- **Fully Responsive:** Looks flawless on mobile, tablet, and desktop devices.
- **High Performance:** Built on Next.js App Router for optimal speed and SEO.

---

## 🚀 How to Make It Yours

Follow these simple steps to fork this template and make it your own:

### 1. Clone the Repository
First, clone the project to your local machine:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies
Install the required packages using `npm` or `yarn`:
```bash
npm install
# or
yarn install
```

### 3. Personalize Your Data (The Magic Step ✨)
You do not need to edit any UI components. Simply open `data/portfolio.js` and replace the placeholder data with your own. 

This single file controls everything:
- **`name` & `seo`**: Your name and website meta tags.
- **`hero`**: Your job titles (typewriter effect), description, and resume link.
- **`about`**: Your bio and the statistics (e.g., "Projects Built", "Hackathons Won").
- **`timeline`**: Your education and work experience.
- **`skills`**: The programming languages and tools you know, categorized.
- **`projects`**: Your portfolio projects, complete with links to GitHub and Live demos.
- **`achievements`**: Your certificates or awards.
- **`contact` & `footer`**: Your email, social links, and copyright text.

### 4. Swap Out Images and Assets
All visual assets are stored in the `public/` directory. Replace the existing images with your own, keeping the same file names, or update the file names in `data/portfolio.js` to match your new files.
- Replace `profile.png` with your own profile picture.
- Replace `sweety resume.pdf` with your own resume file.
- Update project images, university logos, and certification graphics.

### 5. Run the Development Server
Test your changes locally before deploying:
```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see your customized portfolio!

---

## 📦 Deployment (Vercel)

The easiest and recommended way to deploy your Next.js portfolio is using [Vercel](https://vercel.com).

1. Push your updated code to a new repository on your GitHub account.
2. Log in to [Vercel](https://vercel.com) and click **"Add New..." > "Project"**.
3. Import your GitHub repository.
4. Leave all default build settings as they are and click **Deploy**.
5. Within minutes, your portfolio will be live on a global CDN!

---

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **3D Tilt Effects:** [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt)
- **Typewriter Effect:** [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use it, modify it, and share it!
