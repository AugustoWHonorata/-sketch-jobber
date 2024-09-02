from django.db import models

# Create your models here.
class Jobs(models.Model):
    title = models.CharField(max_length=100)  # Título do Job
    description = models.TextField()  # Descrição do Job
    image_url = models.CharField(max_length=255, blank=True, null=True)  # Campo para armazenar o caminho ou URL da imagem
    created_date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
