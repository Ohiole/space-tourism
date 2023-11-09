# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![](./Screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Ohiole/space-tourism)
- Live Site URL: [Add live site URL here](https://space-tourism-iota-murex.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- [React](https://reactjs.org/) - JS library

### What I learned

```tailwindcss
 <h1 className='pl-2 md:pl-10 lg:pl-[3rem] xl:pl-[10rem] text-2xl lg:text-3xl flex items-center gap-4 animated-class opacity-0'><span className='font-bold text-white opacity-50'>02</span><span className='tracking-widest text-white'>MEET YOUR CREW</span></h1>
```
```js
const handleKeyDown = (e) => {
        if (e.key === 'ArrowRight') {
            setCurrSlide(prev => prev + 1)
        } else if (e.key === 'ArrowLeft'){
            setCurrSlide(prev => prev - 1)
        }
    }
```

### Continued development

I am improving using tailwind CSS, I have learnt about arbitrary values in tailwind. Going forward i would like to continue my progress with Next.js 

### Useful resources

- [Tailwind CSS](https://tailwindcss.com/docs) - This helped me for styling using tailwind. I really liked this pattern and will use it going forward.
- [ChatGPT](https://chat.openai.com/) - This AI helpmed with the onkeydown event listener and thoiught me about the key property of the event object used to target a particular key on the keyboard

## Author

- Frontend Mentor - [@Ohiole](https://www.frontendmentor.io/profile/Ohiole)
- Twitter - [@_ojoo](https://www.twitter.com/_ojoo)

