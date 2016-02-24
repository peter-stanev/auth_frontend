(function () {
    'use strict';

    angular
        .module('custom', [
            // request the the entire framework
            'demo',
            // or just modules
            'app.core',
            'app.sidebar'
            /*...*/
        ]);
})();