from django.db import models
from django.contrib.auth.models import User # Import the User model
from django.utils.translation import gettext_lazy as _  # Import the translation function

# Vendor Modles
class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField(null=True)
   
# Product Category 
class ProductCategory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(_("Product category title"), max_length=200)
    detail = models.TextField(_("Product category details"), null=True)
    
    def __str__(self):
        return self.title
    
    
# Product
class Product(models.Model):
    title = models.CharField(_("Product title"), max_length=200)
    detail = models.TextField(_("Product details"), null=True)
    price = models.FloatField(_("Product price"))
    
    def __str__(self):
        return self.title
    
    