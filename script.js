const skins = {
    'Aug PBIC1': {
        'Shark': '../models/AugA3/Aug_A3_PBIC_Shark.glb',
        'Fang': '../models/AugA3/Aug_A3_PBIC_Fang.glb',
        'Rosso': '../models/AugA3/Aug_A3_PBIC_Rosso.glb',
        'Teste': '../models/AugA3/Aug_A3_PBIC_Rosso.glb',
    },
    'Aug Grip Runners': {
        'Bull': '../models/AugA3/Aug_A3_GripRunners_Bull.glb',
        'Corsa': '../models/AugA3/Aug_A3_GripRunners_Corsa.glb'
    },
    'Aug NonGrata': {
        'Skin 1': '../models/AugA3/Aug_A3_GripRunners.glb',
        'Skin 2': '../models/AugA3/Aug_A3_NonGrata_Skin2.glb'
    }
    // Adicione mais armas e skins conforme necessário
};

let currentModel = '';

function changeModel(modelSrc, modelName) {
    const modelViewer = document.getElementById('model-viewer');
    modelViewer.src = modelSrc;
    currentModel = modelName;
    updateSkinButtons(modelName);
}

function updateSkinButtons(modelName) {
    const skinButtonContainer = document.getElementById('skin-button-container');
    skinButtonContainer.innerHTML = ''; // Limpa botões anteriores
    const modelSkins = skins[modelName];

    if (modelSkins) {
        // Cria um botão para cada skin
        for (const skinName in modelSkins) {
            const button = document.createElement('button');
            button.innerText = skinName;
            button.onclick = () => changeModel(modelSkins[skinName], skinName);
            skinButtonContainer.appendChild(button);
        }
        document.getElementById('skin-names').style.display = 'flex'; // Exibe o menu de skins
    } else {
        document.getElementById('skin-names').style.display = 'none'; // Esconde se não houver skins
    }
}

let visibleCount = 8; // Número de itens visíveis
let startIndex = 0; // Índice inicial
const buttons = document.querySelectorAll('#button-container button');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

function updateButtonVisibility() {
    buttons.forEach((button, index) => {
        const isVisible = index >= startIndex && index < startIndex + visibleCount;
        button.style.opacity = isVisible ? '1' : '0';
        button.style.pointerEvents = isVisible ? 'auto' : 'none';
    });



    // Atualiza a visibilidade dos botões de navegação
    nextButton.style.opacity = (startIndex + visibleCount < buttons.length) ? '1' : '0.5';
    nextButton.style.pointerEvents = (startIndex + visibleCount < buttons.length) ? 'auto' : 'none';
    prevButton.style.opacity = (startIndex > 0) ? '1' : '0.5';
    prevButton.style.pointerEvents = (startIndex > 0) ? 'auto' : 'none';
}

function showNextItem() {
    // Incrementa apenas se não passar do limite
    if (startIndex + visibleCount < buttons.length) {
        startIndex += 1;
        updateButtonVisibility();
    }
}

function showPrevItem() {
    // Decrementa apenas se não passar do limite
    if (startIndex > 0) {
        startIndex -= 1;
        updateButtonVisibility();
    }
}

// Mantém os botões sempre visíveis
nextButton.style.display = 'inline-block';
prevButton.style.display = 'inline-block';

// Inicializa a visibilidade dos botões
updateButtonVisibility();