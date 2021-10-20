'use strict';

function onInit() {
  const { forecast } = getUserPreference();
  document.querySelector('.forecast').innerText = forecast;
}
