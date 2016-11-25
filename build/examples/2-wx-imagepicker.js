webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(256);


/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Loading = __webpack_require__(257);
	
	var _Loading2 = _interopRequireDefault(_Loading);
	
	var _reactImagepicker = __webpack_require__(173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dxc on 2016/11/6.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	window.wx = {
	    chooseImage: function chooseImage(param) {
	        console.log('chooseImage', param);
	        var localIds = [];
	        for (var i = 0; i < param.count; i++) {
	            localIds.push('http://img1.gtimg.com/18/1807/180720/18072047_1200x1000_0.jpg');
	        }
	        param.success({ localIds: localIds });
	    },
	    uploadImage: function uploadImage(param) {
	        setTimeout(function () {
	            param.success({ serverId: param.localId });
	        }, 200);
	    },
	    previewImage: function previewImage() {
	        alert('点击了预览');
	    }
	};
	
	var UploadImgExamples = function (_Component) {
	    _inherits(UploadImgExamples, _Component);
	
	    function UploadImgExamples() {
	        var _temp, _this, _ret;
	
	        _classCallCheck(this, UploadImgExamples);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	            loading: false,
	            readOnly: false
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	
	    UploadImgExamples.prototype.getImageUrl = function getImageUrl(value) {
	        return value.url;
	    };
	
	    UploadImgExamples.prototype.uploadImage = function uploadImage(serverId, localId, callback) {
	        setTimeout(function () {
	            callback({ url: serverId });
	        }, 300);
	    };
	
	    UploadImgExamples.prototype.onLoading = function onLoading(loading) {
	        this.setState({ loading: loading });
	    };
	
	    UploadImgExamples.prototype.onReadOnly = function onReadOnly() {
	        this.setState({ readOnly: !this.state.readOnly });
	    };
	
	    UploadImgExamples.prototype.render = function render() {
	        return _react2.default.createElement(
	            'div',
	            { style: { maxWidth: 400, margin: 20 } },
	            _react2.default.createElement(_Loading2.default, { loading: this.state.loading }),
	            _react2.default.createElement(_reactImagepicker.WxFlowLayoutImagePicker, {
	                max: 11,
	                getImageUrl: this.getImageUrl.bind(this),
	                uploadImage: this.uploadImage.bind(this),
	                onLoading: this.onLoading.bind(this),
	                readOnly: this.state.readOnly
	            }),
	            _react2.default.createElement(
	                'button',
	                { onClick: this.onReadOnly.bind(this), style: { marginTop: 20 } },
	                '\u53EA\u8BFB(\u5207\u6362)'
	            )
	        );
	    };
	
	    return UploadImgExamples;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(UploadImgExamples, null), document.getElementById('__react-content'));

/***/ },

/***/ 257:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactSpeed = __webpack_require__(211);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dxc on 2016/10/18.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Loading = function (_Component) {
	    _inherits(Loading, _Component);
	
	    function Loading() {
	        _classCallCheck(this, Loading);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    Loading.prototype.render = function render() {
	        if (!this.props.loading) {
	            return null;
	        }
	        var modal = {
	            position: 'fixed',
	            top: 0,
	            right: 0,
	            bottom: 0,
	            left: 0,
	            zIndex: 2000
	        };
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                _reactSpeed.Block,
	                { s: modal, j: 'c', a: 'c' },
	                _react2.default.createElement(
	                    _reactSpeed.Block,
	                    { w: 120, h: 120, bc: 'rgba(40, 40, 40, 0.75)', fc: '#fff', s: { borderRadius: 10 }, j: 'c', vf: true },
	                    _react2.default.createElement(_reactSpeed.Block, { j: 'c' }),
	                    _react2.default.createElement(
	                        _reactSpeed.Block,
	                        { j: 'c', mt: 30 },
	                        '\u4E0A\u4F20\u4E2D...'
	                    )
	                )
	            )
	        );
	    };
	
	    return Loading;
	}(_react.Component);
	
	exports.default = Loading;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=2-wx-imagepicker.js.map