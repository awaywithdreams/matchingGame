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

        function cardOpen() {
          openedCards.push(this);
          var len = openedCards.length;
          if(len === 2){
              moveCounter();
              if(openedCards[0].type === openedCards[1].type){
                  matched();
              } else {
                  unmatched();
              }
          }
        };

        function matched(){
          openedCards[0].classList.add("match", "disabled");
          openedCards[1].classList.add("match", "disabled");
          openedCards[0].classList.remove("show", "open", "no-event");
          openedCards[1].classList.remove("show", "open", "no-event");
          openedCards = [];
        };

        function unmatched(){
          openedCards[0].classList.add("unmatched");
          openedCards[1].classList.add("unmatched");
          disable();
          setTimeout(function(){
              openedCards[0].classList.remove("show", "open", "no-event","unmatched");
              openedCards[1].classList.remove("show", "open", "no-event","unmatched");
              enable();
              openedCards = [];
          },1100);
        };

        function disable(){
          Array.prototype.filter.call(cards, function(card){
              card.classList.add('disabled');
          });
        };

        function enable(){
          Array.prototype.filter.call(cards, function(card){
              card.classList.remove('disabled');
              for(var i = 0; i < matchedCard.length; i++){
                  matchedCard[i].classList.add("disabled");
              }
          });
        };

        function moveCounter(){
          moves++;
          counter.innerHTML = moves;
          //start timer on first click
          if(moves == 1){
              second = 0;
              minute = 0; 
              hour = 0;
              startTimer();
          }
          // setting rates based on moves
          if (moves > 8 && moves < 12){
              for( i= 0; i < 3; i++){
                  if(i > 1){
                      stars[i].style.visibility = "collapse";
                  }
              }
          }
          else if (moves > 13){
              for( i= 0; i < 3; i++){
                  if(i > 0){
                      stars[i].style.visibility = "collapse";
                  }
              }
          }
        };

        var second = 0; 
        var minute = 0;
        var hour = 0;
        var timer = document.querySelector(".timer");
        var interval;
        function startTimer(){
            interval = setInterval(function(){
                timer.innerHTML = minute+"mins "+second+"secs";
                second++;
                if(second == 60){
                    minute++;
                    second=0;
                }
                if(minute == 60){
                    hour++;
                    minute = 0;
                }
            },1000);
          };

          function congratulations(){
            if (matchedCard.length == 16){
                clearInterval(interval);
                finalTime = timer.innerHTML;
        
                // show congratulations modal
                modal.classList.add("show");
        
                // declare star rating variable
                var starRating = document.querySelector(".stars").innerHTML;
        
                //showing move, rating, time on modal
                document.getElementById("finalMove").innerHTML = moves;
                document.getElementById("starRating").innerHTML = starRating;
                document.getElementById("totalTime").innerHTML = finalTime;
        
                //closeicon on modal
                closeModal();
            };
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


        for (var i = 0; i < cards.length; i++){
          card = cards[i];
          card.addEventListener("click", displayCard);
          card.addEventListener("click", cardOpen);
          card.addEventListener("click",congratulations);
      };
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


        for (var i = 0; i < cards.length; i++){
          card = cards[i];
          card.addEventListener("click", displayCard);
          card.addEventListener("click", cardOpen);
          card.addEventListener("click",congratulations);
      };
        };
          



      });
  
  })();