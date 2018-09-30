(function() {

    "use strict";
  
    angular
      .module('memoryGame', ['ngMaterial', 'ui.router'])
      .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
  
        $mdThemingProvider.theme('default')
          .primaryPalette('blue')
          .accentPalette('orange');
  
        $urlRouterProvider.otherwise('/home');

        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'components/game/home.tpl.html',
            controller: 'memoryController as vm'
          })
          .state('game.easy', {
            url: '/easy',
            templateUrl: 'components/game/easy/easy.tpl.html',
            controller: 'easyGameController as vm'
          })
          .state('game.hard', {
            url: '/hard',
            templateUrl: 'components/game/hard/hard.tpl.html',
            controller: 'hardGameController as vm'
          });
      });
      
  })();
    
  