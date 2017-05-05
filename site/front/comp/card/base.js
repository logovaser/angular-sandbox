/**
 * Created by logov on 05-May-17.
 */

import './base.less'

export default function ($compileProvider) {

    $compileProvider.component('myPane', {
        bindings: {
            title: '@',
            text: '@'
        },
        template: require('./base.html'),
        controller: function () {
            
        }
    });
}
