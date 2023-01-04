# Frontend Mentor - Base Apparel coming soon page

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

In this challenge, I practiced my HTML5, CSS3 and JavaScript skills. The main challenge for me was validating the email form, including how to manipulate the data using JavaScript and properly formatting the different form states using CSS and JavaScript. I also practiced writing forms on HTML5.

The main layout of the page (corresponding to the image and "coming soon" form) was divided using CSS Grid. Flexbox was used on the form layout to stack all elements in a single column. Absolute positioning was necessary in order to position the submit button and the warning sign.

The JS script consists mostly of a function to validate email addresses and an event listener to listen to the "submit" action that activates when the button is pressed. The validation function uses RegEx to check if the string containing the email address corresponds correctly to an email address' format. The listener function manipulates the CSS styles and HTML elements and uses the validation function to display error messages or revert the form to its original state.

### Continued development

The next step would be to adapt the code to mobile devices and smaller screens through the responsive.css file.
