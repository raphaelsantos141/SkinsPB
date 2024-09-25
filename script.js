function changeModel(modelSrc) {
    const modelViewer = document.getElementById('model-viewer');
    const currentCameraOrbit = modelViewer.getAttribute('camera-orbit');

    modelViewer.src = modelSrc;

    modelViewer.addEventListener('model-visibility', () => {
        modelViewer.cameraOrbit = currentCameraOrbit;
    }, { once: true });
}


let visibleCount = 8; // Número de itens visíveis
let startIndex = 0; // Índice inicial
const buttons = document.querySelectorAll('#button-container button');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

function updateButtonVisibility() {
    buttons.forEach((button, index) => {
        button.classList.toggle('visible', index >= startIndex && index < startIndex + visibleCount);
        if (index >= startIndex && index < startIndex + visibleCount) {
            button.style.opacity = '1'; // Visível
            button.style.pointerEvents = 'auto'; // Permite interação
        } else {
            button.style.opacity = '0'; // Invisível
            button.style.pointerEvents = 'none'; // Desativa interação
        }

    });

    // Atualiza os botões de navegação
    nextButton.style.opacity = (startIndex + visibleCount < buttons.length) ? '1' : '0.5';
    nextButton.style.pointerEvents = (startIndex + visibleCount < buttons.length) ? 'auto' : 'none';

    prevButton.style.opacity = (startIndex > 0) ? '1' : '0.5';
    prevButton.style.pointerEvents = (startIndex > 0) ? 'auto' : 'none';

}

// Mantém os botões sempre visíveis
nextButton.style.display = 'inline-block';
prevButton.style.display = 'inline-block';

function showNextItem() {
    if (startIndex + visibleCount < buttons.length) {
        startIndex += 1; // Aumenta o índice inicial
        updateButtonVisibility(); // Atualiza a visibilidade dos botões
    }
}

function showPrevItem() {
    if (startIndex > 0) {
        startIndex -= 1; // Diminui o índice inicial
        updateButtonVisibility(); // Atualiza a visibilidade dos botões
    }
}

// Inicializa a visibilidade dos botões
updateButtonVisibility();

