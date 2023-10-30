from django.shortcuts import render, redirect
from django.conf import settings
from django.shortcuts import redirect
from .forms import *
from .models import *
# Create your views here.
def home(request):
    if request.method == 'POST':
        form = Personal_Readme_form(request.POST)
        if form.is_valid():
            form.save()
            return redirect('personal_readme:preview')
    else:
        form = Personal_Readme_form()
    return render(request, 'home.html', {'form': form})

def about(request):
    return render(request, 'about.html')

def faq(request):
    return render(request, 'faq.html')

def project(request):
    return render(request, 'add_on.html')

def get_referer(request):
    referer = request.META.get('HTTP_REFERER')
    if not referer:
        return None
    return referer

def preview(request):
    if not get_referer(request):
        return render(request, 'http404.html')
    readme = [Personal_readme.objects.latest('create_date')]
    return render(request, 'preview.html',{'readme':readme})
