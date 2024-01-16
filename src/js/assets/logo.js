"use strict";

window.onload = () => {
  const body = document.body;
  let theme;
  
  if (body.hasAttribute('data-theme')) {
    const themeValue = body.getAttribute('data-theme');
    (themeValue === 'dark') ? theme = 'Dark' : theme = 'Light'
  }

  const logo = document.getElementById("logo");

  if(logo){
    logo.src = `./assets/images/logo/for${theme}LogoOnlyTextStroke.svg`;
  }
}