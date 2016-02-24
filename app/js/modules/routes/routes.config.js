/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function () {
'use strict';

angular
  .module('app.routes')
  .config(routesConfig);

routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];

function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper) {

    // Set the following to true to enable the HTML5 Mode
    // You may have to set <base> tag in index and a routing configuration in your server
    $locationProvider.html5Mode(false);

    // defaults to login
    $urlRouterProvider.otherwise('/page/login');


  //
  // Application Routes
  // -----------------------------------
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: helper.basepath('app.html')
    })
    .state('app.dashboard', {
      url: '/dashboard',
      title: 'Dashboard',
      templateUrl: helper.basepath('dashboard.html')
    })
    .state('app.new-request', {
      url: '/new-request',
      title: 'New Request',
      templateUrl: helper.basepath('new-request.html')
    })
    .state('app.home', {
      url: '/home',
      title: 'Home',
      controller: 'HomeController',
      controllerAs: 'home',
      templateUrl: helper.basepath('home.html')
    })
    //
    // Single Page Routes
    // -----------------------------------
    .state('page', {
      url: '/page',
      templateUrl: 'public/pages/page.html'
    })
    .state('page.login', {
      url: '/login',
      title: 'Login',
      templateUrl: 'public/pages/login.html'
    })
    .state('page.register', {
      url: '/register',
      title: 'Register',
      templateUrl: 'public/pages/register.html'
    })
    .state('page.recover', {
      url: '/recover',
      title: 'Recover',
      templateUrl: 'public/pages/recover.html'
    })
    .state('page.recover-change-password', {
      url: '/recover-change-password',
      title: 'Recover Change Password',
      templateUrl: 'public/pages/recover-change-password.html'
    })
    .state('page.lock', {
      url: '/lock',
      title: 'Lock',
      templateUrl: 'public/pages/lock.html'
    })
    .state('page.404', {
      url: '/404',
      title: 'Not Found',
      templateUrl: 'public/pages/404.html'
    })
    //
    //
    // CUSTOM RESOLVES
    //   Add your own resolves properties
    //   following this object extend
    //   method
    // -----------------------------------
    // .state('app.someroute', {
    //   url: '/some_url',
    //   templateUrl: 'path_to_template.html',
    //   controller: 'someController',
    //   resolve: angular.extend(
    //     helper.resolveFor(), {
    //     // YOUR RESOLVES GO HERE
    //     }
    //   )
    // })
  ;
} // routesConfig

})();