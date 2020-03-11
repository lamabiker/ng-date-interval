(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ng-i18n-date-interval/src/langs/en.json":
/*!**************************************************!*\
  !*** ../ng-i18n-date-interval/src/langs/en.json ***!
  \**************************************************/
/*! exports provided: default, forward, backward */
/***/ (function(module) {

module.exports = JSON.parse("{\"default\":\"From {startDate} to {endDate}\",\"forward\":\"Since {startDate}\",\"backward\":\"Until {endDate}\"}");

/***/ }),

/***/ "../ng-i18n-date-interval/src/langs/fr.json":
/*!**************************************************!*\
  !*** ../ng-i18n-date-interval/src/langs/fr.json ***!
  \**************************************************/
/*! exports provided: default, forward, backward */
/***/ (function(module) {

module.exports = JSON.parse("{\"default\":\"Du {startDate} au {endDate}\",\"forward\":\"Depuis {startDate}\",\"backward\":\"Jusqu'au {endDate}\"}");

/***/ }),

/***/ "../ng-i18n-date-interval/src/langs/index.ts":
/*!***************************************************!*\
  !*** ../ng-i18n-date-interval/src/langs/index.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en.json */ "../ng-i18n-date-interval/src/langs/en.json");
var _en_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./en.json */ "../ng-i18n-date-interval/src/langs/en.json", 1);
/* harmony import */ var _fr_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fr.json */ "../ng-i18n-date-interval/src/langs/fr.json");
var _fr_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./fr.json */ "../ng-i18n-date-interval/src/langs/fr.json", 1);
/* harmony import */ var _ru_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ru.json */ "../ng-i18n-date-interval/src/langs/ru.json");
var _ru_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ru.json */ "../ng-i18n-date-interval/src/langs/ru.json", 1);



/* harmony default export */ __webpack_exports__["default"] = ({ en: _en_json__WEBPACK_IMPORTED_MODULE_0__, fr: _fr_json__WEBPACK_IMPORTED_MODULE_1__, ru: _ru_json__WEBPACK_IMPORTED_MODULE_2__ });


/***/ }),

/***/ "../ng-i18n-date-interval/src/langs/ru.json":
/*!**************************************************!*\
  !*** ../ng-i18n-date-interval/src/langs/ru.json ***!
  \**************************************************/
/*! exports provided: default, forward, backward */
/***/ (function(module) {

module.exports = JSON.parse("{\"default\":\"С {startDate} до {endDate}\",\"forward\":\"С {startDate}\",\"backward\":\"До {endDate}\"}");

/***/ }),

/***/ "../ng-i18n-date-interval/src/lib/date-interval.pipe.ts":
/*!**************************************************************!*\
  !*** ../ng-i18n-date-interval/src/lib/date-interval.pipe.ts ***!
  \**************************************************************/
/*! exports provided: DateIntervalPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateIntervalPipe", function() { return DateIntervalPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _langs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../langs */ "../ng-i18n-date-interval/src/langs/index.ts");




class DateIntervalPipe {
    constructor(locale) {
        this.locale = locale;
    }
    transform(input, format = 'mediumDate', singleDateOutlook = 'forward', locale = this.locale) {
        if (Array.isArray(input) && input.length !== 2) {
            input = input[0];
        }
        this.input = input;
        this.singleDateOutlook = singleDateOutlook;
        let dateArr = Array.isArray(input) ? input : [];
        if (typeof input === 'string' || input instanceof Date) {
            dateArr = [input, null];
            if (singleDateOutlook === 'backward') {
                dateArr.unshift(dateArr.pop());
            }
        }
        const [startDate, endDate] = dateArr.map(item => (item ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(item, format, locale) : null));
        const sentence = _langs__WEBPACK_IMPORTED_MODULE_2__["default"][locale.substring(0, 2)][this.sentence];
        return this.interpolate(sentence, { startDate, endDate });
    }
    interpolate(str, args) {
        for (const arg of Object.keys(args)) {
            const regEx = new RegExp(`\{${arg}\}`, 'g');
            str = str.replace(regEx, args[arg]);
        }
        return str;
    }
    get sentence() {
        if (Array.isArray(this.input)) {
            return 'default';
        }
        return this.singleDateOutlook || 'forward';
    }
}
DateIntervalPipe.ɵfac = function DateIntervalPipe_Factory(t) { return new (t || DateIntervalPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])); };
DateIntervalPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "dateInterval", type: DateIntervalPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DateIntervalPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'dateInterval'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-highlightjs */ "../../node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _ng_i18n_date_interval_src_lib_date_interval_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ng-i18n-date-interval/src/lib/date-interval.pipe */ "../ng-i18n-date-interval/src/lib/date-interval.pipe.ts");






const datesStr = `dates = {
  single: new Date(),
  multiple: ['2001-01-01', '12-12-2002']
}`;
class AppComponent {
    constructor() {
        this.title = 'ng-i18n-date-interval-showcase';
        // Test subjects
        this.dates = {
            single: new Date(),
            multiple: ['2001-01-01', '12-12-2002']
        };
        // String demos
        this.demos = {
            dates: datesStr,
            single: '{{dates.single | dateInterval}}',
            multiple: '{{dates.multiple | dateInterval}}',
            single_options: `{{dates.single | dateInterval:'mediumDate':'backward'}}`,
            localized: {
                fr_simple: `{{dates.multiple | dateInterval:'mediumDate':'forward':'fr-FR'}}`,
                ru_simple: `{{dates.multiple | dateInterval:'mediumDate':'forward':'ru-RU'}}`,
                ru_dateFormat: `{{dates.multiple | dateInterval:'dd MMMM y':'forward':'ru-RU'}}`
            }
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 60, vars: 36, consts: [[1, "main-wrapper"], [1, "example-card"], [3, "highlight"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "dateInterval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " pipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " With ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "dateInterval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "dateInterval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "dateInterval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "dateInterval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "dateInterval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "code", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "dateInterval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.demos.dates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.demos.single_options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](18, 13, ctx.dates.single, "mediumDate", "backward"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.demos.single);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 17, ctx.dates.single));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.demos.multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 19, ctx.dates.multiple));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.demos.localized.fr_simple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](42, 21, ctx.dates.multiple, "mediumDate", "forward", "fr-FR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.demos.localized.ru_simple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](50, 26, ctx.dates.multiple, "mediumDate", "forward", "ru-RU"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("highlight", ctx.demos.localized.ru_dateFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](58, 31, ctx.dates.multiple, "dd MMMM y", "forward", "ru-RU"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_2__["Highlight"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"]], pipes: [_ng_i18n_date_interval_src_lib_date_interval_pipe__WEBPACK_IMPORTED_MODULE_4__["DateIntervalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy1pMThuLWRhdGUtaW50ZXJ2YWwtc2hvd2Nhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_i18n_date_interval_src_lib_date_interval_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ng-i18n-date-interval/src/lib/date-interval.pipe */ "../ng-i18n-date-interval/src/lib/date-interval.pipe.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/fr */ "../../node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/ru */ "../../node_modules/@angular/common/locales/ru.js");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-highlightjs */ "../../node_modules/ngx-highlightjs/__ivy_ngcc__/fesm2015/ngx-highlightjs.js");












Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_4___default.a, 'fr-FR');
Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_5___default.a, 'ru-RU');
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__["HIGHLIGHT_OPTIONS"],
            useValue: {
                languages: {
                    typescript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-typescript */ "common").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/typescript */ "../../node_modules/highlight.js/lib/languages/typescript.js", 7)),
                    xml: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-xml */ "common").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/xml */ "../../node_modules/highlight.js/lib/languages/xml.js", 7))
                }
            }
        }
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__["HighlightModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _ng_i18n_date_interval_src_lib_date_interval_pipe__WEBPACK_IMPORTED_MODULE_2__["DateIntervalPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__["HighlightModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _ng_i18n_date_interval_src_lib_date_interval_pipe__WEBPACK_IMPORTED_MODULE_2__["DateIntervalPipe"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__["HighlightModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"]],
                providers: [
                    {
                        provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_10__["HIGHLIGHT_OPTIONS"],
                        useValue: {
                            languages: {
                                typescript: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-typescript */ "common").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/typescript */ "../../node_modules/highlight.js/lib/languages/typescript.js", 7)),
                                xml: () => __webpack_require__.e(/*! import() | highlight-js-lib-languages-xml */ "common").then(__webpack_require__.t.bind(null, /*! highlight.js/lib/languages/xml */ "../../node_modules/highlight.js/lib/languages/xml.js", 7))
                            }
                        }
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/lamabiker/ng-i18n-date-interval/projects/ng-i18n-date-interval-showcase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map