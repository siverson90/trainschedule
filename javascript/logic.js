

var database = firebase.database();

$("#submit-btn").on("click", function(event) {

  event.preventDefault();

  var trainNameLocal = $("#trainName").val().trim();
  var destinationLocal = $("#destination").val().trim();
  var firstTrainLocal = $("#trainArriveTime").val().trim();
  var frequencyLocal = $("#frequencyOfTrain").val().trim();


    database.ref().push({
      trainNameFB: trainNameLocal,
      destinationFB : destinationLocal,
      frequencyFB: frequencyLocal,
      firstTrainLeavingFB : firstTrainLocal
    })

  console.log("Name of Train " + trainNameLocal);
  console.log("The destination "+ destinationLocal);
  console.log("The Frequency " + frequencyLocal);
  console.log("When the first train arrives " + firstTrainLocal);
  // console.log(firstTrainToLeaveSplit);

  $("#trainName").val("");
  $("#destination").val("");
  $("#trainArriveTime").val("");
  $("#frequencyOfTrain").val("");


});

database.ref().on("child_added",function(childSnapshot, prevChildKey) {

  // Getting the frequency of each train
  var trainFrequency = parseInt(childSnapshot.val().frequencyFB);

  console.log("Name of Train " + trainFrequency +" from database");

  // Retriving the start time of each train
  var firstTrainLeaving =parseInt(childSnapshot.val().firstTrainLeavingFB);

  console.log("When the first train arrives" + firstTrainLeaving + "from database");

  // Converting the first train to leave
  var firstTrainTimeConvert = moment(firstTrainLeaving, "HH:mm").subtract(1, "years");
  console.log("The converts the time "+ firstTrainTimeConvert);

  // Current time
  var currentTime = moment();
  console.log("Current time:" + moment(currentTime).format("HH:mm"));

  // Difference in time
  var differenceInTime = moment().diff(moment(firstTrainTimeConvert), "minutes");
  console.log(differenceInTime);

  // Time apart
  var timeRemainder = differenceInTime % trainFrequency;
  console.log(timeRemainder);

  var timeTilNextTrain = trainFrequency - timeRemainder;
    console.log("Minutes till train" + timeTilNextTrain);

  var nextTrainArriving = moment().add(timeTilNextTrain, "Minutes");
  console.log("arrival time of next train " + moment(nextTrainArriving).format("HH:mm"));


  var row = $("<tr>");
  row.append($("<td>").text(childSnapshot.val().trainNameFB));
  row.append($("<td>").text(childSnapshot.val().destinationFB));
  row.append($("<td>").text(childSnapshot.val().frequencyFB));
  row.append($("<td>").text(moment(nextTrainArriving).format("HH:mm")));
  row.append($("<td>").text(timeTilNextTrain));
  $("tbody").append(row);


  // two math functions looking at current time to determine the train schedule and calculate next arriving

},function(errorObject) {
  ("there is an error"+ errorObject.val())
});

