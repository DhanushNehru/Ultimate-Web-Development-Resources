from random import choices
from secrets import choice
from django.core.checks import messages
from django.db import models
from django.core.validators import RegexValidator
from django.utils.html import format_html
from django.utils import timezone
# Create your models here.

class SystemChoice (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}'/><span id='hide_name' >{self.name}</span>")

class Programming_language (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' class='prog_lang' /><span id='hide_name' >{self.name}</span>")

class Frontend_language (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Backend_language (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Mobile_app_devlopment (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class AI_ML (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Database (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Data_visualization (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Devops (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class BASS (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Framework (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Testing (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Software (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Static_site_gen (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Game_engine (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Automation (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Blockchain (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Others (models.Model):
    name = models.CharField(max_length=900)
    img_link = models.URLField(blank=False)
    link = models.URLField(blank=False)

    def __str__(self):
        return format_html(f"<img id='img' src='{self.img_link}' /><span id='hide_name' >{self.name}</span>")

class Add_on(models.Model):
    title = models.CharField(max_length=900)

    def __str__(self):
        return self.title

class Personal_readme(models.Model):
    name = models.CharField(max_length=90, blank=False)
    about_me = models.CharField(max_length=9000, blank=True)
    resume_link = models.URLField( blank=True)
    email_id = models.EmailField(blank=True)
    project1_link = models.URLField(blank=True)
    project2 = models.CharField(max_length=9000, blank=True)
    project2_link = models.URLField( blank=True)
    project3 = models.CharField(max_length=9000, blank=True)
    project3_link = models.URLField( blank=True)
    project4 = models.CharField(max_length=9000, blank=True)
    project4_link = models.URLField( blank=True)
    project5 = models.CharField(max_length=9000, blank=True)
    project5_link = models.URLField( blank=True)
    work_status =  models.CharField(max_length=90, blank=True)
    work_status_link = models.URLField( blank=True)
    system = models.ManyToManyField(SystemChoice, blank=True, related_name='system')
    programming_language = models.ManyToManyField(Programming_language, blank=True, related_name="programming_language")
    frontend_language = models.ManyToManyField(Frontend_language, blank=True, related_name="frontend_language")
    backend_language = models.ManyToManyField(Backend_language, blank=True, related_name="backend_language")
    mobile_app_devlopment = models.ManyToManyField(Mobile_app_devlopment, blank=True, related_name="mobile_app_devlopment")
    aI_ML = models.ManyToManyField(AI_ML, blank=True, related_name="ai_ml")
    database = models.ManyToManyField(Database, blank=True, related_name="database")
    data_visualization = models.ManyToManyField(Data_visualization, blank=True, related_name="data_visualiztion")
    devops = models.ManyToManyField(Devops, blank=True, related_name="devops")
    bASS = models.ManyToManyField(BASS, blank=True, related_name="bass")
    framework = models.ManyToManyField(Framework, blank=True, related_name="framework")
    testing = models.ManyToManyField(Testing, blank=True, related_name="testing")
    software = models.ManyToManyField(Software, blank=True, related_name="software")
    static_site_gen = models.ManyToManyField(Static_site_gen, blank=True, related_name="static_site_gen")
    game_engine = models.ManyToManyField(Game_engine, blank=True, related_name="game_engine")
    automation = models.ManyToManyField(Automation, blank=True, related_name="automation")
    blockchain = models.ManyToManyField(Blockchain, blank=True, related_name="blockchain")
    others = models.ManyToManyField(Others, blank=True, related_name="others")
    github = models.CharField(max_length=900, blank=True)
    twitter = models.URLField( blank=True)
    codepen = models.URLField( blank=True)
    dev = models.URLField( blank=True)
    linkedin = models.URLField( blank=True)
    kaggle = models.URLField( blank=True)
    facebook = models.URLField( blank=True)
    instagram = models.URLField( blank=True)
    dribble = models.URLField( blank=True)
    behance = models.URLField( blank=True)
    hashnode = models.URLField( blank=True)
    medium = models.URLField( blank=True)
    youtube = models.URLField( blank=True)
    hackerank = models.URLField( blank=True)
    leetcode = models.URLField( blank=True)
    topcoder = models.URLField( blank=True)
    hackerearth = models.URLField( blank=True)
    discord = models.URLField( blank=True)
    rss = models.URLField( blank=True)
    add_ons = models.ManyToManyField(Add_on, blank=True, related_name="add_ons")
    buy_me_coffee = models.URLField( blank=True)
    patreon = models.URLField( blank=True)
    create_date = models.DateTimeField(default=timezone.now,editable=False)

    def __str__(self):
        return self.name