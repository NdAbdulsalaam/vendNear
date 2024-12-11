from django.db import models
from django.contrib.auth.models import User # Import the User model
from django.utils.translation import gettext_lazy as _  # Import the translation function

# Vendor Modles
class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField(null=True)
    
    def __str__(self):
        return self.user.username
   
# Product Category 
class Product_Category(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    
    class Meta:
        verbose_name_plural = "Product Categories" 
        
    def __str__(self):
        return self.title
    
    
# Product
class Product(models.Model):
    category = models.ForeignKey(Product_Category, on_delete=models.SET_NULL, null=True)
    vendor = models.ForeignKey(Vendor, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    price = models.FloatField()
    
    def __str__(self):
        return self.title

    
# Customer Models
class Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mobile = models.PositiveBigIntegerField()
    
    def __str__(self):
        return self.user.username
    
# Order Models
class Order(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_orders')
    order_time = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.order_time} - {self.id}"
    
# Order Item Models
class Order_Item(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='order_items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    
    class Meta:
        verbose_name_plural = "Order Items" 
        
    def __str__(self):
        return self.product.title