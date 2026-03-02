document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los elementos que tengan la clase .nav-btn
    const navButtons = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Permitimos la descarga si el botón tiene el atributo 'download'
            if(button.hasAttribute('download')) return;
            
            e.preventDefault(); 

            const targetId = button.getAttribute('data-target');
            if(!targetId) return;

            // Ocultar todas las vistas
            views.forEach(view => {
                view.classList.remove('active');
            });

            // Quitar el color de todos los enlaces del menú
            document.querySelectorAll('.nav-links .nav-btn').forEach(btn => {
                btn.classList.remove('active-link');
            });

            // Mostrar la vista seleccionada
            const targetView = document.getElementById(targetId);
            if (targetView) {
                targetView.classList.add('active');
            }

            // Resaltar en el menú si el clic vino de ahí
            if(button.closest('.nav-links')){
                button.classList.add('active-link');
            }
        });
    });
});