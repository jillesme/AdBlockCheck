/*! adblockdetect.js v1.0.0 | (c) 2014 @jilles | https://github.com/jillesme/AdBlockCheck */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.adblock = factory();
  }
})(this, function () {

  'use strict';

  var adblock = {};

  var createAd = function () {
    var ad = document.createElement('div');

    ad.id = 'adcontent';
    ad.style.display = 'none';

    document.body.appendChild(ad);

  };

  adblock.check = function (callback, delay) {
    createAd();

    setTimeout(function () {
      callback(!document.getElementById('adcontent'));
    }, delay || 1000);

  };

  return adblock;
});
