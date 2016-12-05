webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactImagepicker = __webpack_require__(173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dxc on 2016/11/6.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var FlowLayout = function (_Component) {
	    _inherits(FlowLayout, _Component);
	
	    function FlowLayout() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, FlowLayout);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	            readOnly: false
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    FlowLayout.prototype.getImageUrl = function getImageUrl(value) {
	        return value;
	    };
	
	    FlowLayout.prototype.onAddImage = function onAddImage(callback) {
	        callback('http://img1.gtimg.com/18/1807/180720/18072047_1200x1000_0.jpg');
	    };
	
	    FlowLayout.prototype.onPreviewImage = function onPreviewImage(value, values, i) {
	        console.log('onPreviewImage', value, values, i);
	    };
	
	    FlowLayout.prototype.onReadOnly = function onReadOnly() {
	        this.setState({ readOnly: !this.state.readOnly });
	    };
	
	    FlowLayout.prototype.render = function render() {
	        return _react2.default.createElement(
	            'div',
	            { style: { maxWidth: 400, margin: 20 } },
	            _react2.default.createElement(_reactImagepicker.FlowLayoutImagePicker, {
	                getImageUrl: this.getImageUrl.bind(this),
	                onAddImage: this.onAddImage.bind(this),
	                onPreviewImage: this.onPreviewImage.bind(this),
	                readOnly: this.state.readOnly
	            }),
	            _react2.default.createElement(
	                'button',
	                { onClick: this.onReadOnly.bind(this), style: { marginTop: 20 } },
	                '\u53EA\u8BFB(\u5207\u6362)'
	            )
	        );
	    };
	
	    return FlowLayout;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(FlowLayout, null), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=1-flowlayout.js.map