const signUpNowButton = document.getElementById('sign-up-now');
const signInNowButton = document.getElementById('sign-in-now');
const registerContainer = document.getElementById('register');

signUpNowButton.addEventListener('click', () => {
    registerContainer.classList.add('active');
});

signInNowButton.addEventListener('click', () => {
    registerContainer.classList.remove('active');
});