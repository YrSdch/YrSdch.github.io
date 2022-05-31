/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var audioData = {
    tracks_list: [{
      id: "1",
      title: "Ukulele",
      track_subtitle: "Hideaway(remix) - Kiesza",
      artist: "Bensound",
      artist_img: "./img/face/Ellipse_1.png",
      src: "https://www.bensound.com/bensound-music/bensound-ukulele.mp3",
      cover: "https://www.bensound.com/bensound-img/ukulele.jpg"
    }, {
      id: "2",
      title: "Summer",
      track_subtitle: "Hideaway(remix) - Kiesza 2",
      artist: "Bensound",
      artist_img: "./img/face/Ellipse_1_1.png",
      src: "https://www.bensound.com/bensound-music/bensound-summer.mp3",
      cover: "https://www.bensound.com/bensound-img/summer.jpg"
    }, {
      id: "3",
      title: "Happy Rock",
      track_subtitle: "Hideaway(remix) - Kiesza 3",
      artist: "Bensound",
      artist_img: "./img/face/Ellipse_1.png",
      src: "https://www.bensound.com/bensound-music/bensound-happyrock.mp3",
      cover: "https://www.bensound.com/bensound-img/happyrock.jpg"
    }, {
      id: "4",
      title: "Jazzy Frenchy",
      track_subtitle: "Hideaway(remix) - Kiesza 4",
      artist: "Bensound",
      artist_img: "./img/face/Ellipse_1.png",
      src: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3",
      cover: "https://www.bensound.com/bensound-img/jazzyfrenchy.jpg"
    }, {
      id: "5",
      title: "Acoustic Breeze",
      track_subtitle: "Hideaway(remix) - Kiesza 5",
      artist: "Bensound",
      artist_img: "./img/face/Ellipse_1.png",
      src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
      cover: "https://www.bensound.com/bensound-img/acousticbreeze.jpg"
    }, {
      id: "6",
      title: "Punky",
      track_subtitle: "Hideaway(remix) - Kiesza 6",
      artist: "Bensound",
      artist_img: "./img/face/Ellipse_1.png",
      src: "https://www.bensound.com/bensound-music/bensound-punky.mp3",
      cover: "https://www.bensound.com/bensound-img/punky.jpg"
    }, {
      id: "7",
      title: "Badass",
      track_subtitle: "Hideaway(remix) - Kiesza 7",
      artist: "Bensound",
      artist_img: "./img/face/Ellipse_1.png",
      src: "https://www.bensound.com/bensound-music/bensound-badass.mp3",
      cover: "https://www.bensound.com/bensound-img/badass.jpg"
    }, {
      id: "8",
      title: "Brazil Samba",
      track_subtitle: "Hideaway(remix) - Kiesza",
      artist: "Bensound",
      artist_img: "./img/face/Ellipse_1.png",
      src: "https://www.bensound.com/bensound-music/bensound-brazilsamba.mp3",
      cover: "https://www.bensound.com/bensound-img/brazilsamba.jpg"
    }, {
      id: "9",
      title: "Creepy",
      track_subtitle: "Hideaway(remix) - Kiesza",
      artist: "Bensound",
      artist_img: "./img/face/Ellipse_1.png",
      src: "https://www.bensound.com/bensound-music/bensound-creepy.mp3",
      cover: "https://www.bensound.com/bensound-img/creepy.jpg"
    }, {
      id: "10",
      title: "High Octane",
      track_subtitle: "Hideaway(remix) - Kiesza",
      artist: "Bensound",
      artist_img: "./img/face/Ellipse_1.png",
      src: "https://www.bensound.com/bensound-music/bensound-highoctane.mp3",
      cover: "https://www.bensound.com/bensound-img/highoctane.jpg"
    }]
  };
  var audioPlayerExist = document.querySelector('.player');
  var largePlayBtn = document.querySelector('[data-action="btn-play"]');

  var InitPlayer = /*#__PURE__*/function () {
    function InitPlayer() {
      var _this = this;

      var tracks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      _classCallCheck(this, InitPlayer);

      _defineProperty(this, "togglePlay", function () {
        var method = _this.audio.paused ? 'play' : 'pause';
        _this.playing = _this.audio.paused ? true : false;

        _this.audio[method]();

        _this.audio.paused ? _this.player.classList.remove('playing') : _this.player.classList.add('playing');
      });

      _defineProperty(this, "setHtmlTrackInfo", function (bgImage, artistImageSrc, artistNameString, trackTitleString, trackSubtitleString) {
        _this.cover.style.backgroundImage = "url(\"".concat(bgImage, "\")");
        _this.artist.src = artistImageSrc;
        _this.artistName.textContent = artistNameString;
        _this.trackTitle.textContent = trackTitleString;
        _this.trackSubtitle.textContent = trackSubtitleString;
      });

      _defineProperty(this, "handleProgress", function () {
        var percent = _this.audio.currentTime / _this.audio.duration * 100;
        _this.player.querySelector(".player-timer.current").textContent = _this.getTimeCodeFromNum(_this.audio.currentTime);
        var leftTime = _this.audio.currentTime - _this.audio.duration;
        _this.player.querySelector(".player-timer.left").textContent = _this.getTimeCodeFromNum(leftTime);
        _this.progressBar.style.width = "".concat(percent, "%");

        if (percent === 100) {
          _this.trackSwitch = true;

          _this.handleForwardButton();
        }
      });

      _defineProperty(this, "handleBackButton", function () {
        if (_this.audio.currentTime <= 3) {
          var currentTrackId = parseInt(_this.audioSource.dataset.trackid);
          var previousTrackId = currentTrackId === 1 ? '10' : (currentTrackId - 1).toString();

          var previousTrack = _this.tracks.find(function (o) {
            return o.id === previousTrackId;
          });

          _this.changeTrack(previousTrack);
        } else {
          _this.audio.currentTime = 0;
        }
      });

      _defineProperty(this, "handleForwardButton", function () {
        var currentTrackId = parseInt(_this.audioSource.dataset.trackid);
        var nextTrackId = currentTrackId === 10 ? '1' : (currentTrackId + 1).toString();

        var nextTrack = _this.tracks.find(function (o) {
          return o.id === nextTrackId;
        });

        _this.changeTrack(nextTrack);
      });

      _defineProperty(this, "changeTrack", function (track) {
        if (_this.playing) _this.trackSwitch = true;

        _this.audioSource.setAttribute('src', track.src);

        _this.audioSource.dataset.trackid = track.id;
        _this.songTitle.innerHTML = track.title;
        _this.songArtist.innerHTML = track.artist;

        _this.setHtmlTrackInfo(track.cover, track.artist_img, track.artist, track.title, track.track_subtitle);

        _this.audio.load();

        if (_this.playing) {
          _this.audio.addEventListener('canplay', function () {
            _this.audio.play();
          }, {
            once: true
          });

          _this.audio.addEventListener('play', function () {
            _this.trackSwitch = false;
          }, {
            once: true
          });
        }
      });

      _defineProperty(this, "getTimeCodeFromNum", function (num) {
        var seconds = parseInt(num);
        var minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        var hours = parseInt(minutes / 60);
        minutes -= hours * 60;
        if (hours === 0) return "".concat(minutes, ":").concat(String(seconds % 60).padStart(2, 0));
        return "".concat(hours ? String(hours).padStart(2, 0) : 0, ":").concat(minutes ? minutes : 0, ":").concat(seconds ? String(seconds % 60).padStart(2, 0) : 0);
      });

      _defineProperty(this, "scrub", function (e) {
        var scrubTime = e.offsetX / _this.progress.offsetWidth * _this.audio.duration;
        _this.audio.currentTime = scrubTime;
      });

      _defineProperty(this, "fastForward", function () {
        _this.audio.currentTime += 2;
      });

      _defineProperty(this, "fastRewind", function () {
        _this.audio.currentTime -= 2;
      });

      if (InitPlayer.exists) {
        return InitPlayer.instance;
      }

      InitPlayer.instance = this;
      InitPlayer.exists = true;
      this.tracks = tracks;
      this.player = document.querySelector('.player');
      this.audio = this.player.querySelector('.player__audio');
      this.audioSource = this.audio.querySelector('source');
      this.songTitle = this.player.querySelector('.song-info__track-title');
      this.songArtist = this.player.querySelector('.song-info__auth-name');
      this.backButton = this.player.querySelector('.backward');
      this.playButton = this.player.querySelector('.play');
      this.forwardButton = this.player.querySelector('.forward');
      this.progress = this.player.querySelector('.progress');
      this.progressBar = this.player.querySelector('.progress__filled');
      this.cover = this.player.querySelector('.song-info__img');
      this.artist = this.player.querySelector('.song-info__album-auth img');
      this.artistName = this.player.querySelector('.song-info__auth-name');
      this.trackTitle = this.player.querySelector('.song-info__track-title');
      this.trackSubtitle = this.player.querySelector('.song-info__track-subtitle');
      this.volumeSlider = this.player.querySelector(".volume-container .volume-slider");
      this.rewind = this.player.querySelector('.rewind');
      this.fast_forward = this.player.querySelector('.fast_forward');
      this.playing = false;
      this.trackSwitch = false;
    }

    _createClass(InitPlayer, [{
      key: "init",
      value: function init() {
        var _this$tracks$, _this$tracks$2, _this$tracks$3, _this$tracks$4, _this$tracks$5;

        if (!this.player) {
          return;
        }

        this.setHtmlTrackInfo((_this$tracks$ = this.tracks[0]) === null || _this$tracks$ === void 0 ? void 0 : _this$tracks$.cover, (_this$tracks$2 = this.tracks[0]) === null || _this$tracks$2 === void 0 ? void 0 : _this$tracks$2.artist_img, (_this$tracks$3 = this.tracks[0]) === null || _this$tracks$3 === void 0 ? void 0 : _this$tracks$3.artist, (_this$tracks$4 = this.tracks[0]) === null || _this$tracks$4 === void 0 ? void 0 : _this$tracks$4.title, (_this$tracks$5 = this.tracks[0]) === null || _this$tracks$5 === void 0 ? void 0 : _this$tracks$5.track_subtitle);
        this.volumeListener();
        this.audioListener();
      }
    }, {
      key: "volumeListener",
      value: function volumeListener() {
        var _this2 = this;

        this.player.querySelector(".volume-button").addEventListener("click", function () {
          var volumeEl = _this2.player.querySelector(".volume-container");

          _this2.audio.muted = !_this2.audio.muted;

          if (_this2.audio.muted) {
            volumeEl.classList.remove("icono-volumeMedium");
            volumeEl.classList.add("icono-volumeMute");
          } else {
            volumeEl.classList.add("icono-volumeMedium");
            volumeEl.classList.remove("icono-volumeMute");
          }
        });
        this.volumeSlider.addEventListener('click', function (e) {
          var sliderWidth = window.getComputedStyle(_this2.volumeSlider).width;
          var newVolume = e.offsetX / parseInt(sliderWidth);
          _this2.audio.volume = newVolume;
          _this2.player.querySelector(".volume-container .volume-percentage").style.width = newVolume * 100 + '%';
        }, false);
      }
    }, {
      key: "audioListener",
      value: function audioListener() {
        var _this3 = this;

        this.fast_forward.addEventListener('click', this.fastForward);
        this.rewind.addEventListener('click', this.fastRewind);
        this.audio.addEventListener('timeupdate', this.handleProgress);
        this.backButton.addEventListener('click', this.handleBackButton);
        this.playButton.removeEventListener('click', this.togglePlay);
        this.playButton.addEventListener('click', this.togglePlay);
        this.forwardButton.addEventListener('click', this.handleForwardButton);
        var mousedown = false;
        this.progress.addEventListener('click', this.scrub);
        this.progress.addEventListener('mousemove', function (e) {
          return mousedown && _this3.scrub(e);
        });
        this.progress.addEventListener('mousedown', function () {
          return mousedown = true;
        });
        this.progress.addEventListener('mouseup', function () {
          return mousedown = false;
        });
      }
    }]);

    return InitPlayer;
  }();

  if (audioPlayerExist) {
    console.log('audioPlayerExist', audioPlayerExist);
    var p = new InitPlayer(audioData.tracks_list);
    p.init();

    if (largePlayBtn) {
      largePlayBtn.addEventListener('click', function () {
        var playBtn = document.querySelector('.player__audio');
        var p = new InitPlayer(audioData.tracks_list);
        p.init();
        p.togglePlay();
      });
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/js/setSliderContent.js
var setContentModule = {
  setHeroSliderContent: function setHeroSliderContent(dataObject) {
    var output = [];

    for (var dataItem in dataObject) {
      var _dataObject$dataItem = dataObject[dataItem],
          _dataObject$dataItem$ = _dataObject$dataItem.title,
          title = _dataObject$dataItem$ === void 0 ? '' : _dataObject$dataItem$,
          _dataObject$dataItem$2 = _dataObject$dataItem.subtitle,
          subtitle = _dataObject$dataItem$2 === void 0 ? '' : _dataObject$dataItem$2,
          _dataObject$dataItem$3 = _dataObject$dataItem.category,
          category = _dataObject$dataItem$3 === void 0 ? '' : _dataObject$dataItem$3,
          _dataObject$dataItem$4 = _dataObject$dataItem.rhythm,
          rhythm = _dataObject$dataItem$4 === void 0 ? '' : _dataObject$dataItem$4,
          _dataObject$dataItem$5 = _dataObject$dataItem.imgSrc,
          imgSrc = _dataObject$dataItem$5 === void 0 ? '' : _dataObject$dataItem$5;
      output.push("<div class=\"hero-slider__inner\">\n                        <div class=\"hero-slider__item\">\n                            <img src=\"".concat(imgSrc, "\" alt=\"\">\n                            <div class=\"hero-slider__content\">\n                                <h2 class=\"h1-title\">\n                                  ").concat(title, "\n                                </h2>\n                                <h2 class=\"h1-subtitle\">\n                                     ").concat(subtitle, "\n                                </h2>\n                            </div>\n                            <div class=\"hero-slider__content-bottom\">\n                                <span>").concat(category, "</span>\n                                <span>").concat(rhythm, "</span>\n                            </div>\n                        </div>\n                    </div>"));
    }

    return output;
  },
  setCardListContent: function setCardListContent(dataObject) {
    var output = [];

    for (var dataItem in dataObject) {
      var _dataObject$dataItem2 = dataObject[dataItem],
          _dataObject$dataItem3 = _dataObject$dataItem2.title,
          title = _dataObject$dataItem3 === void 0 ? '' : _dataObject$dataItem3,
          _dataObject$dataItem4 = _dataObject$dataItem2.subtitle,
          subtitle = _dataObject$dataItem4 === void 0 ? '' : _dataObject$dataItem4,
          _dataObject$dataItem5 = _dataObject$dataItem2.link,
          link = _dataObject$dataItem5 === void 0 ? '' : _dataObject$dataItem5,
          _dataObject$dataItem6 = _dataObject$dataItem2.imgSrc,
          imgSrc = _dataObject$dataItem6 === void 0 ? '' : _dataObject$dataItem6;
      output.push("<a href=\"".concat(link, "\" class=\"card\">\n                        <div class=\"card__img\">\n                            <img src=\"").concat(imgSrc, "\" alt=\"").concat(title, "\">\n                        </div>\n                        <div class=\"card__body\">\n                            <h4 class=\"card__title\">\n                                ").concat(title, "\n                            </h4>\n                            <p class=\"card__subtitle\">\n                                ").concat(subtitle, "\n                            </p>\n                        </div>\n                    \n                    </a>"));
    }

    return output;
  },
  setVerticalCardListContent: function setVerticalCardListContent(dataObject) {
    var output = [];

    for (var dataItem in dataObject) {
      var _dataObject$dataItem7 = dataObject[dataItem],
          _dataObject$dataItem8 = _dataObject$dataItem7.title,
          title = _dataObject$dataItem8 === void 0 ? '' : _dataObject$dataItem8,
          _dataObject$dataItem9 = _dataObject$dataItem7.subtitle,
          subtitle = _dataObject$dataItem9 === void 0 ? '' : _dataObject$dataItem9,
          _dataObject$dataItem10 = _dataObject$dataItem7.link,
          link = _dataObject$dataItem10 === void 0 ? '' : _dataObject$dataItem10,
          _dataObject$dataItem11 = _dataObject$dataItem7.imgSrc,
          imgSrc = _dataObject$dataItem11 === void 0 ? '' : _dataObject$dataItem11;
      output.push("\n                    <a href=\"".concat(link, "\" class=\"card-vertical\">\n                    <div class=\"card-vertical__inner\">\n                        <img src=\"").concat(imgSrc, "\" alt=\"").concat(title, "\">\n                        <div class=\"card-vertical__content\">\n                            <h4 class=\"card-vertical__title\">\n                                 ").concat(title, "\n                            </h4>\n                            <h4 class=\"card-vertical__subtitle\">\n                                ").concat(subtitle, "\n                            </h4>\n                        </div>\n                    </div>\n                    </a>\n                    "));
    }

    return output;
  },
  setDjCardListContent: function setDjCardListContent(dataObject) {
    var output = [];

    for (var dataItem in dataObject) {
      var _dataObject$dataItem12 = dataObject[dataItem],
          _dataObject$dataItem13 = _dataObject$dataItem12.title,
          title = _dataObject$dataItem13 === void 0 ? '' : _dataObject$dataItem13,
          _dataObject$dataItem14 = _dataObject$dataItem12.subtitle,
          subtitle = _dataObject$dataItem14 === void 0 ? '' : _dataObject$dataItem14,
          _dataObject$dataItem15 = _dataObject$dataItem12.link,
          link = _dataObject$dataItem15 === void 0 ? '' : _dataObject$dataItem15,
          _dataObject$dataItem16 = _dataObject$dataItem12.imgSrc,
          imgSrc = _dataObject$dataItem16 === void 0 ? '' : _dataObject$dataItem16;
      output.push("\n                    <a href=\"".concat(link, "\" class=\"round-card\">\n                        <div class=\"card__img\">\n                            <img src=\"").concat(imgSrc, "\" alt=\"").concat(title, "\">\n                        </div>\n                        <div class=\"card__body\">\n                            <h4 class=\"card__title\">\n                                ").concat(title, "\n                            </h4>\n                            <p class=\"card__subtitle\">\n                               ").concat(subtitle, "\n                            </p>\n                        </div>\n                    </a>\n                    "));
    }

    return output;
  },
  setCardAuthContent: function setCardAuthContent(dataObject) {
    var output = [];

    for (var dataItem in dataObject) {
      var _dataObject$dataItem17 = dataObject[dataItem],
          _dataObject$dataItem18 = _dataObject$dataItem17.title,
          title = _dataObject$dataItem18 === void 0 ? '' : _dataObject$dataItem18,
          _dataObject$dataItem19 = _dataObject$dataItem17.subtitle,
          subtitle = _dataObject$dataItem19 === void 0 ? '' : _dataObject$dataItem19,
          _dataObject$dataItem20 = _dataObject$dataItem17.link,
          link = _dataObject$dataItem20 === void 0 ? '' : _dataObject$dataItem20,
          _dataObject$dataItem21 = _dataObject$dataItem17.imgSrc,
          imgSrc = _dataObject$dataItem21 === void 0 ? '' : _dataObject$dataItem21,
          _dataObject$dataItem22 = _dataObject$dataItem17.authName,
          authName = _dataObject$dataItem22 === void 0 ? '' : _dataObject$dataItem22,
          _dataObject$dataItem23 = _dataObject$dataItem17.authImg,
          authImg = _dataObject$dataItem23 === void 0 ? '' : _dataObject$dataItem23;
      output.push("<a href=\"".concat(link, "\" class=\"card\">\n                        <div class=\"card__img\">\n                            <div class=\"small-logo\">\n                                <svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                                    <g opacity=\"0.6\">\n                                        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.6019 28.5802C2.44347 28.5802 1.50586 27.6248 1.50586 26.4444V4.02307H5.69932V24.3093V28.5802H5.08708H3.6019ZM20.3251 24.3094V13.3311H16.1316V24.3094H13.0113V8.67537H8.8185V26.4445C8.8185 27.6242 9.75749 28.5803 10.9152 28.5803H30.7537V24.3094H20.3251ZM23.4403 21.5041H27.6338V18.0596H23.4403V21.5041Z\" fill=\"white\"/>\n                                    </g>\n                                </svg>\n                            </div>\n                            <img src=\"").concat(imgSrc, "\" alt=\"\">\n                            <div class=\"card__img-content\">\n                                <h4 class=\"card__title\">\n                                    ").concat(title, "\n                                </h4>\n                                <p class=\"card__subtitle\">\n                                   ").concat(subtitle, "\n                                </p>\n                            </div>\n                        </div>\n                        <div class=\"card__body-auth\">\n                            <div class=\"card__auth-ava\">\n                                <img src=\"").concat(authImg, "\" alt=\"\">\n                            </div>\n                            <p class=\"card__auth-name\">\n                               ").concat(authName, "\n                            </p>\n                        </div>                    \n                    </a>"));
    }

    return output;
  },
  setInstructorsCardContent: function setInstructorsCardContent(dataObject) {
    var output = [];

    for (var dataItem in dataObject) {
      var _dataObject$dataItem24 = dataObject[dataItem],
          _dataObject$dataItem25 = _dataObject$dataItem24.title,
          title = _dataObject$dataItem25 === void 0 ? '' : _dataObject$dataItem25,
          _dataObject$dataItem26 = _dataObject$dataItem24.subtitle,
          subtitle = _dataObject$dataItem26 === void 0 ? '' : _dataObject$dataItem26,
          _dataObject$dataItem27 = _dataObject$dataItem24.link,
          link = _dataObject$dataItem27 === void 0 ? '' : _dataObject$dataItem27,
          _dataObject$dataItem28 = _dataObject$dataItem24.imgSrc,
          imgSrc = _dataObject$dataItem28 === void 0 ? '' : _dataObject$dataItem28,
          _dataObject$dataItem29 = _dataObject$dataItem24.category,
          category = _dataObject$dataItem29 === void 0 ? '' : _dataObject$dataItem29,
          _dataObject$dataItem30 = _dataObject$dataItem24.imgSrcAuth_1,
          imgSrcAuth_1 = _dataObject$dataItem30 === void 0 ? '' : _dataObject$dataItem30,
          _dataObject$dataItem31 = _dataObject$dataItem24.imgSrcAuth_2,
          imgSrcAuth_2 = _dataObject$dataItem31 === void 0 ? '' : _dataObject$dataItem31;
      output.push("\n                    <a href=\"".concat(link, "\" class=\"hero-slider__inner\">\n                        <div class=\"hero-slider__item\">\n                            <img src=\"").concat(imgSrc, "\" alt=\"\">\n                            <div class=\"hero-slider__content\">\n                                <h2 class=\"h2-title\">\n                                    ").concat(title, "\n                                </h2>\n                                <h2 class=\"h2-subtitle\">\n                                    ").concat(subtitle, "\n                                </h2>\n                            </div>\n                            <div class=\"hero-slider__content-bottom\">\n                                <span>").concat(category, "</span>\n                                <div class=\"auth-round\">\n                                    <div class=\"auth-round__img\">\n                                        <img src=\"").concat(imgSrcAuth_1, "\" alt=\"\">\n                                    </div>\n                                    <div class=\"auth-round__img\">\n                                        <img src=\"").concat(imgSrcAuth_2, "\" alt=\"\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </a>\n                    "));
    }

    return output;
  },
  setPaletteContent: function setPaletteContent(dataObject) {
    var output = [];
    dataObject.forEach(function (dataItem) {
      var _dataItem$title = dataItem.title,
          title = _dataItem$title === void 0 ? '' : _dataItem$title,
          _dataItem$subtitle = dataItem.subtitle,
          subtitle = _dataItem$subtitle === void 0 ? '' : _dataItem$subtitle,
          _dataItem$link = dataItem.link,
          link = _dataItem$link === void 0 ? '' : _dataItem$link,
          _dataItem$imgSrc = dataItem.imgSrc,
          imgSrc = _dataItem$imgSrc === void 0 ? '' : _dataItem$imgSrc;
      output.push("\n                    <a href=\"".concat(link, "\" class=\"rectangle-card-item\">\n                        <div class=\"rectangle-card\">\n                            <img src=\"").concat(imgSrc, "\" alt=\"\">\n                            <div class=\"rectangle-card__content\">\n                                <h4 class=\"rectangle-card__subtitle\">").concat(subtitle, "</h4>\n                                <h4 class=\"rectangle-card__title\">").concat(title, "</h4>\n                            </div>\n                        </div>\n                    </a>\n                "));
    });
    return output;
  }
};
// EXTERNAL MODULE: ./src/js/audio-palyer.js
var audio_palyer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/index.js


var data = {
  home_page: {
    top_slider: [{
      title: "The Gainz Train",
      subtitle: "DJ B. Mills",
      "category": "Pop & Rock Hits",
      "rhythm": "150-170 Ascending BPM",
      imgSrc: "./img/Header.png"
    }, {
      title: "The Gainz Train 2",
      subtitle: "DJ B. Mills",
      "category": "Pop & Rock Hits",
      "rhythm": "150-170 Ascending BPM",
      imgSrc: "./img/instructor_pro.png"
    }],
    instructors: [{
      title: "The Gainz Train 2",
      subtitle: "DJ B. Mills",
      "category": "Pop & Rock Hits",
      "rhythm": "150-170 Ascending BPM",
      imgSrc: "./img/instructor_pro.png",
      "imgSrcAuth_1": "./img/face/Ellipse_1.png",
      "imgSrcAuth_2": "./img/face/Ellipse_1_1.png"
    }, {
      title: "FEEL THE POWER",
      subtitle: "DJ B. Mills",
      "category": "Pop & Rock Hits",
      "rhythm": "150-170 Ascending BPM",
      imgSrc: "./img/Header.png",
      "imgSrcAuth_1": "./img/face/Ellipse_1_1.png",
      "imgSrcAuth_2": "./img/face/Ellipse_1.png"
    }],
    music_genres: [{
      title: "High Energy",
      subtitle: "Uptempo Chart Hits",
      imgSrc: "./img/homeMyMusicGenres/energy.png",
      link: "#"
    }, {
      title: "Pop",
      subtitle: "Radio style Pop only",
      imgSrc: "./img/homeMyMusicGenres/pop.png",
      link: "#"
    }, {
      title: "Top 40",
      subtitle: "EDM, Pop, Throwbacks",
      imgSrc: "./img/homeMyMusicGenres/top40.png",
      link: "#"
    }, {
      title: "Feel Good",
      subtitle: "EDM, Pop, Throwbacks",
      imgSrc: "./img/homeMyMusicGenres/feelGood.png",
      link: "#"
    }, {
      title: "Pop",
      subtitle: "Radio style Pop only",
      imgSrc: "./img/homeMyMusicGenres/pop.png",
      link: "#"
    }, {
      title: "Feel Good",
      subtitle: "EDM, Pop, Throwbacks",
      imgSrc: "./img/homeMyMusicGenres/feelGood.png",
      link: "#"
    }],
    moods_slider: [{
      title: "High Energy",
      subtitle: "Uptempo Chart Hits",
      imgSrc: "./img/moods/highEnergy.png",
      link: "#"
    }, {
      title: "Pop",
      subtitle: "Radio style Pop only",
      imgSrc: "./img/moods/highEnergy2.png",
      link: "#"
    }, {
      title: "Top 40",
      subtitle: "EDM, Pop, Throwbacks",
      imgSrc: "./img/moods/highEnergy3.png",
      link: "#"
    }, {
      title: "Feel Good",
      subtitle: "EDM, Pop, Throwbacks",
      imgSrc: "./img/moods/highEnergy4.png",
      link: "#"
    }, {
      title: "Pop",
      subtitle: "Radio style Pop only",
      imgSrc: "./img/moods/highEnergy.png",
      link: "#"
    }, {
      title: "Feel Good",
      subtitle: "EDM, Pop, Throwbacks",
      imgSrc: "./img/moods/highEnergy2.png",
      link: "#"
    }],
    mixes_slider: [{
      title: "Feel the Fire  ",
      subtitle: "EDM, Top 40, Uptem...",
      imgSrc: "./img/suggest/Rectangle_257.png",
      link: "#",
      "authName": "Fusemania",
      "authImg": "./img/face/Ellipse_1.png"
    }, {
      title: "Run the Block",
      subtitle: "EDM, Top 40, Uptem...",
      imgSrc: "./img/suggest/Rectangle_257_1.png",
      link: "#",
      "authName": "Fusemania",
      "authImg": "./img/face/Ellipse_1.png"
    }, {
      title: "Burn It Up",
      subtitle: "EDM, Top 40, Uptem...",
      imgSrc: "./img/suggest/unsplash_OlTjeydUpQw.png",
      link: "#",
      "authName": "Fusemania",
      "authImg": "./img/face/Ellipse_1_2.png"
    }, {
      title: "Essential Hits",
      subtitle: "EDM, Top 40, Uptem...",
      imgSrc: "./img/suggest/unsplash_pEgsWN0kwbQ.png",
      link: "#",
      "authName": "Fusemania",
      "authImg": "./img/face/Ellipse_1_3.png"
    }, {
      title: "Pop",
      subtitle: "Radio style Pop only",
      imgSrc: "./img/suggest/unsplash_OlTjeydUpQw.png",
      link: "#",
      "authName": "Fusemania",
      "authImg": "./img/face/Ellipse_1_4.png"
    }, {
      title: "Feel Good",
      subtitle: "EDM, Pop, Throwbacks",
      imgSrc: "./img/suggest/Rectangle_257.png",
      link: "#",
      "authName": "Fusemania",
      "authImg": "./img/face/Ellipse_1_5.png"
    }, {
      title: "Pop",
      subtitle: "Radio style Pop only",
      imgSrc: "./img/suggest/unsplash_OlTjeydUpQw.png",
      link: "#",
      "authName": "Fusemania",
      "authImg": "./img/face/Ellipse_1_4.png"
    }],
    vertical_card_slider: [{
      title: "Drake",
      subtitle: "129 mixes",
      imgSrc: "./img/artists/Drake.png",
      link: "#"
    }, {
      title: "Post",
      subtitle: "72 mixes",
      imgSrc: "./img/artists/Post.png",
      link: "#"
    }, {
      title: "Metallica",
      subtitle: "72 mixes",
      imgSrc: "./img/artists/Metallica.png",
      link: "#"
    }, {
      title: "Pitbull",
      subtitle: "72 mixes",
      imgSrc: "./img/artists/Pitbull.png",
      link: "#"
    }, {
      title: "Skrillex",
      subtitle: "72 mixes",
      imgSrc: "./img/artists/Skrillex.png",
      link: "#"
    }, {
      title: "Skrillex",
      subtitle: "72 mixes",
      imgSrc: "./img/artists/Skrillex.png",
      link: "#"
    }, {
      title: "Pitbull",
      subtitle: "72 mixes",
      imgSrc: "./img/artists/Pitbull.png",
      link: "#"
    }, {
      title: "Skrillex",
      subtitle: "72 mixes",
      imgSrc: "./img/artists/Skrillex.png",
      link: "#"
    }, {
      title: "Skrillex",
      subtitle: "72 mixes",
      imgSrc: "./img/artists/Skrillex.png",
      link: "#"
    }],
    dj_like: [{
      title: "Fusemania",
      subtitle: "25.7M plays",
      imgSrc: "./img/face/Ellipse_1.png",
      link: "#"
    }, {
      title: "dj casez",
      subtitle: "25.7M plays",
      imgSrc: "./img/face/Ellipse_1_1.png",
      link: "#"
    }, {
      title: "dj rolemodel",
      subtitle: "25.7M plays",
      imgSrc: "./img/face/Ellipse_1_2.png",
      link: "#"
    }, {
      title: "shoeney",
      subtitle: "25.7M plays",
      imgSrc: "./img/face/Ellipse_1_3.png",
      link: "#"
    }, {
      title: "DJ Scotty fox",
      subtitle: "25.7M plays",
      imgSrc: "./img/face/Ellipse_1_4.png",
      link: "#"
    }, {
      title: "dj rolemodel",
      subtitle: "25.7M plays",
      imgSrc: "./img/face/Ellipse_1_5.png",
      link: "#"
    }, {
      title: "DJ Scotty fox",
      subtitle: "25.7M plays",
      imgSrc: "./img/face/Ellipse_1_4.png",
      link: "#"
    }, {
      title: "DJ Scotty fox",
      subtitle: "25.7M plays",
      imgSrc: "./img/face/Ellipse_1_4.png",
      link: "#"
    }, {
      title: "dj rolemodel",
      subtitle: "25.7M plays",
      imgSrc: "./img/face/Ellipse_1_5.png",
      link: "#"
    }, {
      title: "DJ Scotty fox",
      subtitle: "25.7M plays",
      imgSrc: "./img/face/Ellipse_1_4.png",
      link: "#"
    }],
    home_activity: [{
      title: "Fusemania",
      subtitle: "25.7M plays",
      imgSrc: "./img/homeActivity/Rectangle_29.png",
      link: "#"
    }, {
      title: "dj casez",
      subtitle: "25.7M plays",
      imgSrc: "./img/homeActivity/Rectangle_29_1.png",
      link: "#"
    }, {
      title: "dj rolemodel",
      subtitle: "25.7M plays",
      imgSrc: "./img/homeActivity/Rectangle_29_2.png",
      link: "#"
    }, {
      title: "shoeney",
      subtitle: "25.7M plays",
      imgSrc: "./img/homeActivity/Rectangle_29_3.png",
      link: "#"
    }, {
      title: "DJ Scotty fox",
      subtitle: "25.7M plays",
      imgSrc: "./img/homeActivity/Rectangle_29_1.png",
      link: "#"
    }, {
      title: "dj rolemodel",
      subtitle: "25.7M plays",
      imgSrc: "./img/homeActivity/Rectangle_29_2.png",
      link: "#"
    }, {
      title: "DJ Scotty fox",
      subtitle: "25.7M plays",
      imgSrc: "./img/homeActivity/Rectangle_29_3.png",
      link: "#"
    }],
    instructors_stations: [{
      title: "32 Count",
      subtitle: "Uptempo Chart Hits...",
      imgSrc: "./img/instructors-station/Rectangle_29.png",
      link: "#"
    }, {
      title: "Trainer Series",
      subtitle: "Radio style Pop only...",
      imgSrc: "./img/instructors-station/Rectangle_29_1.png",
      link: "#"
    }, {
      title: "Kickboxing",
      subtitle: "EDM, Pop, Throwbacks, ...",
      imgSrc: "./img/instructors-station/Rectangle_29_2.png",
      link: "#"
    }, {
      title: "High Energy",
      subtitle: "EDM, Pop, Throwbacks, ...",
      imgSrc: "./img/instructors-station/Rectangle_29_3.png",
      link: "#"
    }, {
      title: "High Energy",
      subtitle: "EDM, Pop, Throwbacks, ...",
      imgSrc: "./img/instructors-station/Rectangle_29.png",
      link: "#"
    }, {
      title: "High Energy",
      subtitle: "EDM, Pop, Throwbacks, ...",
      imgSrc: "./img/instructors-station/Rectangle_29_1.png",
      link: "#"
    }],
    bpm_mixes: [{
      title: "32 Count",
      subtitle: "Uptempo Chart Hits...",
      imgSrc: "./img/mixes/Group_107.png",
      link: "#"
    }, {
      title: "Trainer Series",
      subtitle: "Radio style Pop only...",
      imgSrc: "./img/mixes/Group_108.png",
      link: "#"
    }, {
      title: "Kickboxing",
      subtitle: "EDM, Pop, Throwbacks, ...",
      imgSrc: "./img/mixes/Group_109.png",
      link: "#"
    }, {
      title: "High Energy",
      subtitle: "EDM, Pop, Throwbacks, ...",
      imgSrc: "./img/mixes/Group_110.png",
      link: "#"
    }, {
      title: "High Energy",
      subtitle: "EDM, Pop, Throwbacks, ...",
      imgSrc: "./img/mixes/Group_107.png",
      link: "#"
    }, {
      title: "High Energy",
      subtitle: "EDM, Pop, Throwbacks, ...",
      imgSrc: "./img/mixes/Group_108.png",
      link: "#"
    }],
    content_sections: {
      running: [{
        title: "Hip Hop",
        subtitle: "160 BPM",
        imgSrc: "./img/runing/Group_104.png",
        link: "#"
      }, {
        title: "Pop",
        subtitle: "150 BPM",
        imgSrc: "./img/runing/Group_105.png",
        link: "#"
      }, {
        title: "Hip-Hop",
        subtitle: "150 BPM",
        imgSrc: "./img/runing/Group_103.png",
        link: "#"
      }, {
        title: "Popular",
        subtitle: "RUN",
        imgSrc: "./img/runing/Group_106.png",
        link: "#"
      }],
      best_of: [{
        title: "Hip Hop",
        subtitle: "BEST OF",
        imgSrc: "./img/best_of/Rectangle_28.png",
        link: "#"
      }, {
        title: "Pop",
        subtitle: "BEST OF",
        imgSrc: "./img/best_of/Rectangle_28_1.png",
        link: "#"
      }, {
        title: "Rock",
        subtitle: "BEST OF",
        imgSrc: "./img/best_of/Rectangle_28_2.png",
        link: "#"
      }, {
        title: "EDM",
        subtitle: "BEST OF",
        imgSrc: "./img/best_of/Rectangle_28_3.png",
        link: "#"
      }]
    }
  }
};
$(document).ready(function () {
  var paletteContainerSelector = ['running', 'best_of'];
  var slidersContainerSelector = {
    top_slider: {
      selector: 'hero-slider',
      setFunction: setContentModule.setHeroSliderContent
    },
    music_genres: {
      selector: 'music-genres',
      setFunction: setContentModule.setCardListContent
    },
    moods_slider: {
      selector: 'moods',
      setFunction: setContentModule.setCardListContent
    },
    mixes_slider: {
      selector: 'mixes',
      setFunction: setContentModule.setCardAuthContent
    },
    vertical_card_slider: {
      selector: 'vertical-card',
      setFunction: setContentModule.setVerticalCardListContent
    },
    dj_like: {
      selector: 'dj-like',
      setFunction: setContentModule.setDjCardListContent
    },
    home_activity: {
      selector: 'home-activity',
      setFunction: setContentModule.setCardListContent
    },
    instructors: {
      selector: 'instructors',
      setFunction: setContentModule.setInstructorsCardContent
    },
    instructors_stations: {
      selector: 'instructors-station',
      setFunction: setContentModule.setCardListContent
    },
    bpm_mixes: {
      selector: 'bpm-mixes',
      setFunction: setContentModule.setCardListContent
    }
  };
  var modules = {};
  modules.slider = {
    initModule: function initModule() {
      return false;
      var self = this;
    },
    initModuleAjaxSuccess: function initModuleAjaxSuccess(sliderSelector) {
      var self = this;

      switch (sliderSelector) {
        case 'hero-slider':
          this.initSlider($('[data-content-loading=' + sliderSelector + ']'), self.getHeroSliderSettings(false, true));
          break;

        case 'music-genres':
          this.initSlider($('[data-content-loading=' + sliderSelector + ']'), self.getCardSliderSettings(4, 4, true, 2, 1));
          break;

        case 'moods':
          this.initSlider($('[data-content-loading=' + sliderSelector + ']'), self.getCardSliderSettings(4, 4, true, 2, 1));
          break;

        case 'mixes':
          this.initSlider($('[data-content-loading=' + sliderSelector + ']'), self.getCardSliderSettings(4, 4, true, 2, 1));
          break;

        case 'vertical-card':
          this.initSlider($('[data-content-loading=' + sliderSelector + ']'), self.getCardSliderSettings(5, 5, true, 2, 2));
          break;

        case 'dj-like':
          this.initSlider($('[data-content-loading=' + sliderSelector + ']'), self.getCardSliderSettings(6, 6, false, 3, 0));
          break;

        case 'home-activity':
          this.initSlider($('[data-content-loading=' + sliderSelector + ']'), self.getCardSliderSettings(4, 4, true, 2, 1));
          break;

        case 'instructors':
          this.initSlider($('[data-content-loading=' + sliderSelector + ']'), self.getCardSliderSettings(1, 1, true, 1, 1));
          break;

        case 'instructors-station':
          this.initSlider($('[data-content-loading=' + sliderSelector + ']'), self.getCardSliderSettings(4, 4, true, 2, 1));
          break;

        case 'bpm-mixes':
          this.initSlider($('[data-content-loading=' + sliderSelector + ']'), self.getCardSliderSettings(4, 4, true, 2, 1));
          break;
      }

      $('[data-content-loading=' + sliderSelector + ']').removeClass('ajax-loading');
    },
    getHeroSliderSettings: function getHeroSliderSettings() {
      var isArrow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var isDots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var centerMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return {
        dots: isDots,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: isArrow,
        centerMode: centerMode,
        centerPadding: '20px',
        variableWidth: false,
        autoplay: true,
        autoplaySpeed: 8000
      };
    },
    getCardSliderSettings: function getCardSliderSettings(slidesToShow, slidesToShowLargeScreen) {
      var centerMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var slidePosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
      var largeSlidePosition = arguments.length > 4 ? arguments[4] : undefined;
      return {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: slidesToShowLargeScreen,
        slidesToScroll: 1,
        arrows: true,
        centerMode: centerMode,
        centerPadding: '20px',
        initialSlide: largeSlidePosition,
        responsive: [{
          breakpoint: 1500,
          settings: {
            slidesToShow: slidesToShow,
            initialSlide: slidePosition
          }
        }]
      };
    },
    initSlider: function initSlider(sliderClassName, settings) {
      sliderClassName.slick(settings);
    }
  };
  modules.ajaxRequest = {
    initModule: function initModule() {
      console.log('ajax module init');
      this.request();
    },
    request: function request() {
      var self = this;

      if (data !== null && data !== void 0 && data.home_page) {
        Object.keys(slidersContainerSelector).forEach(function (keyItem) {
          var _slidersContainerSele = slidersContainerSelector[keyItem],
              selector = _slidersContainerSele.selector,
              setFunction = _slidersContainerSele.setFunction;
          self.appendContent(selector, data.home_page[keyItem], setFunction);
        });
        paletteContainerSelector.forEach(function (item) {
          var paletteData = setContentModule.setPaletteContent(data.home_page.content_sections[item]);
          $('[data-content-loading=' + item + ']').html('');
          $('[data-content-loading=' + item + ']').append(paletteData);
        });
      }
    },
    appendContent: function appendContent(sliderSelector, data, getMarkupFunction) {
      var content = getMarkupFunction(data);
      var jqElement = $('[data-content-loading=' + sliderSelector + ']');
      this.carouselDestroy(jqElement);
      jqElement.html('').append(content);
      modules.slider.initModuleAjaxSuccess(sliderSelector);
    },
    carouselDestroy: function carouselDestroy(jqElement) {
      if (jqElement.is('.slick-initialized')) {
        jqElement.slick('unslick');
      }

      return false;
    }
  };
  modules.popup = {
    initModule: function initModule() {
      this.hidePopup();
      this.eventListener();
    },
    hidePopup: function hidePopup() {
      var overly = $('.overly');
      overly.on('click', function () {
        overly.removeClass('active');
      });
    },
    showPopup: function showPopup() {
      $('.overly').addClass('active');
    },
    getFromStorage: function getFromStorage() {
      return sessionStorage.getItem('fitRadioTrial');
    },
    setToStorage: function setToStorage() {
      sessionStorage.setItem('fitRadioTrial', 'true');
    },
    eventListener: function eventListener() {
      var self = this;
      $(document).on('mouseleave', function () {
        var isKeyInStorage = self.getFromStorage();

        if (isKeyInStorage) {
          return;
        }

        self.showPopup();
        self.setToStorage();
      });
    }
  };
  modules.customEvents = {
    initModule: function initModule() {
      this.toggleFocus();
    },
    toggleFocus: function toggleFocus() {
      var element = $('.form-search input');
      element.on('focus', function () {
        $(this).closest('.form-search').addClass('active');
      });
      element.on('blur', function () {
        $(this).closest('.form-search').removeClass('active');
      });
    }
  };

  for (var module in modules) {
    modules[module].initModule();
  }
});
// CONCATENATED MODULE: ./src/home.js


/***/ })
/******/ ]);
//# sourceMappingURL=home.bundle.js.map?hash=20b125caedb0ca3f1a8b