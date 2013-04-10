'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: MyCtrl1});
    $routeProvider.when('/product', {templateUrl: 'partials/product.html', controller: MyCtrl2});
    $routeProvider.when('/download', {templateUrl: 'partials/download.html', controller: MyCtrl3});
    $routeProvider.when('/connect', {templateUrl: 'partials/connect.html', controller: MyCtrl4});
    $routeProvider.when('/preorder', {templateUrl: 'partials/preorder.html', controller: MyCtrl5});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
