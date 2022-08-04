# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![mobile final card](./screenshot.png)
![desktop final card](./screenshot-desktop.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox / CSS Grid
- Mobile-first workflow
- HTML and CSS only

### What I learned

```html
<picture class="card__img-wrapper">
  <source
    srcset="/images/image-product-desktop.jpg"
    media="(min-width: 1440px)"
  />
  <img
    class="card__img card__img--mobile"
    src="/images/image-product-mobile.jpg"
    alt="perfume Gabrielle CHANEL"
  />
</picture>
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

## Author

- Website - [dangelomedinag](https://github.com/dangelomedinag/)
- Frontend Mentor - [@dangelomedinag](https://www.frontendmentor.io/profile/dangelomedinag)
- Twitter - [@dangelomedinag](https://www.twitter.com/dangelomedinag)

## Acknowledgments

- css grid
- css flex-box
- layout

