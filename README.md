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
