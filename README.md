This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Next Js

- advance routing
- Nested layouts
- built optimization
- dynamic html streaming
- server components
- data fetching
- css support
- client and server side rendering.
- scalable
- performance
- developer experience
- Fast Refresh
- enhanced debugging 
- typescript
- static assets ready
- image optimization 
- internationalization 
- redirect/rewrite
- deployment
-
- npx create-next-app@latest
- small letter and without space project name set or make new folder by .
- src / directory : no
- app router : yes
- customize : no

- root file in next js is page.js
- root folder in next js is app
- root folder er root file er
- by default when any routed url hit then next js oi folder er page.js (like index.js) file er html ke render korbe. render er somoy layout ke korbe.
- layout er modde childern hisebe page.js bosbe. all page ai layout er modde childern hesebe bosbe. a\nd render hobe.
- kono kichu like cdn theke ana link ai type sob kichu layout e import hobe cz ekhne html tag ache

* - Why not use a tag in here?

- the behaviour of anchor tag when click here then the page reload autometaca\lly but we want witout reload . so that instead of anchor tag use Link component with href . only when use external link then need to use anchor tag

- jokhon akti route theke onno route e jawa hoi tokhon oi nidirsto route server theke fetch kore content niye ase. and cash o save kore rakhe . aksthe puro bundle data na ene route base data load koray onek fast and speed pawa jay. but jodi kono route onek heavey data hoi then akti loading ra\khte hobe fallba\ck loader hesebe. akti route er paser route ke age theke next js e prefetch kore rakhce. jodi prefetch false kroe rakha hoi then ati prefetch kore rakhe na.

- next js er error handling er jonno error.js file cteate kore document theke errror js code use korete hobe. a\i client side er folder hisebe use hoi. and ai error ta client ke dekhay. ai error handle er subida holo error dile user ke full app error na dekhiyo nidirsto router er jonno error dkehay and onnano route e er sokol kaj kora jay. and set kora error text dekano jay user ke. error js file e eeror permeter ja oi folder er sob file er error khuje kono error pele errror parameter er maddome pass korebe. error parameter er sathe reset parameter o thake ja diye akti button er maddome click kore reset dewa hoi route ke karon onek somoy arokom onek error tahke jsa state related or others ja reset diley thik hoye jay. .

- not-found file er maddome custom design make kora jay notfound route er jonno. ata server side theke render hoye ase.

- loading e behind the sence react-sunpence use hoye ase.

- data fetching and caching.
- built in optimizaion on next.js are image optimization , font optimization etc.

- images props list: https://nextjs.org/docs/app/api-reference/components/image#props
# 🧠 React.js vs Next.js – একটি IT কোম্পানির ব্র্যান্ড ওয়েবসাইটের জন্য সর্বোত্তম পছন্দ

এই ডকুমেন্টটি একটি IT কোম্পানির ব্র্যান্ড ওয়েবসাইট তৈরির জন্য **React.js** এবং **Next.js** এর মধ্যে তুলনামূলক বিশ্লেষণ, সুবিধা, এবং প্রযুক্তিগত বৈশিষ্ট্য নিয়ে বিস্তারিতভাবে আলোচনা করে। আপনি যদি SEO-friendly, high-performance এবং scalable ওয়েবসাইট তৈরি করতে চান, তাহলে এই ডকুমেন্টটি আপনার জন্য উপযোগী।

---

## 📋 Table of Contents

* [Next.js কী?](#-nextjs-কি)
* [Next.js এর বৈশিষ্ট্যসমূহ](#-nextjs-এর-বৈশিষ্ট্যসমূহ-features)
* [Routing & Rendering Behavior](#-routing--rendering-behavior-in-nextjs)
* [Internal Routing ও Anchor Tag](#-why-not-use-a-tag-for-internal-routing)
* [Error Handling](#-error-handling-in-nextjs)
* [404 Not Found Page](#-not-found-page)
* [Loading State](#-loading-state)
* [Next.js vs React.js](#-একটি-it-কোম্পানির-ব্র্যান্ড-ওয়েবসাইটের-জন্য-nextjs-কেন-সেরা)
* [উপসংহার](#-উপসংহার)
* [Stack Recommendation](#-stack-recommendation-for-it-company-website)

---

## 📍 Next.js কী?

**Next.js** হলো একটি React ভিত্তিক ওপেন সোর্স Full-stack Framework, যা দিয়ে Static এবং Dynamic ওয়েব অ্যাপ্লিকেশন তৈরি করা যায়। এটি React-এর সব সুবিধা সংরক্ষণ করে এবং তার উপরে অনেক Advanced Feature যুক্ত করে। Next.js মূলত **Production-ready Application Development** কে সহজ করে তোলে।

---

## 🚀 Next.js এর বৈশিষ্ট্যসমূহ (Features)

### ✅ Advanced Routing System

* **File-based Routing**: `pages/` ফোল্ডারে ফাইল তৈরি করলেই নিজে নিজে route তৈরি হয়।
* **Dynamic Routing**: `[slug].js`, `[id].js` ইত্যাদির মাধ্যমে dynamic route handle করা যায়।
* **Route Prefetching**: পাশের route গুলা prefetch করে, ফলে ফাস্ট load হয়।
* **Fallback Support**: Data-heavy রাউটগুলো fallback এর মাধ্যমে handle করা যায়।

### ✅ Nested Layouts

* Next.js 13 থেকে layout ভিত্তিক routing system এসেছে।
* প্রতিটি `layout.js` এ HTML boilerplate থাকে যা সব child pages এর জন্য reusable।
* যেমন: `/dashboard/page.js` layout-এর ভিতরে render হবে।
* Layout গুলোতে আমরা CSS/CDN/Script import করে পুরো app-এ একবারেই ব্যবহার করতে পারি।

### ✅ Built-in Optimization

* CSS, JS, Font, এবং Image optimization built-in।
* Lazy loading, bundle splitting, efficient script loading সবকিছু ডিফল্টভাবে করে।

### ✅ Dynamic HTML Streaming

* React 18 এর Suspense এর উপর ভিত্তি করে Next.js ডাটা fetch এর সময় stream আকারে HTML পাঠায়। ফলে performance অনেক বেড়ে যায়।

### ✅ React Server Components

* কম JavaScript পাঠিয়ে performance বাড়ানোর জন্য কিছু component শুধুমাত্র server-এ রান করে।

### ✅ Data Fetching and Caching

* Static Generation: `getStaticProps()`
* Server-side Rendering: `getServerSideProps()`
* App Router: async `fetch()` + `cache` + `revalidate` + `use()`

### ✅ Client and Server Side Rendering

* একসাথে SSR, CSR, SSG, ISR ব্যবহার করা যায়।

### ✅ Scalable Architecture

* Team-based development এর জন্য component-based structure এবং layout system ব্যবহারে maintainability সহজ।

### ✅ Performance

* Prefetch, lazy load, optimized image/font rendering এর কারণে স্পীড অনেক বেশি।

### ✅ Developer Experience

* Zero config, File-based routing, TypeScript support, Tailwind CSS, ESLint integration সহ উন্নত ডেভেলপার অভিজ্ঞতা।

### ✅ Fast Refresh & Enhanced Debugging

* Component-level ফাস্ট রিফ্রেশ
* উন্নত error overlay system

### ✅ TypeScript Support

* `.ts`, `.tsx` ফাইল সাপোর্ট
* টাইপ সেফ কোডিং সম্ভব

### ✅ Static Assets Support

* `public/` ফোল্ডারে রাখা static assets সরাসরি serve করা যায়।

### ✅ Image Optimization

* `next/image` দ্বারা responsive, lazy-loaded, optimized image serve করা যায়।

### ✅ Internationalization (i18n)

* Multiple language support

### ✅ Redirect & Rewrite

* `next.config.js` এ নিয়ন্ত্রণযোগ্য

### ✅ Deployment

* **Vercel** এ এক ক্লিকে deploy করা যায়
* **Netlify**, **Firebase**, **AWS** এও supported

---

## 🔢 Routing & Rendering Behavior in Next.js

* যখন routed URL hit করে, তখন Next.js ওই ফোল্ডারের `page.js` render করে
* `layout.js` ফাইল child হিসেবে `page.js` বসায়
* CDN/CSS/script গুলো layout-এ একবারেই import করা হয়

---

## 🔗 Why Not Use `<a>` Tag for Internal Routing?

* `<a>` tag এ ক্লিক করলে পেজ reload হয়
* SPA behavior বজায় রাখতে `<Link href="/">` ব্যবহার করা হয়
* External লিংকের ক্ষেত্রে `<a>` tag ব্যবহার করা যায়

---

## ⚠ Error Handling in Next.js

* `error.js` ফাইল দিয়ে scoped error দেখানো যায়
* `error()` function এ `reset()` থাকে যা state reset করতে সহায়ক
* নির্দিষ্ট ফোল্ডারে error হলে সেটিই render হয়, পুরো অ্যাপ বন্ধ হয় না

---

## ❌ Not Found Page

* `not-found.js` দ্বারা custom 404 পেজ তৈরি হয়
* এটি server-side render হয়ে আসে

---

## 📅 Loading State

* `loading.js` ফাইল fallback হিসেবে কাজ করে
* React Suspense এর উপর ভিত্তি করে কাজ করে

---

## 🏢 একটি IT কোম্পানির ব্র্যান্ড ওয়েবসাইটের জন্য Next.js কেন সেরা?

| প্রয়োজন           | Next.js কিভাবে সহায়ক                  |
| ------------------ | -------------------------------------- |
| SEO                | SSR + SSG = SEO Friendly               |
| Fast Load          | Static Generation, Prefetching         |
| Routing            | Dynamic + File Based + Prefetch        |
| Layout             | Shared Header/Footer, CDN, CSS support |
| Error Control      | Scoped Error Page with Reset           |
| 404 Page           | Custom Design possible                 |
| Image Optimization | Built-in lazy loading & compression    |
| Deployment         | Vercel/Netlify - সহজ ও দ্রুত           |

---

## ✔ উপসংহার

React.js শিখে শুরু করা ভালো, তবে একটি প্রফেশনাল IT কোম্পানির ব্র্যান্ড ওয়েবসাইট তৈরি করতে হলে **Next.js** সবচেয়ে ভালো পছন্দ। এটি শুধুমাত্র UI না, বরং full performance, SEO, scalability, এবং easy deployment support করে।

> "A great product needs a great foundation — and for modern websites, Next.js is that foundation."

---

## 📅 Stack Recommendation for IT Company Website

* **Framework**: Next.js
* **Styling**: Tailwind CSS
* **Router**: App Router (Next.js 13+)
* **Hosting**: Vercel / Netlify
* **Tools**: `next/image`, `next/font`, SEO meta, `loading.js`, `error.js`

---
