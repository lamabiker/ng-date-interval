(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkng_date_interval"] = self["webpackChunkng_date_interval"] || []).push([["main"], {
    /***/
    6372: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/card */
      2118);
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-highlightjs */
      4971);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/divider */
      1124);
      /* harmony import */


      var _ng_date_interval_src_lib_date_interval_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../ng-date-interval/src/lib/date-interval.pipe */
      6696);

      var datesStr = "{\n  single: [null, new Date()],\n  single_forward: [new Date(), null],\n  multiple: ['2001-01-01', '2002-12-12'],\n  sameYear: ['2001-01-01', '2001-03-06'],\n  sameMonth: ['2001-01-01', '2001-01-06'],\n};";

      var _AppComponent = function _AppComponent() {
        _classCallCheck(this, _AppComponent);

        this.title = 'ng-date-interval-showcase'; // Test subjects

        this.dates = {
          single: [null, new Date()],
          single_forward: [new Date(), null],
          multiple: ['2001-01-01', '2002-12-12'],
          sameYear: ['2001-01-01', '2001-03-06'],
          sameMonth: ['2001-01-01', '2001-01-06']
        };
        this.api = '{{ value_expression | dateInterval [ : format [ : locale ] ] ] }}'; // String demos

        this.demos = {
          dates: datesStr,
          single: '{{dates.single | dateInterval}}',
          multiple: '{{dates.multiple | dateInterval}}',
          sameYear: '{{dates.sameYear | dateInterval}}',
          sameMonth: '{{dates.sameMonth | dateInterval}}',
          single_forward: "{{dates.single_forward | dateInterval}}",
          localized: {
            fr_simple: "{{dates.multiple | dateInterval:'mediumDate':'fr-FR'}}",
            fr_sameMonth: "{{dates.sameMonth | dateInterval:'mediumDate':'fr-FR'}}",
            ru_simple: "{{dates.multiple | dateInterval:'mediumDate':'ru-RU'}}",
            ru_dateFormat: "{{dates.multiple | dateInterval:'dd MMMM y':'ru-RU'}}"
          }
        };
      };

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)();
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 96,
        vars: 46,
        consts: [[1, "main-wrapper"], [1, "example-card"], [3, "highlight"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "dateInterval");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " pipe");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "API");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Examples");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Component: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "dateInterval");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "dateInterval");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "dateInterval");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "dateInterval");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "dateInterval");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "dateInterval");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](78, "dateInterval");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](86, "dateInterval");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "code", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](94, "dateInterval");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.api);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.demos.dates);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.demos.single);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 20, ctx.dates.single));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.demos.single_forward);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 22, ctx.dates.single_forward));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.demos.multiple);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 24, ctx.dates.multiple));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.demos.sameYear);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 26, ctx.dates.sameYear));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.demos.sameMonth);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 28, ctx.dates.sameMonth));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.demos.localized.fr_simple);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](70, 30, ctx.dates.multiple, "mediumDate", "fr-FR"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.demos.localized.fr_sameMonth);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](78, 34, ctx.dates.sameMonth, "mediumDate", "fr-FR"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.demos.localized.ru_simple);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](86, 38, ctx.dates.multiple, "mediumDate", "ru-RU"));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", ctx.demos.localized.ru_dateFormat);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](94, 42, ctx.dates.multiple, "dd MMMM y", "ru-RU"));
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__.Highlight, _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__.MatDivider],
        pipes: [_ng_date_interval_src_lib_date_interval_pipe__WEBPACK_IMPORTED_MODULE_0__.DateIntervalPipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    7915: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var projects_ng_date_interval_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! projects/ng-date-interval/src/public-api */
      8665);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      6372);
      /* harmony import */


      var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/locales/fr */
      4062);
      /* harmony import */


      var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/locales/ru */
      8647);
      /* harmony import */


      var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      718);
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      2118);
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/divider */
      1124);
      /* harmony import */


      var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-highlightjs */
      4971);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      (0, _angular_common__WEBPACK_IMPORTED_MODULE_4__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_2___default(), 'fr-FR');
      (0, _angular_common__WEBPACK_IMPORTED_MODULE_4__.registerLocaleData)(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_3___default(), 'ru-RU');

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        providers: [{
          provide: ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__.HIGHLIGHT_OPTIONS,
          useValue: {
            coreLibraryLoader: function coreLibraryLoader() {
              return __webpack_require__.e(
              /*! import() */
              "node_modules_highlight_js_lib_core_js").then(__webpack_require__.t.bind(__webpack_require__,
              /*! highlight.js/lib/core */
              330, 23));
            },
            languages: {
              typescript: function typescript() {
                return __webpack_require__.e(
                /*! import() */
                "node_modules_highlight_js_lib_languages_typescript_js").then(__webpack_require__.t.bind(__webpack_require__,
                /*! highlight.js/lib/languages/typescript */
                9783, 23));
              },
              xml: function xml() {
                return __webpack_require__.e(
                /*! import() */
                "node_modules_highlight_js_lib_languages_xml_js").then(__webpack_require__.t.bind(__webpack_require__,
                /*! highlight.js/lib/languages/xml */
                5498, 23));
              }
            }
          }
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.NoopAnimationsModule, projects_ng_date_interval_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgDateIntervalModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__.HighlightModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.NoopAnimationsModule, projects_ng_date_interval_src_public_api__WEBPACK_IMPORTED_MODULE_0__.NgDateIntervalModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__.HighlightModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDividerModule]
        });
      })();
      /***/

    },

    /***/
    7930: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    7235: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      1570);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      7915);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      7930);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    2365: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./en.json */
      9270);
      /* harmony import */


      var _fr_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./fr.json */
      874);
      /* harmony import */


      var _ru_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ru.json */
      1934);
      /* harmony default export */


      __webpack_exports__["default"] = {
        en: _en_json__WEBPACK_IMPORTED_MODULE_0__,
        fr: _fr_json__WEBPACK_IMPORTED_MODULE_1__,
        ru: _ru_json__WEBPACK_IMPORTED_MODULE_2__
      };
      /***/
    },

    /***/
    6696: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DateIntervalPipe": function DateIntervalPipe() {
          return (
            /* binding */
            _DateIntervalPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      4364);
      /* harmony import */


      var _langs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../langs */
      2365);

      var defaultDateFormat = 'mediumDate';

      var _DateIntervalPipe = /*#__PURE__*/function () {
        function _DateIntervalPipe(locale) {
          _classCallCheck(this, _DateIntervalPipe);

          this.locale = locale;
        }

        _createClass(_DateIntervalPipe, [{
          key: "transform",
          value: function transform(input) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDateFormat;
            var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.locale;

            if (!input) {
              return '';
            } // Set class properties


            this.format = format;
            this.locale = locale; // Make sure the input isn't longer than 2 elements

            this.normalizedInput = input.slice(0, 2);

            var _this$normalizedInput = this.normalizedInput.map(this.formatDates.bind(this)),
                _this$normalizedInput2 = _slicedToArray(_this$normalizedInput, 2),
                startDate = _this$normalizedInput2[0],
                endDate = _this$normalizedInput2[1]; // If the specified format omits the days, but the interval is within
            // the same month and year, return the formatted end date only


            if (this.isSameYear && this.isSameMonth && !this.showDay) {
              return endDate;
            }

            if (!startDate && !endDate) {
              return '';
            }

            return this.interpolate(this.sentence, {
              startDate: startDate,
              endDate: endDate
            });
          }
        }, {
          key: "formatDates",
          value: function formatDates(item, index) {
            if (!item) {
              return null;
            }

            if (this.isSameYear && index === 0) {
              var format = this.format === 'mediumDate' ? 'MMM d, y' : this.format;
              format = this.removeDateFragment(format, 'y');

              if (this.isSameMonth) {
                format = this.removeDateFragment(format, 'm');
              }

              return (0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(item, format, this.locale);
            }

            return (0, _angular_common__WEBPACK_IMPORTED_MODULE_1__.formatDate)(item, this.format, this.locale);
          }
        }, {
          key: "interpolate",
          value: function interpolate(str, args) {
            for (var _i2 = 0, _Object$keys = Object.keys(args); _i2 < _Object$keys.length; _i2++) {
              var arg = _Object$keys[_i2];
              var regEx = new RegExp("{".concat(arg, "}"), 'g');
              str = str.replace(regEx, args[arg]);
            }

            return str;
          }
        }, {
          key: "removeDateFragment",
          value: function removeDateFragment(str, key) {
            var keyRegExp = new RegExp("".concat(key), 'gi');
            return str = str.replace(keyRegExp, '').trim().replace(/^,+/, '').replace(/,+$/, '');
          } // GETTERS

        }, {
          key: "isSameYear",
          get: function get() {
            var date1 = this.normalizedInput[0];
            var date2 = this.normalizedInput[1];

            if (!date1 || !date2) {
              return false;
            }

            var year1 = new Date(date1).getFullYear();
            var year2 = new Date(date2).getFullYear();
            return year1 === year2;
          }
        }, {
          key: "isSameMonth",
          get: function get() {
            var date1 = this.normalizedInput[0];
            var date2 = this.normalizedInput[1];
            var month1 = new Date(date1).getMonth();
            var month2 = new Date(date2).getMonth();
            return month1 === month2;
          }
        }, {
          key: "showDay",
          get: function get() {
            return this.format.toLowerCase().indexOf('d') > -1;
          }
        }, {
          key: "sentence",
          get: function get() {
            var type = 'default';

            if (!this.normalizedInput[0]) {
              type = 'backward';
            }

            if (!this.normalizedInput[1]) {
              type = 'forward';
            }

            return _langs__WEBPACK_IMPORTED_MODULE_0__["default"][this.locale.substring(0, 2)][type]; // ex: sentences.en.default
          }
        }]);

        return _DateIntervalPipe;
      }();

      _DateIntervalPipe.ɵfac = function DateIntervalPipe_Factory(t) {
        return new (t || _DateIntervalPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID, 16));
      };

      _DateIntervalPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({
        name: "dateInterval",
        type: _DateIntervalPipe,
        pure: true
      });
      /***/
    },

    /***/
    2145: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgDateIntervalModule": function NgDateIntervalModule() {
          return (
            /* binding */
            _NgDateIntervalModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _date_interval_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./date-interval.pipe */
      6696);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _NgDateIntervalModule = function _NgDateIntervalModule() {
        _classCallCheck(this, _NgDateIntervalModule);
      };

      _NgDateIntervalModule.ɵfac = function NgDateIntervalModule_Factory(t) {
        return new (t || _NgDateIntervalModule)();
      };

      _NgDateIntervalModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _NgDateIntervalModule
      });
      _NgDateIntervalModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_NgDateIntervalModule, {
          declarations: [_date_interval_pipe__WEBPACK_IMPORTED_MODULE_0__.DateIntervalPipe],
          exports: [_date_interval_pipe__WEBPACK_IMPORTED_MODULE_0__.DateIntervalPipe]
        });
      })();
      /***/

    },

    /***/
    8665: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgDateIntervalModule": function NgDateIntervalModule() {
          return (
            /* reexport safe */
            _lib_ng_date_interval_module__WEBPACK_IMPORTED_MODULE_0__.NgDateIntervalModule
          );
        },

        /* harmony export */
        "DateIntervalPipe": function DateIntervalPipe() {
          return (
            /* reexport safe */
            _lib_date_interval_pipe__WEBPACK_IMPORTED_MODULE_1__.DateIntervalPipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _lib_ng_date_interval_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/ng-date-interval.module */
      2145);
      /* harmony import */


      var _lib_date_interval_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/date-interval.pipe */
      6696);
      /*
       * Public API Surface of ng-date-interval
       */

      /***/

    },

    /***/
    1410: function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 1410;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    9270: function _(module) {
      "use strict";

      module.exports = JSON.parse('{"default":"From {startDate} to {endDate}","forward":"Since {startDate}","backward":"Until {endDate}"}');
      /***/
    },

    /***/
    874: function _(module) {
      "use strict";

      module.exports = JSON.parse('{"default":"Du {startDate} au {endDate}","forward":"Depuis {startDate}","backward":"Jusqu\'au {endDate}"}');
      /***/
    },

    /***/
    1934: function _(module) {
      "use strict";

      module.exports = JSON.parse('{"default":"С {startDate} до {endDate}","forward":"С {startDate}","backward":"До {endDate}"}');
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(7235);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map