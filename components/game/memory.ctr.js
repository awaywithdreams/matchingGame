(function() {

    "use strict";
  
    angular
      .module('memoryGame')
      .controller('memoryController', function($scope, $state, $interval, $mdDialog) {
        
        //main page declairations 
        var vm = this;
        vm.reset = reset;
        vm.start = start;
        vm.flip = flip;
        vm.progressBar;
        vm.determinateValue = 0;
        var self = this, j= 0, counter = 0;
        var tileNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

        //reset the game
        function reset () {
          if (confirm("If you reset you will loose everything, Are you okay with this?")) {
            //to reload the page and reset the values 
            location.reload();
          } 
        };

        //game over popup box
        function gameOver() {
          if (confirm("Game Is Over Do you Wish to Play Again?")) {
            //to reload the page and reset the values 
            location.reload();
          } 
        };
        //start game initalization 
        function start () {
          console.log("START GAME");
          //to kick off the progress bar on start
          //progressBar();
        };

        // Function for the progress
        function progressBar () {
          $interval(function() {
            self.determinateValue += 1;
            if (self.determinateValue > 200) self.determinateValue = 0;
              if ( counter++ % 4 === 0 ) j++;
          }, 200, 0, true);          
          //setTimeout(gameOver, 1000);
        };

        //to make flipping animation
        function animationClick(element, animation){
          element = $(element);
          element.click(
            function() {
              element.addClass('animated ' + animation);
              window.setTimeout( function(){
                  element.removeClass('animated ' + animation);
              }, 2000);
            }
          );
        };  

        function flip () {
          animationClick('.flipInX1','flipInX'); 
        };

        
      });
  
  })();