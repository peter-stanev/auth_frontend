// APP START
// ----------------------------------- 

(function () {
  'use strict';

  angular
    .module('demo', [
      'app.core',
      'app.settings',
      'app.routes',
      'app.pages',
      'app.utils'
    ])
    .constant('config', {
      apiBaseUrl: 'http://localhost:8080/'
    })
  ;
  //var baseURL = "http://api.mykomae.com/";
  //var baseURL = "http://localhost:3000/";

})();