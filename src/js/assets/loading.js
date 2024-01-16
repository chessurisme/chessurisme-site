"use strict";

export function loadUp(){
  const loadingPage = document.getElementById("loadingPage");
  const mainWrapper = document.getElementById("mainWrapper");

  setTimeout(() => {
    loadingPage.style.display = 'flex';
    mainWrapper.style.display = 'none';
  }, 3000);
}