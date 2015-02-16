var gameOfLife = {
  width: 20,
  height: 20,
  stepInterval: null,

  createAndShowBoard: function () {
    // build Table HTML
    var tablehtml = '';
    for (var h=0; h<this.height; h++) {
      tablehtml += "<tr id='row+" + h + "'>";
      for (var w=0; w<this.width; w++) {
        tablehtml += "<td data-status='dead' id='" + w + "-" + h + "'></td>";
      }
      tablehtml += "</tr>";
    }

    var goltable = document.createElement("tbody");
    goltable.innerHTML = tablehtml;
    $('#board').append(goltable);
    
    // once html elements are added to the page, attach events to them
    this.setupBoardEvents();
  },

  forEachCell: function (iteratorFunc) {
    /* 
      COLLEGE.JS: Write forEachCell here. You will have to visit
                  each cell on the board, call the "iteratorFunc" function,
                  and pass into func, the cell and the cell's x & y
                  coordinates. For example: iteratorFunc(cell, x, y)
    */
  },

  toggleCell: function(cell) {
    var $c = $(cell);
    if ($c.attr('data-status') == 'dead') {
      $c.attr({ 'data-status': 'alive', 'class': 'alive' });
    } else {
      $c.attr({ 'data-status': 'dead', 'class': 'dead' });
    }
  },

  setupBoardEvents: function() {
    var onBoardClick = function (event) {
      var cell = event.toElement;
      this.toggleCell(cell);
    };
    $('#board').click(onBoardClick.bind(this));

    // setup control panel button events
    $('#step_btn').click(this.step.bind(this));
    $('#reset_btn').click(this.resetRandom.bind(this));
    $('#clear_btn').click(this.clearBoard.bind(this));
    $('#play_btn').click(this.enableAutoPlay.bind(this));
  },

  resetRandom: function () {
    var setRandomState = function(cell) {
      if (Math.random() < .5) {
        gameOfLife.toggleCell(cell);
      }
    };
    this.forEachCell(setRandomState);
  },

  clearBoard: function () {
    var clearCell = function(cell) {
      $(cell).attr({ 'data-status': 'dead','class': 'dead' });
    };
    this.forEachCell(clearCell);
  },

  countAliveNeighbors: function() {
    this.forEachCell(function (cell, x, y) {
        var aliveNeighbors = 0;

        /*
            COLLEGE.JS: Given the cell object, find the neighbors and figure out
                        how many alive neighbors there are.
        */

        $(cell).attr('data-neighbors', aliveNeighbors);
    });
  },
  
  determineAndSetNextState: function (argument) {
    var getNextState = function (currentState, numAliveNeighbors) {
      /* 
        COLLEGE.JS: Apply rules of Game of Life and return "dead" or "alive"
      */
    };

    this.forEachCell(function (cell, x, y) {
      var currentState = $(cell).attr('data-status');
      var numNeighbors = parseInt($(cell).attr('data-neighbors'));

      var newCellStatus = getNextState(currentState, numNeighbors);

      if (newCellStatus) {
        $(cell).attr({ 'data-status': newCellStatus, 'class': newCellStatus });
      }
    });
  },

  step: function () {
    this.countAliveNeighbors();
    this.determineAndSetNextState();
  },

  togglePlayPause: function () {
    if (!this.stepInterval) {
      $('#play_btn').text("Play").attr('class', 'btn btn-primary');
    } else {
      $('#play_btn').text("Pause").attr('class', 'btn btn-danger');
    }
  },

  enableAutoPlay: function () {
    /* 
      COLLEGE.JS: Write code here to call the step function repeatedly every 200ms 
                  Look up the "setInterval" and "clearInterval" functions to learn
                  how to do this. You can also use the above "togglePlayPause" function
                  to toggle the button between "Play" and "Pause".

    */
  }
};

gameOfLife.createAndShowBoard();
















