angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.services'])
.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'public/templates/dashboard.html',
    controller: 'HomeController'
  })
  .otherwise({
    redirectTo: '/'
  });
});