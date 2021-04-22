(self["webpackChunkansible_dashboard"] = self["webpackChunkansible_dashboard"] || []).push([["src_bootstrap-dev_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Main */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Main/Main.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_NotificationPortal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/NotificationPortal */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/esm/NotificationPortal/index.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Routes */ "./src/Routes.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/provider.js");
/* harmony import */ var _user_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-context */ "./src/user-context.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/loader-placeholders */ "./src/components/shared/loader-placeholders.js");




 // react-int eng locale data





var pathName = window.location.pathname.split('/');
pathName.shift();

var App = function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      userPermissions = _useState2[0],
      setUserPermissions = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    identity: {}
  }),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      userIdentity = _useState4[0],
      setUserIdentity = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),
      auth = _useState6[0],
      setAuth = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    insights.chrome.init();
    insights.chrome.auth.getUser().then(function (user) {
      setUserIdentity(user);
      return insights.chrome.getUserPermissions().then(function (data) {
        return setUserPermissions(data);
      });
    }).then(function () {
      return setAuth(true);
    });
    insights.chrome.identifyApp('ansible-dashboard');
  }, []);

  if (!auth) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_4__.default, null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_user_context__WEBPACK_IMPORTED_MODULE_5__.default.Provider, {
    value: {
      permissions: userPermissions,
      userIdentity: userIdentity
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_4__.default, null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__.default, {
    locale: "en"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_redhat_cloud_services_frontend_components_notifications_NotificationPortal__WEBPACK_IMPORTED_MODULE_2__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_redhat_cloud_services_frontend_components_Main__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: "pf-u-p-0 pf-u-ml-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Routes__WEBPACK_IMPORTED_MODULE_8__.Routes, null))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/AppEntry.js":
/*!*************************!*\
  !*** ./src/AppEntry.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utilities_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities/store */ "./src/utilities/store.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/helpers */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/helpers/helpers.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);








var AppEntry = function AppEntry() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: (0,_utilities_store__WEBPACK_IMPORTED_MODULE_3__.default)([])
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, {
    basename: (0,_redhat_cloud_services_frontend_components_utilities_helpers__WEBPACK_IMPORTED_MODULE_5__.getBaseName)(window.location.pathname, 1)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_6__.default, null)));
};

AppEntry.propTypes = {
  logger: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppEntry);

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");


var Dashboard = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() | ansible-dashboard-route */[__webpack_require__.e("pfVendor"), __webpack_require__.e("rhcsVendor"), __webpack_require__.e("vendors-node_modules_babel_runtime_helpers_esm_asyncToGenerator_js-node_modules_babel_runtime-d8a8e7"), __webpack_require__.e("ansible-dashboard-route")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/dashboard/dashboard */ "./src/components/dashboard/dashboard.js"));
});
var Routes = function Routes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {
    path: "/ansible-dashboard",
    component: Dashboard
  });
};

/***/ }),

/***/ "./src/bootstrap-dev.js":
/*!******************************!*\
  !*** ./src/bootstrap-dev.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _AppEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppEntry */ "./src/AppEntry.js");



var root = document.getElementById('root');
react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AppEntry__WEBPACK_IMPORTED_MODULE_2__.default, null), root, function () {
  return root.setAttribute('data-ouia-safe', true);
});

/***/ }),

/***/ "./src/components/shared/loader-placeholders.js":
/*!******************************************************!*\
  !*** ./src/components/shared/loader-placeholders.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Skeleton */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Skeleton/Skeleton.js");



var AppPlaceholder = function AppPlaceholder() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__.default, {
    size: "md"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_redhat_cloud_services_frontend_components_Skeleton__WEBPACK_IMPORTED_MODULE_1__.default, {
    size: "md"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppPlaceholder);

/***/ }),

/***/ "./src/helpers/shared/pagination.js":
/*!******************************************!*\
  !*** ./src/helpers/shared/pagination.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultSettings": () => (/* binding */ defaultSettings),
/* harmony export */   "getCurrentPage": () => (/* binding */ getCurrentPage),
/* harmony export */   "getNewPage": () => (/* binding */ getNewPage)
/* harmony export */ });
var defaultSettings = {
  limit: 50,
  offset: 0,
  count: 0,
  filter: ''
};
var getCurrentPage = function getCurrentPage() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.floor(offset / limit) + 1;
};
var getNewPage = function getNewPage() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return (page - 1) * offset;
};

/***/ }),

/***/ "./src/redux/action-types.js":
/*!***********************************!*\
  !*** ./src/redux/action-types.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FETCH_ORDERS": () => (/* binding */ FETCH_ORDERS),
/* harmony export */   "FETCH_PORTFOLIOS": () => (/* binding */ FETCH_PORTFOLIOS),
/* harmony export */   "FETCH_PLATFORMS": () => (/* binding */ FETCH_PLATFORMS),
/* harmony export */   "FETCH_PORTFOLIO_ITEMS": () => (/* binding */ FETCH_PORTFOLIO_ITEMS),
/* harmony export */   "SET_CATALOG_LOADING_STATE": () => (/* binding */ SET_CATALOG_LOADING_STATE),
/* harmony export */   "FETCH_COLLECTION": () => (/* binding */ FETCH_COLLECTION),
/* harmony export */   "FETCH_COLLECTIONS": () => (/* binding */ FETCH_COLLECTIONS),
/* harmony export */   "FETCH_PARTNERS": () => (/* binding */ FETCH_PARTNERS),
/* harmony export */   "FETCH_SYNC_COLLECTIONS": () => (/* binding */ FETCH_SYNC_COLLECTIONS),
/* harmony export */   "SET_HUB_LOADING_STATE": () => (/* binding */ SET_HUB_LOADING_STATE),
/* harmony export */   "FETCH_CLUSTERS": () => (/* binding */ FETCH_CLUSTERS),
/* harmony export */   "FETCH_ERROR_NOTIFICATIONS": () => (/* binding */ FETCH_ERROR_NOTIFICATIONS),
/* harmony export */   "FETCH_WARNING_NOTIFICATIONS": () => (/* binding */ FETCH_WARNING_NOTIFICATIONS),
/* harmony export */   "FETCH_JOBS": () => (/* binding */ FETCH_JOBS),
/* harmony export */   "SET_ANALYTICS_LOADING_STATE": () => (/* binding */ SET_ANALYTICS_LOADING_STATE),
/* harmony export */   "INITIALIZE_I18N": () => (/* binding */ INITIALIZE_I18N)
/* harmony export */ });
/**
 * Ansible catalog actions
 */
var FETCH_ORDERS = 'FETCH_ORDERS';
var FETCH_PORTFOLIOS = 'FETCH_PORTFOLIOS';
var FETCH_PLATFORMS = 'FETCH_PLATFORMS';
var FETCH_PORTFOLIO_ITEMS = 'FETCH_PORTFOLIO_ITEMS';
var SET_CATALOG_LOADING_STATE = 'SET_LOADING_STATE';
/**
 * Automation hub actions
 */

var FETCH_COLLECTION = 'FETCH_COLLECTION';
var FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';
var FETCH_PARTNERS = 'FETCH_PARTNERS';
var FETCH_SYNC_COLLECTIONS = 'FETCH_SYNC_COLLECTIONS';
var SET_HUB_LOADING_STATE = 'SET_LOADING_STATE';
/**
 * Tower analytics actions
 */

var FETCH_CLUSTERS = 'FETCH_CLUSTERS';
var FETCH_ERROR_NOTIFICATIONS = 'FETCH_ERROR_NOTIFICATIONS';
var FETCH_WARNING_NOTIFICATIONS = 'FETCH_WARNING_NOTIFICATIONS';
var FETCH_JOBS = 'FETCH_JOBS';
var SET_ANALYTICS_LOADING_STATE = 'SET_LOADING_STATE';
/**
 * In18l actions
 */

var INITIALIZE_I18N = '@@i18l/INITIALIZE_I18N';

/***/ }),

/***/ "./src/redux/reducers/analytics-reducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/analytics-reducer.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "analyticsInitialState": () => (/* binding */ analyticsInitialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");


var _SET_ANALYTICS_LOADIN;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // Initial State

var analyticsInitialState = {
  isLoading: false,
  clusters: {
    data: [],
    meta: _objectSpread({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__.defaultSettings)
  },
  errorNotifications: {
    data: [],
    meta: _objectSpread({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__.defaultSettings)
  },
  warningNotifications: {
    data: [],
    meta: _objectSpread({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__.defaultSettings)
  },
  jobs: {
    data: [],
    meta: _objectSpread({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__.defaultSettings)
  }
};

var setLoadingState = function setLoadingState(state, _ref) {
  var _ref$payload = _ref.payload,
      payload = _ref$payload === void 0 ? true : _ref$payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    isLoading: payload
  });
};

var setClusters = function setClusters(state, payload) {
  return _objectSpread(_objectSpread({}, state), {}, {
    clusters: payload
  });
};

var setNotifications = function setNotifications(state, payload) {
  return _objectSpread(_objectSpread({}, state), {}, {
    notifications: payload
  });
};

var setJobs = function setJobs(state, payload) {
  return _objectSpread(_objectSpread({}, state), {}, {
    jobs: payload
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SET_ANALYTICS_LOADIN = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_ANALYTICS_LOADIN, _action_types__WEBPACK_IMPORTED_MODULE_2__.SET_ANALYTICS_LOADING_STATE, setLoadingState), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_ANALYTICS_LOADIN, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_CLUSTERS, "_FULFILLED"), setClusters()), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_ANALYTICS_LOADIN, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_CLUSTERS, "_PENDING"), setLoadingState), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_ANALYTICS_LOADIN, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_ERROR_NOTIFICATIONS, "_FULFILLED"), setNotifications()), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_ANALYTICS_LOADIN, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_ERROR_NOTIFICATIONS, "_PENDING"), setLoadingState), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_ANALYTICS_LOADIN, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_WARNING_NOTIFICATIONS, "_FULFILLED"), setNotifications()), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_ANALYTICS_LOADIN, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_WARNING_NOTIFICATIONS, "_PENDING"), setLoadingState), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_ANALYTICS_LOADIN, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_JOBS, "_FULFILLED"), setJobs()), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_ANALYTICS_LOADIN, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_JOBS, "_PENDING"), setLoadingState), _SET_ANALYTICS_LOADIN);

/***/ }),

/***/ "./src/redux/reducers/catalog-reducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/catalog-reducer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "catalogInitialState": () => (/* binding */ catalogInitialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");


var _SET_CATALOG_LOADING_;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // Initial State

var catalogInitialState = {
  isLoading: false,
  orders: {
    data: [],
    meta: _objectSpread({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__.defaultSettings)
  },
  portfolios: {
    data: [],
    meta: _objectSpread({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__.defaultSettings)
  },
  portfolioItems: {
    data: [],
    meta: _objectSpread({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__.defaultSettings)
  },
  platforms: {
    data: [],
    meta: _objectSpread({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__.defaultSettings)
  }
};

var setLoadingState = function setLoadingState(state, _ref) {
  var _ref$payload = _ref.payload,
      payload = _ref$payload === void 0 ? true : _ref$payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    isLoading: payload
  });
};

var setOrders = function setOrders(state, _ref2) {
  var payload = _ref2.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    orders: payload
  });
};

var setPortfolios = function setPortfolios(state, _ref3) {
  var payload = _ref3.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    portfolios: payload
  });
};

var setPortfolioItems = function setPortfolioItems(state, _ref4) {
  var payload = _ref4.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    portfolioItems: payload
  });
};

var setPlatforms = function setPlatforms(state, _ref5) {
  var payload = _ref5.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    platforms: payload
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SET_CATALOG_LOADING_ = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_CATALOG_LOADING_, _action_types__WEBPACK_IMPORTED_MODULE_2__.SET_CATALOG_LOADING_STATE, setLoadingState), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_CATALOG_LOADING_, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_ORDERS, "_FULFILLED"), setOrders), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_CATALOG_LOADING_, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_ORDERS, "_PENDING"), setLoadingState), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_CATALOG_LOADING_, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_PORTFOLIOS, "_FULFILLED"), setPortfolios), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_CATALOG_LOADING_, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_PORTFOLIOS, "_PENDING"), setLoadingState), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_CATALOG_LOADING_, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_PORTFOLIO_ITEMS, "_FULFILLED"), setPortfolioItems), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_CATALOG_LOADING_, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_PORTFOLIO_ITEMS, "_PENDING"), setLoadingState), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_CATALOG_LOADING_, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_PLATFORMS, "_FULFILLED"), setPlatforms), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_CATALOG_LOADING_, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_PLATFORMS, "_PENDING"), setLoadingState), _SET_CATALOG_LOADING_);

/***/ }),

/***/ "./src/redux/reducers/hub-reducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/hub-reducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hubInitialState": () => (/* binding */ hubInitialState),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");


var _SET_HUB_LOADING_STAT;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


 // Initial State

var hubInitialState = {
  isLoading: false,
  collection: {},
  collections: {
    data: [],
    meta: _objectSpread({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__.defaultSettings)
  },
  partners: {
    data: [],
    meta: _objectSpread({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__.defaultSettings)
  },
  syncCollections: {
    data: [],
    meta: _objectSpread({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_1__.defaultSettings)
  }
};

var setLoadingState = function setLoadingState(state, _ref) {
  var _ref$payload = _ref.payload,
      payload = _ref$payload === void 0 ? true : _ref$payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    isLoading: payload
  });
};

var setCollections = function setCollections(state, _ref2) {
  var payload = _ref2.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    collections: payload
  });
};

var setCollection = function setCollection(state, _ref3) {
  var payload = _ref3.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    collection: payload
  });
};

var setPartners = function setPartners(state, _ref4) {
  var payload = _ref4.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    partners: payload
  });
};

var setSyncCollections = function setSyncCollections(state, _ref5) {
  var payload = _ref5.payload;
  return _objectSpread(_objectSpread({}, state), {}, {
    syncCollections: payload
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_SET_HUB_LOADING_STAT = {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_HUB_LOADING_STAT, _action_types__WEBPACK_IMPORTED_MODULE_2__.SET_HUB_LOADING_STATE, setLoadingState), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_HUB_LOADING_STAT, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_COLLECTION, "_PENDING"), setLoadingState), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_HUB_LOADING_STAT, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_COLLECTION, "_FULFILLED"), setCollection), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_HUB_LOADING_STAT, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_COLLECTIONS, "_FULFILLED"), setCollections), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_HUB_LOADING_STAT, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_COLLECTIONS, "_PENDING"), setLoadingState), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_HUB_LOADING_STAT, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_PARTNERS, "_PENDING"), setLoadingState), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_HUB_LOADING_STAT, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_PARTNERS, "_FULFILLED"), setPartners), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_HUB_LOADING_STAT, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_SYNC_COLLECTIONS, "_PENDING"), setLoadingState), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_HUB_LOADING_STAT, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_SYNC_COLLECTIONS, "_FULFILLED"), setSyncCollections), (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(_SET_HUB_LOADING_STAT, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__.FETCH_PARTNERS, "_PENDING"), setLoadingState), _SET_HUB_LOADING_STAT);

/***/ }),

/***/ "./src/user-context.js":
/*!*****************************!*\
  !*** ./src/user-context.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserContext);

/***/ }),

/***/ "./src/utilities/store.js":
/*!********************************!*\
  !*** ./src/utilities/store.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-utilities/ReducerRegistry */ "./node_modules/@redhat-cloud-services/frontend-components-utilities/esm/ReducerRegistry/ReducerRegistry.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/redux */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/esm/redux/index.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_notifications_notificationsMiddleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components-notifications/notificationsMiddleware */ "./node_modules/@redhat-cloud-services/frontend-components-notifications/esm/notificationsMiddleware/index.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _redux_reducers_catalog_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/catalog-reducer */ "./src/redux/reducers/catalog-reducer.js");
/* harmony import */ var _redux_reducers_hub_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/reducers/hub-reducer */ "./src/redux/reducers/hub-reducer.js");
/* harmony import */ var _redux_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/reducers/analytics-reducer */ "./src/redux/reducers/analytics-reducer.js");










var getStore = function getStore() {
  var middlewares = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var registry = new _redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_5__.default({}, [redux_thunk__WEBPACK_IMPORTED_MODULE_4__.default, redux_promise_middleware__WEBPACK_IMPORTED_MODULE_1__.default, (0,_redhat_cloud_services_frontend_components_notifications_notificationsMiddleware__WEBPACK_IMPORTED_MODULE_3__.default)({
    errorTitleKey: ['errors', 'message', 'statusText'],
    errorDescriptionKey: ['data.errors[0].detail', 'data.errors', 'data.error', 'data.message', 'response.body.errors', 'data', 'errorMessage', 'stack']
  })].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(middlewares)));
  registry.register({
    catalogReducer: (0,_redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_5__.applyReducerHash)(_redux_reducers_catalog_reducer__WEBPACK_IMPORTED_MODULE_6__.default, _redux_reducers_catalog_reducer__WEBPACK_IMPORTED_MODULE_6__.catalogInitialState),
    analyticsReducer: (0,_redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_5__.applyReducerHash)(_redux_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_7__.default, _redux_reducers_analytics_reducer__WEBPACK_IMPORTED_MODULE_7__.analyticsInitialState),
    hubReducer: (0,_redhat_cloud_services_frontend_components_utilities_ReducerRegistry__WEBPACK_IMPORTED_MODULE_5__.applyReducerHash)(_redux_reducers_hub_reducer__WEBPACK_IMPORTED_MODULE_8__.default, _redux_reducers_hub_reducer__WEBPACK_IMPORTED_MODULE_8__.hubInitialState),
    notifications: _redhat_cloud_services_frontend_components_notifications_redux__WEBPACK_IMPORTED_MODULE_2__.notificationsReducer
  });
  return registry.getStore();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStore);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/App.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/App.scss ***!
  \**********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_redhat_cloud_services_frontend_components_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!../node_modules/@redhat-cloud-services/frontend-components/index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/@redhat-cloud-services/frontend-components/index.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_redhat_cloud_services_frontend_components_index_css__WEBPACK_IMPORTED_MODULE_2__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ansible-dashboard { }\n  .ansible-dashboard .detail-pane {\n    background-color: var(--pf-global--BackgroundColor--100); }\n  .ansible-dashboard .detail-pane, .ansible-dashboard .info-bar {\n    min-height: 100%; }\n  @supports not (overflow-wrap: anywhere) {\n    .ansible-dashboard .detail-pane, .ansible-dashboard .info-bar {\n      word-break: break-all; } }\n  @supports (overflow-wrap: anywhere) {\n    .ansible-dashboard .detail-pane, .ansible-dashboard .info-bar {\n      overflow-wrap: anywhere; } }\n  .ansible-dashboard .destructive-color:not(:disabled) {\n    color: var(--pf-chart-color-red-100) !important; }\n  .ansible-dashboard .disabled-link {\n    pointer-events: none; }\n  .ansible-dashboard .icon-danger-fill {\n    fill: var(--pf-global--danger-color--100); }\n  .ansible-dashboard .icon-info-fill {\n    fill: var(--pf-global--info-color--100); }\n  .ansible-dashboard .icon-success-fill {\n    fill: var(--pf-global--success-color--100); }\n  .ansible-dashboard .font-14 {\n    font-size: 14px;\n    color: var(--pf-global--Color--100);\n    font-weight: bold; }\n  .ansible-dashboard .ins-c-primary-toolbar .ins-c-primary-toolbar__group-filter {\n    margin-right: 7px; }\n  .ansible-dashboard .span-block {\n    display: block; }\n  .ansible-dashboard .group-label {\n    max-width: 256px;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden; }\n  .ansible-dashboard .config_card {\n    height: 215px;\n    overflow: hidden; }\n  .ansible-dashboard .pf-c-table.vertical-align-inherit tbody > tr > * {\n    vertical-align: inherit !important; }\n  .ansible-dashboard .ins-c-dashboard__error-state svg {\n    height: var(--pf-global--icon--FontSize--lg); }\n  .ansible-dashboard .ins-c-dashboard__error-state--body {\n    font-size: var(--pf-global--FontSize--sm); }\n  .ansible-dashboard .ins-c-dashboard__card--header-subtitle {\n    font-size: var(--pf-global--FontSize--sm); }\n  .ansible-dashboard .ins-c-dashboard__card--header.ins-m-padding-small {\n    padding-bottom: 6px; }\n  .ansible-dashboard .ins-c-dashboard__card--body {\n    display: flex;\n    flex-direction: column; }\n  .ansible-dashboard .ins-c-dashboard__card--body.ins-m-horizontal {\n    flex-direction: row;\n    padding-top: var(--pf-global--spacer--lg);\n    align-items: flex-end; }\n  .ansible-dashboard .ins-c-dashboard__card--body > .ins-c-dashboard__number-description:not(:first-child) {\n    padding-left: var(--pf-global--spacer--md); }\n  .ansible-dashboard .ins-c-dashboard__card--body .pf-c-progress + .pf-c-progress {\n    padding-top: var(--pf-global--spacer--md); }\n  .ansible-dashboard .ins-c-dashboard__card--body > .pf-c-progress + .pf-c-progress {\n    margin-top: var(--pf-global--spacer--xs); }\n  .ansible-dashboard .pf-c-card.ins-m-short-header .ins-c-dashboard__card--header {\n    --pf-c-card__title--not--last-child--PaddingBottom: 6px; }\n  .ansible-dashboard .pf-c-card__body .pf-c-card {\n    --pf-c-card--child--PaddingRight: calc(var(--pf-c-card--child--PaddingRight) * -1);\n    --pf-c-card--child--PaddingLeft: calc(var(--pf-c-card--child--PaddingLeft) * -1);\n    --pf-c-card--BoxShadow: none; }\n", "",{"version":3,"sources":["webpack://./src/App.scss"],"names":[],"mappings":"AAAA,qBAAkB;EAAlB;IAGE,wDAAwD,EAAA;EAH1D;IAME,gBAAgB,EAAA;EACuB;IAPzC;MASM,qBAAqB,EAAA,EAAG;EACO;IAVrC;MAYM,uBAAuB,EAAA,EAAG;EAZhC;IAeE,+CAA+C,EAAA;EAfjD;IAkBE,oBAAoB,EAAA;EAlBtB;IAqBE,yCAAyC,EAAA;EArB3C;IAwBE,uCAAuC,EAAA;EAxBzC;IA2BE,0CAA0C,EAAA;EA3B5C;IA8BE,eAAe;IACf,mCAAmC;IACnC,iBAAiB,EAAA;EAhCnB;IAmCE,iBAAiB,EAAA;EAnCnB;IAsCE,cAAc,EAAA;EAtChB;IAyCE,gBAAgB;IAChB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB,EAAA;EA5ClB;IA+CE,aAAa;IACb,gBAAgB,EAAA;EAhDlB;IAmDE,kCAAkC,EAAA;EAnDpC;IAsDE,4CAA4C,EAAA;EAtD9C;IAyDE,yCAAyC,EAAA;EAzD3C;IA4DE,yCAAyC,EAAA;EA5D3C;IA+DE,mBAAmB,EAAA;EA/DrB;IAkEE,aAAa;IACb,sBAAsB,EAAA;EAnExB;IAqEI,mBAAmB;IACnB,yCAAyC;IACzC,qBAAqB,EAAA;EAvEzB;IAyEI,0CAA0C,EAAA;EAzE9C;IA2EI,yCAAyC,EAAA;EA3E7C;IA6EI,wCAAwC,EAAA;EA7E5C;IAgFE,uDAAmD,EAAA;EAhFrD;IAmFE,kFAAiC;IACjC,gFAAgC;IAChC,4BAAuB,EAAA","sourcesContent":[".ansible-dashboard{\n@import url(~@redhat-cloud-services/frontend-components/index.css);\n.detail-pane {\n  background-color: var(--pf-global--BackgroundColor--100); }\n\n.detail-pane, .info-bar {\n  min-height: 100%; }\n  @supports not (overflow-wrap: anywhere) {\n    .detail-pane, .info-bar {\n      word-break: break-all; } }\n  @supports (overflow-wrap: anywhere) {\n    .detail-pane, .info-bar {\n      overflow-wrap: anywhere; } }\n\n.destructive-color:not(:disabled) {\n  color: var(--pf-chart-color-red-100) !important; }\n\n.disabled-link {\n  pointer-events: none; }\n\n.icon-danger-fill {\n  fill: var(--pf-global--danger-color--100); }\n\n.icon-info-fill {\n  fill: var(--pf-global--info-color--100); }\n\n.icon-success-fill {\n  fill: var(--pf-global--success-color--100); }\n\n.font-14 {\n  font-size: 14px;\n  color: var(--pf-global--Color--100);\n  font-weight: bold; }\n\n.ins-c-primary-toolbar .ins-c-primary-toolbar__group-filter {\n  margin-right: 7px; }\n\n.span-block {\n  display: block; }\n\n.group-label {\n  max-width: 256px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.config_card {\n  height: 215px;\n  overflow: hidden; }\n\n.pf-c-table.vertical-align-inherit tbody > tr > * {\n  vertical-align: inherit !important; }\n\n.ins-c-dashboard__error-state svg {\n  height: var(--pf-global--icon--FontSize--lg); }\n\n.ins-c-dashboard__error-state--body {\n  font-size: var(--pf-global--FontSize--sm); }\n\n.ins-c-dashboard__card--header-subtitle {\n  font-size: var(--pf-global--FontSize--sm); }\n\n.ins-c-dashboard__card--header.ins-m-padding-small {\n  padding-bottom: 6px; }\n\n.ins-c-dashboard__card--body {\n  display: flex;\n  flex-direction: column; }\n  .ins-c-dashboard__card--body.ins-m-horizontal {\n    flex-direction: row;\n    padding-top: var(--pf-global--spacer--lg);\n    align-items: flex-end; }\n  .ins-c-dashboard__card--body > .ins-c-dashboard__number-description:not(:first-child) {\n    padding-left: var(--pf-global--spacer--md); }\n  .ins-c-dashboard__card--body .pf-c-progress + .pf-c-progress {\n    padding-top: var(--pf-global--spacer--md); }\n  .ins-c-dashboard__card--body > .pf-c-progress + .pf-c-progress {\n    margin-top: var(--pf-global--spacer--xs); }\n\n.pf-c-card.ins-m-short-header .ins-c-dashboard__card--header {\n  --pf-c-card__title--not--last-child--PaddingBottom: 6px; }\n\n.pf-c-card__body .pf-c-card {\n  --pf-c-card--child--PaddingRight: calc(var(--pf-c-card--child--PaddingRight) * -1);\n  --pf-c-card--child--PaddingLeft: calc(var(--pf-c-card--child--PaddingLeft) * -1);\n  --pf-c-card--BoxShadow: none; }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!../node_modules/sass-loader/dist/cjs.js!./App.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/App.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!../node_modules/sass-loader/dist/cjs.js!./App.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/App.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!../node_modules/sass-loader/dist/cjs.js!./App.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/App.scss");
(function () {
        if (!isEqualLocals(oldLocals, _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals, undefined)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals;

              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_1__.default);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_App_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);