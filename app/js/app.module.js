// APP START
// ----------------------------------- 

(function () {
  'use strict';

  angular
    .module('demo', [
      'app.core',
      'app.settings',
      'app.routes'
    ])
    .constant('config', {
      apiBaseUrl: 'http://localhost:3000/'
    })
  ;
  //var baseURL = "http://api.mykomae.com/";
  //var baseURL = "http://localhost:3000/";

})();