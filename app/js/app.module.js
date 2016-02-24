// APP START
// ----------------------------------- 

(function () {
  'use strict';

  angular
    .module('demo', [
      'app.core',
      'app.settings'

    ])
    .constant('config', {
      apiBaseUrl: 'http://localhost:3000/'
    })
  ;
  //var baseURL = "http://api.mykomae.com/";
  //var baseURL = "http://localhost:3000/";

})();