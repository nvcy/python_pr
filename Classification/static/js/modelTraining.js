document.addEventListener('DOMContentLoaded', function () {
    const catDropZone = document.getElementById('catDropZone');
    const dogDropZone = document.getElementById('dogDropZone');
    const catInput = document.getElementById('catInput');
    const dogInput = document.getElementById('dogInput');
    const catCount = document.getElementById('catCount');
    const dogCount = document.getElementById('dogCount');
    const trainButton = document.getElementById('trainButton');
    const trainingModal = document.getElementById('trainingModal');
    const successModal = document.getElementById('successModal');

    // Handle file input click for cat and dog images
    catDropZone.addEventListener('click', function () {
        catInput.click();
    });

    dogDropZone.addEventListener('click', function () {
        dogInput.click();
    });

    // Update the uploaded file count and check if training button can be enabled
    catInput.addEventListener('change', function () {
        const catFiles = catInput.files;
        catCount.textContent = `${catFiles.length} files uploaded`;
        checkTrainButton();
    });

    dogInput.addEventListener('change', function () {
        const dogFiles = dogInput.files;
        dogCount.textContent = `${dogFiles.length} files uploaded`;
        checkTrainButton();
    });

    // Enable Train Model button when at least 10 cat and 10 dog images are uploaded
    function checkTrainButton() {
        const catFiles = catInput.files.length;
        const dogFiles = dogInput.files.length;

        if (catFiles >= 10 && dogFiles >= 10) {
            trainButton.disabled = false;
        } else {
            trainButton.disabled = true;
        }
    }

    // Simulate model training process
    trainButton.addEventListener('click', function () {
        trainingModal.style.display = 'block';
        setTimeout(function () {
            trainingModal.style.display = 'none';
            successModal.style.display = 'block';
        }, 5000); // Simulate 5 seconds of training time
    });
});
