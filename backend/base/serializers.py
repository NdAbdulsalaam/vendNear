from rest_framework import serializers as s
from . import models as m

# Vendor
class VendorSerializer(s.ModelSerializer):
    class Meta:
        model = m.Vendor
        fields = ['id', 'user', 'address']
    
    def __init__(self, *args, **kwargs):
        super(VendorSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
        
        
# Product
class ProductSerializer(s.ModelSerializer):
    product_ratings = s.PrimaryKeyRelatedField(many=True, read_only=True)
    
    class Meta:
        model = m.Product
        fields = ['id', 'category', 'vendor', 'title', 'detail', 'price', 'product_ratings']
    
    def __init__(self, *args, **kwargs):
        super(ProductSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
        
# Product Category
class ProductCategorySerializer(s.ModelSerializer):
    class Meta:
        model = m.Product_Category
        fields = ['id', 'title', 'detail']
    
    def __init__(self, *args, **kwargs):
        super(ProductCategorySerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
        
        
class ProductRatingSerializer(s.ModelSerializer):
    class Meta:
        model = m.Product_Rating
        fields = ['id', 'customer', 'product', 'reviews', 'add_time']
    
    def __init__(self, *args, **kwargs):
        super(ProductRatingSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
        

# Customer  
class CustomerSerializer(s.ModelSerializer):
    class Meta:
        model = m.Customer
        fields = ['id', 'user', 'mobile']
    
    def __init__(self, *args, **kwargs):
        super(CustomerSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CustomerAddressSerializer(s.ModelSerializer):
    class Meta:
        model = m.Customer_Address
        fields = ['id', 'customer', 'address']
        
    def __init__(self, *args, **kwargs):
        super(CustomerAddressSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
        

# Order  
class OrderSerializer(s.ModelSerializer):
    class Meta:
        model = m.Order
        fields = ['id', 'customer', 'order_time']
    
    def __init__(self, *args, **kwargs):
        super(OrderSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
