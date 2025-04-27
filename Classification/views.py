from django.shortcuts import render
from django.http import request
from .datasets import datasets
from django.utils.timezone import now
import random
import os
from django.core.files.storage import FileSystemStorage
from django.core.files.base import ContentFile
from django.conf import settings
from django.http import JsonResponse
# Create your views here.
def index(request):
    response=datasets()
    response.retriveData()
    
    return render(request,"home.html",{'data':response.data,"timestamp":now().timestamp()})
def classifier(request):

    return render(request,"classifier.html",{"timestamp":now().timestamp()})
def aboutProject(request):

    return render(request,"aboutproject.html",{"timestamp":now().timestamp()})


def Result(request):
    if request.method == 'POST' and request.FILES.get('image'):
        
        image = request.FILES['image']

        
        fs = FileSystemStorage(location=os.path.join(settings.BASE_DIR, 'classification/static/data/uploads'))
        filename = fs.save(image.name, image)
        cate_persente = random.randint(0, 100)
        dog_persente = random.randint(0, 100 - cate_persente)  
        other_persente = 100 - cate_persente - dog_persente
        return render(request, "Result.html", {
            "image_url": "/data/uploads/"+ filename, 
            "cate_persente": cate_persente, 
            "dog_persente": dog_persente, 
            "other_persente": other_persente
        })

    return render(request, "Result.html", {"error": "No image uploaded."})


def model_training(request):
    if request.method == 'POST':
        cat_files = request.FILES.getlist('cat_images')
        dog_files = request.FILES.getlist('dog_images')

        fs = FileSystemStorage(location='media/cats')
        for cat_file in cat_files:
            fs.save(cat_file.name, cat_file)

        fs = FileSystemStorage(location='media/dogs')
        for dog_file in dog_files:
            fs.save(dog_file.name, dog_file)

        return JsonResponse({"message": "Files uploaded successfully!"})

    return render(request, 'modelTraining.html',{"timestamp":now().timestamp()})

