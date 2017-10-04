var database = firebase.database();


var currentTime= moment().format('H HH');
console.log(currentTime);

database.ref().on("child_added",function(childSnapshot){

      // var startDate = childSnapshot.val().startDate;
      // var monthlyRate = childSnapshot.val().monthlyRate;

      // var monthsWorked = moment().diff(moment(startDate, "DD-MM-YYYY"), 'months');
      // console.log(monthsWorked);

      // var total = monthsWorked * parseInt(monthlyRate);

      var row = $("<tr>");
      row.append($("<td>").text(childSnapshot.val().trainName));
      row.append($("<td>").text(childSnapshot.val().destination));
      row.append($("<td>").text(childSnapshot.val().frequency));
      row.append( $("<td>").text(childSnapshot.val().firstTrainTime));
      row.append( $("<td>").text(childSnapshot.val().firstTrainTime));
      $("tbody").append(row);


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