$(document).ready(function() {
    $('#waitlistForm').on('submit', function(e) {
        e.preventDefault();

        const email = $('#email').val();

        if (typeof window.addEmailToWaitlist === 'function') {
            window.addEmailToWaitlist(email);

            $('#message').text("You've been added to the waitlist!");
            $('#waitlistForm')[0].reset();
        } else {
            $('#message').text('There was an error. Please try again.');
        }
    });
});
