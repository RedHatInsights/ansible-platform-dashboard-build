(self["webpackChunkansible_dashboard"] = self["webpackChunkansible_dashboard"] || []).push([["ansible-dashboard-route"],{

/***/ "./src/components/analytics/analytics-card.js":
/*!****************************************************!*\
  !*** ./src/components/analytics/analytics-card.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/Card.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner_Spinner_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Spinner/Spinner.js */ "./node_modules/@patternfly/react-core/dist/js/components/Spinner/Spinner.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/Stack.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/Stack.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/StackItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/StackItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title.js */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Section */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Section/Section.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _messages_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../messages/messages */ "./src/messages/messages.js");
/* harmony import */ var _redux_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/analytics-actions */ "./src/redux/actions/analytics-actions.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var initialState = {
  isFetching: true
};

var analyticsState = function analyticsState(state, action) {
  switch (action.type) {
    case 'setFetching':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: action.payload
      });

    default:
      return state;
  }
};

var AnalyticsCard = function AnalyticsCard() {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(analyticsState, initialState),
      _useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useReducer, 2),
      isFetching = _useReducer2[0].isFetching,
      stateDispatch = _useReducer2[1];

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref) {
    var _ref$analyticsReducer = _ref.analyticsReducer,
        clusters = _ref$analyticsReducer.clusters,
        criticalNotifications = _ref$analyticsReducer.criticalNotifications,
        warningNotifications = _ref$analyticsReducer.warningNotifications;
    return {
      clusters: clusters,
      criticalNotifications: criticalNotifications,
      warningNotifications: warningNotifications
    };
  }),
      clusters = _useSelector.clusters,
      criticalNotifications = _useSelector.criticalNotifications,
      warningNotifications = _useSelector.warningNotifications;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.default)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    Promise.all([dispatch((0,_redux_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_5__.fetchClusters)()), dispatch((0,_redux_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_5__.fetchWarningNotifications)()), dispatch((0,_redux_actions_analytics_actions__WEBPACK_IMPORTED_MODULE_5__.fetchErrorNotifications)())]).then(function () {
      return stateDispatch({
        type: 'setFetching',
        payload: false
      });
    });
  }, []);

  var renderAnalyticsCards = function renderAnalyticsCards() {
    if (isFetching) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_6__.default, {
        style: {
          backgroundColor: 'white',
          minHeight: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Spinner_Spinner_js__WEBPACK_IMPORTED_MODULE_7__.Spinner, {
        isSVG: true
      }));
    } else {
      var _clusters$meta, _criticalNotification, _warningNotifications;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_8__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__.GridItem, {
        md: 4,
        lg: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_10__.Text, null, "Gain insights into your deployments through visual dashboards and organization statistics, calculate your return on investment and explore automation processes details.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__.GridItem, {
        md: 8,
        lg: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_11__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_12__.StackItem, null, clusters === null || clusters === void 0 ? void 0 : (_clusters$meta = clusters.meta) === null || _clusters$meta === void 0 ? void 0 : _clusters$meta.count, " Total Clusters")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_11__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_12__.StackItem, null, criticalNotifications === null || criticalNotifications === void 0 ? void 0 : (_criticalNotification = criticalNotifications.meta) === null || _criticalNotification === void 0 ? void 0 : _criticalNotification.count, " Critical"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_12__.StackItem, null, warningNotifications === null || warningNotifications === void 0 ? void 0 : (_warningNotifications = warningNotifications.meta) === null || _warningNotifications === void 0 ? void 0 : _warningNotifications.count, " Warning"))));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_13__.Title, {
    headingLevel: 'h3'
  }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_14__.default.analyticsTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_6__.default, {
    type: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_15__.Grid, {
    hasGutter: true
  }, renderAnalyticsCards())));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnalyticsCard);

/***/ }),

/***/ "./src/components/automation-hub/hub-card.js":
/*!***************************************************!*\
  !*** ./src/components/automation-hub/hub-card.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/Card.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner_Spinner_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Spinner/Spinner.js */ "./node_modules/@patternfly/react-core/dist/js/components/Spinner/Spinner.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/Stack.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/Stack.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/StackItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/StackItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title.js */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Section */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Section/Section.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _messages_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../messages/messages */ "./src/messages/messages.js");
/* harmony import */ var _redux_actions_hub_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/hub-actions */ "./src/redux/actions/hub-actions.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var initialState = {
  isFetching: true
};

var hubState = function hubState(state, action) {
  switch (action.type) {
    case 'setFetching':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: action.payload
      });

    default:
      return state;
  }
};

var HubCard = function HubCard() {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(hubState, initialState),
      _useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useReducer, 2),
      isFetching = _useReducer2[0].isFetching,
      stateDispatch = _useReducer2[1];

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref) {
    var _ref$hubReducer = _ref.hubReducer,
        collections = _ref$hubReducer.collections,
        partners = _ref$hubReducer.partners;
    return {
      collections: collections,
      partners: partners
    };
  }),
      collections = _useSelector.collections,
      partners = _useSelector.partners;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.default)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    Promise.all([dispatch((0,_redux_actions_hub_actions__WEBPACK_IMPORTED_MODULE_5__.fetchCollections)()), dispatch((0,_redux_actions_hub_actions__WEBPACK_IMPORTED_MODULE_5__.fetchPartners)())]).then(function () {
      return stateDispatch({
        type: 'setFetching',
        payload: false
      });
    });
  }, []);

  var renderHubCards = function renderHubCards() {
    if (isFetching) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_6__.default, {
        style: {
          backgroundColor: 'white',
          minHeight: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Spinner_Spinner_js__WEBPACK_IMPORTED_MODULE_7__.Spinner, {
        isSVG: true
      }));
    } else {
      var _partners$meta, _collections$meta, _collections$meta2;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_8__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__.GridItem, {
        md: 4,
        lg: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_10__.Text, null, "Find and use content that is supported by Red Hat and our partners to deliver reassurance for the most demanding environments")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__.GridItem, {
        md: 8,
        lg: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_11__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_12__.StackItem, null, partners === null || partners === void 0 ? void 0 : (_partners$meta = partners.meta) === null || _partners$meta === void 0 ? void 0 : _partners$meta.count, " Partners")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_12__.StackItem, null, collections === null || collections === void 0 ? void 0 : (_collections$meta = collections.meta) === null || _collections$meta === void 0 ? void 0 : _collections$meta.count, " Collections"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_12__.StackItem, null, collections === null || collections === void 0 ? void 0 : (_collections$meta2 = collections.meta) === null || _collections$meta2 === void 0 ? void 0 : _collections$meta2.count, " Collections set to sync")));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_13__.Title, {
    headingLevel: 'h3'
  }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_14__.default.hubTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_6__.default, {
    type: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_15__.Grid, {
    hasGutter: true
  }, renderHubCards())));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HubCard);

/***/ }),

/***/ "./src/components/catalog/catalog-card.js":
/*!************************************************!*\
  !*** ./src/components/catalog/catalog-card.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/Card.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner_Spinner_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Spinner/Spinner.js */ "./node_modules/@patternfly/react-core/dist/js/components/Spinner/Spinner.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/Stack.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/Stack.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/StackItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/StackItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title.js */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Section */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Section/Section.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _messages_messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../messages/messages */ "./src/messages/messages.js");
/* harmony import */ var _redux_actions_catalog_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/actions/catalog-actions */ "./src/redux/actions/catalog-actions.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var initialState = {
  isFetching: true
};

var hubState = function hubState(state, action) {
  switch (action.type) {
    case 'setFetching':
      return _objectSpread(_objectSpread({}, state), {}, {
        isFetching: action.payload
      });

    default:
      return state;
  }
};

var CatalogCard = function CatalogCard() {
  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(hubState, initialState),
      _useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useReducer, 2),
      isFetching = _useReducer2[0].isFetching,
      stateDispatch = _useReducer2[1];

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref) {
    var _ref$catalogReducer = _ref.catalogReducer,
        portfolioItems = _ref$catalogReducer.portfolioItems,
        portfolios = _ref$catalogReducer.portfolios;
    return {
      portfolioItems: portfolioItems,
      portfolios: portfolios
    };
  }),
      portfolioItems = _useSelector.portfolioItems,
      portfolios = _useSelector.portfolios;

  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (_ref2) {
    var platforms = _ref2.catalogReducer.platforms;
    return {
      platforms: platforms
    };
  }),
      platforms = _useSelector2.platforms;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.default)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    Promise.all([dispatch((0,_redux_actions_catalog_actions__WEBPACK_IMPORTED_MODULE_5__.fetchPortfolioItems)()), dispatch((0,_redux_actions_catalog_actions__WEBPACK_IMPORTED_MODULE_5__.fetchPortfolios)())]).then(function () {
      return stateDispatch({
        type: 'setFetching',
        payload: false
      });
    });
  }, []);

  var renderCatalogCards = function renderCatalogCards() {
    if (isFetching) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_6__.default, {
        style: {
          backgroundColor: 'white',
          minHeight: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Spinner_Spinner_js__WEBPACK_IMPORTED_MODULE_7__.Spinner, {
        isSVG: true
      }));
    } else {
      var _portfolioItems$meta, _portfolios$meta, _platforms$meta;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_8__.Card, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__.GridItem, {
        md: 4,
        lg: 3
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_10__.Text, null, "Collect and distribute automation content, govern content by approval processes and assure sin-off by assigned groups.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__.GridItem, {
        md: 8,
        lg: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_11__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_12__.StackItem, null, portfolioItems === null || portfolioItems === void 0 ? void 0 : (_portfolioItems$meta = portfolioItems.meta) === null || _portfolioItems$meta === void 0 ? void 0 : _portfolioItems$meta.count, " Products")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_12__.StackItem, null, portfolios === null || portfolios === void 0 ? void 0 : (_portfolios$meta = portfolios.meta) === null || _portfolios$meta === void 0 ? void 0 : _portfolios$meta.count, " Portfolios"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_12__.StackItem, null, platforms === null || platforms === void 0 ? void 0 : (_platforms$meta = platforms.meta) === null || _platforms$meta === void 0 ? void 0 : _platforms$meta.count, " Platforms")));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_13__.Title, {
    headingLevel: 'h3'
  }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_14__.default.catalogTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_6__.default, {
    type: "content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_15__.Grid, {
    hasGutter: true
  }, renderCatalogCards())));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CatalogCard);

/***/ }),

/***/ "./src/components/dashboard/dashboard.js":
/*!***********************************************!*\
  !*** ./src/components/dashboard/dashboard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_no_app_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/no-app-state */ "./src/components/shared/no-app-state.js");
/* harmony import */ var _analytics_analytics_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../analytics/analytics-card */ "./src/components/analytics/analytics-card.js");
/* harmony import */ var _catalog_catalog_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../catalog/catalog-card */ "./src/components/catalog/catalog-card.js");
/* harmony import */ var _automation_hub_hub_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../automation-hub/hub-card */ "./src/components/automation-hub/hub-card.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Divider_Divider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Divider/Divider.js */ "./node_modules/@patternfly/react-core/dist/js/components/Divider/Divider.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/Flex.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/Flex.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/FlexItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/FlexItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Page_PageSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Page/PageSection.js */ "./node_modules/@patternfly/react-core/dist/js/components/Page/PageSection.js");
/* harmony import */ var _shared_ErrorCard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/ErrorCard */ "./src/components/shared/ErrorCard.js");











var Dashboard = function Dashboard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_no_app_state__WEBPACK_IMPORTED_MODULE_1__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Divider_Divider_js__WEBPACK_IMPORTED_MODULE_2__.Divider, {
    component: "div"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Page_PageSection_js__WEBPACK_IMPORTED_MODULE_3__.PageSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_4__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_5__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_analytics_analytics_card__WEBPACK_IMPORTED_MODULE_6__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_5__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_catalog_catalog_card__WEBPACK_IMPORTED_MODULE_7__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_5__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_automation_hub_hub_card__WEBPACK_IMPORTED_MODULE_8__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_5__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_ErrorCard__WEBPACK_IMPORTED_MODULE_9__.default, {
    appName: 'Test'
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./src/components/shared/ErrorCard.js":
/*!********************************************!*\
  !*** ./src/components/shared/ErrorCard.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../App.scss */ "./src/App.scss");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/Card.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardTitle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/CardTitle.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyState.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyState.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js */ "./node_modules/@patternfly/react-core/dist/js/components/EmptyState/EmptyStateIcon.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title.js */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-tokens */ "./node_modules/@patternfly/react-tokens/dist/esm/global_danger_color_200.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _messages_messages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../messages/messages */ "./src/messages/messages.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/exclamation-circle-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/exclamation-circle-icon.js");














var Br = function Br() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null);
};

var ErrorCard = function ErrorCard(_ref) {
  var appName = _ref.appName;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__.Card, {
    className: "ins-c-dashboard__card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Card_CardTitle_js__WEBPACK_IMPORTED_MODULE_5__.CardTitle, {
    className: "pf-u-py-sm"
  }, appName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyState_js__WEBPACK_IMPORTED_MODULE_6__.EmptyState, {
    variant: 'full',
    className: "ins-c-dashboard__error-state"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateIcon_js__WEBPACK_IMPORTED_MODULE_7__.EmptyStateIcon, {
    icon: _patternfly_react_icons_dist_js_icons_exclamation_circle_icon__WEBPACK_IMPORTED_MODULE_8__.ExclamationCircleIcon,
    color: _patternfly_react_tokens__WEBPACK_IMPORTED_MODULE_9__.global_danger_color_200.value
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_10__.Title, {
    headingLevel: "h2",
    size: "md"
  }, " ", intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_11__.default.errorStateTitle), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_EmptyState_EmptyStateBody_js__WEBPACK_IMPORTED_MODULE_12__.EmptyStateBody, {
    className: "ins-c-dashboard__error-state--body"
  }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_11__.default.errorStateDescription, {
    supportLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: 'https://access.redhat.com/support'
    }, "Red Hat support"),
    statusLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: 'https://status.redhat.com'
    }, " status"),
    br: Br
  }))));
};

ErrorCard.propTypes = {
  appName: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorCard);

/***/ }),

/***/ "./src/components/shared/dashboard-header.js":
/*!***************************************************!*\
  !*** ./src/components/shared/dashboard-header.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patternfly_react_core_dist_js_components_Page_PageSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Page/PageSection.js */ "./node_modules/@patternfly/react-core/dist/js/components/Page/PageSection.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/Flex.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/Flex.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/FlexItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/FlexItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_Headers_Red_Hat_White_Automation_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/Headers-Red_Hat-White_Automation.svg */ "./src/images/Headers-Red_Hat-White_Automation.svg");











var DashboardHeader = function DashboardHeader(_ref) {
  var renderButtons = _ref.renderButtons;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Page_PageSection_js__WEBPACK_IMPORTED_MODULE_2__.PageSection, {
    style: {
      backgroundImage: "url(".concat(_images_Headers_Red_Hat_White_Automation_svg__WEBPACK_IMPORTED_MODULE_3__.default, ")"),
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      marginTop: '0px',
      marginBottom: '0px',
      marginRight: '0px',
      backgroundPositionX: '0px',
      backgroundPositionY: '0px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_4__.Grid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_5__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_6__.Flex, {
    direction: {
      "default": 'column'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_7__.FlexItem, {
    spacer: {
      "default": 'spacer2xl'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_8__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_9__.Text, {
    component: "h1"
  }, "Get started with Red Hat Ansible Automation Platform"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_9__.Text, {
    component: "p"
  }, "Red Hat Ansible Automation Platform simplifies the development and operation of automation", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "workloads across diverse hybrid environments using Ansible Tower, certified and supported content ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "collections, and the hosted services on cloud.redhat.com"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_7__.FlexItem, null, renderButtons()))))));
};

DashboardHeader.propTypes = {
  renderButtons: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardHeader);

/***/ }),

/***/ "./src/components/shared/no-app-state.js":
/*!***********************************************!*\
  !*** ./src/components/shared/no-app-state.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _dashboard_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-header */ "./src/components/shared/dashboard-header.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button.js */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/Flex.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/Flex.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/FlexItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/FlexItem.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/arrow-right-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/arrow-right-icon.js");







var renderButtons = function renderButtons() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isLarge: true,
    component: "a",
    variant: "primary",
    href: "https://www.redhat.com/en/technologies/management/ansible/try-it"
  }, "Try it free")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_3__.Button, {
    component: "a",
    isLarge: true,
    variant: "link",
    target: "_blank",
    rel: "noreferrer",
    href: "https://www.redhat.com/en/technologies/management/ansible"
  }, "Learn more \xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_icons_dist_js_icons_arrow_right_icon__WEBPACK_IMPORTED_MODULE_4__.default, null)))));
};

var NoAppState = function NoAppState() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_dashboard_header__WEBPACK_IMPORTED_MODULE_5__.default, {
    renderButtons: renderButtons
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoAppState);

/***/ }),

/***/ "./src/helpers/analytics/analytics-helper.js":
/*!***************************************************!*\
  !*** ./src/helpers/analytics/analytics-helper.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getClusters": () => (/* binding */ getClusters),
/* harmony export */   "getNotifications": () => (/* binding */ getNotifications),
/* harmony export */   "getJobs": () => (/* binding */ getJobs)
/* harmony export */ });
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");
/* eslint camelcase: 0 */


var axiosInstance = (0,_shared_user_login__WEBPACK_IMPORTED_MODULE_0__.getAxiosInstance)();
var getClusters = function getClusters() {
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_API_BASE, "/clusters?limit=1"));
};
var getNotifications = function getNotifications() {
  var severity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'error';
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_API_BASE, "/notifications?severity=").concat(severity, "&limit=1"));
};
var getJobs = function getJobs() {
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.ANALYTICS_API_BASE, "/jobs?limit=1"));
};

/***/ }),

/***/ "./src/helpers/automation-hub/hub-helper.js":
/*!**************************************************!*\
  !*** ./src/helpers/automation-hub/hub-helper.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCollections": () => (/* binding */ getCollections),
/* harmony export */   "getPartners": () => (/* binding */ getPartners)
/* harmony export */ });
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");
/* eslint camelcase: 0 */


var axiosInstance = (0,_shared_user_login__WEBPACK_IMPORTED_MODULE_0__.getAxiosInstance)();
var getCollections = function getCollections() {
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.AUTOMATION_HUB_API_BASE, "/repo/published/?deprecated=false?limit=1"));
};
var getPartners = function getPartners() {
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.AUTOMATION_HUB_API_BASE, "/namespaces/?limit=1"));
};

/***/ }),

/***/ "./src/helpers/catalog/catalog-helper.js":
/*!***********************************************!*\
  !*** ./src/helpers/catalog/catalog-helper.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrders": () => (/* binding */ getOrders),
/* harmony export */   "listPortfolios": () => (/* binding */ listPortfolios),
/* harmony export */   "getPortfolioItems": () => (/* binding */ getPortfolioItems),
/* harmony export */   "getPlatforms": () => (/* binding */ getPlatforms)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");
/* harmony import */ var _shared_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/pagination */ "./src/helpers/shared/pagination.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint camelcase: 0 */



var axiosInstance = (0,_shared_user_login__WEBPACK_IMPORTED_MODULE_1__.getAxiosInstance)();

var getOrderItems = function getOrderItems(orderIds) {
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_2__.CATALOG_API_BASE, "/order_items?limit=").concat(orderIds.length * 3 || _shared_pagination__WEBPACK_IMPORTED_MODULE_3__.defaultSettings.limit).concat(orderIds.length ? '&' : '').concat(orderIds.map(function (orderId) {
    return "filter[order_id][]=".concat(orderId);
  }).join('&')));
};

var getOrderPortfolioItems = function getOrderPortfolioItems(itemIds) {
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_2__.CATALOG_API_BASE, "/portfolio_items?").concat(itemIds.map(function (itemId) {
    return "filter[id][]=".concat(itemId);
  }).join('&')));
};

var getOrders = function getOrders() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var pagination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _shared_pagination__WEBPACK_IMPORTED_MODULE_3__.defaultSettings;
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_2__.CATALOG_API_BASE, "/orders?").concat(filter, "&limit=").concat(pagination.limit, "&offset=").concat(pagination.offset)) // eslint-disable-line max-len
  .then(function (orders) {
    return getOrderItems(orders.data.map(function (_ref) {
      var id = _ref.id;
      return id;
    })).then(function (orderItems) {
      return getOrderPortfolioItems(orderItems.data.map(function (_ref2) {
        var portfolio_item_id = _ref2.portfolio_item_id;
        return portfolio_item_id;
      })).then(function (portfolioItems) {
        return _objectSpread(_objectSpread({
          portfolioItems: portfolioItems
        }, orders), {}, {
          data: orders.data.map(function (order) {
            return _objectSpread(_objectSpread({}, order), {}, {
              orderItems: orderItems.data.filter(function (_ref3) {
                var order_id = _ref3.order_id;
                return order_id === order.id;
              })
            });
          })
        });
      });
    });
  });
};
var listPortfolios = function listPortfolios() {
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_2__.CATALOG_API_BASE, "/portfolios"));
};
var getPortfolioItems = function getPortfolioItems() {
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_2__.CATALOG_API_BASE, "/portfolio_items"));
};
var getPlatforms = function getPlatforms() {
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_2__.CATALOG_API_BASE, "/platforms"));
};

/***/ }),

/***/ "./src/helpers/shared/user-login.js":
/*!******************************************!*\
  !*** ./src/helpers/shared/user-login.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAxiosInstance": () => (/* binding */ getAxiosInstance)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_4__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_3___default().create({
  paramsSerializer: function paramsSerializer(params) {
    return (0,qs__WEBPACK_IMPORTED_MODULE_4__.stringify)(params);
  }
});

var resolveInterceptor = function resolveInterceptor(response) {
  return response.data || response;
};

var errorInterceptor = function errorInterceptor() {
  var _error$response, _error$response$heade;

  var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var requestId = (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$heade = _error$response.headers) === null || _error$response$heade === void 0 ? void 0 : _error$response$heade['x-rh-insights-request-id'];
  throw requestId ? _objectSpread(_objectSpread({}, error.response), {}, {
    requestId: requestId
  }) : _objectSpread({}, error.response);
};

var unauthorizedInterceptor = function unauthorizedInterceptor(error) {
  if (error.status === 403) {
    var _error$config;

    throw _objectSpread(_objectSpread({}, error), {}, {
      redirect: {
        pathname: '/403',
        message: (_error$config = error.config) === null || _error$config === void 0 ? void 0 : _error$config.url
      }
    });
  }

  throw error;
}; // check identity before each request. If the token is expired it will log out user


axiosInstance.interceptors.request.use( /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(config) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return window.insights.chrome.auth.getUser();

          case 2:
            return _context.abrupt("return", config);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
axiosInstance.interceptors.response.use(resolveInterceptor);
axiosInstance.interceptors.response.use(undefined, errorInterceptor);
axiosInstance.interceptors.response.use(undefined, unauthorizedInterceptor);
function getAxiosInstance() {
  return axiosInstance;
}

/***/ }),

/***/ "./src/messages/messages.js":
/*!**********************************!*\
  !*** ./src/messages/messages.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");

var messages = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  errorStateTitle: {
    id: 'error.state.title',
    defaultMessage: 'Something went wrong'
  },
  errorStateDescription: {
    id: 'error.state.description',
    defaultMessage: // eslint-disable-next-line max-len
    'There was a problem processing the request. Please try again. <br></br> If the problem persists, contact {supportLink} or check our {statusLink} page for known outages.'
  },
  analyticsTitle: {
    id: 'analytics.title',
    defaultMessage: 'Insights Analytics'
  },
  catalogTitle: {
    id: 'catalog.title',
    defaultMessage: 'Automation Services Catalog'
  },
  hubTitle: {
    id: 'hub.title',
    defaultMessage: 'Automation Hub'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messages);

/***/ }),

/***/ "./src/redux/actions/analytics-actions.js":
/*!************************************************!*\
  !*** ./src/redux/actions/analytics-actions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchClusters": () => (/* binding */ fetchClusters),
/* harmony export */   "fetchWarningNotifications": () => (/* binding */ fetchWarningNotifications),
/* harmony export */   "fetchErrorNotifications": () => (/* binding */ fetchErrorNotifications),
/* harmony export */   "fetchJobs": () => (/* binding */ fetchJobs)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_analytics_analytics_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/analytics/analytics-helper */ "./src/helpers/analytics/analytics-helper.js");


var fetchClusters = function fetchClusters() {
  return function (dispatch) {
    return dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.FETCH_CLUSTERS,
      payload: _helpers_analytics_analytics_helper__WEBPACK_IMPORTED_MODULE_1__.getClusters()
    });
  };
};
var fetchWarningNotifications = function fetchWarningNotifications() {
  return function (dispatch) {
    return dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.FETCH_WARNING_NOTIFICATIONS,
      payload: _helpers_analytics_analytics_helper__WEBPACK_IMPORTED_MODULE_1__.getNotifications('warning')
    });
  };
};
var fetchErrorNotifications = function fetchErrorNotifications() {
  return function (dispatch) {
    return dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.FETCH_ERROR_NOTIFICATIONS,
      payload: _helpers_analytics_analytics_helper__WEBPACK_IMPORTED_MODULE_1__.getNotifications('error')
    });
  };
};
var fetchJobs = function fetchJobs() {
  return function (dispatch) {
    return dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.FETCH_JOBS,
      payload: _helpers_analytics_analytics_helper__WEBPACK_IMPORTED_MODULE_1__.getJobs()
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/catalog-actions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/catalog-actions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchOrders": () => (/* binding */ fetchOrders),
/* harmony export */   "doFetchPortfolios": () => (/* binding */ doFetchPortfolios),
/* harmony export */   "fetchPortfolios": () => (/* binding */ fetchPortfolios),
/* harmony export */   "fetchPortfolioItems": () => (/* binding */ fetchPortfolioItems),
/* harmony export */   "fetchPlatforms": () => (/* binding */ fetchPlatforms)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_catalog_catalog_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/catalog/catalog-helper */ "./src/helpers/catalog/catalog-helper.js");
/* harmony import */ var _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/shared/pagination */ "./src/helpers/shared/pagination.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var fetchOrders = function fetchOrders(filters) {
  var pagination = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_3__.defaultSettings;
  return function (dispatch) {
    var queryFilter = Object.entries(filters).filter(function (_ref) {
      var _ref2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, 2),
          value = _ref2[1];

      return value && value.length > 0;
    }).map(function (_ref3) {
      var _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      return Array.isArray(value) ? value.map(function (value) {
        return "filter[".concat(key, "][]=").concat(value);
      }).join('&') : "filter[".concat(key, "][contains_i]=").concat(value);
    }).join('&');

    if (pagination.sortBy) {
      queryFilter = "".concat(queryFilter, "&sort_by=").concat(pagination.sortBy, ":").concat(pagination.sortDirection || 'desc');
    }

    dispatch({
      type: "".concat(_action_types__WEBPACK_IMPORTED_MODULE_4__.FETCH_ORDERS, "_PENDING")
    });
    return _helpers_catalog_catalog_helper__WEBPACK_IMPORTED_MODULE_5__.getOrders(queryFilter, pagination).then(function (_ref5) {
      var portfolioItems = _ref5.portfolioItems,
          orders = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref5, ["portfolioItems"]);

      dispatch({
        type: _action_types__WEBPACK_IMPORTED_MODULE_4__.SET_PORTFOLIO_ITEMS,
        payload: portfolioItems
      });
      return dispatch({
        type: "".concat(_action_types__WEBPACK_IMPORTED_MODULE_4__.FETCH_ORDERS, "_FULFILLED"),
        meta: _objectSpread(_objectSpread({}, pagination), {}, {
          filter: queryFilter,
          filters: filters,
          storeState: true,
          stateKey: 'orders'
        }),
        payload: orders
      });
    })["catch"](function (error) {
      return dispatch({
        type: "".concat(_action_types__WEBPACK_IMPORTED_MODULE_4__.FETCH_ORDERS, "_REJECTED"),
        payload: error
      });
    });
  };
};
var doFetchPortfolios = function doFetchPortfolios() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_3__.defaultSettings;

  var filters = _ref6.filters,
      options = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.default)(_ref6, ["filters"]);

  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_4__.FETCH_PORTFOLIOS,
    meta: _objectSpread(_objectSpread({}, _helpers_shared_pagination__WEBPACK_IMPORTED_MODULE_3__.defaultSettings), {}, {
      filters: filters
    }, options),
    payload: _helpers_catalog_catalog_helper__WEBPACK_IMPORTED_MODULE_5__.listPortfolios(filters, options)
  };
};
var fetchPortfolios = function fetchPortfolios(options) {
  return function (dispatch) {
    return dispatch(doFetchPortfolios(options));
  };
};
var fetchPortfolioItems = function fetchPortfolioItems() {
  return function (dispatch) {
    return dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_4__.FETCH_PORTFOLIO_ITEMS,
      payload: _helpers_catalog_catalog_helper__WEBPACK_IMPORTED_MODULE_5__.getPlatforms()
    });
  };
};
var fetchPlatforms = function fetchPlatforms() {
  return function (dispatch) {
    return dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_4__.FETCH_PLATFORMS,
      payload: _helpers_catalog_catalog_helper__WEBPACK_IMPORTED_MODULE_5__.getPlatforms()
    });
  };
};

/***/ }),

/***/ "./src/redux/actions/hub-actions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/hub-actions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCollections": () => (/* binding */ fetchCollections),
/* harmony export */   "fetchPartners": () => (/* binding */ fetchPartners)
/* harmony export */ });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_automation_hub_hub_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/automation-hub/hub-helper */ "./src/helpers/automation-hub/hub-helper.js");


var fetchCollections = function fetchCollections() {
  return function (dispatch) {
    return dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.FETCH_COLLECTIONS,
      payload: _helpers_automation_hub_hub_helper__WEBPACK_IMPORTED_MODULE_1__.getCollections()
    });
  };
};
var fetchPartners = function fetchPartners() {
  return function (dispatch) {
    return dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.FETCH_PARTNERS,
      payload: _helpers_automation_hub_hub_helper__WEBPACK_IMPORTED_MODULE_1__.getPartners()
    });
  };
};

/***/ }),

/***/ "./src/utilities/constants.js":
/*!************************************!*\
  !*** ./src/utilities/constants.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CATALOG_API_BASE": () => (/* binding */ CATALOG_API_BASE),
/* harmony export */   "AUTOMATION_HUB_API_BASE": () => (/* binding */ AUTOMATION_HUB_API_BASE),
/* harmony export */   "ANALYTICS_API_BASE": () => (/* binding */ ANALYTICS_API_BASE)
/* harmony export */ });
var CATALOG_API_BASE = "/api/catalog/v1.3";
var AUTOMATION_HUB_API_BASE = "/api/automation-hub/_ui/v1";
var ANALYTICS_API_BASE = "/api/tower-analytics/v1";

/***/ }),

/***/ "./src/images/Headers-Red_Hat-White_Automation.svg":
/*!*********************************************************!*\
  !*** ./src/images/Headers-Red_Hat-White_Automation.svg ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fonts/Headers-Red_Hat-White_Automation.svg");

/***/ })

}]);