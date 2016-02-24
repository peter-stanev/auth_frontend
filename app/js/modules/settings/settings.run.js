(function() {
  'use strict';

  angular
    .module('app.settings')
    .run(settingsRun);

  settingsRun.$inject = ['$rootScope'];

  function settingsRun($rootScope){

    // Global Settings
    // -----------------------------------
    $rootScope.app = {
      name: 'Auth Demo',
      description: 'Token Based Auth Demo Frontend'
    };


  }

})();
