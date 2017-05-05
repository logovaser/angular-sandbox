import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngLocale from 'angular-i18n/uk-ua'

import userFactory from './userFactory'
import Routes from './routes'

let myApp = angular.module('myApp', [uiRouter, ngLocale]);

myApp.config(['$compileProvider', '$stateProvider', '$locationProvider', function ($compile, $state, $location) {
    Routes($state);
    $location.hashPrefix('');
    $location.html5Mode(true);
    $compile.debugInfoEnabled(false);
}]);

myApp.factory('userFactory', userFactory);

myApp.controller('headerCtrl', ['$scope', function ($scope) {



}]);
