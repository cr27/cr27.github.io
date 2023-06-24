from django.db import models
from django.db.models import Model
# Create your models here.

class GeeksModel(Model):
    geeks_field = models.TextField()
#8:13-8:40 https://www.youtube.com/watch?v=GRFoE8eoj20

# creating database model to store email
class newslatteremail(Model):
	userEmail = models.EmailField(max_length=254)

	def __str__(self):
		return self.userEmail


