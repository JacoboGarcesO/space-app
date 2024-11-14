document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('USERS')) || [];

        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
          localStorage.setItem('CURRENT_USER', JSON.stringify(user));
          window.location.href = '../../index.html';
        } else {
          alert('Correo o contraseña incorrectos');
        }
    });
});