/*[export]*/
var FastClick = require('libs/fastclick');
var enableInlineVideo = require('libs/iphone-inline-video');
var  videoJS=require('./video.js')
FastClick(document.body);

var screenWidth = document.body.clientWidth,
  screenHeight = document.body.clientHeight,
  originWidth = 375,
  originHeight = 604;

console.log(screenWidth, screenHeight)
var Page = function () {
  this.timer = '';
  this.$body = $('.pageWrapper');
  this.$home = $('.home');
  this.$full_page = $('.full-page');
  this.$comment_page = $('.comment-page');
  this.$share_page = $('.share-page');
  this.$loading = $('.loading');
  this.init();
};


Page.prototype = {
  init: function () {
    this._reset();
    this._initHomePage();
    this._loadVedio();
  },
  _reset: function () {
    this.$body.css({
      '-webkit-transform': 'scaleX(' + screenWidth / originWidth + ') scaleY(' + screenHeight / originHeight + ')',
      transform: 'scaleX(' + screenWidth / originWidth + ') scaleY(' + screenHeight / originHeight + ')'
    });
  },
  _loadVedio: function () {
    console.log('eeeeeeee')
    var _this = this;

    // function cb() {
    //   console.log('cbcbcb')
    //   _this.timer && clearInterval(_this.timer)
    //   _this.$home.addClass('hidden').removeClass('show');
    //   _this.$full_page.addClass('show').removeClass('hidden');
    //   videoJS.play();
    // }

    // videoJS('full-page', '/video/school-first.mp4', cb);
    // document.addEventListener('DOMContentLoaded', function () {
    //   function audioAutoPlay() {
    //
    //     videoJS('full-page', '/video/school-first.mp4', cb);
        // document.addEventListener("WeixinJSBridgeReady", function () {
        //   videoJS('full-page', '/video/school-first.mp4', cb);
        // }, false);
    //   }
    //   audioAutoPlay();
    // });
    //
    // document.addEventListener("WeixinJSBridgeReady", function () {
      // _this.$home.css('display','none')

      // videoJS('full-page', '/video/school-first.mp4', cb);
      // setTimeout(videoJS.play,5000)
    //
    // }, false);

    // var full_video = document.getElementById("full-vidio");
    // console.log('this.$vidio[0]', full_video)

    // full_video.addEventListener('onloadeddata', function () {
    //   console.log('dddddddddddd111')
    //   _this.timer && clearInterval(_this.timer)
    // })

    // full_video.addEventListener('loadeddata', function () {
    //   console.log('dddddddddddd111')
    //   _this.timer && clearInterval(_this.timer)
    // })
    //
    // full_video.oncanplay = function () {
    //   console.log('dddddddddddd2222')
    //   _this.timer && clearInterval(_this.timer)
    // }

  },
  _initHomePage: function () {
    var _this = this;
    $(document).on('click', '.loading', function (e) {
      _this.$home.addClass('hidden').removeClass('visibility');
      _this._initFullPage();
      // _this._initCommentPage();
    })
    // var width = 0;
    // document.addEventListener("WeixinJSBridgeReady", function () {
    //   setTimeout(function () {
    //     document.getElementById("full-vidio").play();
    //   }, 5000)
    // }, false);
    // $(document).on('ready', function (e) {
    //   // var timer = setInterval(function () {
    //   //   width += 2.48 * 0.01;
    //   //   if (width > 2.2) clearInterval(timer);
    //   //   _this.$loading.css('width', width+'rem')
    //   // }, 100)
    //   _this.timer = setInterval(function () {
    //     width += 0.8;
    //     if (width > 2.48) width = 0;
    //     _this.$loading.css('width', width + 'rem')
    //   }, 100)
    //
    //   // _this._initFullPage();
    //   // _this.$home.addClass('hide').removeClass('on');
    // })
  },
  _initFullPage: function () {
    var _this = this;
    _this.$full_page.addClass('visibility').removeClass('hidden');
    var full_video = document.getElementById("full-vidio");
    enableInlineVideo(full_video);
    // 开始播放
    full_video.play();
    $(full_video).on('ended', function (e) {
      _this._initCommentPage();
      _this.$full_page.addClass('hide').removeClass('on');
    })
  },
  _initCommentPage: function () {
    var _this = this;
    this.$comment_page.addClass('visibility').removeClass('hidden');
    $(document).on('click', '.comment-page .share-button', function (e) {
      _this._initSharePage();
    })
  },
  _initSharePage: function () {
    this.$share_page.addClass('visibility').removeClass('hidden');
    $(document).on('click', '.share-page', function (e) {
      $('.share-page').addClass('hidden').removeClass('visibility')
    })
  },
};

new Page();

