const fileInput = document.getElementById("image");
const filePreview = document.querySelector(".shownImage");
const fileNamePreview=document.querySelector(".image-text");
fileInput.addEventListener("change", function(event) {
    const file = event.target.files[0];  
    if (file) {
        const reader = new FileReader(); 

        reader.onload = function(e) {
            filePreview.src = e.target.result;  

        };
        fileNamePreview.textContent=file.name;

        reader.readAsDataURL(file);  
    } else {
        filePreview.src = "";  
    }
});
