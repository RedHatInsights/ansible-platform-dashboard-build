(self.webpackChunkansible_dashboard=self.webpackChunkansible_dashboard||[]).push([[125],{660:(a,r,e)=>{"use strict";e.d(r,{Z:()=>A});var n=e(4699),o=e(2950),i=e.n(o),s=e(9338),t=e(4685),d=e(334),c=(0,o.lazy)((function(){return Promise.all([e.e(410),e.e(252),e.e(71),e.e(111),e.e(663)]).then(e.bind(e,7340))})),l=function(){return i().createElement(d.Route,{path:"/ansible-dashboard",component:c})},b=e(9558),p=e(5469),h=(e(4154),e(6455));const f=function(){return i().createElement(i().Fragment,null,i().createElement(h.Z,{size:"md"}),i().createElement("br",null),i().createElement(h.Z,{size:"md"}))};window.location.pathname.split("/").shift();const A=function(){var a=(0,o.useState)(),r=(0,n.Z)(a,2),e=r[0],d=r[1],c=(0,o.useState)({identity:{}}),h=(0,n.Z)(c,2),A=h[0],u=h[1],C=(0,o.useState)(!1),g=(0,n.Z)(C,2),m=g[0],_=g[1];return(0,o.useEffect)((function(){insights.chrome.init(),insights.chrome.auth.getUser().then((function(a){return u(a),insights.chrome.getUserPermissions().then((function(a){return d(a)}))})).then((function(){return _(!0)})),insights.chrome.identifyApp("ansible-dashboard")}),[]),m?i().createElement(p.Z.Provider,{value:{permissions:e,userIdentity:A}},i().createElement(o.Suspense,{fallback:i().createElement(f,null)},i().createElement(b.Z,{locale:"en"},i().createElement(i().Fragment,null,i().createElement(t.ZP,null),i().createElement(s.Z,{className:"ins-c-ansible-dashboard pf-u-p-0 pf-u-ml-0"},i().createElement(l,null)))))):i().createElement(f,null)}},6580:(a,r,e)=>{"use strict";e.d(r,{m7:()=>n,rY:()=>o,mH:()=>i,To:()=>s,sn:()=>t,Zr:()=>d,Yi:()=>c,Sw:()=>l,XN:()=>b,LJ:()=>p,Ys:()=>h,J$:()=>f,P0:()=>A,rg:()=>u,nq:()=>C});var n="FETCH_ORDERS",o="FETCH_PORTFOLIOS",i="FETCH_PLATFORMS",s="FETCH_PORTFOLIO_ITEMS",t="SET_LOADING_STATE",d="FETCH_COLLECTION",c="FETCH_COLLECTIONS",l="FETCH_PARTNERS",b="FETCH_SYNC_COLLECTIONS",p="SET_LOADING_STATE",h="FETCH_CLUSTERS",f="FETCH_ERROR_NOTIFICATIONS",A="FETCH_WARNING_NOTIFICATIONS",u="FETCH_JOBS",C="SET_LOADING_STATE"},5469:(a,r,e)=>{"use strict";e.d(r,{Z:()=>n});const n=(0,e(2950).createContext)({})},9170:(a,r,e)=>{"use strict";e.d(r,{Z:()=>Z});var n,o=e(7329),i=e(7283),s=e.n(i),t=e(8546),d=e(3215),c=e(4885),l=e(3894),b=e(6156),p=e(6580),h={limit:50,offset:0,count:0,filter:""};function f(a,r){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),e.push.apply(e,n)}return e}function A(a){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?f(Object(e),!0).forEach((function(r){(0,b.Z)(a,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):f(Object(e)).forEach((function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(e,r))}))}return a}var u={isLoading:!1,orders:{data:[],meta:A({},h)},portfolios:{data:[],meta:A({},h)},portfolioItems:{data:[],meta:A({},h)},platforms:{data:[],meta:A({},h)}},C=function(a,r){var e=r.payload,n=void 0===e||e;return A(A({},a),{},{isLoading:n})};const g=(n={},(0,b.Z)(n,p.sn,C),(0,b.Z)(n,"".concat(p.m7,"_FULFILLED"),(function(a,r){var e=r.payload;return A(A({},a),{},{orders:e})})),(0,b.Z)(n,"".concat(p.m7,"_PENDING"),C),(0,b.Z)(n,"".concat(p.rY,"_FULFILLED"),(function(a,r){var e=r.payload;return A(A({},a),{},{portfolios:e})})),(0,b.Z)(n,"".concat(p.rY,"_PENDING"),C),(0,b.Z)(n,"".concat(p.To,"_FULFILLED"),(function(a,r){var e=r.payload;return A(A({},a),{},{portfolioItems:e})})),(0,b.Z)(n,"".concat(p.To,"_PENDING"),C),(0,b.Z)(n,"".concat(p.mH,"_FULFILLED"),(function(a,r){var e=r.payload;return A(A({},a),{},{platforms:e})})),(0,b.Z)(n,"".concat(p.mH,"_PENDING"),C),n);var m;function _(a,r){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),e.push.apply(e,n)}return e}function v(a){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?_(Object(e),!0).forEach((function(r){(0,b.Z)(a,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):_(Object(e)).forEach((function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(e,r))}))}return a}var y={isLoading:!1,collection:{},collections:{data:[],meta:v({},h)},partners:{data:[],meta:v({},h)},syncCollections:{data:[],meta:v({},h)}},D=function(a,r){var e=r.payload,n=void 0===e||e;return v(v({},a),{},{isLoading:n})};const E=(m={},(0,b.Z)(m,p.LJ,D),(0,b.Z)(m,"".concat(p.Zr,"_PENDING"),D),(0,b.Z)(m,"".concat(p.Zr,"_FULFILLED"),(function(a,r){var e=r.payload;return v(v({},a),{},{collection:e})})),(0,b.Z)(m,"".concat(p.Yi,"_FULFILLED"),(function(a,r){var e=r.payload;return v(v({},a),{},{collections:e})})),(0,b.Z)(m,"".concat(p.Yi,"_PENDING"),D),(0,b.Z)(m,"".concat(p.Sw,"_PENDING"),D),(0,b.Z)(m,"".concat(p.Sw,"_FULFILLED"),(function(a,r){var e=r.payload;return v(v({},a),{},{partners:e})})),(0,b.Z)(m,"".concat(p.XN,"_PENDING"),D),(0,b.Z)(m,"".concat(p.XN,"_FULFILLED"),(function(a,r){var e=r.payload;return v(v({},a),{},{syncCollections:e})})),(0,b.Z)(m,"".concat(p.Sw,"_PENDING"),D),m);var w;function O(a,r){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),e.push.apply(e,n)}return e}function F(a){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?O(Object(e),!0).forEach((function(r){(0,b.Z)(a,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):O(Object(e)).forEach((function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(e,r))}))}return a}var L={isLoading:!1,clusters:{data:[],meta:F({},h)},errorNotifications:{data:[],meta:F({},h)},warningNotifications:{data:[],meta:F({},h)},jobs:{data:[],meta:F({},h)}},P=function(a,r){var e=r.payload,n=void 0===e||e;return F(F({},a),{},{isLoading:n})},x=function(a,r){return F(F({},a),{},{notifications:r})};const B=(w={},(0,b.Z)(w,p.nq,P),(0,b.Z)(w,"".concat(p.Ys,"_FULFILLED"),F(F({},undefined),{},{clusters:undefined})),(0,b.Z)(w,"".concat(p.Ys,"_PENDING"),P),(0,b.Z)(w,"".concat(p.J$,"_FULFILLED"),x()),(0,b.Z)(w,"".concat(p.J$,"_PENDING"),P),(0,b.Z)(w,"".concat(p.P0,"_FULFILLED"),x()),(0,b.Z)(w,"".concat(p.P0,"_PENDING"),P),(0,b.Z)(w,"".concat(p.rg,"_FULFILLED"),F(F({},void 0),{},{jobs:void 0})),(0,b.Z)(w,"".concat(p.rg,"_PENDING"),P),w);const Z=function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=new t.ZP({},[l.Z,s(),(0,c.ZP)({errorTitleKey:["errors","message","statusText"],errorDescriptionKey:["data.errors[0].detail","data.errors","data.error","data.message","response.body.errors","data","errorMessage","stack"]})].concat((0,o.Z)(a)));return r.register({catalogReducer:(0,t.Gg)(g,u),analyticsReducer:(0,t.Gg)(B,L),hubReducer:(0,t.Gg)(E,y),notifications:d.ee}),r.getStore()}},7073:(a,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>c});var n=e(4015),o=e.n(n),i=e(3645),s=e.n(i),t=e(5747),d=s()(o());d.i(t.Z),d.push([a.id,".ansible-dashboard{}.ansible-dashboard .ins-c-ansible-dashboard .automation-hub_card{display:grid;grid-template-columns:1fr 1px 1fr 1px 1fr;column-gap:var(--pf-global--spacer--xl)}.ansible-dashboard .ins-c-ansible-dashboard .automation-hub_card .pf-l-stack{min-height:250px}.ansible-dashboard .ins-c-ansible-dashboard .automation-hub_card .pf-c-divider{flex-direction:column}.ansible-dashboard .ins-c-ansible-dashboard .automation-hub_card p{font-size:var(--pf-global--FontSize--sm)}.ansible-dashboard .ins-c-ansible-dashboard .automation-hub_card .pf-c-description-list{--pf-c-description-list--RowGap: var(--pf-global--spacer--md);--pf-c-description-list__group--ColumnGap: var(--pf-global--spacer--0);--pf-c-description-list__group--GridTemplateColumns: 60px auto;display:flex;flex-direction:column}.ansible-dashboard .ins-c-ansible-dashboard .automation-hub_card .pf-c-description-list__term{font-size:var(--pf-global--FontSize--2xl);padding-right:var(--pf-global--spacer--sm);text-align:right}@media only screen and (max-width: 768px){.ansible-dashboard .ins-c-ansible-dashboard .automation-hub_card{display:grid;grid-template-columns:1fr}.ansible-dashboard .ins-c-ansible-dashboard .automation-hub_card .pf-c-title{padding-top:var(--pf-global--spacer--md)}.ansible-dashboard .ins-c-ansible-dashboard .automation-hub_card .pf-l-stack{min-height:auto}.ansible-dashboard .ins-c-ansible-dashboard .automation-hub_card .pf-c-content{display:inline}.ansible-dashboard .ins-c-ansible-dashboard .automation-hub_card .pf-c-divider{flex-direction:row;padding-top:var(--pf-global--spacer--md)}}.ansible-dashboard .ins-c-ansible-dashboard .detail-pane{background-color:var(--pf-global--BackgroundColor--100)}.ansible-dashboard .ins-c-ansible-dashboard .detail-pane,.ansible-dashboard .ins-c-ansible-dashboard .info-bar{min-height:100%}@supports not (overflow-wrap: anywhere){.ansible-dashboard .ins-c-ansible-dashboard .detail-pane,.ansible-dashboard .ins-c-ansible-dashboard .info-bar{word-break:break-all}}@supports (overflow-wrap: anywhere){.ansible-dashboard .ins-c-ansible-dashboard .detail-pane,.ansible-dashboard .ins-c-ansible-dashboard .info-bar{overflow-wrap:anywhere}}.ansible-dashboard .ins-c-ansible-dashboard .destructive-color:not(:disabled){color:var(--pf-chart-color-red-100) !important}.ansible-dashboard .ins-c-ansible-dashboard .disabled-link{pointer-events:none}.ansible-dashboard .ins-c-ansible-dashboard .icon-danger-fill{fill:var(--pf-global--danger-color--100)}.ansible-dashboard .ins-c-ansible-dashboard .icon-info-fill{fill:var(--pf-global--info-color--100)}.ansible-dashboard .ins-c-ansible-dashboard .icon-success-fill{fill:var(--pf-global--success-color--100)}.ansible-dashboard .ins-c-ansible-dashboard .font-14{font-size:14px;color:var(--pf-global--Color--100);font-weight:bold}.ansible-dashboard .ins-c-ansible-dashboard .ins-c-primary-toolbar .ins-c-primary-toolbar__group-filter{margin-right:7px}.ansible-dashboard .ins-c-ansible-dashboard .span-block{display:block}.ansible-dashboard .ins-c-ansible-dashboard .group-label{max-width:256px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ansible-dashboard .ins-c-ansible-dashboard .config_card{height:215px;overflow:hidden}.ansible-dashboard .ins-c-ansible-dashboard .pf-c-table.vertical-align-inherit tbody>tr>*{vertical-align:inherit !important}.ansible-dashboard .ins-c-ansible-dashboard .ins-c-dashboard__error-state svg{height:var(--pf-global--icon--FontSize--lg)}.ansible-dashboard .ins-c-ansible-dashboard .ins-c-dashboard__error-state--body{font-size:var(--pf-global--FontSize--sm)}.ansible-dashboard .ins-c-ansible-dashboard .ins-c-dashboard__card--header-subtitle{font-size:var(--pf-global--FontSize--sm)}.ansible-dashboard .ins-c-ansible-dashboard .ins-c-dashboard__card--header.ins-m-padding-small{padding-bottom:6px}.ansible-dashboard .ins-c-ansible-dashboard .ins-c-dashboard__card--body{display:flex;flex-direction:column}.ansible-dashboard .ins-c-ansible-dashboard .ins-c-dashboard__card--body.ins-m-horizontal{flex-direction:row;padding-top:var(--pf-global--spacer--lg);align-items:flex-end}.ansible-dashboard .ins-c-ansible-dashboard .ins-c-dashboard__card--body>.ins-c-dashboard__number-description:not(:first-child){padding-left:var(--pf-global--spacer--md)}.ansible-dashboard .ins-c-ansible-dashboard .ins-c-dashboard__card--body .pf-c-progress+.pf-c-progress{padding-top:var(--pf-global--spacer--md)}.ansible-dashboard .ins-c-ansible-dashboard .ins-c-dashboard__card--body>.pf-c-progress+.pf-c-progress{margin-top:var(--pf-global--spacer--xs)}.ansible-dashboard .ins-c-ansible-dashboard .pf-c-card.ins-m-short-header .ins-c-dashboard__card--header{--pf-c-card__title--not--last-child--PaddingBottom: 6px}.ansible-dashboard .ins-c-ansible-dashboard .pf-c-card__body .pf-c-card{--pf-c-card--child--PaddingRight: calc(var(--pf-c-card--child--PaddingRight) * -1);--pf-c-card--child--PaddingLeft: calc(var(--pf-c-card--child--PaddingLeft) * -1);--pf-c-card--BoxShadow: none}\n","",{version:3,sources:["webpack://./src/App.scss"],names:[],mappings:"AAAA,mBAAkB,CAAlB,iEACiH,YAAY,CAAC,yCAAyC,CAAC,uCAAuC,CAD/M,6EAC0Q,gBAAgB,CAD1R,+EACuV,qBAAqB,CAD5W,mEAC6Z,wCAAwC,CADrc,wFAC2gB,6DAAgC,CAA8B,sEAA0C,CAA6B,8DAAoD,CAAW,YAAY,CAAC,qBAAqB,CADjvB,8FAC6zB,yCAAyC,CAAC,0CAA0C,CAAC,gBAAgB,CAAC,0CADn6B,iEAC2/B,YAAY,CAAC,yBAAyB,CADjiC,6EAC4lC,wCAAwC,CADpoC,6EAC+rC,eAAe,CAD9sC,+EAC2wC,cAAc,CADzxC,+EACs1C,kBAAkB,CAAC,wCAAwC,CAAE,CADn5C,yDACy7C,uDAAuD,CADh/C,+GAC0jD,eAAe,CAAE,wCAD3kD,+GAC2rD,oBAAoB,CAAE,CAAkC,oCADnvD,+GAC8zD,sBAAsB,CAAE,CADt1D,8EACi5D,8CAA8C,CAD/7D,2DACw+D,mBAAmB,CAD3/D,8DACuiE,wCAAwC,CAD/kE,4DACynE,sCAAsC,CAD/pE,+DAC4sE,yCAAyC,CADrvE,qDACwxE,cAAc,CAAC,kCAAkC,CAAC,gBAAgB,CAD11E,wGACg7E,gBAAgB,CADh8E,wDACs+E,aAAa,CADn/E,yDAC0hF,eAAe,CAAC,sBAAsB,CAAC,kBAAkB,CAAC,eAAe,CADnmF,yDAC0oF,YAAY,CAAC,eAAe,CADtqF,0FAC8uF,iCAAiC,CAD/wF,8EAC20F,2CAA2C,CADt3F,gFACo7F,wCAAwC,CAD59F,oFAC8hG,wCAAwC,CADtkG,+FACmpG,kBAAkB,CADrqG,yEAC4tG,YAAY,CAAC,qBAAqB,CAD9vG,0FACs0G,kBAAkB,CAAC,wCAAwC,CAAC,oBAAoB,CADt5G,gIACogH,yCAAyC,CAD7iH,uGACkoH,wCAAwC,CAD1qH,uGAC+vH,uCAAuC,CADtyH,yGAC63H,uDAAmD,CADh7H,wEAC0+H,kFAAiC,CAAkD,gFAAgC,CAAiD,4BAAuB",sourcesContent:[".ansible-dashboard{\n@import url(~@redhat-cloud-services/frontend-components/index.css);.ins-c-ansible-dashboard .automation-hub_card{display:grid;grid-template-columns:1fr 1px 1fr 1px 1fr;column-gap:var(--pf-global--spacer--xl)}.ins-c-ansible-dashboard .automation-hub_card .pf-l-stack{min-height:250px}.ins-c-ansible-dashboard .automation-hub_card .pf-c-divider{flex-direction:column}.ins-c-ansible-dashboard .automation-hub_card p{font-size:var(--pf-global--FontSize--sm)}.ins-c-ansible-dashboard .automation-hub_card .pf-c-description-list{--pf-c-description-list--RowGap: var(--pf-global--spacer--md);--pf-c-description-list__group--ColumnGap: var(--pf-global--spacer--0);--pf-c-description-list__group--GridTemplateColumns: 60px auto;display:flex;flex-direction:column}.ins-c-ansible-dashboard .automation-hub_card .pf-c-description-list__term{font-size:var(--pf-global--FontSize--2xl);padding-right:var(--pf-global--spacer--sm);text-align:right}@media only screen and (max-width: 768px){.ins-c-ansible-dashboard .automation-hub_card{display:grid;grid-template-columns:1fr}.ins-c-ansible-dashboard .automation-hub_card .pf-c-title{padding-top:var(--pf-global--spacer--md)}.ins-c-ansible-dashboard .automation-hub_card .pf-l-stack{min-height:auto}.ins-c-ansible-dashboard .automation-hub_card .pf-c-content{display:inline}.ins-c-ansible-dashboard .automation-hub_card .pf-c-divider{flex-direction:row;padding-top:var(--pf-global--spacer--md)}}.ins-c-ansible-dashboard .detail-pane{background-color:var(--pf-global--BackgroundColor--100)}.ins-c-ansible-dashboard .detail-pane,.ins-c-ansible-dashboard .info-bar{min-height:100%}@supports not (overflow-wrap: anywhere){.ins-c-ansible-dashboard .detail-pane,.ins-c-ansible-dashboard .info-bar{word-break:break-all}}@supports (overflow-wrap: anywhere){.ins-c-ansible-dashboard .detail-pane,.ins-c-ansible-dashboard .info-bar{overflow-wrap:anywhere}}.ins-c-ansible-dashboard .destructive-color:not(:disabled){color:var(--pf-chart-color-red-100) !important}.ins-c-ansible-dashboard .disabled-link{pointer-events:none}.ins-c-ansible-dashboard .icon-danger-fill{fill:var(--pf-global--danger-color--100)}.ins-c-ansible-dashboard .icon-info-fill{fill:var(--pf-global--info-color--100)}.ins-c-ansible-dashboard .icon-success-fill{fill:var(--pf-global--success-color--100)}.ins-c-ansible-dashboard .font-14{font-size:14px;color:var(--pf-global--Color--100);font-weight:bold}.ins-c-ansible-dashboard .ins-c-primary-toolbar .ins-c-primary-toolbar__group-filter{margin-right:7px}.ins-c-ansible-dashboard .span-block{display:block}.ins-c-ansible-dashboard .group-label{max-width:256px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ins-c-ansible-dashboard .config_card{height:215px;overflow:hidden}.ins-c-ansible-dashboard .pf-c-table.vertical-align-inherit tbody>tr>*{vertical-align:inherit !important}.ins-c-ansible-dashboard .ins-c-dashboard__error-state svg{height:var(--pf-global--icon--FontSize--lg)}.ins-c-ansible-dashboard .ins-c-dashboard__error-state--body{font-size:var(--pf-global--FontSize--sm)}.ins-c-ansible-dashboard .ins-c-dashboard__card--header-subtitle{font-size:var(--pf-global--FontSize--sm)}.ins-c-ansible-dashboard .ins-c-dashboard__card--header.ins-m-padding-small{padding-bottom:6px}.ins-c-ansible-dashboard .ins-c-dashboard__card--body{display:flex;flex-direction:column}.ins-c-ansible-dashboard .ins-c-dashboard__card--body.ins-m-horizontal{flex-direction:row;padding-top:var(--pf-global--spacer--lg);align-items:flex-end}.ins-c-ansible-dashboard .ins-c-dashboard__card--body>.ins-c-dashboard__number-description:not(:first-child){padding-left:var(--pf-global--spacer--md)}.ins-c-ansible-dashboard .ins-c-dashboard__card--body .pf-c-progress+.pf-c-progress{padding-top:var(--pf-global--spacer--md)}.ins-c-ansible-dashboard .ins-c-dashboard__card--body>.pf-c-progress+.pf-c-progress{margin-top:var(--pf-global--spacer--xs)}.ins-c-ansible-dashboard .pf-c-card.ins-m-short-header .ins-c-dashboard__card--header{--pf-c-card__title--not--last-child--PaddingBottom: 6px}.ins-c-ansible-dashboard .pf-c-card__body .pf-c-card{--pf-c-card--child--PaddingRight: calc(var(--pf-c-card--child--PaddingRight) * -1);--pf-c-card--child--PaddingLeft: calc(var(--pf-c-card--child--PaddingLeft) * -1);--pf-c-card--BoxShadow: none}\n\n}"],sourceRoot:""}]);const c=d},4154:(a,r,e)=>{"use strict";var n=e(3379),o=e.n(n),i=e(7073),s=o()(i.default,{insert:"head",singleton:!1});if(!i.default.locals||a.hot.invalidate){var t=i.default.locals;a.hot.accept(7073,(r=>{i=e(7073),function(a,r,e){if(!a&&r||a&&!r)return!1;var n;for(n in a)if(a[n]!==r[n])return!1;for(n in r)if(!a[n])return!1;return!0}(t,i.default.locals)?(t=i.default.locals,s(i.default)):a.hot.invalidate()}))}a.hot.dispose((function(){s()})),i.default.locals}}]);