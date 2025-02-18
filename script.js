// script.js

const signupform = document.getElementById('signupform');
const signinform = document.getElementById('signinform');
const togglesignin = document.getElementById('togglesignin');
const togglesignup = document.getElementById('togglesignup');

togglesignin.addEventListener('click', function() {
    signupform.style.display = "none";
    signinform.style.display = "block";
});

togglesignup.addEventListener('click', function() {
    signinform.style.display = "none";
    signupform.style.display = "block";
});
togglesignup.addEventListener('click', function() {
    signinform.style.display = "none";
    signupform.style.display = "block";
});
