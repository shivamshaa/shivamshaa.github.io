(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"jumbotron\">\n      <div class=\"row\">\n      <div class=\"col-md-4\">\n      <img src=\"assets/hotelview1.jpg\" alt=\"hv\"></div>\n      <div class=\"col-md-7\">\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae enim reiciendis modi doloribus. Omnis voluptates officiis, cupiditate quo, laudantium fugit et vel soluta modi deserunt beatae. Commodi, nisi beatae.</p>\n   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ab quas fuga consectetur vitae qui ipsum blanditiis deleniti aspernatur, dolore eligendi amet dolor illo nobis? Sint optio itaque laudantium rerum.</p>\n    </div></div></div>\n    <div class=\"jumbotron\">\n        <div class=\"row\">\n        <div class=\"col-md-4\">\n        <img src=\"assets/hotelview1.jpg\" alt=\"hv\"></div>\n        <div class=\"col-md-7\">\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae enim reiciendis modi doloribus. Omnis voluptates officiis, cupiditate quo, laudantium fugit et vel soluta modi deserunt beatae. Commodi, nisi beatae.</p>\n     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ab quas fuga consectetur vitae qui ipsum blanditiis deleniti aspernatur, dolore eligendi amet dolor illo nobis? Sint optio itaque laudantium rerum.</p>\n      </div></div></div>\n      <div class=\"jumbotron\">\n          <div class=\"row\">\n          <div class=\"col-md-4\">\n          <img src=\"assets/hotelview1.jpg\" alt=\"hv\"></div>\n          <div class=\"col-md-7\">\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae enim reiciendis modi doloribus. Omnis voluptates officiis, cupiditate quo, laudantium fugit et vel soluta modi deserunt beatae. Commodi, nisi beatae.</p>\n       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ab quas fuga consectetur vitae qui ipsum blanditiis deleniti aspernatur, dolore eligendi amet dolor illo nobis? Sint optio itaque laudantium rerum.</p>\n        </div></div></div>\n        <div class=\"jumbotron\">\n            <div class=\"row\">\n            <div class=\"col-md-4\">\n            <img src=\"assets/hotelview1.jpg\" alt=\"hv\"></div>\n            <div class=\"col-md-7\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae enim reiciendis modi doloribus. Omnis voluptates officiis, cupiditate quo, laudantium fugit et vel soluta modi deserunt beatae. Commodi, nisi beatae.</p>\n         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ab quas fuga consectetur vitae qui ipsum blanditiis deleniti aspernatur, dolore eligendi amet dolor illo nobis? Sint optio itaque laudantium rerum.</p>\n          </div></div></div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adminpanel/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adminpanel/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-13\">\n    <table class=\"table table-bordered table-striped\">\n    <th>N A M E</th>\n    <th>A G E</th>\n    <th>E M A I L</th>\n    <th>N U M B E R</th>\n    <th>G U E S T S</th>\n    <th>R O O M S</th>\n    <th>T Y P E</th>\n    <!-- <th>C H E C K - I N</th>\n    <th>C H E C K - O U T</th> -->\n    <th>E D I T</th>\n    <th>D E L E T E</th>\n    <tr *ngFor=\"let book of bookings\">\n        <td>{{book.name}}</td>\n        <td>{{book.age}}</td>\n        <td>{{book.email}}</td>\n        <td>{{book.number}}</td>\n        <td>{{book.guests}}</td>\n        <td>{{book.rooms}}</td>\n        <td>{{book.type}}</td>\n        <!-- <td>{{book.checkin.toDate()|date}}</td>\n        <td>{{book.checkout}}</td> -->\n        <td><a href=\"\" (click)=\"edit(book)\"><i class=\"fa fa-edit\"></i></a></td>\n        <td><a href=\"\"(click)=\"delete(book.id)\"><i class=\"fa fa-trash\"></i></a>\n        </td>\n\n   \n\n    \n\n    </tr>\n</table> </div>\n     \n<div class=\"logout\">\n    <button class=\"btn btn-outline-warning\" value=\"L O G O U T\" (click)=\"logout()\">L O G O U T</button>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adminpanel/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adminpanel/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper fadeIn \">\r\n   \r\n        <div id=\"formContent\">\r\n          <!-- Tabs Titles -->\r\n      \r\n          <!-- Icon -->\r\n          <label for=\"\">A D M I N &nbsp;L O G I N </label>\r\n      \r\n          <!-- Login Form -->\r\n          <form class=\"form\" (ngSubmit)=\"login(data)\" #data=ngForm>\r\n            <input type=\"text\" id=\"login\" class=\"fadeIn second\" name=\"userid\"  placeholder=\"U S E R I D \" [(ngModel)]=\"uid\">\r\n            <input type=\"password\" id=\"password\" class=\"fadeIn third\" name=\"password\" placeholder=\"P A S S W O R D\" [(ngModel)]=\"pass\">\r\n            <input type=\"submit\" class=\"fadeIn fourth\" value=\"L O G&nbsp; I N \">\r\n          </form>\r\n      \r\n          <!-- Remind Passowrd -->\r\n         \r\n      \r\n        </div>\r\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"header fadeIn\">\n      <h1>L  E  T  '  S &nbsp; T  A  L  K  !</h1>\n    </div>\n    <div>\n        <h2>M E E T &nbsp; U S</h2>\n        <hr>\n    </div>\n    <div class=\"details\">\n        <h3><i class=\"fas fa-envelope\"></i>&nbsp;shaagupta04@gmail.com</h3>\n        <h3><i class=\"fas fa-phone\"></i>&nbsp;+91 9711168491</h3>\n        <h3><i class=\"fas fa-location-arrow\"></i>&nbsp;Metro Station Rd, Sector 21, Dwarka, New Delhi, Delhi 110075</h3>\n\n    </div>\n    <div>\n        <br><br>\n        <h2>L O C A T I O N</h2>\n        <hr>\n    </div>\n    <div>\n            <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.389347752235!2d77.06058511478098!3d28.558068982447256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b07258b26f1%3A0xdb069b2f46a6e90e!2sVivanta%20New%20Delhi%2C%20Dwarka!5e0!3m2!1sen!2sin!4v1566841756342!5m2!1sen!2sin\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/events/events.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/events/events.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>events works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/food/food.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/food/food.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>\n        Experience The Finest Cuisines From Our World Class Chefs\n    </h1>\n        <div class=\"jumbotron\">\n          <div class=\"row\">\n          <div class=\"col-md-4\">\n          <img src=\"assets/food1.jpg\" alt=\"hv\"></div>\n          <div class=\"col-md-7\">\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae enim reiciendis modi doloribus. Omnis voluptates officiis, cupiditate quo, laudantium fugit et vel soluta modi deserunt beatae. Commodi, nisi beatae.</p>\n       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ab quas fuga consectetur vitae qui ipsum blanditiis deleniti aspernatur, dolore eligendi amet dolor illo nobis? Sint optio itaque laudantium rerum.</p>\n        </div></div></div>\n        <div class=\"jumbotron\">\n            <div class=\"row\">\n            <div class=\"col-md-4\">\n            <img src=\"assets/food2.jpg\" alt=\"hv\"></div>\n            <div class=\"col-md-7\">\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae enim reiciendis modi doloribus. Omnis voluptates officiis, cupiditate quo, laudantium fugit et vel soluta modi deserunt beatae. Commodi, nisi beatae.</p>\n         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ab quas fuga consectetur vitae qui ipsum blanditiis deleniti aspernatur, dolore eligendi amet dolor illo nobis? Sint optio itaque laudantium rerum.</p>\n          </div></div></div>\n          <div class=\"jumbotron\">\n              <div class=\"row\">\n              <div class=\"col-md-4\">\n              <img src=\"assets/food3.jpg\" alt=\"hv\"></div>\n                  <div class=\"col-md-7\">\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae enim reiciendis modi doloribus. Omnis voluptates officiis, cupiditate quo, laudantium fugit et vel soluta modi deserunt beatae. Commodi, nisi beatae.</p>\n           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ab quas fuga consectetur vitae qui ipsum blanditiis deleniti aspernatur, dolore eligendi amet dolor illo nobis? Sint optio itaque laudantium rerum.</p>\n            </div></div></div>\n            <div class=\"jumbotron\">\n                <div class=\"row\">\n                <div class=\"col-md-4\">\n                <img src=\"assets/food3.png\" alt=\"hv\"></div>\n                <div class=\"col-md-7\">\n                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestiae enim reiciendis modi doloribus. Omnis voluptates officiis, cupiditate quo, laudantium fugit et vel soluta modi deserunt beatae. Commodi, nisi beatae.</p>\n             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum ab quas fuga consectetur vitae qui ipsum blanditiis deleniti aspernatur, dolore eligendi amet dolor illo nobis? Sint optio itaque laudantium rerum.</p>\n              </div></div></div>\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"copy\">\n <a href=\"\"> Copyright © 2019 shaAzee™ a division of WasGaming&nbsp;&nbsp;</a></div>\n  <div class=\"partners\">\n   <a href=\"\">Terms&nbsp;&nbsp;</a>\n  </div>\n  <div class=\"privacy\">\n    <a href=\"\">Privacy</a>\n  </div>\n  <div class=\"adminlogin\">\n      <button class=\"btn btn-outline-warning btn-sm\" routerLink=\"/login\">Admin Login</button>\n  </div>\n</div>\n    <!-- <div class=\"newsletter\">\n      <h4>Subscribe to our Newsletter</h4>\n      <p>Be the first to receive exclusive offers and the latest news across all The LaLit Hotels, Palaces & Resorts directly in your inbox.</p>\n      <input type=\"email\" placeholder=\"Email Address\" class=\"form-control\">\n    </div>\n    <div class=\"butn\">\n      <button type=\"button\" class=\"btn btn-outline-danger\">SIGN UP</button>\n  \n    </div> -->\n    <!-- <div class=\"footercon\">\n    <div class=\"help\">\n      <label for=\"\">Help</label>\n          <a href=\"#\"><br>\n        Contact us\n      </a>\n      <a href=\"#\"><br>\n        FAQs\n      </a>\n      <a href=\"#\"><br>\n        Privacy Policy\n      </a>\n      <a href=\"#\"><br>\n       Cookie Policy\n      </a>\n    </div>\n  \n  \n    <div class=\"partners\">\n        <label for=\"\">Our Partners</label>\n            <a href=\"#\"><br>\n          Partner 1\n        </a>\n        <a href=\"#\"><br>\n          Partner 2      </a>\n        <a href=\"#\"><br>\n          Partner 3\n        </a>\n        <a href=\"#\"><br>\n          Partner 4\n        </a>\n    \n      </div>\n      <div class=\"product\">\n        <label for=\"\">Our Products</label>\n            <a href=\"#\"><br>\n          Product 1\n        </a>\n        <a href=\"#\"><br>\n          Product 2      </a>\n        <a href=\"#\"><br>\n          Product 3\n        </a>\n        <a href=\"#\"><br>\n          Product 4\n        </a>\n    \n      </div>\n    <div class=\"adminlogin\">\n        <button class=\"btn btn-danger\" routerLink=\"/login\">Admin Login</button>\n    </div>\n    \n    </div>\n  \n  \n  </div>\n  <p>Copyright by shaA 2020</p> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms/forms.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms/forms.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header \">\n  <h4 class=\"modal-title pull-left\" style=\"color: rgb(134, 108, 36);\">B O O K&nbsp; A&nbsp; S T A Y </h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<form action=\"\" (ngSubmit)=\"submit(data)\" #data=ngForm>\n<div class=\"modal-body\" >\n  <label for=\"\" >N A M E :</label>\n  <input type=\"text\" name=\"name\" class=\"form-control\" #ename=ngModel minlength=\"3\" [(ngModel)]=\"guest.name\" required>\n  <span [class.error]=\"ename.invalid && ename.touched\"*ngIf=\"ename.invalid && ename.touched\">*Name Required/Invalid</span>\n <br> <label for=\"\">E M A I L :</label>\n  <input type=\"email\" name=\"email\"  #eemail=ngModel   class=\"form-control\" [(ngModel)]=\"guest.email\" required>\n  <span [class.error]=\"eemail.invalid && eemail.touched\"*ngIf=\"eemail.invalid && eemail.touched\">*Email Required/Invalid</span>\n  <br> <label for=\"\">A G E : </label>\n  <input type=\"number\" name=\"age\" #eage=ngModel class=\"form-control\" [(ngModel)]=\"guest.age\" required>\n  <span [class.error]=\"eage.invalid && eage.touched\"*ngIf=\"eage.invalid && eage.touched\">*Age Required</span>\n \n \n  <br> <label for=\"\">P H O N E :</label>\n  <input type=\"tel\" name=\"number\" #enum=ngModel minlength=\"10\" maxlength=\"10\" class=\"form-control\" [(ngModel)]=\"guest.phone\" required>\n  <span [class.error]=\"enum.invalid && enum.touched\"*ngIf=\"enum.invalid && enum.touched\">*Phone Required/Invalid</span>\n\n  <br><label for=\"\">G U E S T S :</label>\n  <input type=\"number\" #eguest=ngModel name=\"guests\" minlength=\"1\" class=\"form-control\"[(ngModel)]=\"guest.guests\" required>\n  <span [class.error]=\"eguest.invalid && eguest.touched\"*ngIf=\"eguest.invalid && eguest.touched\">*Guests Required/Invalid</span>\n \n \n  <br><label for=\"\">R O O M S :</label>\n  <input type=\"number\" name=\"rooms\" #eroom=ngModel minlength=\"1\" class=\"form-control\" [(ngModel)]=\"guest.rooms\" required>\n  <span [class.error]=\"eroom.invalid && eroom.touched\"*ngIf=\"eroom.invalid && eroom.touched\">*Rooms Required/Invalid</span>\n  \n  <br><label for=\"\">T Y P E : </label>\n  <select name=\"type\" id=\"\" #etype=ngModel class=\"form-control\"[(ngModel)]=\"guest.type\" required>\n      <option value=\"\">S E L E C T</option>\n\n    <option value=\"deluxe\">D E L U X E</option>\n    <option value=\"super deluxe\">S U P E R   D E L U X E</option>\n    <option value=\"tower room\">T O W E R   R O O M  </option>\n    <option value=\"suite\">S U I T E</option>\n  </select>\n  <span [class.error]=\"etype.invalid && etype.touched\"*ngIf=\"etype.invalid && etype.touched\">*Type Required/Invalid</span>\n\n  <br><label for=\"\">C H E C K - I N :</label>\n  <input type=\"date\" name=\"checkin\" class=\"form-control\"[(ngModel)]=\"guest.checkin\" >\n  <br><label for=\"\">C H E C K - O U T </label>\n<input type=\"date\" name=\"checkout\" class=\"form-control\" [(ngModel)]=\"guest.checkout\">\n  <input type=\"submit\"  value=\"B O O K\" [disabled]=!data.valid class=\"btn btn-outline-light  btn-lg\"\n    style=\" background-image: linear-gradient(rgb(211, 157, 8),rgb(209, 157, 14) ); margin-left: 170px; margin-top: 20px; padding: 5px 25px 5px 25px; color: beige; font-weight: bold\">\n</div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/gallery/gallery.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gall\">\n    <h1>\n        Discover the luxury with The Fancy Name Hotel\n    </h1>\n    <div class=\"jumbotron\">\n    <h2>\n        HOTEL VIEWS\n    </h2>\n    <img src=\"assets/hotelview1.jpg\" alt=\"Hotel View \"  >\n    <img src=\"assets/hotelview2.jpg\" alt=\"Hotel View\">\n</div>\n<div class=\"jumbotron\">\n    <h2>\n        SUITES\n    </h2>\n    <img src=\"assets/hotelsuits1.jpg\" alt=\"Executive\">\n    <img src=\"assets/hotelsuits2.jpg\" alt=\"suites\">\n    <img src=\"assets/hotelsuits3.jpg\" alt=\"Executive\">\n</div>\n<div class=\"jumbotron\">\n<h2>\n        DINING\n    </h2>\n    <img src=\"assets/dining1.jpg\" alt=\"dining\">\n    <img src=\"assets/dining2.jpg\" alt=\"dining\">\n</div>\n<div class=\"jumbotron\">\n<h2>\n        FOOD\n    </h2>\n    <img src=\"assets/food1.jpg\" alt=\"food\">\n    <img src=\"assets/food2.jpg\" alt=\"food\">\n    <img src=\"assets/food3.jpg\" alt=\"food\">\n    <img src=\"assets/food3.png\" alt=\"food\">\n</div>\n<div class=\"jumbotron\">\n<h2>\n        EVENTS & MEETINGS\n\n    </h2>\n    <img src=\"assets/events1.jpg\" alt=\"events\">\n    <img src=\"assets/events2.jpg\" alt=\"events\">\n    </div>\n    <div class=\"jumbotron\">\n    <h2>\n        HOTEL SPA\n    </h2>\n    <img src=\"assets/hotelspa1.jpg\" alt=\"spa\">\n    <img src=\"assets/hotelspa2.jpg\" alt=\"spa\">\n    </div>\n\n\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n    <a href=\"\" > <h1>F A N C Y N A M E </h1> </a>\n    \n     <a href=\"\" class=\"aa\"><i class=\"fas fa-hotel\">&nbsp;</i>H O M E</a>\n        <a href=\"#\"class=\"aa\" routerLink=\"/about\"><i class=\"fas fa-address-card\"></i>&nbsp;A B O U T</a> \n  \n     <a href=\"#\"class=\"aa\" routerLink=\"/gallery\"><i class=\"fas fa-images\"></i>&nbsp;G A L L E R Y</a>\n     <a href=\"#\"class=\"aa\" routerLink=\"/food\"><i class=\"fas fa-hamburger\"></i>&nbsp;F O O D</a>\n     <a href=\"#\"class=\"aa\" routerLink=\"/ratings\"><i class=\"fas fa-star\"></i>&nbsp;R A T I N G S</a>\n     <a href=\"#\"class=\"aa\" routerLink=\"/contact\"><i class=\"fas fa-phone-square\"></i>&nbsp;C O N T A C T</a>\n     <a href=\"#\"class=\"aa\" routerLink=\"/events\"><i class=\"fas fa-calendar-plus\"></i>&nbsp;E V E N T S</a>\n     <button class=\"btn \" (click)=\"bookaStay()\" data-toggle=\"modal\" data-target=\"#exampleModalLong\">BOOK A STAY</button>\n  \n  </nav>\n  \n  \n  \n  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n\n<a class=\"weatherwidget-io\" href=\"https://forecast7.com/en/28d6677d23/delhi/\" data-label_1=\"DELHI\" data-label_2=\"WEATHER\" data-icons=\"Climacons Animated\" data-theme=\"beige\" data-basecolor=\"#f8f6f0\" data-textcolor=\"#775511\" data-highcolor=\"#86580b\" data-lowcolor=\"#366397\" data-suncolor=\"#bd711a\" data-mooncolor=\"#2e2e2b\" data-cloudcolor=\"#fbd33f\" data-raincolor=\"#35a5c0\" >DELHI WEATHER</a>\n<script>\n!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');\n</script>\n\n\n\n<div class=\"container\">\n   \n  <carousel>\n\n\n    <slide class=\"img-car\">\n      <a href=\"#\"> <img src=\"assets/hotel.jpg\" alt=\"first slide\" style=\"display: block; width: 100%; height: 500px;\">\n      </a>\n    </slide>\n    <!-- <slide class=\"img-car\">\n            <img src=\"https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168_960_720.jpg\" alt=\"second slide\" style=\"display: block; width: 100%;\">\n          </slide> \n          <slide class=\"img-car\">\n            <img src=\"https://cdn.pixabay.com/photo/2015/01/10/11/39/hotel-595121_960_720.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n          </slide> -->\n    <!-- <slide class=\"img-car\">\n          <img src=\"../home/assets/nigh hotel.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n        </slide> -->\n    <!-- <slide class=\"img-car\">\n            <img src=\"https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201_960_720.jpg\" alt=\"third slide\" style=\"display: block; width: 100%;\">\n          </slide> -->\n    <!-- <div class=\"centext\">\n              <h1>M o n s o o n S p e  c i a l </h1>\n              <div class=\"txtbx\">\n                20% OFF ON STAY\n              </div>\n              </div> -->\n\n\n  </carousel></div>\n  <div class=\"container1\">\n    <h1> <b>Welcome To The Fancy Name Hotel</b> </h1> <br>\n    <p>This boutique luxury 5 star hotel offers services designed to captivate the guests. Dining at the Club House\n      Restaurant is an exquisite experience of Greek and Mediterranean cuisine, while Maya Restaurant offers creative\n      Asian cuisine on the beachfront. If the guests prefer the privacy of their own villas, the in-villa dining service\n      becomes an exclusive culinary journey.\n\n      Guests can relax by their own private pool, or spend their day at the private sandy beach, making the most out of\n      their vacation. A state-of-the-art Gym by Technogym® is available as well at this luxury villa resort, as well as\n      a variety of Watersports for guests of all ages. The resort’s Spa therapists are at the guests’ service to provide\n      them with rejuvenating health and beauty treatments at the Waterfront Spa situated right above the water. VIP and\n      security services are at the guests’ disposal, as well as chauffer or secretarial services, or even their own\n      private chef.\n    </p>\n    <p>Should guests wish to try something different, Porto Zante staff can always organize a variety of outdoor\n      activities. Horse riding, scuba diving, a helicopter ride over the island or even a private boat excursion to the\n      Shipwreck (Navagio) Beach and the Blue Caves, are among the activities guests can enjoy in Porto Zante. An\n      exploration of the island of Zakynthos, or of the vibrant nightlife of its capital can also be arranged. </p>\n  </div>\n\n  <br>\n  <div class=\"container2\">\n    <h1> <b>F A C I L I T I E S </b></h1>\n  </div>\n  <!-- <br> -->\n  <div class=\"container3\">\n    <div class=\"box\">\n      <div class=\"boxContent\">\n        <i class=\"fa fa-utensils icon\"></i>\n        <h1 class=\"title\">F O O D </h1>\n        <p class=\"desc\">A ‘Responsible Luxury’ ethos underscores FancyName Hotels culinary brands and initiatives to\n          present innovative luxury dining experiences without compromising the globe.</p>\n      </div>\n      <a href=\"#\"></a>\n    </div>\n    <div class=\"box\">\n      <div class=\"boxContent\">\n        <i class=\"fa fa-concierge-bell icon\"></i>\n        <h1 class=\"title\">S E R V I C E</h1>\n        <p class=\"desc\">No matter the purpose of your visit, feeling comfortable in your room, having the right\n          surroundings to relax and reload is utmost important. Feel free to use our 24 X 7 services.</p>\n      </div>\n      <a href=\"#\"></a>\n    </div>\n    <div class=\"box\">\n      <div class=\"boxContent\">\n        <i class=\"fa fa-skating icon\"></i>\n        <h1 class=\"title\">A C T I V I T Y</h1>\n        <p class=\"desc\">Less unicorn and apart and credibly yikes touched much jeez that so reverent the by a as that\n          kiwi fed wherever more aboard.</p>\n      </div>\n      <a href=\"#\"></a>\n    </div>\n  </div>\n  <br>\n  <div class=\"container\">\n  <div class=\"container4\">\n    <h1> <b>R O O M S</b></h1>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-4 \">\n       <img src=\"assets/bedroom1.jpg\" alt=\"\">\n       <h3>D E L U X E</h3>\n       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque repudiandae vero itaque dolore laudantium possimus quaerat. Exercitationem neque doloribus hic veniam itaque sit amet cumque.</p>\n        <p>R s . 5 0 0  0 </p>\n       <button class=\"btn \"(click)=\"bookaStay()\" >BOOK</button>\n      </div>\n      <div class=\"col-md-4\">\n          <img src=\"assets/bedroom2.jpg\" alt=\"\">\n          <h3>S U P E R &nbsp; D E L U X E</h3>\n       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate nihil accusantium beatae, reprehenderit voluptas cum fuga dolore ducimus nesciunt laborum laudantium sapiente ipsam fugiat!</p>\n       <p>R s . 7 0 0 0 </p>\n       <button class=\"btn \"(click)=\"bookaStay()\" >BOOK</button>\n        </div>\n        <div class=\"col-md-4\">\n            <img src=\"assets/bedroom3.jpg\" alt=\"\">\n            <h3>S U I T E </h3>\n       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quis amet numquam saepe, fugiat, eius alias voluptates mollitia sapiente, recusandae sit temporibus consectetur eos.</p>\n       <p>R s . 1 0 0 0 0</p>\n       <button class=\"btn btn-sm btn-outline-warning\" (click)=\"bookaStay()\">BOOK</button>\n          </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ratings/ratings.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ratings/ratings.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>ratings works!</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 20px;\r\n  \r\n}\r\n.jumbotron{\r\n    background-color: rgb(235, 172, 38);\r\n    -webkit-box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -moz-box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    opacity: 1;\r\n    \r\n    \r\n}\r\nimg{\r\n    opacity: 1;\r\n    display: flex;\r\n    padding: 10px 5px 15px 5px;\r\n    width: 360px;\r\n    height: 240px;\r\n    \r\n}\r\np{\r\n    padding: 10px 5px 15px 5px;\r\n    color: rgb(70, 23, 2);\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxxRkFBcUY7SUFDckYsa0ZBQWtGO0lBQ2xGLFVBQVU7OztBQUdkO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osYUFBYTs7QUFFakI7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7O0FBRXpCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIFxyXG59XHJcbi5qdW1ib3Ryb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAxNzIsIDM4KTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuaW1ne1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxNXB4IDVweDtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICBcclxufVxyXG5we1xyXG4gICAgcGFkZGluZzogMTBweCA1cHggMTVweCA1cHg7XHJcbiAgICBjb2xvcjogcmdiKDcwLCAyMywgMik7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/adminpanel/Gaurds/auth.guard.ts":
/*!*************************************************!*\
  !*** ./src/app/adminpanel/Gaurds/auth.guard.ts ***!
  \*************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/adminpanel/shared/auth.service.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_auth) {
        this._auth = _auth;
    }
    AuthGuard.prototype.canActivate = function () {
        return this._auth.getLogin();
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/adminpanel/adminpanel.module.ts":
/*!*************************************************!*\
  !*** ./src/app/adminpanel/adminpanel.module.ts ***!
  \*************************************************/
/*! exports provided: AdminpanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpanelModule", function() { return AdminpanelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/adminpanel/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/adminpanel/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var AdminpanelModule = /** @class */ (function () {
    function AdminpanelModule() {
    }
    AdminpanelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], AdminpanelModule);
    return AdminpanelModule;
}());



/***/ }),

/***/ "./src/app/adminpanel/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/adminpanel/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nth{\r\n    background-color: rgb(255, 207, 50);\r\n}\r\n\r\n\r\n/* tr:nth-child(even){\r\n    background-color: white;\r\n    \r\n\r\n}\r\ntr:nth-child(odd){\r\n    background-color: rgb(255, 255, 255);\r\n} */\r\n\r\n\r\ntr{\r\nbackground-color: white;\r\n}\r\n\r\n\r\ni{\r\n    color: rgb(247, 218, 54);\r\n}\r\n\r\n\r\nform{\r\n    width: 500px;\r\n    height: 100%; \r\n    margin-left: 00px; \r\n    background-color: rgb(236, 211, 99);\r\n    \r\n  }\r\n\r\n\r\n.modal-body{\r\n    background-image: linear-gradient(rgb(192, 143, 7),rgb(151, 114, 12)) ;\r\n    color: white;\r\n    \r\n  }\r\n\r\n\r\n.modal-body>input{\r\n    background-color: rgb(236, 209, 118);\r\n  }\r\n\r\n\r\n.modal-body>select{\r\n    background-color: rgb(236, 209, 118);\r\n  \r\n    \r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5lbC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7O0FBR0E7Ozs7Ozs7R0FPRzs7O0FBQ0g7QUFDQSx1QkFBdUI7QUFDdkI7OztBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCOzs7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1DQUFtQzs7RUFFckM7OztBQUNBO0lBQ0Usc0VBQXNFO0lBQ3RFLFlBQVk7O0VBRWQ7OztBQUNBO0lBQ0Usb0NBQW9DO0VBQ3RDOzs7QUFDQTtJQUNFLG9DQUFvQzs7O0VBR3RDIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5wYW5lbC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbnRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjA3LCA1MCk7XHJcbn1cclxuXHJcblxyXG4vKiB0cjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG5cclxufVxyXG50cjpudGgtY2hpbGQob2RkKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufSAqL1xyXG50cntcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuaXtcclxuICAgIGNvbG9yOiByZ2IoMjQ3LCAyMTgsIDU0KTtcclxufVxyXG5mb3Jte1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlOyBcclxuICAgIG1hcmdpbi1sZWZ0OiAwMHB4OyBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIxMSwgOTkpO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5tb2RhbC1ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigxOTIsIDE0MywgNykscmdiKDE1MSwgMTE0LCAxMikpIDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG4gIH1cclxuICAubW9kYWwtYm9keT5pbnB1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIwOSwgMTE4KTtcclxuICB9XHJcbiAgLm1vZGFsLWJvZHk+c2VsZWN0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjA5LCAxMTgpO1xyXG4gIFxyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/adminpanel/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/adminpanel/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(firestore, _router) {
        this.firestore = firestore;
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firestore.collection("/bookings").snapshotChanges().subscribe(function (res) {
            _this.bookings = res.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
            });
        });
    };
    DashboardComponent.prototype.delete = function (id) {
        event.preventDefault();
        this.firestore.doc("/bookings/" + id).delete().then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.logout = function () {
        this._router.navigate(["/login"]);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/adminpanel/dashboard/dashboard.component.html"),
            providers: [{
                    provide: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], useClass: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
                },
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
                }],
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/adminpanel/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/adminpanel/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/adminpanel/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* BASIC */\r\n\r\n/* html {\r\n  background-color: #56baed;\r\n}\r\n\r\nbody {\r\n  font-family: \"Poppins\", sans-serif;\r\n  height: 100vh;\r\n}\r\n\r\na {\r\n  color: #92badd;\r\n  display:inline-block;\r\n  text-decoration: none;\r\n  font-weight: 400;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  display:inline-block;\r\n  margin: 40px 8px 10px 8px; \r\n  color: #cccccc;\r\n}\r\n\r\n */\r\n\r\n/* STRUCTURE */\r\n\r\n.wrapper {\r\n  background-color: #edde56;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column; \r\n  justify-content: center;\r\n  width: 100%;\r\nheight: 100vh;\r\n\r\n  padding: 20px;\r\n}\r\n\r\nlabel{\r\n  font-size: 20px;\r\n  padding: 10px 5px 5px 5px;\r\n}\r\n\r\n#formContent {\r\n  background-color: #edde56;\r\n  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  -moz-box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  border-radius: 10px 10px 10px 10px;     \r\n  background: #fff;\r\n  padding: 30px;\r\n  width: 90%;\r\n  max-width: 450px;\r\n  box-shadow: 0 30px 60px 0 #edde56;\r\n  text-align: center;\r\n}\r\n\r\n/* #formFooter {\r\n  background-color: #edde56;\r\n\r\n  border-top: 1px solid #dce8f1;\r\n  padding: 25px;\r\n  text-align: center;\r\n  -webkit-border-radius: 0 0 10px 10px;\r\n  border-radius: 0 0 10px 10px;\r\n} */\r\n\r\n/* TABS */\r\n\r\nh2.inactive {\r\n  color: #cccccc;\r\n}\r\n\r\nh2.active {\r\n  color: #0d0d0d;\r\n  border-bottom: 2px solid #5fbae9;\r\n}\r\n\r\n/* FORM TYPOGRAPHY*/\r\n\r\ninput[type=button], input[type=submit], input[type=reset]  {\r\n  background-color: #edde56;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 80px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-size: 20px;\r\n  box-shadow: 0 10px 30px 0 #edde56;\r\n  border-radius: 5px 5px 5px 5px;\r\n  margin: 5px 20px 40px 20px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n  background-color: #edde56;\r\n}\r\n\r\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n  transform: scale(0.95);\r\n}\r\n\r\ninput[type=text],input[type=password] {\r\n  background-color: #f6f6f6;\r\n\r\n  border: none;\r\n  color: #0d0d0d;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 5px;\r\n  width: 85%;\r\n  border: 2px solid #f6f6f6;\r\n  transition: all 0.5s ease-in-out;\r\n  border-radius: 5px 5px 5px 5px;\r\n}\r\n\r\ninput[type=text],input[type=password]:focus {\r\n  background-color: #fff;\r\n  border-bottom: 2px solid #edde56  ;\r\n}\r\n\r\ninput[type=text],input[type=password]:placeholder {\r\n  background-color: #edde56;\r\n\r\n  color: #cccccc;\r\n}\r\n\r\n/* ANIMATIONS */\r\n\r\n/* Simple CSS3 Fade-in-down Animation */\r\n\r\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: none;\r\n  }\r\n}\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn {\r\n  opacity:0;\r\n  -webkit-animation:fadeIn ease-in 1;\r\n  animation:fadeIn ease-in 1;\r\n\r\n  -webkit-animation-fill-mode:forwards;\r\n  animation-fill-mode:forwards;\r\n\r\n  -webkit-animation-duration:1s;\r\n  animation-duration:1s;\r\n}\r\n\r\n.fadeIn.first {\r\n  -webkit-animation-delay: 0.4s;\r\n  animation-delay: 0.4s;\r\n}\r\n\r\n.fadeIn.second {\r\n  -webkit-animation-delay: 0.6s;\r\n  animation-delay: 0.6s;\r\n}\r\n\r\n.fadeIn.third {\r\n  -webkit-animation-delay: 0.8s;\r\n  animation-delay: 0.8s;\r\n}\r\n\r\n.fadeIn.fourth {\r\n  -webkit-animation-delay: 1s;\r\n  animation-delay: 1s;\r\n}\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n.underlineHover:after {\r\n  display: block;\r\n  left: 0;\r\n  bottom: -10px;\r\n  width: 0;\r\n  height: 2px;\r\n  background-color: #edde56;\r\n  content: \"\";\r\n  transition: width 0.2s;\r\n}\r\n\r\n.underlineHover:hover {\r\n  color: #0d0d0d;\r\n}\r\n\r\n.underlineHover:hover:after{\r\n  width: 100%;\r\n}\r\n\r\n/* OTHERS */\r\n\r\n*:focus {\r\n    outline: none;\r\n}\r\n\r\n#icon {\r\n  width:60%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYW5lbC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxVQUFVOztBQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTBCRTs7QUFFRixjQUFjOztBQUVkO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2IsYUFBYTs7RUFFWCxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDZFQUE2RTs7RUFFN0UscUZBQXFGO0VBQ3JGLGtGQUFrRjtFQUdsRixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBR2hCLGlDQUFpQztFQUNqQyxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7Ozs7O0dBUUc7O0FBSUgsU0FBUzs7QUFFVDtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0FBQ2xDOztBQUlBLG1CQUFtQjs7QUFFbkI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFFZixpQ0FBaUM7RUFFakMsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUsxQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFLRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7O0VBRXpCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLHlCQUF5QjtFQUt6QixnQ0FBZ0M7RUFFaEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLHlCQUF5Qjs7RUFFekIsY0FBYztBQUNoQjs7QUFJQSxlQUFlOztBQUVmLHVDQUF1Qzs7QUFDdkM7RUFDRSxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUVWLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsVUFBVTtJQUVWLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUVWLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsVUFBVTtJQUVWLGVBQWU7RUFDakI7QUFDRjs7QUFFQSxrQ0FBa0M7O0FBQ2xDLDRCQUE0QixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7O0FBRWxFLG9CQUFvQixPQUFPLFNBQVMsRUFBRSxFQUFFLEtBQUssU0FBUyxFQUFFLEVBQUU7O0FBRTFEO0VBQ0UsU0FBUztFQUNULGtDQUFrQztFQUVsQywwQkFBMEI7O0VBRTFCLG9DQUFvQztFQUVwQyw0QkFBNEI7O0VBRTVCLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFFN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNkJBQTZCO0VBRTdCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUU3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwyQkFBMkI7RUFFM0IsbUJBQW1CO0FBQ3JCOztBQUVBLGtDQUFrQzs7QUFDbEM7RUFDRSxjQUFjO0VBQ2QsT0FBTztFQUNQLGFBQWE7RUFDYixRQUFRO0VBQ1IsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFJQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFuZWwvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBCQVNJQyAqL1xyXG5cclxuLyogaHRtbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiAjOTJiYWRkO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDsgXHJcbiAgY29sb3I6ICNjY2NjY2M7XHJcbn1cclxuXHJcbiAqL1xyXG5cclxuLyogU1RSVUNUVVJFICovXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZGU1NjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwdmg7XHJcblxyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxubGFiZWx7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4IDVweCA1cHg7XHJcbn1cclxuI2Zvcm1Db250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRkZTU2O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG5cclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcblxyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4OyAgICAgXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgI2VkZGU1NjtcclxuICBib3gtc2hhZG93OiAwIDMwcHggNjBweCAwICNlZGRlNTY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKiAjZm9ybUZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZGU1NjtcclxuXHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuLyogVEFCUyAqL1xyXG5cclxuaDIuaW5hY3RpdmUge1xyXG4gIGNvbG9yOiAjY2NjY2NjO1xyXG59XHJcblxyXG5oMi5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNWZiYWU5O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEZPUk0gVFlQT0dSQVBIWSovXHJcblxyXG5pbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRkZTU2O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTVweCA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCAjZWRkZTU2O1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IDAgI2VkZGU1NjtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyLCBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIsIGlucHV0W3R5cGU9cmVzZXRdOmhvdmVyICB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZGU1NjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XHJcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF0saW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcblxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzBkMGQwZDtcclxuICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Y2ZjZmNjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT10ZXh0XSxpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2VkZGU1NiAgO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdLGlucHV0W3R5cGU9cGFzc3dvcmRdOnBsYWNlaG9sZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRkZTU2O1xyXG5cclxuICBjb2xvcjogI2NjY2NjYztcclxufVxyXG5cclxuXHJcblxyXG4vKiBBTklNQVRJT05TICovXHJcblxyXG4vKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbi5mYWRlSW5Eb3duIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluRG93biB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcblxyXG4uZmFkZUluIHtcclxuICBvcGFjaXR5OjA7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAtbW96LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG5cclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcbiAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6Zm9yd2FyZHM7XHJcblxyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxcztcclxufVxyXG5cclxuLmZhZGVJbi5maXJzdCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xyXG59XHJcblxyXG4uZmFkZUluLnNlY29uZCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xyXG59XHJcblxyXG4uZmFkZUluLnRoaXJkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICBhbmltYXRpb24tZGVsYXk6IDAuOHM7XHJcbn1cclxuXHJcbi5mYWRlSW4uZm91cnRoIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbn1cclxuXHJcbi8qIFNpbXBsZSBDU1MzIEZhZGUtaW4gQW5pbWF0aW9uICovXHJcbi51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0xMHB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGRlNTY7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjJzO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXIge1xyXG4gIGNvbG9yOiAjMGQwZDBkO1xyXG59XHJcblxyXG4udW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogT1RIRVJTICovXHJcblxyXG4qOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn0gXHJcblxyXG4jaWNvbiB7XHJcbiAgd2lkdGg6NjAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/adminpanel/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/adminpanel/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/adminpanel/shared/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _auth) {
        this._router = _router;
        this._auth = _auth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (data) {
        console.log(data.value);
        if (data.value.userid == "admin" && data.value.password == 123) {
            this._auth.setLogin();
            this._router.navigate(["/dashboard"]);
        }
        else
            alert("Invalid user credentials !!");
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/adminpanel/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/adminpanel/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/adminpanel/shared/auth.service.ts":
/*!***************************************************!*\
  !*** ./src/app/adminpanel/shared/auth.service.ts ***!
  \***************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.getLogin = function () {
        return this.islogin;
    };
    AuthService.prototype.setLogin = function () {
        return this.islogin = true;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _food_food_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./food/food.component */ "./src/app/food/food.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ratings/ratings.component */ "./src/app/ratings/ratings.component.ts");
/* harmony import */ var _adminpanel_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./adminpanel/login/login.component */ "./src/app/adminpanel/login/login.component.ts");
/* harmony import */ var _adminpanel_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./adminpanel/dashboard/dashboard.component */ "./src/app/adminpanel/dashboard/dashboard.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _adminpanel_Gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./adminpanel/Gaurds/auth.guard */ "./src/app/adminpanel/Gaurds/auth.guard.ts");















var routes = [{ path: '', component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_13__["LayoutComponent"], children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
            { path: 'form', component: _forms_forms_component__WEBPACK_IMPORTED_MODULE_6__["FormsComponent"] },
            { path: 'events', component: _events_events_component__WEBPACK_IMPORTED_MODULE_7__["EventsComponent"] },
            { path: 'food', component: _food_food_component__WEBPACK_IMPORTED_MODULE_8__["FoodComponent"] },
            { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"] },
            { path: 'ratings', component: _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_10__["RatingsComponent"] },
        ] },
    { path: 'login', component: _adminpanel_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'dashboard', component: _adminpanel_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"], canActivate: [_adminpanel_Gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hotel-manag';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _food_food_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./food/food.component */ "./src/app/food/food.component.ts");
/* harmony import */ var _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ratings/ratings.component */ "./src/app/ratings/ratings.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forms/forms.component */ "./src/app/forms/forms.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _adminpanel_adminpanel_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./adminpanel/adminpanel.module */ "./src/app/adminpanel/adminpanel.module.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _adminpanel_Gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./adminpanel/Gaurds/auth.guard */ "./src/app/adminpanel/Gaurds/auth.guard.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_8__["GalleryComponent"],
                _food_food_component__WEBPACK_IMPORTED_MODULE_9__["FoodComponent"],
                _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_10__["RatingsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_12__["EventsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _forms_forms_component__WEBPACK_IMPORTED_MODULE_15__["FormsComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_16__["LayoutComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _adminpanel_adminpanel_module__WEBPACK_IMPORTED_MODULE_17__["AdminpanelModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_18__["CarouselModule"].forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_24__["CommonModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_21__["AngularFireDatabaseModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_23__["ModalModule"].forRoot()
            ],
            providers: [_adminpanel_Gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\r\n    width: 100%;\r\n    height: 300px;\r\n    /* margin-left: 25%; */\r\n    background-color: goldenrod;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\r\n\r\n    -webkit-box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\r\n    -moz-box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);\r\n    transition: all 0.3s ease-in-out;\r\n  \r\n}\r\nh1{\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n\r\n    /* font-family: 'Kaushan Script', cursive; */\r\n    position: relative;\r\n    top: 100px;\r\n    font-size: 90px;\r\n    color:white;\r\n}\r\nh2{\r\n    /* margin-left: 25%; */\r\n\r\n    margin-top: 20px;\r\n    color: black;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-weight: bold;\r\n}\r\nh3{\r\n\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    color: gray;\r\n    font-size: 25px;\r\n}\r\ni{\r\n    \r\n\r\n    color: goldenrod;\r\n}\r\n.details{\r\n    /* margin-left: 25%; */\r\n\r\n    margin-top: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiw2RUFBNkU7O0lBRTdFLHFGQUFxRjtJQUNyRixrRkFBa0Y7SUFLbEYsZ0NBQWdDOztBQUVwQztBQUNBO0lBQ0ksNkVBQTZFOztJQUU3RSw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7O0lBRXRCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNkVBQTZFO0lBQzdFLGlCQUFpQjtBQUNyQjtBQUNBOztJQUVJLDZFQUE2RTtJQUM3RSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBOzs7SUFHSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHNCQUFzQjs7SUFFdEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDI1JTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuXHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICBcclxufVxyXG5oMXtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgIC8qIGZvbnQtZmFtaWx5OiAnS2F1c2hhbiBTY3JpcHQnLCBjdXJzaXZlOyAqL1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogOTBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbmgye1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDI1JTsgKi9cclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5oM3tcclxuXHJcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbml7XHJcbiAgICBcclxuXHJcbiAgICBjb2xvcjogZ29sZGVucm9kO1xyXG59XHJcbi5kZXRhaWxze1xyXG4gICAgLyogbWFyZ2luLWxlZnQ6IDI1JTsgKi9cclxuXHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.css":
/*!*********************************************!*\
  !*** ./src/app/events/events.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! raw-loader!./events.component.html */ "./node_modules/raw-loader/index.js!./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/events/events.component.css")]
        })
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/food/food.component.css":
/*!*****************************************!*\
  !*** ./src/app/food/food.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 20px;\r\n}\r\nh1{\r\n    color: rgb(104, 82, 21);\r\n}\r\n.jumbotron{\r\n    background-color: rgb(247, 243, 243);\r\n    \r\n    \r\n}\r\nimg{\r\n    display: flex;\r\n    padding: 10px 5px 15px 5px;\r\n    width: 360px;\r\n    height: 240px;\r\n}\r\np{\r\n    padding: 10px 5px 15px 5px;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC9mb29kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksb0NBQW9DOzs7QUFHeEM7QUFDQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLDBCQUEwQjs7QUFFOUIiLCJmaWxlIjoic3JjL2FwcC9mb29kL2Zvb2QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbmgxe1xyXG4gICAgY29sb3I6IHJnYigxMDQsIDgyLCAyMSk7XHJcbn1cclxuLmp1bWJvdHJvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI0MywgMjQzKTtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuaW1ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHggNXB4IDE1cHggNXB4O1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxufVxyXG5we1xyXG4gICAgcGFkZGluZzogMTBweCA1cHggMTVweCA1cHg7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/food/food.component.ts":
/*!****************************************!*\
  !*** ./src/app/food/food.component.ts ***!
  \****************************************/
/*! exports provided: FoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodComponent", function() { return FoodComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FoodComponent = /** @class */ (function () {
    function FoodComponent() {
    }
    FoodComponent.prototype.ngOnInit = function () {
    };
    FoodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-food',
            template: __webpack_require__(/*! raw-loader!./food.component.html */ "./node_modules/raw-loader/index.js!./src/app/food/food.component.html"),
            styles: [__webpack_require__(/*! ./food.component.css */ "./src/app/food/food.component.css")]
        })
    ], FoodComponent);
    return FoodComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid{\r\n    display: flex;\r\n    width: 100%;\r\n    padding: 3px 3px 3px 3px;\r\n    \r\n    height: 40px;\r\n    margin-top: 100px;\r\n \r\n    color: white;\r\n    background-color: rgb(58, 42, 12);\r\n   \r\n}\r\n\r\n/* \r\n.container-fluid>a{\r\n    position: relative;\r\n    top: 5px;\r\n    left: 100px;\r\n    font-size: 15px;\r\n    color: white;\r\n    text-decoration: none;\r\n    border-right: 2px solid white;\r\n\r\n    \r\n} */\r\n\r\n.copy{\r\n    position: relative;\r\n    top: 5px;\r\n    left: 10px;\r\n    text-decoration: none;\r\n    margin-left: 100px;\r\n\r\n\r\n}\r\n\r\n.copy>a{\r\n    font-size: 15px;\r\n    text-decoration: none;\r\n    color: white;\r\n    border-right: 2px solid white;\r\n\r\n}\r\n\r\n.partners{\r\n\r\n    position: relative;\r\n    top: 5px;\r\n   \r\n    text-decoration: none;\r\n    margin-left: 18px;\r\n\r\n\r\n}\r\n\r\n.partners>a{\r\n    font-size: 15px;\r\n    text-decoration: none;\r\n    color: white;\r\n    border-right: 2px solid white;\r\n\r\n}\r\n\r\n.privacy{\r\n    position: relative;\r\n    top: 5px;\r\n   \r\n    text-decoration: none;\r\n    margin-left: 8px;\r\n\r\n\r\n}\r\n\r\n.privacy>a{\r\n    font-size: 15px;\r\n    text-decoration: none;\r\n    color: white;\r\n    \r\n}\r\n\r\n.adminlogin{\r\n    margin-left: 800px;\r\n    padding: 2px 2px 2px 2px;\r\n\r\n}\r\n\r\n/* .newsletter{\r\n    \r\n    position: relative;\r\n    top: 20px;\r\n    left: 20px;\r\n    max-width: 200px;\r\n}\r\n.newsletter>h4{\r\n    color: rgb(187, 182, 182);\r\n    font-family: 'IBM Plex Sans', sans-serif;\r\n}\r\n.newsletter>p{\r\n    color: rgb(187, 182, 182);\r\n    \r\n}\r\ninput{\r\n    background-color: rgb(66, 65, 65);\r\n    color: white;\r\n    \r\n}\r\nbutton{\r\n    margin-left: 20px;\r\n    margin-top: 30px;\r\n} */\r\n\r\n/* .footercon{\r\n    display: flex;\r\n}\r\n.help{\r\n    position: relative;\r\n    left: 100px;\r\n    top: 60px;\r\n\r\n}\r\n.help>label{\r\n    color: white;\r\n    font-size: 30px;\r\n    \r\n   \r\n}\r\n.help>a{\r\n    \r\n    text-decoration: none;\r\n    color: grey;\r\n}\r\n.help>a:hover{\r\n    color: white;\r\n}\r\n.partners{\r\n    position: relative;\r\n    text-decoration: none;\r\n    left:180px;\r\n    color: white;\r\n    top: 60px;\r\n\r\n}\r\n.partners>a{\r\n    text-emphasis: none;\r\n    color: grey;\r\n}\r\n.partners>label{\r\n    color: white;\r\n    font-size: 30px;\r\n    \r\n}\r\n.product{\r\n    position: relative;\r\n    text-decoration: none;\r\n    left:260px;\r\n    color: white;\r\n    top: 60px;\r\n\r\n}\r\n.product>a{\r\n    text-emphasis: none;\r\n    color: grey;\r\n}\r\n.product>label{\r\n    color: white;\r\n    font-size: 30px;\r\n    \r\n}\r\n.adminlogin{\r\n    position: relative;\r\n    left: 1000px;\r\n    top: 200px;\r\n}\r\np{\r\n    text-align: center;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx3QkFBd0I7O0lBRXhCLFlBQVk7SUFDWixpQkFBaUI7O0lBRWpCLFlBQVk7SUFDWixpQ0FBaUM7O0FBRXJDOztBQUVBOzs7Ozs7Ozs7OztHQVdHOztBQUNIO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGtCQUFrQjs7O0FBR3RCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osNkJBQTZCOztBQUVqQzs7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsUUFBUTs7SUFFUixxQkFBcUI7SUFDckIsaUJBQWlCOzs7QUFHckI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWiw2QkFBNkI7O0FBRWpDOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7O0lBRVIscUJBQXFCO0lBQ3JCLGdCQUFnQjs7O0FBR3BCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixZQUFZOztBQUVoQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix3QkFBd0I7O0FBRTVCOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRzs7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWdFRyIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XHJcbiAgICBcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTgsIDQyLCAxMik7XHJcbiAgIFxyXG59XHJcblxyXG4vKiBcclxuLmNvbnRhaW5lci1mbHVpZD5he1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xyXG5cclxuICAgIFxyXG59ICovXHJcbi5jb3B5e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG5cclxuXHJcbn1cclxuLmNvcHk+YXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xyXG5cclxufVxyXG4ucGFydG5lcnN7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgIFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcblxyXG5cclxufVxyXG4ucGFydG5lcnM+YXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xyXG5cclxufVxyXG4ucHJpdmFjeXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gICBcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcblxyXG5cclxufVxyXG4ucHJpdmFjeT5he1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgXHJcbn1cclxuLmFkbWlubG9naW57XHJcbiAgICBtYXJnaW4tbGVmdDogODAwcHg7XHJcbiAgICBwYWRkaW5nOiAycHggMnB4IDJweCAycHg7XHJcblxyXG59XHJcbi8qIC5uZXdzbGV0dGVye1xyXG4gICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxufVxyXG4ubmV3c2xldHRlcj5oNHtcclxuICAgIGNvbG9yOiByZ2IoMTg3LCAxODIsIDE4Mik7XHJcbiAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5uZXdzbGV0dGVyPnB7XHJcbiAgICBjb2xvcjogcmdiKDE4NywgMTgyLCAxODIpO1xyXG4gICAgXHJcbn1cclxuaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDY1LCA2NSk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn0gKi9cclxuLyogLmZvb3RlcmNvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmhlbHB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMDBweDtcclxuICAgIHRvcDogNjBweDtcclxuXHJcbn1cclxuLmhlbHA+bGFiZWx7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBcclxuICAgXHJcbn1cclxuLmhlbHA+YXtcclxuICAgIFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuLmhlbHA+YTpob3ZlcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucGFydG5lcnN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBsZWZ0OjE4MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdG9wOiA2MHB4O1xyXG5cclxufVxyXG4ucGFydG5lcnM+YXtcclxuICAgIHRleHQtZW1waGFzaXM6IG5vbmU7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufVxyXG4ucGFydG5lcnM+bGFiZWx7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBcclxufVxyXG4ucHJvZHVjdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxlZnQ6MjYwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0b3A6IDYwcHg7XHJcblxyXG59XHJcbi5wcm9kdWN0PmF7XHJcbiAgICB0ZXh0LWVtcGhhc2lzOiBub25lO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbn1cclxuLnByb2R1Y3Q+bGFiZWx7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBcclxufVxyXG4uYWRtaW5sb2dpbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEwMDBweDtcclxuICAgIHRvcDogMjAwcHg7XHJcbn1cclxucHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forms/forms.component.css":
/*!*******************************************!*\
  !*** ./src/app/forms/forms.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  width: 500px;\r\n  height: 100%; \r\n  margin-left: 00px; \r\n  background-color: rgb(236, 211, 99);\r\n  \r\n}\r\n.modal-body{\r\n  background-image: linear-gradient(rgb(192, 143, 7),rgb(151, 114, 12)) ;\r\n  color: white;\r\n  \r\n}\r\n.modal-body>input{\r\n  background-color: rgb(236, 209, 118);\r\n}\r\n.modal-body>select{\r\n  background-color: rgb(236, 209, 118);\r\n\r\n  \r\n}\r\n.error{\r\n  color: rgb(250, 246, 10);\r\n}\r\n.error input{\r\n  border-color: rgb(250,246,10);\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvZm9ybXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1DQUFtQzs7QUFFckM7QUFDQTtFQUNFLHNFQUFzRTtFQUN0RSxZQUFZOztBQUVkO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLG9DQUFvQzs7O0FBR3RDO0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLDZCQUE2Qjs7QUFFL0IiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy9mb3Jtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybXtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlOyBcclxuICBtYXJnaW4tbGVmdDogMDBweDsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjExLCA5OSk7XHJcbiAgXHJcbn1cclxuLm1vZGFsLWJvZHl7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigxOTIsIDE0MywgNykscmdiKDE1MSwgMTE0LCAxMikpIDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgXHJcbn1cclxuLm1vZGFsLWJvZHk+aW5wdXR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjA5LCAxMTgpO1xyXG59XHJcbi5tb2RhbC1ib2R5PnNlbGVjdHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMDksIDExOCk7XHJcblxyXG4gIFxyXG59XHJcblxyXG4uZXJyb3J7XHJcbiAgY29sb3I6IHJnYigyNTAsIDI0NiwgMTApO1xyXG59XHJcbi5lcnJvciBpbnB1dHtcclxuICBib3JkZXItY29sb3I6IHJnYigyNTAsMjQ2LDEwKTtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/forms/forms.component.ts":
/*!******************************************!*\
  !*** ./src/app/forms/forms.component.ts ***!
  \******************************************/
/*! exports provided: FormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsComponent", function() { return FormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var FormsComponent = /** @class */ (function () {
    function FormsComponent(firestore, http) {
        this.firestore = firestore;
        this.http = http;
        this.emailurl = "https://fancynamehotel.000webhostapp.com/fancynamehotel/SendEmail.php";
    }
    FormsComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    FormsComponent.prototype.submit = function (frm) {
        this.http.post(this.emailurl, JSON.stringify(frm.value)).subscribe(function (result) {
            alert("email Sent");
        });
        this.firestore.collection("/bookings").add(frm.value).then(function (res) {
            console.log(res);
        });
    };
    FormsComponent.prototype.resetForm = function (frm) {
        if (frm != null) {
            frm.resetForm();
        }
        this.guest = {
            name: '',
            email: '',
            phone: null,
            age: null,
            rooms: null,
            type: '',
            guests: null,
            checkin: null,
            checkout: null,
        };
    };
    FormsComponent.prototype.delete = function (id) {
        event.preventDefault();
        this.firestore.doc("/bookings/" + id).delete().then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    FormsComponent.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    FormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms',
            template: __webpack_require__(/*! raw-loader!./forms.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms/forms.component.html"),
            providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]],
            styles: [__webpack_require__(/*! ./forms.component.css */ "./src/app/forms/forms.component.css")]
        })
    ], FormsComponent);
    return FormsComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gall{\r\n    margin-top: 20px;\r\n    background-color: white;\r\n    font-family: calibri;\r\n    padding: 5px 5px 5px 5px;\r\n    color: rgb(156, 120, 18);\r\n    \r\n}\r\nh1{\r\n    text-align: center;\r\n    \r\n\r\n}\r\nh2{\r\n    text-align: center;\r\n}\r\nimg{\r\n    padding: 10px 5px 15px 5px;\r\n    width: 360px;\r\n    height: 240px;\r\n    text-align: left;\r\n}\r\n.jumbotron{\r\n    background-color: rgb(247, 246, 244);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsd0JBQXdCOztBQUU1QjtBQUNBO0lBQ0ksa0JBQWtCOzs7QUFHdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoic3JjL2FwcC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxse1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IGNhbGlicmk7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XHJcbiAgICBjb2xvcjogcmdiKDE1NiwgMTIwLCAxOCk7XHJcbiAgICBcclxufVxyXG5oMXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG5cclxufVxyXG5oMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pbWd7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDVweCAxNXB4IDVweDtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5qdW1ib3Ryb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAyNDYsIDI0NCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        })
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav{\r\n    overflow: hidden;\r\n    height: 45px;\r\n    background-color:  rgb(255, 255, 255);\r\n    /* position: fixed;\r\n    width: 100%; */\r\n    box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n\t-webkit-box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -moz-box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    max-width: 100%;\r\n    \r\n}\r\n\r\n.aa{\r\n    left: 160px;\r\n    padding: 15px 25px 10px 5px;\r\n    position: relative;\r\n    font-weight: bold;\r\n    font-size: 15px;\r\n    text-decoration: none;\r\n    color: rgb(0, 0, 0);\r\n    font-family: calibri;\r\n    opacity: 0.8;\r\n   \r\n}\r\n\r\n.aa:hover{\r\n    opacity: 1;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n}\r\n\r\nh1{ \r\n    padding: 5px 10px 10px 0px;\r\n    color: rgb(104, 82, 21);\r\n    margin-top: 5px;\r\n    margin-left: 40px;\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    font-family: calibri;\r\n    \r\n\r\n}\r\n\r\n.aa:hover{\r\n    background-color: white;\r\n  \r\n\r\n}\r\n\r\nbutton{\r\n    color: white;\r\n    margin-top: 9px;\r\n    \r\n    background-image: linear-gradient(rgb(192, 143, 7),rgb(134, 108, 36)) ;\r\n    margin-left: 20%;\r\n    padding: 2px 16px 20px 16px;\r\n    font-weight: bold;\r\n    height: 30px;\r\n    opacity: 0.85;\r\n    border-radius: 0;\r\n}\r\n\r\nbutton:hover{\r\n    opacity: 1;\r\n    color: white;\r\n}\r\n\r\ni{  color: rgb(236, 211, 99);\r\n \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixxQ0FBcUM7SUFDckM7a0JBQ2M7SUFDZCw2RUFBNkU7Q0FDaEYscUZBQXFGO0lBQ2xGLGtGQUFrRjtJQUNsRixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsWUFBWTs7QUFFaEI7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7OztBQUd4Qjs7QUFHQTtJQUNJLHVCQUF1Qjs7O0FBRzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7O0lBRWYsc0VBQXNFO0lBQ3RFLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUEsSUFBSSx3QkFBd0I7O0FBRTVCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdntcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgLyogcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIFxyXG59XHJcblxyXG4uYWF7XHJcbiAgICBsZWZ0OiAxNjBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjVweCAxMHB4IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtZmFtaWx5OiBjYWxpYnJpO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICBcclxufVxyXG4uYWE6aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oMXsgXHJcbiAgICBwYWRkaW5nOiA1cHggMTBweCAxMHB4IDBweDtcclxuICAgIGNvbG9yOiByZ2IoMTA0LCA4MiwgMjEpO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtZmFtaWx5OiBjYWxpYnJpO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuLmFhOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgXHJcblxyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMTkyLCAxNDMsIDcpLHJnYigxMzQsIDEwOCwgMzYpKSA7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgcGFkZGluZzogMnB4IDE2cHggMjBweCAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjg1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5idXR0b246aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5peyAgY29sb3I6IHJnYigyMzYsIDIxMSwgOTkpO1xyXG4gXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/forms.component */ "./src/app/forms/forms.component.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService) {
        this.modalService = modalService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.bookaStay = function () {
        this.modalRef = this.modalService.show(_forms_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"]);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -moz-box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n\r\nimg-car {\r\n  margin-top: 10px;\r\n\r\n  max-width: 100%;\r\n  text-align: center;\r\n\r\n}\r\n\r\n\r\nimage {\r\n  height: 500px;\r\n\r\n  opacity: 0.8;\r\n}\r\n\r\n\r\nbutton {\r\n  background-color: rgb(237, 109, 71);\r\n  margin-left: 25%;\r\n  margin-top: -12px;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n\r\n  height: 55px;\r\n  width: 140px;\r\n  font-size: 20px;\r\n}\r\n\r\n\r\nbutton:hover {\r\n  background-color: rgb(35, 46, 56);\r\n  color: antiquewhite;\r\n}\r\n\r\n\r\nspan {\r\n  margin-top: 20px;\r\n  font-size: 40px;\r\n  font-style: italic;\r\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n  margin-left: 140px;\r\n}\r\n\r\n\r\n/* .lol{\r\n    margin-top: 30px;\r\n} */\r\n\r\n\r\n/* .centext{\r\n    \r\n    position: relative;\r\n    text-align: center;\r\n    font-family: 'Satisfy', cursive;\r\n    z-index: 8;\r\n    color: white;    \r\n} */\r\n\r\n\r\n/* h1{\r\n    margin-top: 230px;\r\n    font-weight: bolder;\r\n \r\n}\r\n\r\n.txtbx{\r\n    border: 1px black solid;\r\n    max-width: 250px;\r\n    font-size: 30px;\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n   margin-left: 500px;\r\n    \r\n} */\r\n\r\n\r\n.container1 {\r\n  margin-top: 20px;\r\n  text-align: center;\r\n  color: rgb(104, 82, 21);\r\n}\r\n\r\n\r\n.container2 {\r\n  text-align: center;\r\n  color: rgb(104, 82, 21);\r\n\r\n}\r\n\r\n\r\nimg{\r\n    display: flex;\r\n    padding: 10px 10px 15px 10px;\r\n    width: 360px;\r\n    height: 240px;\r\n}\r\n\r\n\r\n.container3 {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  height: 50vh;\r\n  margin-top: 0px;\r\n  background-color: rgb(235, 172, 38);\r\n  -webkit-box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    -moz-box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n\r\n.container3 .box {\r\n  width: 250px;\r\n  height: 295px;\r\n  border-radius: 10px;\r\n  background-color: white;\r\n  margin: 20px;\r\n  transition: 0.3s all ease-in-out;\r\n  position: relative;\r\n  box-shadow: 0px 0px 30px rgb(63, 52, 1);\r\n  /* Link */\r\n}\r\n\r\n\r\n.container3 .box .boxContent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  padding: 15px;\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n}\r\n\r\n\r\n.container3 .box .boxContent .icon {\r\n  color: rgb(104, 82, 21);\r\n  font-size: 48px;\r\n  padding: 15px;\r\n}\r\n\r\n\r\n.container3 .box .boxContent .title {\r\n  font-size: 24px;\r\n  color: rgb(104, 82, 21);\r\n  font-weight: bold;\r\n  padding: 10px;\r\n}\r\n\r\n\r\n.container3 .box .boxContent .desc {\r\n  color: rgb(104, 82, 21);\r\n  font-size: 15px;\r\n  height: 20%;\r\n}\r\n\r\n\r\n.container3 .box a {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n\r\n.container3 .box:hover {\r\n  color: #fff;\r\n  background: linear-gradient(130deg, rgb(255, 198, 41) 0%, rgb(231, 229, 222) 100%);\r\n  box-shadow: none;\r\n  \r\n  \r\n}\r\n\r\n\r\n.container3 .box:hover .icon,\r\n.container3 .box:hover .title,\r\n.container3 .box:hover .desc {\r\n  color: rgb(255, 255, 255);\r\n  transition: 0.5s all ease-in-out;\r\n}\r\n\r\n\r\n.container4 {\r\n  margin-top: 100px;\r\n  text-align: center;\r\n  color: rgb(104, 82, 21);\r\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n  \r\n\r\n}\r\n\r\n\r\nh3{\r\n    text-align: center;\r\n    color: rgb(104, 82, 21);\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\np{\r\n    text-align: center;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    \r\n}\r\n\r\n\r\n.btn{\r\n  background-image: linear-gradient(rgb(143, 108, 14),rgb(143, 106, 5)) ;\r\n    color: antiquewhite;\r\n    padding: 4px 16px 20px 16px;\r\n    font-weight: bold;\r\n    margin-left: 103px;\r\n    margin-top: 5px;\r\n    height: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxRkFBcUY7SUFDbkYsa0ZBQWtGO0FBQ3RGOzs7QUFHQTtFQUNFLGdCQUFnQjs7RUFFaEIsZUFBZTtFQUNmLGtCQUFrQjs7QUFFcEI7OztBQUVBO0VBQ0UsYUFBYTs7RUFFYixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNkVBQTZFOztFQUU3RSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixxR0FBcUc7RUFDckcsa0JBQWtCO0FBQ3BCOzs7QUFFQTs7R0FFRzs7O0FBRUg7Ozs7Ozs7R0FPRzs7O0FBQ0g7Ozs7Ozs7Ozs7Ozs7R0FhRzs7O0FBQ0g7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6Qjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCOztBQUV6Qjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLG1DQUFtQztFQUNuQyxxRkFBcUY7SUFDbkYsa0ZBQWtGO0FBQ3RGOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsU0FBUztBQUNYOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDZFQUE2RTtBQUMvRTs7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7OztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixXQUFXO0FBQ2I7OztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87QUFDVDs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0ZBQWtGO0VBQ2xGLGdCQUFnQjs7O0FBR2xCOzs7QUFFQTs7O0VBR0UseUJBQXlCO0VBQ3pCLGdDQUFnQztBQUNsQzs7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2Qiw2RUFBNkU7OztBQUcvRTs7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDZFQUE2RTtJQUM3RSxpQkFBaUI7QUFDckI7OztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDZFQUE2RTs7QUFFakY7OztBQUNBO0VBQ0Usc0VBQXNFO0lBQ3BFLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuXHJcbmltZy1jYXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5pbWFnZSB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuXHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzcsIDEwOSwgNzEpO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcblxyXG4gIGhlaWdodDogNTVweDtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigzNSwgNDYsIDU2KTtcclxuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWxlZnQ6IDE0MHB4O1xyXG59XHJcblxyXG4vKiAubG9se1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufSAqL1xyXG5cclxuLyogLmNlbnRleHR7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2F0aXNmeScsIGN1cnNpdmU7XHJcbiAgICB6LWluZGV4OiA4O1xyXG4gICAgY29sb3I6IHdoaXRlOyAgICBcclxufSAqL1xyXG4vKiBoMXtcclxuICAgIG1hcmdpbi10b3A6IDIzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuIFxyXG59XHJcblxyXG4udHh0Ynh7XHJcbiAgICBib3JkZXI6IDFweCBibGFjayBzb2xpZDtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICBtYXJnaW4tbGVmdDogNTAwcHg7XHJcbiAgICBcclxufSAqL1xyXG4uY29udGFpbmVyMSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigxMDQsIDgyLCAyMSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigxMDQsIDgyLCAyMSk7XHJcblxyXG59XHJcblxyXG5pbWd7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDE1cHggMTBweDtcclxuICAgIHdpZHRoOiAzNjBweDtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGhlaWdodDogNTB2aDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMTcyLCAzOCk7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5jb250YWluZXIzIC5ib3gge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDI5NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggcmdiKDYzLCA1MiwgMSk7XHJcbiAgLyogTGluayAqL1xyXG59XHJcblxyXG4uY29udGFpbmVyMyAuYm94IC5ib3hDb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvbnRhaW5lcjMgLmJveCAuYm94Q29udGVudCAuaWNvbiB7XHJcbiAgY29sb3I6IHJnYigxMDQsIDgyLCAyMSk7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIzIC5ib3ggLmJveENvbnRlbnQgLnRpdGxlIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgY29sb3I6IHJnYigxMDQsIDgyLCAyMSk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lcjMgLmJveCAuYm94Q29udGVudCAuZGVzYyB7XHJcbiAgY29sb3I6IHJnYigxMDQsIDgyLCAyMSk7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGhlaWdodDogMjAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyMyAuYm94IGEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIzIC5ib3g6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzBkZWcsIHJnYigyNTUsIDE5OCwgNDEpIDAlLCByZ2IoMjMxLCAyMjksIDIyMikgMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBcclxuICBcclxufVxyXG5cclxuLmNvbnRhaW5lcjMgLmJveDpob3ZlciAuaWNvbixcclxuLmNvbnRhaW5lcjMgLmJveDpob3ZlciAudGl0bGUsXHJcbi5jb250YWluZXIzIC5ib3g6aG92ZXIgLmRlc2Mge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jb250YWluZXI0IHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYigxMDQsIDgyLCAyMSk7XHJcbiAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgXHJcblxyXG59XHJcbmgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHJnYigxMDQsIDgyLCAyMSk7XHJcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbnB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0dpbGwgU2FucycsICdHaWxsIFNhbnMgTVQnLCBDYWxpYnJpLCAnVHJlYnVjaGV0IE1TJywgc2Fucy1zZXJpZjtcclxuICAgIFxyXG59XHJcbi5idG57XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYigxNDMsIDEwOCwgMTQpLHJnYigxNDMsIDEwNiwgNSkpIDtcclxuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbiAgICBwYWRkaW5nOiA0cHggMTZweCAyMHB4IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDNweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _forms_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../forms/forms.component */ "./src/app/forms/forms.component.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(modalService) {
        this.modalService = modalService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.bookaStay = function () {
        this.modalRef = this.modalService.show(_forms_forms_component__WEBPACK_IMPORTED_MODULE_3__["FormsComponent"]);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/ratings/ratings.component.css":
/*!***********************************************!*\
  !*** ./src/app/ratings/ratings.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JhdGluZ3MvcmF0aW5ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ratings/ratings.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ratings/ratings.component.ts ***!
  \**********************************************/
/*! exports provided: RatingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsComponent", function() { return RatingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RatingsComponent = /** @class */ (function () {
    function RatingsComponent() {
    }
    RatingsComponent.prototype.ngOnInit = function () {
    };
    RatingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ratings',
            template: __webpack_require__(/*! raw-loader!./ratings.component.html */ "./node_modules/raw-loader/index.js!./src/app/ratings/ratings.component.html"),
            styles: [__webpack_require__(/*! ./ratings.component.css */ "./src/app/ratings/ratings.component.css")]
        })
    ], RatingsComponent);
    return RatingsComponent;
}());



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
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAW4UNka-eD9hj8Cf9iS6k_opF6lNajZR0",
        authDomain: "hotel-management-4df44.firebaseapp.com",
        databaseURL: "https://hotel-management-4df44.firebaseio.com",
        projectId: "hotel-management-4df44",
        storageBucket: "",
        messagingSenderId: "381975081799",
        appId: "1:381975081799:web:927a6082dc099408"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\ntcc\hotel-manag\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map