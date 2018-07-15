//variables

var car = {
    make: "BMW",
    model: "328i",
    colour: "Navy Blue",
    mileage: 151300,
    isWorking: true,

    driveToWork: function() {

      alert("Old Mileage: " + this.mileage);

      this.mileage = this.mileage + 36.8;

      alert("New mileage: " + this.mileage);
    },

    driveToBoyfriendHouse: function() {

      alert("Old Mileage: " + this.mileage);

      this.mileage = this.mileage + 312;

      alert("New Mileage: " + this.mileage);
      
    },

    getTuneUp: function() {
      alert("Car is ready to go!");
      this.isWorking = true;
    },

    honk: function() {
      alert("Honk! Honk!");
    },

    getOilChange: function(){
        if(car.mileage === this.mileage){
            alert("Car needs an oil change!");
            this.mileage = car.mileage + 8000;
            this.isWorking = false;
            
        }
      
    }
  };
// stats that will shoot out to the console
  function reWriteStats(){
    console.log("Make: " + car.make);
    console.log("Model: " + car.model);
    console.log("Colour: " + car.colour);
    console.log("Mileage: " + car.mileage);
    console.log("Is Working: " + car.isWorking);
    console.log("-----------------------");
  }
    // on the relesase of the choosen key 
    document.onkeyup = function(event){
    //the user selectiong
    var userSelection = event.key.toLowerCase();


        // if "w" is pressed the km to my drive to and from work is calculated
        if (userSelection === "w"){
            car.driveToWork();
            reWriteStats();
         }

        //user press "t" car tune up and honk funcitons get activated
        if (userSelection === "t"){
           car.getTuneUp();
            car.honk();
            reWriteStats();
        }
        
        // if user press "b " the km it takes to drive back and forth to my boyfriends house it logged
        if (userSelection === "b"){
          car.driveToBoyfriendHouse();
            reWriteStats();  
        }
        // if the user press "h" the application will alert the honk function
        if (userSelection === "h"){
            car.honk();
            reWriteStats();
        }
        // if "s" is pressed it will let you know the stats and if an oil change is required will alert user car doesnt work
        if (userSelection === "s"){
            car.getOilChange();
            reWriteStats();
        }
    }