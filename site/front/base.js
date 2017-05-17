import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'
import './base.less'

import angular from 'angular'
import uiRouter from 'angular-ui-router'
// import ngLocale from 'angular-i18n/uk-ua'
import ocLazyLoad from 'oclazyload/dist/modules/ocLazyLoad.core'
import 'oclazyload/dist/modules/ocLazyLoad.loaders.core'

import userFactory from './userFactory'
import Routes from './routes'

let app = angular.module('myApp', [uiRouter, ocLazyLoad]);

app.config(['$compileProvider', '$stateProvider', '$locationProvider', function ($compile, $state, $location) {
    $location.hashPrefix('');
    $location.html5Mode(true);
    $compile.debugInfoEnabled(false);
    Routes($compile, $state);
}]);

app.factory('userFactory', userFactory);

app.controller('headerCtrl', ['$scope', function ($scope) {


}]);
