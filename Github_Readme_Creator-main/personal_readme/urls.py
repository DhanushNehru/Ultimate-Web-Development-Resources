from django.urls import path
from .views import *
from . import views

app_name = 'personal_readme'

urlpatterns = [
    path('',views.home,name='home'),
    path('preview/',views.preview,name='preview'),
    path('about/',views.about,name='about'),
    path('faq/',views.faq,name='faq'),
    path('projects/',views.project,name='project'),
]
