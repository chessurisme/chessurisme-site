"use strict";

function loadUp(){
  const loadingPage = document.getElementById("loadingPage");
  const mainWrapper = document.getElementById("mainWrapper");

  setTimeout(() => {
    loadingPage.style.display = 'none';
    mainWrapper.style.display = 'flex';
  }, 5000);
}

loadUp();