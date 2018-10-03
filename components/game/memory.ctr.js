(function() {

    "use strict";
  
    angular
      .module('memoryGame')
      .controller('memoryController', function($scope, $state, $interval, $mdDialog) {
        
        //main page declairations 
        var vm = this;
        vm.reset = reset;
        vm.easyStart = easyStart;
        vm.hardStart = hardStart;
        vm.isEasyStarted = false;
        vm.isHardStarted = false;
        vm.flip = flip;
        vm.progressBar;
        vm.determinateValue = 0;
        var self = this, j= 0, counter = 0;

        //reset the game
        function reset () {
          if (confirm("If you reset you will loose everything, Are you okay with this?")) {
            //to reload the page and reset the game 
            location.reload();
          } 
        };

        //game over popup box
        function gameOver() {
          if (confirm("Game Is Over Do you Wish to Play Again?")) {
            //to reload the page and reset the game 
            location.reload();
          } 
        };
        //easy start game initalization 
        function easyStart () {
          vm.isEasyStarted = true;
          easyShuffle();
          //to kick off the progress bar on start
          progressBar();
        };

        //hard start game initalization
        function hardStart () {
          vm.isHardStarted = true;
          hardShuffle();
          progressBar();
        }

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

        //this runs on click of one of the cards
        function flip () {
          animationClick('.flipInX1','flipInX'); 
        };

        //shuffling the cards for the easy deck
        function easyShuffle () {
          var easyCards = ['A', 'B', 'A', 'B'];
          return easyShuffledCards = _.shuffle(easyCards);
          console.log(easyShuffledCards);
        };

        //shuffling the cards for the hard deck
        function hardShuffle () {
          var hardCards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
                          'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
          return hardShuffledCards = _.shuffle(hardCards);
          console.log(hardShuffledCards);
        };



      });
  
  })();