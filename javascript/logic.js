var database = firebase.database();
var currentTime = "";

database.ref().on("child_added",function(snapshot){


  $("#trainNameColumn").append(snapshot.val().trainName);
  $("#destinationColumn").append(snapshot.val().destination);
  $("#frequencyColumn").append(snapshot.val().firstTrainTime);
  $("#NextTrainColumn").append(snapshot.val().frequency);


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