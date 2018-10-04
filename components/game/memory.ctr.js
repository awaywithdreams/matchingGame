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
          progressBar();
          easyGame();
        };

        //hard start game initalization
        function hardStart () {
          vm.isHardStarted = true;
          hardGame();
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

        var displayCard = function (){
          this.classList.toggle("open");
          this.classList.toggle("show");
          this.classList.toggle("disabled");
        };
        //shuffling the cards for the easy deck
        function easyShuffle () {
          var easyShuffledCards = [];
          var easyCards = ['A', 'B', 'A', 'B'];
          return easyShuffledCards = _.shuffle(easyCards);
        };

        //shuffling the cards for the hard deck
        function hardShuffle () {
          var hardShuffledCards = [];
          var hardCards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D',
                          'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];
          return hardShuffledCards = _.shuffle(hardCards);
          console.log(hardShuffledCards);
        };

        //logic for easy game
        function easyGame () {
          var card = document.getElementsByClassName("card");
          var deck = document.getElementById("card-deck");
          var moves = 0;
          var counter = document.querySelector(".moves");
          var matchedCard = document.getElementsByClassName("match");
          var modal = document.getElementById("popup1")
          var openedCards = [];

          var cards = easyShuffle();
          for (var i = 0; i < cards.length; i++){
            deck.innerHTML = "";
            [].forEach.call(cards, function(item) {
                deck.appendChild(item);
            });
            cards[i].classList.remove("show", "open", "match", "disabled");
          }
            moves = 0;
            counter.innerHTML = moves;

            second = 0;
            minute = 0; 
            hour = 0;
            var timer = document.querySelector(".timer");
            timer.innerHTML = "0 mins 0 secs";
            clearInterval(interval);
        };

        //logic for hard game
        function hardGame () {
          var card = document.getElementsByClassName("card");
          var deck = document.getElementById("card-deck");
          var moves = 0;
          var counter = document.querySelector(".moves");
          var matchedCard = document.getElementsByClassName("match");
          var modal = document.getElementById("popup1")
          var openedCards = [];

          var cards = hardShuffle();
          for (var i = 0; i < cards.length; i++){
            deck.innerHTML = "";
            [].forEach.call(cards, function(item) {
                deck.appendChild(item);
            });
            cards[i].classList.remove("show", "open", "match", "disabled");
          }
            moves = 0;
            counter.innerHTML = moves;

            second = 0;
            minute = 0; 
            hour = 0;
            var timer = document.querySelector(".timer");
            timer.innerHTML = "0 mins 0 secs";
            clearInterval(interval);
        };
          



      });
  
  })();