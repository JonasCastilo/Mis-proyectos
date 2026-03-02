document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');
    
    // Elementos para el menú de celular
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    // Abrir/Cerrar menú en celular
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Lógica de las vistas (SPA)
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if(button.hasAttribute('download')) return;
            
            e.preventDefault(); 

            const targetId = button.getAttribute('data-target');
            if(!targetId) return;

            // Ocultar todas las vistas
            views.forEach(view => {
                view.classList.remove('active');
            });

            // Quitar resaltado de botones
            document.querySelectorAll('.nav-links .nav-btn').forEach(btn => {
                btn.classList.remove('active-link');
            });

            // Mostrar vista seleccionada
            const targetView = document.getElementById(targetId);
            if (targetView) {
                targetView.classList.add('active');
            }

            if(button.closest('.nav-links')){
                button.classList.add('active-link');
            }

            // Cerrar el menú de celular automáticamente al elegir una opción
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});