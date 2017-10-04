var database = firebase.database();
var currentTime = "";

database.ref().on("value",function(snapshot){

            // snapshot.forEach(function(){
            //     console.log('<td>' + val().trainName + '</td>');
            //     console.log('<td>' + val().destination + '</td>');
            //     console.log('<td>' + val().firstTrainTime + '</td>');
            //     console.log('<td>' + val().frequency + '</td>');
            // });

            snapshot.forEach(function(element){
              console.log(element.val().trainName);
            })


  // two math functions looking at current time to determine the train schedule and calculate next arriving

},function(errorObject){

});

$(".submit-btn").on("click", function(event) {

  event.preventDefault();

  var trainName = $("#trainName").val().trim();
  var destination = $("#destination").val().trim();
  var firstTrainTime = $("#trainArriveTime").val().trim();
  var frequency = $("#frequencyOfTrain").val().trim();

    database.ref().push({
      trainName: trainName,
      destination : destination,
      firstTrainTime : firstTrainTime,
      frequency: frequency
    })

  console.log(trainName);
  console.log(destination);
  console.log(frequency);
  console.log(trainName);


})