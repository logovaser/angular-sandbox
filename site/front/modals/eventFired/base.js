/**
 * Created by logov on 16-May-17.
 */

import template from './base.html'

export default function ($compileProvider) {

    $compileProvider.component('eventFired', {
        bindings: {
            resolve: '<',
        },
        template
    })
}
