var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .when('/resume', {
      templateUrl: '/views/resume.html',
      controller: 'ResumeController',
      controllerAs: 'resume'
    })
    .when('/contact', {
      templateUrl: '/views/contact.html',
      controller: 'ContactController',
      controllerAs: 'contact'
    })
    .otherwise({
      redirectTo: '/home'
    });//End route

}]);//End config;
