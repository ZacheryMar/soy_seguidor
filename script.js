const form = document.getElementById('login-form');

// Configuración de "base de datos" simulada
const VALID_USER = {
    email: 'ADMIN123@SEGUIDOR.COM',
    password: 'ADMIN_PRO_2026!'
};

const showNotification = (message, type = 'success') => {
    const container = document.getElementById('notification-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'success' ? 'bg-success' : 'bg-error'}`;
    toast.style.backgroundColor = type === 'success' ? '#10b981' : '#ef4444';
    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email === VALID_USER.email && password === VALID_USER.password) {
        showNotification('¡Bienvenido! Redirigiendo...');
        // Guardar estado de sesión simple
        localStorage.setItem('isLoggedIn', 'true');
        setTimeout(() => window.location.href = 'principal.html', 1500);
    } else {
        showNotification('Credenciales incorrectas', 'error');
    }
});