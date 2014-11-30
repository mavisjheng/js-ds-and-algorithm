// modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array
// create functions to display the monthly average, a specific week’s average, and all the weeks’ averages
function monthlyTemp() {
  this.dataStore = [];
  this.createTemp = createTemp;
  this.monthlyAverage = monthlyAverage;
  this.allWeekAverage = allWeekAverage;
  this.specificWeekAve = specificWeekAve;
  
  // store data in a two-dimensional array and create temperature by Math.random(), temperature from 10 ~ 40
  function createTemp() {
    var rows = 5;
    for (var i = 0; i < rows; i++) {
      this.dataStore[i] = [];
      if (i != 4) {                                       // first 4 weeks, 7 days a week
        for(var column = 0; column < 7; column++) {
          var temp = (Math.floor(Math.random() * 31)) + 10;
          this.dataStore[i].push(temp);
        }
        console.log("Week " + (i+1) + ": " + this.dataStore[i].join());
      }
      else {                                              // last week, 3 days
        for(var colun = 0; colun < 3; colun++) {
          var temperature = (Math.floor(Math.random() * 31)) + 10;
          this.dataStore[i].push(temperature);
        }
        console.log("Week " + (i+1)  + ": " + this.dataStore[i].join());
      }
    }
  }
  
  // temperature total / days total
  function monthlyAverage() {
    var total = 0;
    var days = 0;
    for(var i = 0; i < this.dataStore.length; i++) {
     for(var j = 0; j < this.dataStore[i].length; j++) {
       total += this.dataStore[i][j];
       days ++;
     }
    }
    console.log("monthly average: " + (total / days).toFixed(2));
    return (total / days).toFixed(2);
  }
  
  // display average for all week
  function allWeekAverage() {
    var total = 0;
    var days = 0;
    for(var i = 0; i < this.dataStore.length; i++) {
      for(var j = 0; j < this.dataStore[i].length; j++) {
        total += this.dataStore[i][j];
        days ++;
      }
      console.log("Week " + (i+1)  + " average: " + (total / days).toFixed(2));
      total = 0;
      days = 0;
    }
  }
  
  // specify specific week to get its average 
  function specificWeekAve(week) {
    var total = 0;
    var days = 0;
    var i = week-1;
    for(var j = 0; j < this.dataStore[i].length; j++) {
      total += this.dataStore[i][j];
      days ++;
    }
    console.log("Week " + (i+1)  + " average: " + (total / days).toFixed(2));
  }
}

var may = new monthlyTemp();
may.createTemp();
may.monthlyAverage();
may.allWeekAverage();
may.specificWeekAve(1);
may.specificWeekAve(2);
may.specificWeekAve(3);
may.specificWeekAve(4);
may.specificWeekAve(5);

