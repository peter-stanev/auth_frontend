/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function () {
  'use strict';

  angular
    .module('app.pages')
    .controller('LoginFormController', LoginFormController);

  LoginFormController.$inject = ['$http', '$state', '$location', 'AuthService', 'config'];

  function LoginFormController($http, $state, $location, AuthService, config) {

    var vm = this;

    activate();

    ////////////////

    function activate() {
      // bind here all data from the form
      vm.account = {};
      // place the message if something goes wrong
      vm.authMsg = '';

      vm.login = function () {
        vm.authMsg = '';

        if (vm.loginForm.$valid) {
          AuthService.login({
            email: vm.account.email,
            password: vm.account.password
          }, function (user) {
            if (user.Error)
              vm.authMsg = 'Incorrect credentials';
            else
              $state.go('app.dashboard');

          });
        } else {
          // set as dirty if the user click directly to login so we show the validation messages
          /*jshint -W106*/
          vm.loginForm.account_email.$dirty = true;
          vm.loginForm.account_password.$dirty = true;
        }
      };


    }


  }
})();