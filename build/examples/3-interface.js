webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(258);


/***/ },

/***/ 258:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactImagepicker = __webpack_require__(173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dxc on 2016/11/6.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var RootComponent = function (_Component) {
	    _inherits(RootComponent, _Component);
	
	    function RootComponent() {
	        _classCallCheck(this, RootComponent);
	
	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	    }
	
	    RootComponent.prototype.render = function render() {
	        var _props = this.props,
	            children = _props.children,
	            other = _objectWithoutProperties(_props, ['children']);
	
	        return _react2.default.createElement(
	            'div',
	            other,
	            children
	        );
	    };
	
	    return RootComponent;
	}(_react.Component);
	
	var ItemComponent = function (_Component2) {
	    _inherits(ItemComponent, _Component2);
	
	    function ItemComponent() {
	        _classCallCheck(this, ItemComponent);
	
	        return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
	    }
	
	    ItemComponent.prototype.render = function render() {
	        var _props2 = this.props,
	            children = _props2.children,
	            other = _objectWithoutProperties(_props2, ['children']);
	
	        return _react2.default.createElement(
	            'div',
	            other,
	            children
	        );
	    };
	
	    return ItemComponent;
	}(_react.Component);
	
	var AddComponent = function (_Component3) {
	    _inherits(AddComponent, _Component3);
	
	    function AddComponent() {
	        _classCallCheck(this, AddComponent);
	
	        return _possibleConstructorReturn(this, _Component3.apply(this, arguments));
	    }
	
	    AddComponent.prototype.render = function render() {
	        var onAddImage = this.props.onAddImage;
	
	        return _react2.default.createElement(
	            'div',
	            { onClick: onAddImage, style: { width: '100px', height: '100px', border: "1px solid" } },
	            '\u6DFB\u52A0'
	        );
	    };
	
	    return AddComponent;
	}(_react.Component);
	
	var ImageComponent = function (_Component4) {
	    _inherits(ImageComponent, _Component4);
	
	    function ImageComponent() {
	        _classCallCheck(this, ImageComponent);
	
	        return _possibleConstructorReturn(this, _Component4.apply(this, arguments));
	    }
	
	    ImageComponent.prototype.render = function render() {
	        var _props3 = this.props,
	            url = _props3.url,
	            value = _props3.value,
	            onPreviewImage = _props3.onPreviewImage,
	            onDeleteImage = _props3.onDeleteImage,
	            onChangeImage = _props3.onChangeImage;
	
	        return _react2.default.createElement(
	            'div',
	            { style: { marginBottom: "20px" } },
	            _react2.default.createElement('img', { src: url, style: { width: '100px', height: '100px' } }),
	            _react2.default.createElement(
	                'div',
	                { onClick: onPreviewImage },
	                '\u9884\u89C8'
	            ),
	            _react2.default.createElement(
	                'div',
	                { onClick: onDeleteImage },
	                '\u5220\u9664'
	            ),
	            _react2.default.createElement(
	                'div',
	                { onClick: onChangeImage },
	                '\u4FEE\u6539'
	            )
	        );
	    };
	
	    return ImageComponent;
	}(_react.Component);
	
	var Interface = function (_Component5) {
	    _inherits(Interface, _Component5);
	
	    function Interface() {
	        _classCallCheck(this, Interface);
	
	        return _possibleConstructorReturn(this, _Component5.apply(this, arguments));
	    }
	
	    Interface.prototype.onAddImage = function onAddImage(callback) {
	        callback('http://img1.gtimg.com/ninja/2/2016/08/ninja147209571997482.jpg');
	    };
	
	    Interface.prototype.onPreviewImage = function onPreviewImage(value, values, i) {
	        console.log('onPreviewImage', value, values, i);
	    };
	
	    Interface.prototype.onChangeImage = function onChangeImage(oldValue, callback) {
	        console.log('onChangeImage', oldValue);
	        callback('http://img1.gtimg.com/ninja/2/2016/02/ninja145613279193247.jpg');
	    };
	
	    Interface.prototype.render = function render() {
	        var rootProps = {
	            style: {
	                background: '#f1f1f1',
	                padding: 20
	            }
	        };
	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_reactImagepicker.ImagePickerInterface, {
	                RootComponent: RootComponent,
	                rootProps: rootProps,
	                ItemComponent: ItemComponent,
	                AddComponent: AddComponent,
	                onAddImage: this.onAddImage.bind(this),
	                ImageComponent: ImageComponent,
	                getImageUrl: function getImageUrl(value) {
	                    return value;
	                },
	                onPreviewImage: this.onPreviewImage.bind(this),
	                onChangeImage: this.onChangeImage.bind(this)
	            })
	        );
	    };
	
	    return Interface;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Interface, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=3-interface.js.map