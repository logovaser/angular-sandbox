import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngLocale from 'angular-i18n/uk-ua'
import ngTranslate from 'angular-translate/dist/angular-translate'
import ngTranslatePartial from 'angular-translate/dist/angular-translate-loader-partial/angular-translate-loader-partial'

import userFactory from './userFactory'
import Routes from './routes'

let myApp = angular.module('myApp', [uiRouter, ngLocale, ngTranslate, ngTranslatePartial]);

myApp.config(['$compileProvider', '$stateProvider', '$locationProvider', '$translateProvider', function ($compile, $state, $location, $translate) {
    Routes($state);
    $location.hashPrefix('');
    $location.html5Mode(true);
    $translate.useLoader('$translatePartialLoader', {urlTemplate: '/i18n/{part}/{lang}.json'});
    $compile.debugInfoEnabled(false);
}]);

myApp.factory('userFactory', userFactory);

myApp.controller('headerCtrl', ['$scope', '$translate', function ($scope, $translate) {

    $translate.use('ru');

    $scope.languages = [{key: 0, value: 'en', display: 'English'}, {key: 1, value: 'ru', display: 'Russian'}];

    $scope.$watch('currentLanguage', newVal => {
        if (newVal) $translate.use(newVal)
    });

}]);
