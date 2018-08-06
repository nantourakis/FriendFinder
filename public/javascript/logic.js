$(document).ready(function(){
// When the user clicks on the button, open the modal
$("#modal-btn").on("click", function(event) {
    event.preventDefault();
    console.log("modal!")
    var newFriend = {
        name: $("#nameField").val().trim(),
        pictureUrl: $("#photo-link").val().trim(),
        scores: [parseInt($("#q1").val().trim()),parseInt($("#q2").val().trim()),parseInt($("#q3").val().trim()),parseInt($("#q4").val().trim()),parseInt($("#q5").val().trim()),parseInt($("#q6").val().trim()),parseInt($("#q7").val().trim()),parseInt($("#q8").val().trim()),parseInt($("#q9").val().trim()),parseInt($("#q10").val().trim()),]
    }
    console.log(newFriend);

    //Our AJAX post method to send user data to friends array in friends.js
    $.post("/api/friends", newFriend,
    function(data) {
    
    //'data' is returned from apiRoutes with matched friend object    
    $('#match-name').html(`<h5>${data.name}</h5>`);
    $('#match-pic').html(`<img src="${data.pictureUrl}"/>`);
      // Clear the form when submitting
      $("#nameField").val("");
      $("#photo-link").val("");
      $("#q1").val("1");
      $("#q2").val("1");
      $("#q3").val("1");
      $("#q4").val("1");
      $("#q5").val("1");
      $("#q6").val("1");
      $("#q7").val("1");
      $("#q8").val("1");
      $("#q9").val("1");
      $("#q10").val("5");
    });

    //Makes our modal appear!
    $("#myModal").css("display", "block");
});

// When the user clicks on <span> (x), close the modal
$(".close").on("click", function() {
    $("#myModal").css("display", "none");
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == $("#myModal")) {
        $("#myModal").css("display", "none");
    }
}
})

