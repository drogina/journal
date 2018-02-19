'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('journalApp', [
  'ngRoute',
  'ngResource',
  'journalApp.edit',
  'journalApp.version'
]).
config(['$locationProvider', '$routeProvider', '$resourceProvider', function($locationProvider, $routeProvider, $resourceProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.otherwise({redirectTo: '/entries'});

  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
