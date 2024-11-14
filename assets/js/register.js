document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const genero = document.getElementById('genero').value;

        const user = {
            name,
            email,
            password,
            genero
        };

        const users = JSON.parse(localStorage.getItem('USERS')) || [];

        users.push(user);

        localStorage.setItem('USERS', JSON.stringify(users));

        window.location.href = './login.html';
    });
});