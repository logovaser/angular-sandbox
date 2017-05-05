/**
 * Created by logov on 05-May-17.
 */

import {getTemplateAsync, getCtrlAsync, regComponentAsync} from './asyncLoaders'
import {redirectToLoginIfNotAuth} from './redirects'

export default function (app, $stateProvider) {
    $stateProvider
        .state({
            name: 'home',
            url: '/',
            templateProvider: getTemplateAsync(require('bundle-loader?lazy!./pages/home/base.html')),
            controller: getCtrlAsync(require('bundle-loader?lazy!./pages/home/base'),
                '$rootScope', '$scope'),
            resolve: {
                card: regComponentAsync(app, require('bundle-loader?lazy!./comp/card/base'))
            }
        })
        .state({
            name: 'login',
            url: '/login',
            templateProvider: getTemplateAsync(require("bundle-loader?lazy!./pages/login/base.html")),
            controller: getCtrlAsync(require('bundle-loader?lazy!./pages/login/base'),
                '$scope', '$http', '$state', 'userFactory')
        })
        .state({
            name: 'register',
            url: '/register',
            templateProvider: getTemplateAsync(require("bundle-loader?lazy!./pages/register/base.html")),
            controller: getCtrlAsync(require('bundle-loader?lazy!./pages/register/base'),
                '$scope', '$http', 'userFactory')
        })
        .state({
            name: 'cabinet',
            url: '/cabinet',
            templateProvider: getTemplateAsync(require("bundle-loader?lazy!./pages/cabinet/base.html")),
            controller: getCtrlAsync(require('bundle-loader?lazy!./pages/cabinet/base'),
                '$scope'),
            onEnter: ['$state', 'userFactory', function ($state, userFactory) {
                redirectToLoginIfNotAuth($state, userFactory)
            }]
        })
        .state({
            name: 'about',
            url: '/about',
            templateProvider: getTemplateAsync(require("bundle-loader?lazy!./pages/about/base.html")),
            controller: getCtrlAsync(require('bundle-loader?lazy!./pages/about/base'),
                '$scope')
        });
}
