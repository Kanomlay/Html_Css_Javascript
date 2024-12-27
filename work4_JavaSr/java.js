$(document).ready(function() {
    $('button').cilck(function() {
        var username = $('#Username').val();
        var password = $('#Password').val();
        if (Username === '123' && Password === '123') {
           window.localStorage.href = 'http://';
        }
        else {
            $('#message').text("Invalid username or password");
        }
        
});
} );