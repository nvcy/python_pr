
let currentIndex = 0;
const container=document.querySelector('.container-page')
const images = document.querySelectorAll(".image-content");
const prevBtn=document.querySelector(".previous")
const nextBtn=document.querySelector(".next")
const trainBtn=document.querySelector('.entrainerBtn')
const totalImages = images.length;

function updateSlider() {
    images.forEach((img, index) => {
        index === currentIndex ? img.classList.add("active"): img.classList.remove("active") ;
    });
}


prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlider();
});

nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
});

trainBtn.addEventListener("click", function () {
    alert("Training process started!");
    container.style.display = 'none';
    let newContainer = document.createElement('div');
    newContainer.classList.add('newcontainer');
    let message = document.createElement('div');
    message.classList.add('trainingMessage');
    message.textContent = "Model is Training ...";
    let trainingProcess = document.createElement('div');
    trainingProcess.classList.add('process');
    newContainer.appendChild(message);
    newContainer.appendChild(trainingProcess);
    document.body.appendChild(newContainer);
    setTimeout(function() {
            showSucessMessage(newContainer);
            showClassifierButton(newContainer);
          
      
    }, 5000); 
});
function showClassifierButton(parentElement) {
    let  classifierBtn= document.createElement('a');
    classifierBtn.textContent = "Go to Classify Your images";
    classifierBtn.classList.add('classifierBtn');
    classifierBtn.href=classifierUrl;
    classifierBtn.style.display = 'inline-block';
    parentElement.appendChild(classifierBtn);
    console.log("Classifier button appended:", classifierBtn);
    
}
function showSucessMessage(parentElement){
    let  successTrainedMessage =document.createElement('p');
    successTrainedMessage.textContent="The Model has Trained Successufly";
    successTrainedMessage.classList.add("successMessage");
    
    parentElement.appendChild(successTrainedMessage);
}   
setInterval(function () {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
}, 3000);

