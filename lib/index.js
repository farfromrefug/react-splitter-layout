(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-splitter-layout"] = factory(require("react"));
	else
		root["react-splitter-layout"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _SplitterLayout = __webpack_require__(2);

	var _SplitterLayout2 = _interopRequireDefault(_SplitterLayout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SplitterLayout2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(4);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _Pane = __webpack_require__(9);

	var _Pane2 = _interopRequireDefault(_Pane);

	__webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function clearSelection() {
	  if (window.getSelection) {
	    if (window.getSelection().empty) {
	      window.getSelection().empty();
	    } else if (window.getSelection().removeAllRanges) {
	      window.getSelection().removeAllRanges();
	    }
	  } else if (document.selection) {
	    document.selection.empty();
	  }
	}

	var DEFAULT_SPLITTER_SIZE = 4;

	var SplitterLayout = function (_React$Component) {
	  _inherits(SplitterLayout, _React$Component);

	  function SplitterLayout(props) {
	    _classCallCheck(this, SplitterLayout);

	    var _this = _possibleConstructorReturn(this, (SplitterLayout.__proto__ || Object.getPrototypeOf(SplitterLayout)).call(this, props));

	    _this.handleResize = _this.handleResize.bind(_this);
	    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
	    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
	    _this.handleSplitterMouseDown = _this.handleSplitterMouseDown.bind(_this);
	    _this.state = {
	      secondaryPaneSize: 0,
	      resizing: false
	    };
	    return _this;
	  }

	  _createClass(SplitterLayout, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      window.addEventListener('resize', this.handleResize);
	      document.addEventListener('mouseup', this.handleMouseUp);
	      document.addEventListener('mousemove', this.handleMouseMove);

	      var secondaryPaneSize = void 0;
	      if (typeof this.props.secondaryInitialSize !== 'undefined') {
	        secondaryPaneSize = this.props.secondaryInitialSize;
	      } else {
	        var containerRect = this.container.getBoundingClientRect();
	        var splitterRect = void 0;
	        if (this.splitter) {
	          splitterRect = this.splitter.getBoundingClientRect();
	        } else {
	          // Simulate a splitter
	          splitterRect = { width: DEFAULT_SPLITTER_SIZE, height: DEFAULT_SPLITTER_SIZE };
	        }
	        secondaryPaneSize = this.getSecondaryPaneSize(containerRect, splitterRect, {
	          left: containerRect.left + (containerRect.width - splitterRect.width) / 2,
	          top: containerRect.top + (containerRect.height - splitterRect.height) / 2
	        }, false);
	      }
	      this.setSecondaryPaneSize(secondaryPaneSize);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('resize', this.handleResize);
	      document.removeEventListener('mouseup', this.handleMouseUp);
	      document.removeEventListener('mousemove', this.handleMouseMove);
	    }
	  }, {
	    key: 'getSecondaryPaneSize',
	    value: function getSecondaryPaneSize(containerRect, splitterRect, clientPosition, offsetMouse) {
	      var totalSize = void 0;
	      var splitterSize = void 0;
	      var offset = void 0;
	      if (this.props.vertical) {
	        totalSize = containerRect.height;
	        splitterSize = splitterRect.height;
	        offset = clientPosition.top - containerRect.top;
	      } else {
	        totalSize = containerRect.width;
	        splitterSize = splitterRect.width;
	        offset = clientPosition.left - containerRect.left;
	      }
	      if (offsetMouse) {
	        offset -= splitterSize / 2;
	      }
	      if (offset < 0) {
	        offset = 0;
	      } else if (offset > totalSize - splitterSize) {
	        offset = totalSize - splitterSize;
	      }

	      var secondaryPaneSize = void 0;
	      if (this.props.primaryIndex === 1) {
	        secondaryPaneSize = offset;
	      } else {
	        secondaryPaneSize = totalSize - splitterSize - offset;
	      }
	      var primaryPaneSize = totalSize - splitterSize - secondaryPaneSize;
	      if (this.props.percentage) {
	        secondaryPaneSize = secondaryPaneSize * 100 / totalSize;
	        primaryPaneSize = primaryPaneSize * 100 / totalSize;
	        splitterSize = splitterSize * 100 / totalSize;
	        totalSize = 100;
	      }

	      if (primaryPaneSize < this.props.primaryMinSize) {
	        secondaryPaneSize = Math.max(secondaryPaneSize - (this.props.primaryMinSize - primaryPaneSize), 0);
	      } else if (secondaryPaneSize < this.props.secondaryMinSize) {
	        secondaryPaneSize = Math.min(totalSize - splitterSize - this.props.primaryMinSize, this.props.secondaryMinSize);
	      }

	      return secondaryPaneSize;
	    }
	  }, {
	    key: 'setSecondaryPaneSize',
	    value: function setSecondaryPaneSize(secondaryPaneSize) {
	      if (typeof this.props.onSecondaryPaneSizeChange === 'function') {
	        this.props.onSecondaryPaneSizeChange(secondaryPaneSize);
	      }
	      this.setState({ secondaryPaneSize: secondaryPaneSize });
	    }
	  }, {
	    key: 'handleResize',
	    value: function handleResize() {
	      if (this.splitter && !this.props.percentage) {
	        var containerRect = this.container.getBoundingClientRect();
	        var splitterRect = this.splitter.getBoundingClientRect();
	        var secondaryPaneSize = this.getSecondaryPaneSize(containerRect, splitterRect, {
	          left: splitterRect.left,
	          top: splitterRect.top
	        }, false);
	        this.setSecondaryPaneSize(secondaryPaneSize);
	      }
	    }
	  }, {
	    key: 'handleMouseMove',
	    value: function handleMouseMove(e) {
	      if (this.state.resizing) {
	        var containerRect = this.container.getBoundingClientRect();
	        var splitterRect = this.splitter.getBoundingClientRect();
	        var secondaryPaneSize = this.getSecondaryPaneSize(containerRect, splitterRect, {
	          left: e.clientX,
	          top: e.clientY
	        }, true);
	        clearSelection();
	        this.setSecondaryPaneSize(secondaryPaneSize);
	      }
	    }
	  }, {
	    key: 'handleSplitterMouseDown',
	    value: function handleSplitterMouseDown() {
	      clearSelection();
	      this.setState({ resizing: true });
	    }
	  }, {
	    key: 'handleMouseUp',
	    value: function handleMouseUp() {
	      this.setState({ resizing: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var containerClasses = 'splitter-layout';
	      if (this.props.customClassName) {
	        containerClasses += ' ' + this.props.customClassName;
	      }
	      if (this.props.vertical) {
	        containerClasses += ' splitter-layout-vertical';
	      }
	      if (this.state.resizing) {
	        containerClasses += ' layout-changing';
	      }

	      var children = _react2.default.Children.toArray(this.props.children).slice(0, 2);
	      if (children.length === 0) {
	        children.push(_react2.default.createElement('div', null));
	      }
	      var wrappedChildren = [];
	      var primaryIndex = this.props.primaryIndex !== 0 && this.props.primaryIndex !== 1 ? 0 : this.props.primaryIndex;
	      for (var i = 0; i < children.length; ++i) {
	        var primary = true;
	        var size = null;
	        if (children.length > 1 && i !== primaryIndex) {
	          primary = false;
	          size = this.state.secondaryPaneSize;
	        }
	        wrappedChildren.push(_react2.default.createElement(
	          _Pane2.default,
	          { vertical: this.props.vertical, percentage: this.props.percentage, primary: primary, size: size },
	          children[i]
	        ));
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: containerClasses, ref: function ref(c) {
	            _this2.container = c;
	          }, style: this.props.style },
	        wrappedChildren[0],
	        this.props.resizable && wrappedChildren.length > 1 && _react2.default.createElement('div', {
	          className: 'layout-splitter',
	          ref: function ref(c) {
	            _this2.splitter = c;
	          },
	          onMouseDown: this.handleSplitterMouseDown
	        }),
	        wrappedChildren.length > 1 && wrappedChildren[1]
	      );
	    }
	  }]);

	  return SplitterLayout;
	}(_react2.default.Component);

	SplitterLayout.propTypes = {
	  onSecondaryPaneSizeChange: _propTypes2.default.func,
	  customClassName: _propTypes2.default.string,
	  resizable: _propTypes2.default.bool,
	  vertical: _propTypes2.default.bool,
	  percentage: _propTypes2.default.bool,
	  primaryIndex: _propTypes2.default.number,
	  primaryMinSize: _propTypes2.default.number,
	  secondaryInitialSize: _propTypes2.default.number,
	  secondaryMinSize: _propTypes2.default.number,
	  children: _propTypes2.default.arrayOf(_propTypes2.default.node),
	  style: _react2.default.CSSProperties
	};

	SplitterLayout.defaultProps = {
	  onSecondaryPaneSizeChange: undefined,
	  style: null,
	  customClassName: '',
	  resizable: true,
	  vertical: false,
	  percentage: false,
	  primaryIndex: 0,
	  primaryMinSize: 0,
	  secondaryInitialSize: undefined,
	  secondaryMinSize: 0,
	  children: []
	};

	exports.default = SplitterLayout;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (false) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(5)();
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(6);
	var invariant = __webpack_require__(7);
	var ReactPropTypesSecret = __webpack_require__(8);

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    invariant(
	      false,
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim
	  };

	  ReactPropTypes.checkPropTypes = emptyFunction;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (false) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Pane(props) {
	  var size = props.size || 0;
	  var unit = props.percentage ? '%' : 'px';
	  var classes = 'layout-pane';
	  var style = {};
	  if (!props.primary) {
	    if (props.vertical) {
	      style.height = '' + size + unit;
	    } else {
	      style.width = '' + size + unit;
	    }
	  } else {
	    classes += ' layout-pane-primary';
	  }
	  return _react2.default.createElement(
	    'div',
	    { className: classes, style: style },
	    props.children
	  );
	}

	Pane.propTypes = {
	  vertical: _react2.default.PropTypes.bool,
	  primary: _react2.default.PropTypes.bool,
	  size: _react2.default.PropTypes.number,
	  percentage: _react2.default.PropTypes.bool,
	  children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.arrayOf(_react2.default.PropTypes.node), _react2.default.PropTypes.node])
	};

	Pane.defaultProps = {
	  vertical: false,
	  primary: false,
	  size: 0,
	  percentage: false,
	  children: []
	};

	exports.default = Pane;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports


	// module
	exports.push([module.id, ".splitter-layout {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.splitter-layout .layout-pane {\n  position: relative;\n  flex: 0 0 auto;\n  overflow: auto;\n}\n\n.splitter-layout .layout-pane.layout-pane-primary {\n  flex: 1 1 auto;\n}\n\n.splitter-layout > .layout-splitter {\n  flex: 0 0 auto;\n  width: 4px;\n  cursor: col-resize;\n  background-color: #ccc;\n}\n\n.splitter-layout .layout-splitter:hover {\n  background-color: #bbb;\n}\n\n.splitter-layout.layout-changing {\n  cursor: col-resize;\n}\n\n.splitter-layout.layout-changing > .layout-splitter {\n  background-color: #aaa;\n}\n\n.splitter-layout.splitter-layout-vertical {\n  flex-direction: column;\n}\n\n.splitter-layout.splitter-layout-vertical.layout-changing {\n  cursor: row-resize;\n}\n\n.splitter-layout.splitter-layout-vertical > .layout-splitter {\n  height:4px;\n  width:100%;\n  cursor: row-resize;\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;