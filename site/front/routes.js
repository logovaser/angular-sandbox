/**
 * Created by logov on 05-May-17.
 */

import {getTemplateAsync, getCtrlAsync, regComponentAsync, regModuleAsync} from './asyncLoaders'
import {redirectToLoginIfNotAuth} from './redirects'

export default function ($compileProvider, $stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            component: 'home',
            resolve: {
                uib: regModuleAsync(require('bundle-loader?lazy!angular-ui-bootstrap')),
                home: regComponentAsync($compileProvider, require('bundle-loader?lazy!./pages/home/base')),
                card: regComponentAsync($compileProvider, require('bundle-loader?lazy!./comp/card/base')),
                eventFired: regComponentAsync($compileProvider, require('bundle-loader?lazy!./modals/eventFired/base'))
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
            resolve: {
                auth: redirectToLoginIfNotAuth
            }
        })
        .state({
            name: 'about',
            url: '/about',
            templateProvider: getTemplateAsync(require("bundle-loader?lazy!./pages/about/base.html")),
            controller: getCtrlAsync(require('bundle-loader?lazy!./pages/about/base'),
                '$scope')
        })
        .state({
            name: 'cameraTest',
            url: '/camera_test',
            templateProvider: getTemplateAsync(require("bundle-loader?lazy!./pages/cameraTest/base.html")),
            controller: getCtrlAsync(require('bundle-loader?lazy!./pages/cameraTest/base'),
                '$scope'),
            resolve: {
                card: regComponentAsync($compileProvider, require('bundle-loader?lazy!./comp/camera/base'))
            }
        });
}
