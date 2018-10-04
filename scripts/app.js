(function() {

    "use strict";
  
    angular
      .module('memoryGame', ['ngMaterial', 'ui.router'])
      .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
  
        $mdThemingProvider.theme('default')
          .primaryPalette('indigo')
          .accentPalette('grey');
  
        $urlRouterProvider.otherwise('/home');

        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'components/game/home.tpl.html',
            controller: 'memoryController as vm'
          });

          

      });
      
  })();
    
  