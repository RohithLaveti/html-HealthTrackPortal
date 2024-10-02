// script.js

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const aadhaar = document.getElementById('aadhaar').value;
    
    alert(`Registration successful for ${name}`);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const abhaNumber = document.getElementById('abhaNumber').value;
    
    alert(`Logged in with ABHA Number: ${abhaNumber}`);
});

document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newEmail = document.getElementById('newEmail').value;
    const newPhone = document.getElementById('newPhone').value;
    
    alert(`Profile updated: Email - ${newEmail}, Phone - ${newPhone}`);
});
