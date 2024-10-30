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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/PricingBlock/PricingBlockEdit.js":
/*!*****************************************************!*\
  !*** ./src/blocks/PricingBlock/PricingBlockEdit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





var PricingBlockEdit = function PricingBlockEdit(props) {
  var _props$attributes = props.attributes,
      title = _props$attributes.title,
      subtitle = _props$attributes.subtitle,
      price = _props$attributes.price,
      monthlyLabel = _props$attributes.monthlyLabel,
      ctaLabel = _props$attributes.ctaLabel,
      features = _props$attributes.features,
      url = _props$attributes.url,
      highlighted = _props$attributes.highlighted,
      backgroundColor = _props$attributes.backgroundColor,
      setAttributes = props.setAttributes,
      className = props.className;

  var onChangeTitle = function onChangeTitle(value) {
    setAttributes({
      title: value
    });
  };

  var onChangeSubtitle = function onChangeSubtitle(value) {
    setAttributes({
      subtitle: value
    });
  };

  var onChangePrice = function onChangePrice(value) {
    setAttributes({
      price: value
    });
  };

  var onChangeMonthly = function onChangeMonthly(value) {
    setAttributes({
      monthlyLabel: value
    });
  };

  var onButtonLinkChange = function onButtonLinkChange(urlLink, post) {
    setAttributes({
      urlLink: urlLink,
      text: post && post.title || 'Click here'
    });
  };

  var onChangeCta = function onChangeCta(value) {
    setAttributes({
      ctaLabel: value
    });
  };

  var onChangefeatures = function onChangefeatures(value) {
    setAttributes({
      features: value
    });
  };

  var onChangeBGColor = function onChangeBGColor(hexColor) {
    setAttributes({
      backgroundColor: hexColor
    });
  };

  var onChangeHighlighted = function onChangeHighlighted(value) {
    setAttributes({
      highlighted: value
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(className, " bbd-price-table-block"),
    style: highlighted ? {
      border: "3px solid ".concat(backgroundColor ? backgroundColor : '#2253ff')
    } : {}
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], {
    key: "setting"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Base color', 'bluebox-digital')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["ColorPalette"] // Element Tag for Gutenberg standard colour selector
  , {
    onChange: onChangeBGColor // onChange event callback

  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Highlighted', 'bluebox-digital')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["CheckboxControl"], {
    label: "Is highlighted?",
    checked: highlighted,
    onChange: onChangeHighlighted
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "h2",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pricing Name', 'bluebox-digital'),
    value: title,
    onChange: onChangeTitle,
    className: "pricing-name",
    style: backgroundColor ? {
      color: "".concat(backgroundColor)
    } : {}
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "h3",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Pricing Description', 'bluebox-digital'),
    value: subtitle,
    onChange: onChangeSubtitle,
    className: "pricing-desc"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "h3",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('$x', 'bluebox-digital'),
    value: price,
    onChange: onChangePrice,
    className: "pricing-price"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "p",
    value: monthlyLabel,
    onChange: onChangeMonthly,
    className: "monthly-label"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bbd-price-table-block__btn"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "a",
    placeholder: "Enter button text",
    value: ctaLabel,
    onChange: onChangeCta,
    className: "cta-button",
    style: backgroundColor ? {
      backgroundColor: "".concat(backgroundColor)
    } : {}
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["URLInputButton"], {
    url: url,
    onChange: onButtonLinkChange
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", {
    className: "bbd-price-table-block__features-splitter"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bbd-price-table-block__features-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Features', 'bluebox-digital')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "ul",
    multiline: "li",
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Write a list of features…', 'bluebox-digital'),
    value: features,
    onChange: onChangefeatures,
    className: "features",
    style: {
      '--my-color-var': backgroundColor ? backgroundColor : '#2253ff'
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PricingBlockEdit);

/***/ }),

/***/ "./src/blocks/PricingBlock/PricingBlockSave.js":
/*!*****************************************************!*\
  !*** ./src/blocks/PricingBlock/PricingBlockSave.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);




var PricingBlockSave = function PricingBlockSave(props) {
  var className = props.className,
      _props$attributes = props.attributes,
      title = _props$attributes.title,
      subtitle = _props$attributes.subtitle,
      price = _props$attributes.price,
      ctaLabel = _props$attributes.ctaLabel,
      features = _props$attributes.features,
      monthlyLabel = _props$attributes.monthlyLabel,
      url = _props$attributes.url,
      backgroundColor = _props$attributes.backgroundColor,
      highlighted = _props$attributes.highlighted;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(className, " bbd-price-table-block"),
    style: highlighted ? {
      border: "3px solid ".concat(backgroundColor ? backgroundColor : '#2253ff')
    } : {}
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
    tagName: "h2",
    value: title,
    className: "pricing-name",
    style: backgroundColor ? {
      color: "".concat(backgroundColor)
    } : {}
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
    tagName: "h3",
    value: subtitle,
    className: "pricing-desc"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
    tagName: "h3.price-label",
    value: price,
    className: "pricing-price"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
    tagName: "p",
    value: monthlyLabel,
    className: "monthly-label"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bbd-price-table-block__btn",
    style: backgroundColor ? {
      backgroundColor: "#".concat(backgroundColor)
    } : {}
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
    href: url,
    tagName: "a",
    value: ctaLabel,
    className: "cta-button",
    style: backgroundColor ? {
      backgroundColor: "".concat(backgroundColor)
    } : {}
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("hr", {
    className: "bbd-price-table-block__features-splitter"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "bbd-price-table-block__features-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Features', 'bluebox-digital')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"].Content, {
    tagName: "ul",
    className: "features",
    value: features,
    style: {
      '--my-color-var': backgroundColor ? backgroundColor : '#2253ff'
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (PricingBlockSave);

/***/ }),

/***/ "./src/blocks/PricingBlock/index.js":
/*!******************************************!*\
  !*** ./src/blocks/PricingBlock/index.js ***!
  \******************************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PricingBlockEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PricingBlockEdit */ "./src/blocks/PricingBlock/PricingBlockEdit.js");
/* harmony import */ var _PricingBlockSave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PricingBlockSave */ "./src/blocks/PricingBlock/PricingBlockSave.js");



var name = 'bluebox-digital/pricing-block';
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Pricing Block', 'bluebox-digital'),
  icon: 'index-card',
  category: 'layout',
  attributes: {
    title: {
      type: 'array',
      source: 'children',
      selector: 'h2',
      default: 'Starter'
    },
    subtitle: {
      type: 'array',
      source: 'children',
      selector: 'h3',
      default: 'For small teams'
    },
    price: {
      type: 'string',
      source: 'text',
      selector: 'h3.price-label',
      default: '$40'
    },
    monthlyLabel: {
      type: 'string',
      source: 'text',
      selector: 'p.monthly-label',
      default: 'Monthly'
    },
    ctaLabel: {
      type: 'string',
      source: 'text',
      selector: 'a.cta-label',
      default: 'Sign Up Now'
    },
    features: {
      type: 'array',
      source: 'children',
      selector: '.features'
    },
    url: {
      type: 'string'
    },
    text: {
      type: 'string'
    }
  },
  example: {
    attributes: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Enterprise', 'bluebox-digital'),
      subtitle: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('For Large Teams', 'bluebox-digital'),
      price: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('$50', 'bluebox-digital'),
      features: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Unlimited Notes', 'bluebox-digital'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('5 Workspaces', 'bluebox-digital'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('10 Team Members', 'bluebox-digital'), '💖'],
      bg_color: {
        type: 'string',
        default: '#000000'
      },
      text_color: {
        type: 'string',
        default: '#ffffff'
      }
    }
  },
  edit: _PricingBlockEdit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _PricingBlockSave__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_PricingBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/PricingBlock */ "./src/blocks/PricingBlock/index.js");


var blocks = [_blocks_PricingBlock__WEBPACK_IMPORTED_MODULE_1__];

function registerBlock(block) {
  var name = block.name,
      settings = block.settings;
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(name, settings);
}

blocks.forEach(registerBlock);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map