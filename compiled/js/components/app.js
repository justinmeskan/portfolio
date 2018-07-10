"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ id: "appsBody" },
				React.createElement(HeadProfile, null),
				React.createElement(Divider, null),
				React.createElement(FirstProject, null),
				React.createElement(SecondProject, null),
				React.createElement(Divider, null),
				React.createElement(ThirdProject, null),
				React.createElement(DividerRotated, null)
			);
		}
	}]);

	return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2pzL2NvbXBvbmVudHMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSxtR0FDWEEsS0FEVztBQUVqQjs7OzsyQkFFTztBQUNQLFVBQ0M7QUFBQTtBQUFBLE1BQUssSUFBRyxVQUFSO0FBQ0Msd0JBQUMsV0FBRCxPQUREO0FBRUMsd0JBQUMsT0FBRCxPQUZEO0FBR0Msd0JBQUMsWUFBRCxPQUhEO0FBSUMsd0JBQUMsYUFBRCxPQUpEO0FBS0Msd0JBQUMsT0FBRCxPQUxEO0FBTUMsd0JBQUMsWUFBRCxPQU5EO0FBT0Msd0JBQUMsY0FBRDtBQVBELElBREQ7QUFZQTs7OztFQWxCZ0JDLE1BQU1DLFM7O0FBcUJ4QkMsU0FBU0MsTUFBVCxDQUFnQixvQkFBQyxHQUFELE9BQWhCLEVBQXlCQyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQXpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcblx0Y29uc3RydWN0b3IocHJvcHMpe1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwiYXBwc0JvZHlcIj5cblx0XHRcdFx0PEhlYWRQcm9maWxlIC8+XG5cdFx0XHRcdDxEaXZpZGVyIC8+IFxuXHRcdFx0XHQ8Rmlyc3RQcm9qZWN0IC8+IFxuXHRcdFx0XHQ8U2Vjb25kUHJvamVjdCAvPiBcblx0XHRcdFx0PERpdmlkZXIgLz4gXG5cdFx0XHRcdDxUaGlyZFByb2plY3QgLz4gXG5cdFx0XHRcdDxEaXZpZGVyUm90YXRlZCAvPlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7Il19