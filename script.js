document.addEventListener("DOMContentLoaded", function () {
    // Obtener botones de los ciclos
    const cycleButtons = document.querySelectorAll(".cycle-btn");
    const cycleContent = document.querySelector("#cycle-5"); // Contenido de ejemplo

    // Agregar evento a cada botón
    cycleButtons.forEach(button => {
        button.addEventListener("click", function () {
            const selectedCycle = this.dataset.cycle;

            // Ocultar todo el contenido de ciclos
            document.querySelectorAll(".cycle-content").forEach(content => {
                content.style.display = "none";
            });

            // Mostrar el contenido del ciclo seleccionado
            const selectedContent = document.querySelector(`#cycle-${selectedCycle}`);
            if (selectedContent) {
                selectedContent.style.display = "block";
            }
        });
    });

    // Por defecto, mostrar el contenido del primer ciclo
    cycleContent.style.display = "block";
});