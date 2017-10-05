

var database = firebase.database();

$("#submit-btn").on("click", function(event) {

  event.preventDefault();

  var trainName = $("#trainName").val().trim();
  var destination = $("#destination").val().trim();
  var firstTrainToLeave = parseInt(moment($("#trainArriveTime").val().trim(),"HH H").format("HH H"));
  var frequency = $("#frequencyOfTrain").val().trim();

    database.ref().push({
      trainName: trainName,
      destination : destination,
      frequency: frequency,
      firstTrainToLeave : firstTrainToLeave
    })

  console.log(trainName);
  console.log(destination);
  console.log(frequency);
  console.log(typeof(firstTrainToLeave));

  $("#trainName").val("");
  $("#destination").val("");
  $("#trainArriveTime").val("");
  $("#frequencyOfTrain").val("");


})

database.ref().on("child_added",function(childSnapshot, prevChildKey){

      // Getting the frequency of each train
      var trainFrequency = parseInt(childSnapshot.val().frequency);

      console.log(trainFrequency);

      // Retriving the start time of each train
      var firstTrainLeaving =parseInt(childSnapshot.val().firstTrainToLeave);

      console.log(firstTrainLeaving);

      // Converting the first train to leave
      var firstTrainTimeConvert = moment(firstTrainLeaving, "HH H").subtract(1, "years");
      console.log(firstTrainTimeConvert);

      // // Current time
      var currentTime = moment();
      console.log("Current time:" + moment(currentTime).format("HH H"));

      var differenceInTime = moment().diff(moment(firstTrainTimeConvert), "minutes");
      console.log(differenceInTime);

      var timeRemainder = differenceInTime % trainFrequency;
      console.log(timeRemainder);

      var timeTilNextTrain = trainFrequency - timeRemainder;
        console.log("Minutes till train" + timeTilNextTrain);

      var nextTrainArriving = moment().add(timeTilNextTrain, "Minutes");
      console.log("arrival time of next train " + moment(nextTrainArriving).format("HH H"));


      var row = $("<tr>");
      row.append($("<td>").text(childSnapshot.val().trainName));
      row.append($("<td>").text(childSnapshot.val().destination));
      row.append($("<td>").text(childSnapshot.val().frequency));
      row.append($("<td>").text(moment(nextTrainArriving).format("HH H")));
      row.append($("<td>").text(timeTilNextTrain));
      $("tbody").append(row);


  // two math functions looking at current time to determine the train schedule and calculate next arriving

},function(errorObject){
  ("there is an error"+ errorObject.val())
});

