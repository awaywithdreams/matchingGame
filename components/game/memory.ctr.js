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
          easyShuffle();
          //to kick off the progress bar on start
          progressBar();
        };

        //hard start game initalization
        function hardStart () {
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
          var easyShuffledCards = _.shuffle(easyCards);
          console.log(easyShuffledCards);
        };

        //shuffling the cards for the hard deck
        function hardShuffle () {
          var hardCards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
                          'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
          var hardShuffledCards = _.shuffle(hardCards);
          console.log(hardShuffledCards);
        };

        //actual game logic
        function playGame(shuffledCards){
          var shuffledCards = easyShuffledCards || hardShuffledCards;
          this.layout = makegrid(shuffledCards);
          this.unmatchedPairs = shuffledCards.length;

          this.flipCard = function(card) {
            if (card.flipped) {
              return;
            }
            card.flip();
            if (!this.firstPick || this.secondPick) {
        
              if (this.secondPick) {
                this.firstPick.flip();
                this.secondPick.flip();
                this.firstPick = this.secondPick = undefined;
              }
        
              this.firstPick = tile;
        
            } else {
        
              if (this.firstPick.title === tile.title) {
                this.unmatchedPairs--;
                this.firstPick = this.secondPick = undefined;
              } else {
                this.secondPick = tile;
              }
            }
          }
        };

        //making the grid for the matching game
        function makeGrid(tileDeck) {
          var gridDimension = Math.sqrt(tileDeck.length),
              grid = [];
        
          for (var row = 0; row < gridDimension; row++) {
            grid[row] = [];
            for (var col = 0; col < gridDimension; col++) {
                grid[row][col] = removeRandomTile(tileDeck);
            }
          }
        
          return grid;
        }

        
        function removeRandomTile(tileDeck) {
          var i = Math.floor(Math.random()*tileDeck.length);
          return tileDeck.splice(i, 1)[0];
        }
        
        
      });
  
  })();