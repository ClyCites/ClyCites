<div align="center">
  <img src="assets/159470957.png" alt="ClyCites" width="150px"/>

  <div>
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">CLYCITES</h3>

   <div align="center">
     ClyCites is a pioneering technology platform dedicated to strengthening digital infrastructure and interconnection within Uganda's agricultural sector, with expanding reach across Africa. We serve as a critical bridge between farmers, agribusinesses, researchers, and policymakers through innovative digital solutions.
    </div>
</div>

## Mission 

Our mission is to create a robust, user-friendly, and inclusive online marketplace that simplifies the buying and selling of agricultural products. We are committed to providing a platform that enables farmers and agribusinesses to reach a wider market and maximize their profits.

## What We Do

Online Marketing Platform: ClyCites offers a state-of-the-art online marketing system designed specifically for the agriculture industry. Our platform connects farmers and agricultural producers directly with consumers, retailers, and wholesalers.

Product Listings: We provide a comprehensive platform for farmers to showcase their products, from fresh produce to value-added goods, allowing them to reach a broader audience and increase sales.

Buyer-Seller Connectivity: ClyCites facilitates easy and secure transactions between buyers and sellers, ensuring transparency and trust throughout the process.

Market Insights: We offer valuable market insights, data analytics, and trends to help farmers make informed decisions and optimize their production.

## Why Choose ClyCites

Innovation: We are at the forefront of agricultural technology, constantly developing and improving our platform to meet the evolving needs of the industry.

Accessibility: ClyCites is accessible to farmers of all sizes, from smallholders to large commercial operations, fostering inclusivity in the agricultural marketplace.

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

Built with Next.js, TailwindCSS, and TypeScript, this landing page not only looks great but also serves as a hands-on project to reinforce one's understanding of these technologies.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 27k+ members. It's a place where people help each other out.

Let's get into it.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Appealing Hero Section**: Visually striking hero section that captures attention and sets the tone for the website

👉 **Camp Exploration Section**: Showcase various camps in a dedicated section, allowing users to explore different options.

👉 **Engaging Travel Guide Section**: A compelling travel guide section with informative content and captivating visuals.

👉 **Feature-Rich Section**: A complex and feature-rich section offering advanced functionalities or in-depth information.

👉 **Call to Action for Mobile Apps**: A call-to-action section encouraging users to explore the mobile app version, complete with download links.

👉 **Footer**: Comprehensive footer section containing site and social media links for easy navigation and connectivity.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>


Open your terminal and run the following command to clone the repository to your local machine: 

Then, navigate into the project directory:

```bash 

cd ClyCites

```
#### Install Dependencies
Inside the project directory, install the necessary packages by running:

```bash 

npm install

```
Example:
To install Tailwind CSS;
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This command will download and install all dependencies listed in the ```bash package.json ``` File.


#### Run the Development Server
After installation is complete, start the development server with: 

```bash 

npm run dev

``` 

Once the server is running, open your browser and go to http://localhost:3000 to view the application. 

#### Build for Production

To create an optimized production build, run:

```bash 

npm run build

```
After building, you can start the production server with:

```bash 

npm start

``` 


**If you are stuck anywhere**
```bash
Ctrl+C
```

**To go into a specific folder**
```bash
cd folder_name
```

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>constants.index.ts</code></summary>

```typescript
// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'how_hilink_work', label: 'How Hilink Work?' },
  { href: '/', key: 'services', label: 'Services' },
  { href: '/', key: 'pricing ', label: 'Pricing ' },
  { href: '/', key: 'contact_us', label: 'Contact Us' },
];

// CAMP SECTION
export const PEOPLE_URL = [
  '/person-1.png',
  '/person-2.png',
  '/person-3.png',
  '/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Real maps can be offline',
    icon: '/map.svg',
    variant: 'green',
    description:
      'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
  },
  {
    title: 'Set an adventure schedule',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: 'Technology using augment reality',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
  },
  {
    title: 'Many new locations every month',
    icon: '/location.svg',
    variant: 'orange',
    description:
      'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'About Hilink',
      'Press Releases',
      'Environment',
      'Jobs',
      'Privacy Policy',
      'Contact Us',
    ],
  },
  {
    title: 'Our Community',
    links: ['Climbing xixixi', 'Hiking hilink', 'Hilink kinthill'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'hilink@akinthil.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
    '/wordpress.svg',
  ],
};
```

</details>

<details>
<summary><code>globals.css</code></summary>

```typescript
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Inter;
}

@layer utilities {
  .btn_white { 
    @apply  border-white bg-white px-8 py-3 text-green-50
  }
  .btn_white_text  { 
    @apply  border-white bg-white px-8 py-3 text-gray-90
  }
  .btn_green  { 
    @apply  border-green-50 bg-green-50 px-8 py-5 text-white
  }
  .btn_dark_green { 
    @apply  bg-green-90 px-8 py-4 text-white transition-all hover:bg-black
  }
  .btn_dark_green_outline  { 
    @apply border-gray-20 bg-green-90 px-8 py-5 text-white
  }
  
  .max-container {
    @apply mx-auto max-w-[1440px];
  }

  .padding-container {
    @apply px-6 lg:px-20 3xl:px-0;
  }

  .flexCenter {
    @apply flex items-center justify-center;
  }

  .flexBetween {
    @apply flex items-center justify-between;
  }

  .flexStart {
    @apply flex items-center justify-start;
  }

  .flexEnd {
    @apply flex items-center justify-end;
  }

  /* FONTS */
  .regular-64 {
    @apply text-[64px] font-[400] leading-[120%];
  }

  .regular-40 {
    @apply text-[40px] font-[400] leading-[120%];
  }

  .regular-32 {
    @apply text-[32px] font-[400];
  }

  .regular-24 {
    @apply text-[24px] font-[400];
  }

  .regular-20 {
    @apply text-[20px] font-[400];
  }

  .regular-18 {
    @apply text-[18px] font-[400];
  }

  .regular-16 {
    @apply text-[16px] font-[400];
  }

  .regular-14 {
    @apply text-[14px] font-[400];
  }

  .medium-14 {
    @apply text-[14px] font-[600];
  }

  .bold-88 {
    @apply text-[88px] font-[700] leading-[120%];
  }

  .bold-64 {
    @apply text-[64px] font-[700] leading-[120%];
  }

  .bold-52 {
    @apply text-[52px] font-[700] leading-[120%];
  }

  .bold-40 {
    @apply text-[40px] font-[700] leading-[120%];
  }

  .bold-32 {
    @apply text-[32px] font-[700] leading-[120%];
  }

  .bold-20 {
    @apply text-[20px] font-[700];
  }

  .bold-18 {
    @apply text-[18px] font-[700];
  }

  .bold-16 {
    @apply text-[16px] font-[700];
  }

  /* Hero */
  .hero-map {
    @apply absolute right-0 top-0 h-screen w-screen bg-pattern-2 bg-cover bg-center md:-right-28 xl:-top-60;
  }

  /* Camp */
  .camp-quote {
    @apply absolute -right-6 bottom-4 w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0;
  }

  /* Feature */
  .feature-phone {
    @apply absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex  3xl:left-20;
  }

  /* Get App */
  .get-app {
    @apply max-container relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-green-90 bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-5xl;
  }
}

/* Hide scrollbar for Chrome, Safari and Opera */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
```

</details>

<details>
<summary><code>tailwind.config.ts</code></summary>

```typescript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};
```

</details>

## <a name="links">🔗 Links</a>

Assets used in the project are here [here](https://drive.google.com/file/d/10bwdMeLAl7scTjrorqtG3v2Z6b4b7S-w/view?usp=sharing)

## <a name="more">🚀 More</a>

**Advance your skills with Next.js 14 Pro Course**

Enjoyed creating this project? Dive deeper into our PRO courses for a richer learning adventure. They're packed with detailed explanations, cool features, and exercises to boost your skills. Give it a go!

<a href="https://jsmastery.pro/next14" target="_blank">
<img src="https://github.com/sujatagunale/EasyRead/assets/151519281/557837ce-f612-4530-ab24-189e75133c71" alt="Project Banner">
</a>

<br />
<br />

**Accelerate your professional journey with the Expert Training program**

And if you're hungry for more than just a course and want to understand how we learn and tackle tech challenges, hop into our personalized masterclass. We cover best practices, different web skills, and offer mentorship to boost your confidence. Let's learn and grow together!

<a href="https://www.jsmastery.pro/masterclass" target="_blank">
<img src="https://github.com/sujatagunale/EasyRead/assets/151519281/fed352ad-f27b-400d-9b8f-c7fe628acb84" alt="Project Banner">
</a>

#
