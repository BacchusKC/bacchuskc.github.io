$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyDthWXCl-tvwhxK5C59SoAaJyJU0cWDk0I",
        authDomain: "contact-form-92854.firebaseapp.com",
        databaseURL: "https://contact-form-92854.firebaseio.com",
        projectId: "contact-form-92854",
        storageBucket: "contact-form-92854.appspot.com",
        messagingSenderId: "1020685898778"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    $("#sendContact").on('click', function () {
        event.preventDefault();
        var name = $("#name").val().trim();
        var email = $("#email").val().trim();
        var comment = $("#comment").val().trim();
        var newContact = {
            name: name,
            email: email,
            comment: comment
        };

        database.ref().push(newContact);

        $("#name").val("");
        $("#email").val("");
        $("#comment").val("Thanks, I will get back to you soon!");

    });
});