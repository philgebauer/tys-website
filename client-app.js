var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/contact', {
      templateUrl: '../public/views/contact.html',
      controller: 'ContactController',
      controllerAs: 'contact'
    })
    .when('/classes', {
      templateUrl: '../public/views/classes.html',
      controller: 'ClassesController',
      controllerAs: 'classes'
    })
    .otherwise({
      redirectTo: '/home'
    });//End route

}]);//End config;
