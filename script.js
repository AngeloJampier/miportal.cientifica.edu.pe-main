
function showSection(sectionId, event) {
    // Oculta todas las secciones
    const contents = document.querySelectorAll('.credits-content');
    const texts = document.querySelectorAll('.credits-navigation p');
    contents.forEach(content => content.classList.remove('active'));
    texts.forEach(text => text.classList.remove('inserted-active'));

    // Muestra la sección correspondiente y marca el texto como activo
    document.getElementById(sectionId).classList.add('active');
    event.target.classList.add('inserted-active');
}
function showCycle(sectionId,event) {
    const cycles = document.querySelectorAll(".cycle-content");
    const texts= document.querySelectorAll('.cycle-btn-container p')
    cycles.forEach((cycle) => cycle.classList.remove("active"));
    texts.forEach(text=> text.classList.remove('inserted-active'));

     // Muestra la sección correspondiente y marca el texto como activo
     document.getElementById(sectionId).classList.add('active');
     event.target.classList.add('inserted-active');
}



function scrollCycles(direction) {
    const container = document.querySelector(".cycle-btn-container");
    const scrollAmount = 100; // Ajusta la cantidad de desplazamiento

    if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else if (direction === "right") {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
}

function showRequisitos(sectionId,event) {
    const requisitos = document.querySelectorAll(".requisito-content");
    const texts= document.querySelectorAll('.requisito-container p')
    requisitos.forEach((requisito) => requisito.classList.remove("active"));
    texts.forEach(text=> text.classList.remove('inserted-active'));

     // Muestra la sección correspondiente y marca el texto como activo
     document.getElementById(sectionId).classList.add('active');
     event.target.classList.add('inserted-active');
}


