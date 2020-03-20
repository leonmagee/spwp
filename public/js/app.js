(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
/**
 * React components
 */


__webpack_require__(/*! ./components/Homepage */ "./resources/js/components/Homepage.js");

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/Button.js":
/*!*******************************************!*\
  !*** ./resources/js/components/Button.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function Button() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button"
  }, "Checkout");
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./resources/js/components/Checkout.js":
/*!*********************************************!*\
  !*** ./resources/js/components/Checkout.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-stripe-checkout */ "./node_modules/react-stripe-checkout/dist/main.js");
/* harmony import */ var react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




 //import Error from './ErrorMessage';

var Checkout = /*#__PURE__*/function (_Component) {
  _inherits(Checkout, _Component);

  function Checkout() {
    _classCallCheck(this, Checkout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkout).apply(this, arguments));
  }

  _createClass(Checkout, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "stipe"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stripe_checkout__WEBPACK_IMPORTED_MODULE_1___default.a, null, this.props.children));
    }
  }]);

  return Checkout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Checkout);

/***/ }),

/***/ "./resources/js/components/Homepage.js":
/*!*********************************************!*\
  !*** ./resources/js/components/Homepage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Homepage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Checkout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Checkout */ "./resources/js/components/Checkout.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./resources/js/components/Button.js");
/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tab */ "./resources/js/components/Tab.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





 //import axios from "axios";

var Homepage = /*#__PURE__*/function (_Component) {
  _inherits(Homepage, _Component);

  function Homepage(props) {
    var _this;

    _classCallCheck(this, Homepage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Homepage).call(this, props));
    var features = [{
      'text': 'Easy Setup, easy to manage',
      'af': 0
    }, {
      'text': 'Customizable Layout',
      'af': 0
    }, {
      'text': 'Fully Responsive',
      'af': 0
    }, {
      'text': 'Works with all affiliate networks',
      'af': 0
    }, {
      'text': 'Embed Amazon content',
      'af': 1
    }];
    _this.state = {
      active_tab: 1,
      features: features
    };
    return _this;
  } // componentDidMount() {
  //     console.log('mounted')
  // }


  _createClass(Homepage, [{
    key: "onClickTab",
    value: function onClickTab(active_tab) {
      this.setState({
        active_tab: active_tab
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var features = this.state.features.map(function (feature) {
        var asterisk = '';

        if (feature.af) {
          asterisk = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
            className: "fas fa-asterisk"
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-check"
        }), feature.text, asterisk);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "homepage"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hero"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Your New Blog Shop Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, features)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tabs"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tabs__nav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.onClickTab(1);
        }
      }, "Info"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.onClickTab(2);
        }
      }, "Features"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: function onClick() {
          return _this2.onClickTab(3);
        }
      }, "Purchase")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tabs-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        index: 1,
        active: this.state.active_tab
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Your New Blog Shop Page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "A free WordPress plugin to create a simple and", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "powerful affiliate shop page on your website")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        index: 2,
        active: this.state.active_tab
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Unlock Advanced Features"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Purchase now with Stripe checkout"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Checkout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
        index: 3,
        active: this.state.active_tab
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Tab 3")))));
    }
  }]);

  return Homepage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



if (document.getElementById("homepage")) {
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Homepage, null), document.getElementById("homepage"));
}

/***/ }),

/***/ "./resources/js/components/Tab.js":
/*!****************************************!*\
  !*** ./resources/js/components/Tab.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Tab = /*#__PURE__*/function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tab).call(this));
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      if (this.props.index == this.props.active) {
        var tab = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "tabs__item"
        }, this.props.children);
      } else {
        var tab = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, tab);
    }
  }]);

  return Tab;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Tab);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/cci/Documents/Sites/Laravel/spwp/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/cci/Documents/Sites/Laravel/spwp/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);