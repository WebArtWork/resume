webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page_container{\r\n\tdisplay: table-row;\r\n\twidth: 100%;\r\n}\r\n.page_scroll_container{\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.page_scroll{\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tleft: 0px;\r\n\ttop: 0px;\r\n\toverflow-y: auto;\r\n}\r\n.bottom_menu{\r\n\tdisplay: table-row;\t\r\n\twidth: 100%;\r\n\theight: 50px;\r\n\ttext-align: center;\r\n\tposition: relative;\r\n}\r\n.bottom_menu>a{\r\n\tpadding: 16px;\r\n\tdisplay: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page_container\">\r\n\t<div class=\"page_scroll_container\">\r\n\t\t<div class=\"page_scroll\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<div class=\"bottom_menu\">\r\n\t<a routerLink=\"/\">Explore</a>\r\n\t<a routerLink=\"/Tags\">Tags</a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routing_module__ = __webpack_require__("../../../../../src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vid_vid_module__ = __webpack_require__("../../../../../src/app/vid/vid.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tech_tech_module__ = __webpack_require__("../../../../../src/app/tech/tech.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_embed_video__ = __webpack_require__("../../../../ngx-embed-video/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_embed_video__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/* Youtube */


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_3__routing_module__["a" /* RoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__tech_tech_module__["a" /* TechModule */],
                __WEBPACK_IMPORTED_MODULE_4__vid_vid_module__["a" /* VidModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_7_ngx_embed_video__["EmbedVideo"].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vid_watch_watch_component__ = __webpack_require__("../../../../../src/app/vid/watch/watch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vid_tags_tags_component__ = __webpack_require__("../../../../../src/app/vid/tags/tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__vid_tag_tag_component__ = __webpack_require__("../../../../../src/app/vid/tag/tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vid_explore_explore_component__ = __webpack_require__("../../../../../src/app/vid/explore/explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tech_nointernet_nointernet_component__ = __webpack_require__("../../../../../src/app/tech/nointernet/nointernet.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var app_routing = [
    { path: 'Watch/:youtube_id', component: __WEBPACK_IMPORTED_MODULE_3__vid_watch_watch_component__["a" /* WatchComponent */] },
    { path: 'Tags', component: __WEBPACK_IMPORTED_MODULE_4__vid_tags_tags_component__["a" /* TagsComponent */] },
    { path: 'Tag/:tag_id', component: __WEBPACK_IMPORTED_MODULE_5__vid_tag_tag_component__["a" /* TagComponent */] },
    { path: 'Nointernet', component: __WEBPACK_IMPORTED_MODULE_7__tech_nointernet_nointernet_component__["a" /* NointernetComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__vid_explore_explore_component__["a" /* ExploreComponent */] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(app_routing)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]
            ],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/tech/nointernet/nointernet.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tech/nointernet/nointernet.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  nointernet works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/tech/nointernet/nointernet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NointernetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NointernetComponent = /** @class */ (function () {
    function NointernetComponent() {
    }
    NointernetComponent.prototype.ngOnInit = function () {
    };
    NointernetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nointernet',
            template: __webpack_require__("../../../../../src/app/tech/nointernet/nointernet.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tech/nointernet/nointernet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NointernetComponent);
    return NointernetComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tech/tech.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nointernet_nointernet_component__ = __webpack_require__("../../../../../src/app/tech/nointernet/nointernet.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TechModule = /** @class */ (function () {
    function TechModule() {
    }
    TechModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__nointernet_nointernet_component__["a" /* NointernetComponent */]]
        })
    ], TechModule);
    return TechModule;
}());



/***/ }),

/***/ "../../../../../src/app/vid/explore/explore.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".e_container{\r\n\twidth: 100%;\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n}\r\n.e_container>img{\r\n\twidth: 100%;\r\n}\r\n.e_container>h3{\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\ttop: 0px;\r\n\tbackground: white;\r\n    color: red;\r\n}\r\n@media screen and (orientation:landscape) {\r\n\t.e_container{\r\n\t\twidth: 49%;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vid/explore/explore.component.html":
/***/ (function(module, exports) {

module.exports = "<a *ngFor=\"let v of vid.vids;\" routerLink=\"/Watch/{{v.link}}\" class=\"e_container\">\r\n\t<h3>{{v.name}}</h3>\r\n\t<img src=\"https://img.youtube.com/vi/{{v.link}}/0.jpg\">\r\n</a>"

/***/ }),

/***/ "../../../../../src/app/vid/explore/explore.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExploreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vid_service__ = __webpack_require__("../../../../../src/app/vid/vid.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExploreComponent = /** @class */ (function () {
    function ExploreComponent(vid) {
        this.vid = vid;
    }
    ExploreComponent.prototype.ngOnInit = function () { };
    ExploreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__("../../../../../src/app/vid/explore/explore.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vid/explore/explore.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__vid_service__["a" /* VidService */]])
    ], ExploreComponent);
    return ExploreComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vid/tag/tag.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".t_container{\r\n\twidth: 100%;\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n}\r\n.t_container>img{\r\n\twidth: 100%;\r\n}\r\n.t_container>h3{\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\ttop: 0px;\r\n\tbackground: white;\r\n    color: grey;\r\n}\r\n@media screen and (orientation:landscape) {\r\n\t.t_container{\r\n\t\twidth: 49%;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vid/tag/tag.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"vid.tag\">\r\n\t<a *ngFor=\"let v of vid.tag.vids;\" routerLink=\"/Watch/{{v.link}}\" class=\"t_container\">\r\n\t\t<h3>{{v.name}}</h3>\r\n\t\t<img src=\"https://img.youtube.com/vi/{{v.link}}/0.jpg\">\r\n\t</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vid/tag/tag.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vid_service__ = __webpack_require__("../../../../../src/app/vid/vid.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagComponent = /** @class */ (function () {
    function TagComponent(vid) {
        this.vid = vid;
    }
    TagComponent.prototype.ngOnInit = function () { };
    TagComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tag',
            template: __webpack_require__("../../../../../src/app/vid/tag/tag.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vid/tag/tag.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__vid_service__["a" /* VidService */]])
    ], TagComponent);
    return TagComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vid/tags/tags.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ts_container{\r\n\twidth: 100%;\r\n\tdisplay: inline-block;\r\n\tposition: relative;\r\n}\r\n.ts_container>img{\r\n\twidth: 100%;\r\n}\r\n.ts_container>h3{\r\n\tposition: absolute;\r\n\tleft: 0px;\r\n\ttop: 0px;\r\n@media screen and (orientation:landscape) {\r\n\t.ts_container{\r\n\t\twidth: 49%;\r\n\t}\r\n}\r\n\tbackground: white;\r\n    color: blue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vid/tags/tags.component.html":
/***/ (function(module, exports) {

module.exports = "<a *ngFor=\"let tag of vid.tags;\" routerLink=\"/Tag/{{tag._id}}\" (click)=\"vid.tag=tag;\" class=\"ts_container\">\r\n\t<h3>{{tag.name}} ({{tag.vids.length}})</h3>\r\n\t<img src=\"https://img.youtube.com/vi/{{tag.vids[tag.rand].link}}/0.jpg\">\r\n</a>"

/***/ }),

/***/ "../../../../../src/app/vid/tags/tags.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vid_service__ = __webpack_require__("../../../../../src/app/vid/vid.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagsComponent = /** @class */ (function () {
    function TagsComponent(vid) {
        this.vid = vid;
    }
    TagsComponent.prototype.ngOnInit = function () { };
    TagsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tags',
            template: __webpack_require__("../../../../../src/app/vid/tags/tags.component.html"),
            styles: [__webpack_require__("../../../../../src/app/vid/tags/tags.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__vid_service__["a" /* VidService */]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/vid/vid.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VidModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__watch_watch_component__ = __webpack_require__("../../../../../src/app/vid/watch/watch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tags_tags_component__ = __webpack_require__("../../../../../src/app/vid/tags/tags.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tag_tag_component__ = __webpack_require__("../../../../../src/app/vid/tag/tag.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__explore_explore_component__ = __webpack_require__("../../../../../src/app/vid/explore/explore.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__vid_service__ = __webpack_require__("../../../../../src/app/vid/vid.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__routing_module__ = __webpack_require__("../../../../../src/app/routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var VidModule = /** @class */ (function () {
    function VidModule() {
    }
    VidModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_9__routing_module__["a" /* RoutingModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__vid_service__["a" /* VidService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__watch_watch_component__["a" /* WatchComponent */], __WEBPACK_IMPORTED_MODULE_5__tags_tags_component__["a" /* TagsComponent */], __WEBPACK_IMPORTED_MODULE_6__tag_tag_component__["a" /* TagComponent */], __WEBPACK_IMPORTED_MODULE_7__explore_explore_component__["a" /* ExploreComponent */]]
        })
    ], VidModule);
    return VidModule;
}());



/***/ }),

/***/ "../../../../../src/app/vid/vid.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VidService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VidService = /** @class */ (function () {
    function VidService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        http.get('https://webart.work/api/user/pre/youkids').subscribe(function (resp) {
            _this.tags = [];
            _this.vids = [];
            if (router.url.indexOf('/Tag/') == 0) {
                _this.select_tag = router.url.replace('/Tag/', '');
            }
            for (var i = 0; i < resp.length; i++) {
                var tag = {
                    _id: resp[i]._id,
                    name: resp[i].name,
                    vids: [],
                    rand: null
                };
                for (var j = 0; j < resp[i].prefixes.length; j++) {
                    var link = resp[i].data && resp[i].data[resp[i].prefixes[j]];
                    link = link && link.split('v=')[1] || link && link.split('v=')[0];
                    link = link && link.split('&')[0];
                    if (link && link.length == 11) {
                        var vid = {
                            name: resp[i].prefixes[j],
                            link: link
                        };
                        _this.vids.push(vid);
                        tag.vids.push(vid);
                    }
                }
                if (tag.vids.length > 0) {
                    tag.rand = Math.floor(Math.random() * tag.vids.length);
                    _this.tags.push(tag);
                    if (_this.select_tag && tag._id == _this.select_tag) {
                        _this.tag = tag;
                    }
                }
            }
            if (_this.select_tag && !_this.tag)
                router.navigate(['/Tags']);
        }, function (err) {
            router.navigate(['/Nointernet']);
        });
    }
    VidService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], VidService);
    return VidService;
}());



/***/ }),

/***/ "../../../../../src/app/vid/watch/watch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vid/watch/watch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_embed_video__ = __webpack_require__("../../../../ngx-embed-video/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_embed_video__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WatchComponent = /** @class */ (function () {
    function WatchComponent(router, embedService) {
        this.router = router;
        this.embedService = embedService;
        this.iframe_html = [];
        var self = this;
        var pushYoutube = function () {
            self.iframe_html.push(self.embedService.embed_youtube(self.url + '?rel=0&autoplay=1', {
                attr: {
                    height: window.innerHeight - 55,
                    width: window.innerWidth,
                    frameborder: "0",
                    allow: "autoplay; encrypted-media",
                    allowfullscreen: true
                }
            }));
        };
        this.onResize = function () {
            this.iframe_html.pop();
            pushYoutube();
        };
        this.url = router.url.split('?')[0].replace('/Watch/', '');
        if (this.url.length != 11)
            router.navigate(['/Explore']);
        pushYoutube();
    }
    WatchComponent.prototype.ngOnInit = function () { };
    WatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-watch',
            template: '<div [innerHtml]="iframe_html[0]"></div><span (window:resize)="onResize($event)"></span>',
            styles: [__webpack_require__("../../../../../src/app/vid/watch/watch.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_embed_video__["EmbedVideoService"]])
    ], WatchComponent);
    return WatchComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map