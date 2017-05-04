import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngLocale from 'angular-i18n/uk-ua'
import ngTranslate from 'angular-translate/dist/angular-translate'
import ngTranslatePartial from 'angular-translate/dist/angular-translate-loader-partial/angular-translate-loader-partial'

let myApp = angular.module('myApp', [uiRouter, ngLocale, ngTranslate, ngTranslatePartial]);

myApp.config(function ($translateProvider) {
    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: '/i18n/{part}/{lang}.json'
    });
});

myApp.config(['$stateProvider', '$compileProvider', '$locationProvider', function ($stateProvider, $compileProvider, $locationProvider) {
    $stateProvider
        .state({
            name: 'home',
            url: '/',
            templateProvider: ['$q', $q => $q(resolve => {
                require.ensure([], () => resolve(require('./pages/home/base.html')));
            })],
            controller: ['$scope', function ($scope) {
                require.ensure([], () => {
                    require('./pages/home/base').default($scope);
                    $scope.$apply();
                })
            }]
        })
        .state({
            name: 'about',
            url: '/about',
            templateProvider: ['$q', $q => $q(resolve => {
                require.ensure([], () => resolve(require('./pages/about/base.html')));
            })],
            controller: ['$scope', '$translatePartialLoader', function ($scope, transPartLoad) {
                require.ensure([], () => {
                    require('./pages/about/base').default($scope, transPartLoad);
                    $scope.$apply();
                });
            }]
        });

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode(true);
    $compileProvider.debugInfoEnabled(false);
}]);

myApp.controller('headerCtrl', ['$scope', '$translate', function ($scope, $translate) {

    $scope.languages = [{key: 0, value: 'en', display: 'English'}, {key: 1, value: 'ru', display: 'Russian'}];

    $scope.$watch('currentLanguage', newVal => $translate.use(newVal));

}]);
