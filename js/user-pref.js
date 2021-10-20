'use strict';

function onInit() {
  const userPref = getUserPreference();
  document.querySelector('main').style.backgroundColor = userPref.color;
  document.querySelector('.prefer-color').value = userPref.color;
  document.querySelector('.birth-date').value = userPref.birthDate;
  document.querySelector('.birth-time').value = userPref.birthTime;
  document.querySelector('.age-display').innerText = userPref.age;
}

function onAgeRange(val) {
  document.querySelector('.age-display').innerText = val;
}

function onSubmit(ev) {
  ev.preventDefault();

  const bgColor = document.querySelector('.prefer-color').value;
  document.querySelector('main').style.backgroundColor = bgColor;
  changeBgColor(bgColor);

  const bDate = document.querySelector('.birth-date').value;
  const bTime = document.querySelector('.birth-time').value;
  if (bDate && bTime) setBirthDay(bDate, bTime);

  const email = document.querySelector('.email').value;
  if (email) setEmail(email);

  window.location = 'index.html';
}
