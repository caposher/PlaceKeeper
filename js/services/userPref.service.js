'use strict';

const STORAGE_KEY = 'pref';
const FORECAST_NUM = 3;
const gforecasts = [
  'Astrologic: Lion - RRRARRR you are lion, lets get some meat!',
  'Astrologic: Cat - myau! khhhhh fffff laulaulaulaulauuuuuu!',
  `Astrologic: Fish - You're too noisy, be quiet!`,
];

let gPref;

_createPref();

function changeBgColor(color) {
  gPref.color = color;
  _savePrefToStorage();
}

function getUserPreference() {
  return gPref;
}

function setBirthDay(bDate, bTime) {
  gPref.birthDate = bDate;
  gPref.birthTime = bTime;
  calcAstrologic();
  _savePrefToStorage();
}

function setEmail(email) {
  gPref.email = email;
}

function calcAge() {
  let birthYear = _getBirthTimeStamp().getFullYear();
  let now = new Date().getFullYear();
  return now - birthYear;
}

function calcAstrologic() {
  //TODO:
  //   let birthStamp = Date.parse(_getBirthTimeStamp());
  //   gPref.forecast = gforecasts[birthStamp % FORECAST_NUM];
  //   console.log(birthStamp % FORECAST_NUM);
  //   console.log(birthStamp);
}

//private functions --------------------------------------

function _createPref() {
  gPref = loadFromStorage(STORAGE_KEY);
  if (!gPref) {
    gPref = {
      color: '#758af0',
      birthDate: '2000-01-01',
      birthTime: '00:00',
      forecast: gforecasts[0],
      email: '',
      age: 0,
    };
    gPref.age = calcAge();
    calcAstrologic();
  }
}

function _savePrefToStorage() {
  saveToStorage(STORAGE_KEY, gPref);
}

function _getBirthTimeStamp() {
  let fullDateStr = [gPref.birthDate, gPref.birthTime].join(' ');
  return new Date(fullDateStr);
}
