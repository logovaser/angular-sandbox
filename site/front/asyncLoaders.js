/**
 * Created by logov on 05-May-17.
 */

import depLoad from './dependencyLoader'

export function getTemplateAsync(load) {
    return ['$q', $q => $q(res => {
        load(function (file) {
            res(file);
        });
    })]
}

export function regModuleAsync(load) {
    return ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => $q(res => {
        load(data => {
            $ocLazyLoad.inject(data);
            res();
        });
    })]
}

export function regComponentAsync($compileProvider, load) {
    return ['$q', $q => $q(res => {
        load(data => {
            data.default($compileProvider);
            res()
        });
    })]
}

export function getCtrlAsync(load, ...deps) {
    return [...deps, function (...args) {
        load(function (file) {
            file.default.apply(this, args);
            deps.forEach((dep, i) => {
                if (dep === '$scope') args[i].$apply()
            });
        });
    }]
}
