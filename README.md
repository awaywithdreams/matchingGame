# Memory Matching Game
A simple angular matching game


## To set up the project 

`git clone https://github.com/awaywithdreams/matchingGame.git`

then cd into the memoryMatchingGame directory and run

`npm install`

from there you will want to install the http-server using npm 

`npm install http-server -g`

to run the http-server and see the application run

`http-server`

copy the http:// address into the broswer

#### To get the back-end running: 

in terminal you have to get mongo running, run this in the root project directory

`mongo --host 127.0.0.1:27017`

Leave the window open for mongo, and open a new terminal window and run

`node server.js`

#### To run mocha tests

in terminal enter 

`npm Test`

your test results should look like

```Array
    #indexOf()
      ✓ should return -1 when the value is not present

  Math
    ✓ should test if 3*3 = 9

  easyCards
    ✓ should have an indexOf -1
