const models = [
    {
        src: '../models/AugA3/Aug_A3_PBIC.glb',
        name: 'Aug PBIC1',
        skins: [
            { src: '../models/AugA3/Aug_A3_GripRunners.glb', name: 'GripRunners' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2' },
        ]
    },
    {
        src: '../models/AugA3/Aug_A3_GripRunners.glb',
        name: 'Aug Grip Runners',
        skins: [
            { src: '../models/AugA3/Skin3.glb', name: 'Skin 3' },
            { src: '../models/AugA3/Skin4.glb', name: 'Skin 4' }
        ]
    },
    {
        src: '../models/AugA3/Aug_A3_NonGrata.glb',
        name: 'Aug NonGrata',
        skins: [
            { src: '../models/AugA3/Skin5.glb', name: 'Skin 5' },
            { src: '../models/AugA3/Skin6.glb', name: 'Skin 6' }
        ]
    },
    // Adicione mais modelos e skins conforme necessário
];

let currentIndex = 0;
const modelsToShow = 8;

function updateModelList() {
    const buttonContainer = document.getElementById('button-container');
    buttonContainer.innerHTML = '';

    const endIndex = Math.min(currentIndex + modelsToShow, models.length);
    for (let i = currentIndex; i < endIndex; i++) {
        const button = document.createElement('button');
        button.innerText = models[i].name;
        button.onclick = () => changeModel(models[i].src, models[i].name);
        buttonContainer.appendChild(button);
    }

    document.getElementById('prev-button').style.display = currentIndex > 0 ? 'inline' : 'none';
    document.getElementById('next-button').style.display = endIndex < models.length ? 'inline' : 'none';
}

function changeModel(modelSrc, modelName) {
    const modelViewer = document.getElementById('model-viewer');
    modelViewer.src = modelSrc;  // Muda o modelo 3D
    currentModel = modelName;
    updateSkinButtons(modelName); // Atualiza os botões de skin
}

function updateSkinButtons(modelName) {
    const skinButtonContainer = document.getElementById('skin-button-container');
    skinButtonContainer.innerHTML = '';

    const selectedModel = models.find(model => model.name === modelName);
    if (selectedModel) {
        selectedModel.skins.forEach(skin => {
            const button = document.createElement('button');
            button.innerText = skin.name;
            button.onclick = () => changeModel(skin.src, skin.name); // Muda para a skin
            skinButtonContainer.appendChild(button);
        });

        // Exibe o contêiner de skins
        skinButtonContainer.classList.add('show');
    } else {
        // Esconde o contêiner se não houver skins
        skinButtonContainer.classList.remove('show');
    }
}

function showPrevItem() {
    if (currentIndex > 0) {
        currentIndex -= modelsToShow;
        updateModelList();
    }
}

function showNextItem() {
    if (currentIndex + modelsToShow < models.length) {
        currentIndex += modelsToShow;
        updateModelList();
    }
}

// Inicializa a lista de modelos ao carregar a página
window.onload = updateModelList;
