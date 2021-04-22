(self["webpackChunkansible_dashboard"] = self["webpackChunkansible_dashboard"] || []).push([["ansible-dashboard-route"],{

/***/ "./src/components/automation-hub/content-counts.js":
/*!*********************************************************!*\
  !*** ./src/components/automation-hub/content-counts.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contentCounts": () => (/* binding */ contentCounts)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var contentCounts = function contentCounts(content) {
  var summary = {
    total_count: content.length,
    contents: {
      module: 0,
      role: 0,
      plugin: 0
    }
  };

  var _iterator = _createForOfIteratorHelper(content),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var c = _step.value;

      if (c.content_type === 'role') {
        summary.contents.role++;
      } else if (c.content_type === 'module') {
        summary.contents.module++;
      } else {
        summary.contents.plugin++;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return summary;
};

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
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye_Bullseye_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button.js */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/Card.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/CardBody.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardTitle_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/CardTitle.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Divider_Divider_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Divider/Divider.js */ "./node_modules/@patternfly/react-core/dist/js/components/Divider/Divider.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/Flex.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/Flex.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/FlexItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/FlexItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Label_Label_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Label/Label.js */ "./node_modules/@patternfly/react-core/dist/js/components/Label/Label.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Level_Level_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Level/Level.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Level/Level.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Level_LevelItem_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Level/LevelItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Level/LevelItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Spinner_Spinner_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Spinner/Spinner.js */ "./node_modules/@patternfly/react-core/dist/js/components/Spinner/Spinner.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/Stack.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/Stack.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/StackItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/StackItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/TextContent.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/TextContent.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title.js */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @redhat-cloud-services/frontend-components/Section */ "./node_modules/@redhat-cloud-services/frontend-components/esm/Section/Section.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _messages_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../messages/messages */ "./src/messages/messages.js");
/* harmony import */ var _redux_actions_hub_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/hub-actions */ "./src/redux/actions/hub-actions.js");
/* harmony import */ var _user_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user-context */ "./src/user-context.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/external-link-alt-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/external-link-alt-icon.js");
/* harmony import */ var _content_counts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./content-counts */ "./src/components/automation-hub/content-counts.js");
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./logo */ "./src/components/automation-hub/logo.js");
/* harmony import */ var _utilities_app_history__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utilities/app-history */ "./src/utilities/app-history.js");



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
        collection = _ref$hubReducer.collection,
        collections = _ref$hubReducer.collections,
        partners = _ref$hubReducer.partners;
    return {
      collection: collection,
      collections: collections,
      partners: partners
    };
  }),
      collection = _useSelector.collection,
      collections = _useSelector.collections,
      partners = _useSelector.partners;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_user_context__WEBPACK_IMPORTED_MODULE_4__.default),
      userIdentity = _useContext.userIdentity;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.default)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var _userIdentity$identit;

    stateDispatch({
      type: 'setFetching',
      payload: true
    });
    Promise.all([dispatch((0,_redux_actions_hub_actions__WEBPACK_IMPORTED_MODULE_6__.fetchCollections)()), dispatch((0,_redux_actions_hub_actions__WEBPACK_IMPORTED_MODULE_6__.fetchPartners)()), dispatch((0,_redux_actions_hub_actions__WEBPACK_IMPORTED_MODULE_6__.fetchSyncCollections)(userIdentity === null || userIdentity === void 0 ? void 0 : (_userIdentity$identit = userIdentity.identity) === null || _userIdentity$identit === void 0 ? void 0 : _userIdentity$identit.account_number))]).then(function () {
      return stateDispatch({
        type: 'setFetching',
        payload: false
      });
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var _collections$meta;

    stateDispatch({
      type: 'setFetching',
      payload: true
    });

    if ((collections === null || collections === void 0 ? void 0 : (_collections$meta = collections.meta) === null || _collections$meta === void 0 ? void 0 : _collections$meta.count) > 0) {
      var _collections$meta2;

      var d = new Date();
      var day = d.getDate();
      var count = collections === null || collections === void 0 ? void 0 : (_collections$meta2 = collections.meta) === null || _collections$meta2 === void 0 ? void 0 : _collections$meta2.count;
      dispatch((0,_redux_actions_hub_actions__WEBPACK_IMPORTED_MODULE_6__.fetchCollection)(count <= day ? count : day - 1)).then(function () {
        return stateDispatch({
          type: 'setFetching',
          payload: false
        });
      });
    }
  }, [collections]);

  var renderHubInfo = function renderHubInfo() {
    var _partners$meta, _collections$meta3, _collections$meta4;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.Text, {
      style: {
        width: '350px'
      }
    }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_8__.default.hubCardDescription)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_9__.Grid, {
      hasGutter: "md"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
      span: "2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_11__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.Text, {
      component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.TextVariants.h1
    }, partners === null || partners === void 0 ? void 0 : (_partners$meta = partners.meta) === null || _partners$meta === void 0 ? void 0 : _partners$meta.count))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
      span: "10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_12__.Button, {
      isLarge: true,
      className: "pf-u-p-0",
      component: "a",
      variant: "link",
      href: "".concat(_utilities_app_history__WEBPACK_IMPORTED_MODULE_13__.release, "ansible/automation-hub/partners")
    }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_8__.default.partners))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
      span: "2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_11__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.Text, {
      component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.TextVariants.h1
    }, collections === null || collections === void 0 ? void 0 : (_collections$meta3 = collections.meta) === null || _collections$meta3 === void 0 ? void 0 : _collections$meta3.count))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
      span: "10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_12__.Button, {
      isLarge: true,
      className: "pf-u-p-0",
      component: "a",
      variant: "link",
      href: "".concat(_utilities_app_history__WEBPACK_IMPORTED_MODULE_13__.release, "ansible/automation-hub")
    }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_8__.default.collections))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
      span: "2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_11__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.Text, {
      component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.TextVariants.h1
    }, collections === null || collections === void 0 ? void 0 : (_collections$meta4 = collections.meta) === null || _collections$meta4 === void 0 ? void 0 : _collections$meta4.count))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
      span: "10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_12__.Button, {
      className: "pf-u-p-0",
      isLarge: true,
      variant: "link"
    }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_8__.default.syncCollections)))));
  };

  var renderHubFeaturedCollection = function renderHubFeaturedCollection() {
    var _featuredCollection$l, _featuredCollection$l2, _featuredCollection$n, _featuredCollection$n2, _featuredCollection$n3, _featuredCollection$l3, _featuredCollection$l4;

    var featuredCollection = collection !== null && collection !== void 0 && collection.data ? collection === null || collection === void 0 ? void 0 : collection.data[0] : null;
    var content = featuredCollection ? (0,_content_counts__WEBPACK_IMPORTED_MODULE_14__.contentCounts)((_featuredCollection$l = featuredCollection.latest_version) === null || _featuredCollection$l === void 0 ? void 0 : (_featuredCollection$l2 = _featuredCollection$l.metadata) === null || _featuredCollection$l2 === void 0 ? void 0 : _featuredCollection$l2.contents) : undefined;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_15__.Title, {
      headingLevel: "h4",
      style: {
        width: '350px'
      }
    }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_8__.default.hubCardFeaturedCollectionTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), featuredCollection && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_16__.Flex, {
      direction: {
        "default": 'column'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_17__.FlexItem, {
      style: {
        width: '350px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Level_Level_js__WEBPACK_IMPORTED_MODULE_18__.Level, {
      hasGutter: "md"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Level_LevelItem_js__WEBPACK_IMPORTED_MODULE_19__.LevelItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_logo__WEBPACK_IMPORTED_MODULE_20__.Logo, {
      alt: (featuredCollection === null || featuredCollection === void 0 ? void 0 : (_featuredCollection$n = featuredCollection.namespace) === null || _featuredCollection$n === void 0 ? void 0 : _featuredCollection$n.company) + ' logo',
      image: featuredCollection === null || featuredCollection === void 0 ? void 0 : featuredCollection.namespace.avatar_url,
      size: "50px"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Level_LevelItem_js__WEBPACK_IMPORTED_MODULE_19__.LevelItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Label_Label_js__WEBPACK_IMPORTED_MODULE_21__.Label, null, "Certified"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_11__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.Text, {
      component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.TextVariants.small
    }, "Provided by ", (featuredCollection === null || featuredCollection === void 0 ? void 0 : (_featuredCollection$n2 = featuredCollection.namespace) === null || _featuredCollection$n2 === void 0 ? void 0 : _featuredCollection$n2.company) || (featuredCollection === null || featuredCollection === void 0 ? void 0 : (_featuredCollection$n3 = featuredCollection.namespace) === null || _featuredCollection$n3 === void 0 ? void 0 : _featuredCollection$n3.name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_17__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_11__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.Text, {
      component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.TextVariants.p
    }, featuredCollection === null || featuredCollection === void 0 ? void 0 : (_featuredCollection$l3 = featuredCollection.latest_version) === null || _featuredCollection$l3 === void 0 ? void 0 : (_featuredCollection$l4 = _featuredCollection$l3.metadata) === null || _featuredCollection$l4 === void 0 ? void 0 : _featuredCollection$l4.description))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_17__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_9__.Grid, {
      hasGutter: "md",
      style: {
        width: '350px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
      span: "4"
    }, (content === null || content === void 0 ? void 0 : content.modules) || '0'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
      span: "4"
    }, (content === null || content === void 0 ? void 0 : content.roles) || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
      span: "4"
    }, (content === null || content === void 0 ? void 0 : content.plugins) || 0), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
      span: "4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_11__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.Text, {
      component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.TextVariants.small
    }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_8__.default.modules)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
      span: "4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_11__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.Text, {
      component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.TextVariants.small
    }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_8__.default.roles)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_10__.GridItem, {
      span: "4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_TextContent_js__WEBPACK_IMPORTED_MODULE_11__.TextContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.Text, {
      component: _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.TextVariants.small
    }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_8__.default.plugins))))))));
  };

  var renderHubOther = function renderHubOther() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_22__.Stack, {
      hasGutter: "lg",
      style: {
        minHeight: '250px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_23__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_15__.Title, {
      headingLevel: "h4"
    }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_8__.default.hubCardCertifiedCollectionTitle))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_23__.StackItem, {
      isFilled: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_7__.Text, {
      style: {
        width: '400px'
      }
    }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_8__.default.hubCardCertifiedCollectionDescription))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_23__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_16__.Flex, {
      justifyContent: {
        "default": 'justifyContentFlexEnd'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_17__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_12__.Button, {
      component: "a",
      variant: "link",
      href: "https://access.redhat.com/documentation/en-us/red_hat_ansible_automation_platform/1.2/html\n        /managing_red_hat_certified_and_ansible_galaxy_collections_in_automation_hub/index"
    }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_8__.default.learnMoreButton), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_icons_dist_js_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_24__.default, null))))));
  };

  var renderHubCards = function renderHubCards() {
    if (isFetching) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_redhat_cloud_services_frontend_components_Section__WEBPACK_IMPORTED_MODULE_25__.default, {
        style: {
          backgroundColor: 'white',
          minHeight: '100%'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Bullseye_Bullseye_js__WEBPACK_IMPORTED_MODULE_26__.Bullseye, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Spinner_Spinner_js__WEBPACK_IMPORTED_MODULE_27__.Spinner, {
        isSVG: true
      })));
    } else {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_16__.Flex, {
        flex: {
          "default": 'flex_1'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_17__.FlexItem, null, renderHubInfo()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Divider_Divider_js__WEBPACK_IMPORTED_MODULE_28__.Divider, {
        isVertical: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_17__.FlexItem, null, renderHubFeaturedCollection()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Divider_Divider_js__WEBPACK_IMPORTED_MODULE_28__.Divider, {
        isVertical: true
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_17__.FlexItem, null, renderHubOther()));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_29__.Card, {
    className: "ins-c-dashboard__card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Card_CardTitle_js__WEBPACK_IMPORTED_MODULE_30__.CardTitle, {
    className: "pf-u-py-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_15__.Title, {
    headingLevel: "h3"
  }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_8__.default.hubTitle))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_patternfly_react_core_dist_js_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_31__.CardBody, null, renderHubCards())));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HubCard);

/***/ }),

/***/ "./src/components/automation-hub/logo.js":
/*!***********************************************!*\
  !*** ./src/components/automation-hub/logo.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logo": () => (/* binding */ Logo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _images_default_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/default-logo.svg */ "./src/images/default-logo.svg");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
 // had to declare *.svg in src/index.d.ts



var Logo = function Logo(props) {
  var size = props.size,
      image = props.image,
      alt = props.alt,
      className = props.className;
  var style = {
    height: size,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }; // use inline css so we can set size

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    style: {
      objectFit: 'contain',
      maxHeight: size
    },
    src: image || _images_default_logo_svg__WEBPACK_IMPORTED_MODULE_2__.default,
    alt: alt
  }));
};
Logo.propTypes = {
  size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  image: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  alt: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ "./src/components/dashboard/configure-app-page.js":
/*!********************************************************!*\
  !*** ./src/components/dashboard/configure-app-page.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _shared_dashboard_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/dashboard-header */ "./src/components/shared/dashboard-header.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Button/Button.js */ "./node_modules/@patternfly/react-core/dist/js/components/Button/Button.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/Flex.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/Flex.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/FlexItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/FlexItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Page_PageSection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Page/PageSection.js */ "./node_modules/@patternfly/react-core/dist/js/components/Page/PageSection.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/Stack.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/Stack.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/StackItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/StackItem.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");
/* harmony import */ var _messages_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../messages/messages */ "./src/messages/messages.js");
/* harmony import */ var _shared_configure_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/configure-card */ "./src/components/shared/configure-card.js");
/* harmony import */ var _automation_hub_hub_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../automation-hub/hub-card */ "./src/components/automation-hub/hub-card.js");
/* harmony import */ var _patternfly_react_icons_dist_js_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-icons/dist/js/icons/external-link-alt-icon */ "./node_modules/@patternfly/react-icons/dist/js/icons/external-link-alt-icon.js");
















var _renderButtons = function renderButtons(intl) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isLarge: true,
    component: "a",
    variant: "primary",
    href: "https://docs.ansible.com/ansible-tower/latest/html/quickinstall/index.html"
  }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_4__.default.configureLink)))));
};

var renderAnalyticsConfigButton = function renderAnalyticsConfigButton(intl) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_3__.Button, {
    component: "a",
    variant: "link",
    href: "https://access.redhat.com/documentation/en-us/\n          red_hat_ansible_automation_platform/1.2/html/getting_started_with_automation_services_catalog/index"
  }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_4__.default.configureAnalyticsLink), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_icons_dist_js_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_5__.default, null)))));
};

var renderCatalogConfigButton = function renderCatalogConfigButton(intl) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_1__.Flex, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_2__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Button_Button_js__WEBPACK_IMPORTED_MODULE_3__.Button, {
    component: "a",
    variant: "link",
    href: "https://access.redhat.com/documentation/en-us/\n          red_hat_ansible_automation_platform/1.2/html/getting_started_with_automation_services_catalog/index"
  }, intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_4__.default.configureCatalogLink), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_icons_dist_js_icons_external_link_alt_icon__WEBPACK_IMPORTED_MODULE_5__.default, null)))));
};

var ConfigureAppPage = function ConfigureAppPage() {
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_dashboard_header__WEBPACK_IMPORTED_MODULE_7__.default, {
    title: intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_4__.default.noAppTitle),
    description: intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_4__.default.configDescription),
    renderButtons: function renderButtons() {
      return _renderButtons(intl);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Page_PageSection_js__WEBPACK_IMPORTED_MODULE_8__.PageSection, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_9__.Stack, {
    hasGutter: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_11__.Grid, {
    hasGutter: "xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_12__.GridItem, {
    span: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_configure_card__WEBPACK_IMPORTED_MODULE_13__.default, {
    title: intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_4__.default.configureAnalyticsTitle),
    description: intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_4__.default.configureAnalyticsDescription),
    renderButtons: function renderButtons() {
      return renderAnalyticsConfigButton(intl);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_12__.GridItem, {
    span: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_shared_configure_card__WEBPACK_IMPORTED_MODULE_13__.default, {
    title: intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_4__.default.configureCatalogTitle),
    description: intl.formatMessage(_messages_messages__WEBPACK_IMPORTED_MODULE_4__.default.configureCatalogDescription),
    renderButtons: function renderButtons() {
      return renderCatalogConfigButton(intl);
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_10__.StackItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_automation_hub_hub_card__WEBPACK_IMPORTED_MODULE_14__.default, null)))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigureAppPage);

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
/* harmony import */ var _configure_app_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configure-app-page */ "./src/components/dashboard/configure-app-page.js");



var Dashboard = function Dashboard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_configure_app_page__WEBPACK_IMPORTED_MODULE_1__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./src/components/shared/configure-card.js":
/*!*************************************************!*\
  !*** ./src/components/shared/configure-card.js ***!
  \*************************************************/
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
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Bullseye_Bullseye_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Bullseye/Bullseye.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/Card.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/Card.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/CardBody.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/CardBody.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Card_CardTitle_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Card/CardTitle.js */ "./node_modules/@patternfly/react-core/dist/js/components/Card/CardTitle.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/Stack.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/Stack.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Stack/StackItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Stack/StackItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title.js */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var react_truncate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-truncate */ "./node_modules/react-truncate/lib/Truncate.js");












var ConfigureCard = function ConfigureCard(_ref) {
  var title = _ref.title,
      description = _ref.description,
      renderButtons = _ref.renderButtons;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Card_Card_js__WEBPACK_IMPORTED_MODULE_4__.Card, {
    className: "config_card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Card_CardTitle_js__WEBPACK_IMPORTED_MODULE_5__.CardTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_6__.Title, {
    headingLevel: "h3"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Card_CardBody_js__WEBPACK_IMPORTED_MODULE_7__.CardBody, {
    className: 'pf-u-mb-0-pb-0'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Stack_Stack_js__WEBPACK_IMPORTED_MODULE_8__.Stack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_9__.StackItem, {
    isFilled: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_truncate__WEBPACK_IMPORTED_MODULE_3__.default, {
    lines: 3,
    ellipsis: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "... ")
  }, description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Stack_StackItem_js__WEBPACK_IMPORTED_MODULE_9__.StackItem, {
    style: {
      marginBottom: 0,
      paddingBottom: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Bullseye_Bullseye_js__WEBPACK_IMPORTED_MODULE_10__.Bullseye, null, renderButtons())))));
};

ConfigureCard.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  renderButtons: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfigureCard);

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
/* harmony import */ var _patternfly_react_core_dist_js_components_Page_PageSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Page/PageSection.js */ "./node_modules/@patternfly/react-core/dist/js/components/Page/PageSection.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Text/Text.js */ "./node_modules/@patternfly/react-core/dist/js/components/Text/Text.js");
/* harmony import */ var _patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core/dist/js/components/Title/Title.js */ "./node_modules/@patternfly/react-core/dist/js/components/Title/Title.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/Flex.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/Flex.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Flex/FlexItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Flex/FlexItem.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/Grid.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/Grid.js");
/* harmony import */ var _patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core/dist/js/layouts/Grid/GridItem.js */ "./node_modules/@patternfly/react-core/dist/js/layouts/Grid/GridItem.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_Headers_Red_Hat_White_Automation_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/Headers-Red_Hat-White_Automation.svg */ "./src/images/Headers-Red_Hat-White_Automation.svg");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/src/components/useIntl.js");












var DashboardHeader = function DashboardHeader(_ref) {
  var title = _ref.title,
      description = _ref.description,
      renderButtons = _ref.renderButtons;
  var intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Page_PageSection_js__WEBPACK_IMPORTED_MODULE_3__.PageSection, {
    style: {
      backgroundImage: "url(".concat(_images_Headers_Red_Hat_White_Automation_svg__WEBPACK_IMPORTED_MODULE_4__.default, ")"),
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
      paddingTop: '32px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_5__.Grid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__.GridItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_Flex_js__WEBPACK_IMPORTED_MODULE_7__.Flex, {
    direction: {
      "default": 'column'
    },
    spaceItems: {
      modifier: 'spaceItemsXl'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_8__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Title_Title_js__WEBPACK_IMPORTED_MODULE_9__.Title, {
    headingLevel: "h1"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_8__.FlexItem, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Grid_Grid_js__WEBPACK_IMPORTED_MODULE_5__.Grid, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_6__.GridItem, {
    span: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_components_Text_Text_js__WEBPACK_IMPORTED_MODULE_10__.Text, {
    component: "p"
  }, description)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_patternfly_react_core_dist_js_layouts_Flex_FlexItem_js__WEBPACK_IMPORTED_MODULE_8__.FlexItem, null, renderButtons(intl)))))));
};

DashboardHeader.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  renderButtons: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardHeader);

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
/* harmony export */   "getCollection": () => (/* binding */ getCollection),
/* harmony export */   "getPartners": () => (/* binding */ getPartners),
/* harmony export */   "getSyncCollections": () => (/* binding */ getSyncCollections)
/* harmony export */ });
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");
/* eslint camelcase: 0 */


var axiosInstance = (0,_shared_user_login__WEBPACK_IMPORTED_MODULE_0__.getAxiosInstance)();
var getCollections = function getCollections() {
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.AUTOMATION_HUB_API_BASE, "/collections?deprecated=false&&limit=30"));
};
var getCollection = function getCollection(offset) {
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.AUTOMATION_HUB_UI_API_BASE, "/repo/published/?deprecated=false&offset=").concat(offset, "&limit=1"));
};
var getPartners = function getPartners() {
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.AUTOMATION_HUB_API_BASE, "/namespaces?limit=1"));
};
var getSyncCollections = function getSyncCollections(account) {
  return axiosInstance.get("".concat(_utilities_constants__WEBPACK_IMPORTED_MODULE_1__.AUTOMATION_HUB_BASE, "/content/").concat(account, "-synclist/v3/collections?limit=1"));
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
  analyticsCardDescription: {
    id: 'analytics.description',
    defaultMessage: 'Gain insights into your deployments through visual dashboards and organization statistics calculate ' + 'your return on investment and explore automation processes details.'
  },
  totalClusters: {
    id: 'analytics.clusters',
    defaultMessage: 'totalClusters'
  },
  critical: {
    id: 'analytics.critical',
    defaultMessage: 'Critical'
  },
  warning: {
    id: 'analytics.warning',
    defaultMessage: 'Warning'
  },
  catalogTitle: {
    id: 'catalog.title',
    defaultMessage: 'Automation Services Catalog'
  },
  catalogCardDescription: {
    id: 'catalog.description',
    defaultMessage: 'Collect and distribute automation content, govern content by approval processes and assure sign-off by assigned groups.'
  },
  products: {
    id: 'catalog.products',
    defaultMessage: 'Products'
  },
  portfolios: {
    id: 'catalog.portfolios',
    defaultMessage: 'Portfolios'
  },
  platforms: {
    id: 'catalog.platforms',
    defaultMessage: 'Platforms'
  },
  latestOrderTitle: {
    id: 'catalog.latestOrder',
    defaultMessage: 'Latest orders'
  },
  hubTitle: {
    id: 'hub.title',
    defaultMessage: 'Automation Hub'
  },
  hubCardDescription: {
    id: 'hub.description',
    defaultMessage: 'Find and use content that is supported by Red Hat and our partners to deliver reassurance for the most demanding environments'
  },
  hubCardCertifiedCollectionTitle: {
    id: 'hub.certified.title',
    defaultMessage: 'Certified Ansible Collections'
  },
  hubCardCertifiedCollectionDescription: {
    id: 'hub.certified.description',
    defaultMessage: 'View Ansible Content Collections certified and supported by Red Hat. ' + 'Download collections or sync them to your local repositories.'
  },
  hubCardFeaturedCollectionTitle: {
    id: 'hub.featured.title',
    defaultMessage: 'Featured collection'
  },
  partners: {
    id: 'hub.partners',
    defaultMessage: 'Partners'
  },
  collections: {
    id: 'hub.collections',
    defaultMessage: 'Collections'
  },
  syncCollections: {
    id: 'hub.syncCollections',
    defaultMessage: 'Collections set to sync'
  },
  modules: {
    id: 'hub.modules',
    defaultMessage: 'Modules'
  },
  roles: {
    id: 'hub.roles',
    defaultMessage: 'Roles'
  },
  plugins: {
    id: 'hub.plugins',
    defaultMessage: 'Plugins'
  },
  noAppTitle: {
    id: 'no.app.title',
    defaultMessage: 'Get started with Red Hat Ansible Automation Platform'
  },
  noAppDescription: {
    id: 'no.app.description',
    defaultMessage: 'Red Hat Ansible Automation Platform simplifies the development and operation of automation<br/>\n' + '                  workloads across diverse hybrid environments using Ansible Tower, certified and supported content <br/>\n' + '                  collections, and the hosted services on cloud.redhat.com'
  },
  configureLink: {
    id: 'configure.button',
    defaultMessage: 'Install and configure your infrastructure'
  },
  tryItButton: {
    id: 'try.it.button',
    defaultMessage: 'Try it free'
  },
  learnMoreButton: {
    id: 'learn.more.button',
    defaultMessage: 'Learn more'
  },
  configDescription: {
    id: 'config.description',
    defaultMessage: 'Install and configure your Ansible Automation Controller clusters. Once your Ansible Automation ' + 'Controller infrastructure is in place, connect it to the hosted services available on cloud.redhat.com.' + 'Learn how connect to each service in the tiles below.'
  },
  configureAnalyticsTitle: {
    id: 'configure.analytics.title',
    defaultMessage: 'Connect Insights Analytics'
  },
  configureAnalyticsDescription: {
    id: 'configure.analytics.description',
    defaultMessage: 'Gain insights into your deployments through visual dashboards and organization statistics, ' + 'calculate your return on investment, and explore automation processes details'
  },
  configureCatalogTitle: {
    id: 'configure.catalog.title',
    defaultMessage: 'Connect Automation Services Catalog'
  },
  configureCatalogDescription: {
    id: 'configure.catalog.description',
    defaultMessage: 'Use Automation Services Catalog to collect and distribute automation content, govern your content by designing ' + 'and attaching approval processes, and ensure required sign-off is obtained by assigned organizational groups.'
  },
  configureAnalyticsLink: {
    id: 'configure.analytics.link',
    defaultMessage: 'Configure Insights Analytics'
  },
  configureCatalogLink: {
    id: 'configure.catalog.link',
    defaultMessage: 'Configure Automation Services Catalog'
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messages);

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
/* harmony export */   "fetchCollection": () => (/* binding */ fetchCollection),
/* harmony export */   "fetchPartners": () => (/* binding */ fetchPartners),
/* harmony export */   "fetchSyncCollections": () => (/* binding */ fetchSyncCollections)
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
var fetchCollection = function fetchCollection(offset) {
  return function (dispatch) {
    return dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.FETCH_COLLECTION,
      payload: _helpers_automation_hub_hub_helper__WEBPACK_IMPORTED_MODULE_1__.getCollection(offset)
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
var fetchSyncCollections = function fetchSyncCollections(account) {
  return function (dispatch) {
    return dispatch({
      type: _action_types__WEBPACK_IMPORTED_MODULE_0__.FETCH_SYNC_COLLECTIONS,
      payload: _helpers_automation_hub_hub_helper__WEBPACK_IMPORTED_MODULE_1__.getSyncCollections(account)
    });
  };
};

/***/ }),

/***/ "./src/utilities/app-history.js":
/*!**************************************!*\
  !*** ./src/utilities/app-history.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "release": () => (/* binding */ release),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");

var pathName = window.location.pathname.split('/');
pathName.shift();
var prefix = '/';

if (pathName[0] === 'beta') {
  prefix = "/".concat(pathName.shift(), "/");
}
/**
 * Make sure that the [1] fragment is present in the pathname.
 * Otherwise we could end up with /undefined/ which will be transformed by the router to //
 */


var basename = "".concat(prefix).concat(pathName[0], "/").concat(pathName[1] ? pathName[1] : '');
var appHistory = (0,history__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory)({
  basename: basename
});
var release = prefix;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appHistory);

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
/* harmony export */   "AUTOMATION_HUB_UI_API_BASE": () => (/* binding */ AUTOMATION_HUB_UI_API_BASE),
/* harmony export */   "AUTOMATION_HUB_API_BASE": () => (/* binding */ AUTOMATION_HUB_API_BASE),
/* harmony export */   "AUTOMATION_HUB_BASE": () => (/* binding */ AUTOMATION_HUB_BASE),
/* harmony export */   "ANALYTICS_API_BASE": () => (/* binding */ ANALYTICS_API_BASE),
/* harmony export */   "SOURCES_API_BASE": () => (/* binding */ SOURCES_API_BASE)
/* harmony export */ });
var CATALOG_API_BASE = "/api/catalog/v1.3";
var AUTOMATION_HUB_UI_API_BASE = "/api/automation-hub/_ui/v1/";
var AUTOMATION_HUB_API_BASE = "/api/automation-hub/v3";
var AUTOMATION_HUB_BASE = "/api/automation-hub";
var ANALYTICS_API_BASE = "/api/tower-analytics/v1";
var SOURCES_API_BASE = "/api/catalog-inventory/v1.0";

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

/***/ }),

/***/ "./src/images/default-logo.svg":
/*!*************************************!*\
  !*** ./src/images/default-logo.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fonts/default-logo.svg");

/***/ })

}]);