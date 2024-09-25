const models = [
    {
        src: '../models/AugA3/Aug_A3_PBIC.glb',
        name: 'Aug PBIC1',
        skins: [
            { src: '../models/AugA3/Skin1.glb', name: 'Skin 1', image: '../1 (3).jpg' },
            { src: '../models/AugA3/Skin2.glb', name: 'Skin 2', image: '../images/skin2.png' }
        ]
    },
    {
        src: '../models/AugA3/Aug_A3_GripRunners.glb',
        name: 'Aug Grip Runners',
        skins: [
            { src: '../models/AugA3/Skin3.glb', name: 'Skin 3', image: '../images/skin3.png' },
            { src: '../models/AugA3/Skin4.glb', name: 'Skin 4', image: '../images/skin4.png' }
        ]
    },
    {
        src: '../models/AugA3/Aug_A3_NonGrata.glb',
        name: 'Aug NonGrata',
        skins: [
            { src: '../models/AugA3/Skin5.glb', name: 'Skin 5', image: '../images/skin5.png' },
            { src: '../models/AugA3/Skin6.glb', name: 'Skin 6', image: '../images/skin6.png' }
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
            const button = document.createElement('div');
            button.classList.add('skin-button');
            button.onclick = () => changeModel(skin.src, skin.name); // Muda para a skin

            const img = document.createElement('img');
            img.src = skin.image; // Imagem da skin
            img.alt = skin.name;

            const title = document.createElement('span');
            title.innerText = skin.name;

            button.appendChild(img);
            button.appendChild(title);
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
