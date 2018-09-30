(function() {

    "use strict";
  
    angular
      .module('memoryGame')
      .controller('memoryController', function($scope, $state, $stateParams ) {
  
        var vm = this;
        vm.easy = easy;
        vm.hard = hard;
        
        function easy() {
          console.log("EASY");
        };

        function hard() {
          console.log("HARD");
        };


      });
  
  })();