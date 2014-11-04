/*! AdBlockCheck.js v1.0.2 | (c) 2014 @jilles | https://github.com/jillesme/AdBlockCheck */
var adblock = (function () {

  'use strict';

  var adblock = {};

  var createAd = function () {
    var ad = document.createElement('div');

    ad.id = 'adcontent';

    document.body.appendChild(ad);

    return ad;
  };

  adblock.check = function (callback, delay) {
    var ad = createAd();

    setTimeout(function () {
      var active = (ad.offsetLeft === 0 && ad.offsetTop === 0);
      callback(active);
    }, delay || 1000);

  };

  return adblock;
})();
