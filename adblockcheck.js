/*! adblockdetect.js v1.0.1 | (c) 2014 @jilles | https://github.com/jillesme/AdBlockCheck */
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
});
