document.addEventListener('DOMContentLoaded', function(){
    const passVisibilityButtons = document.querySelectorAll('.pass-visibility');

    passVisibilityButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const input = button.previousElementSibling;
            const icon = button.querySelector('i');

            if (input.type === 'password') {
                input.type = 'text';
                icon.classList.replace('fa-eye-slash', 'fa-eye');
            } else {
                input.type = 'password';
                icon.classList.replace('fa-eye', 'fa-eye-slash');
            }
        });
    });
});