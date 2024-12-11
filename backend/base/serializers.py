from rest_framework import serializers as s
from . import models as m

# Vendor
class VendorListSerializer(s.ModelSerializer):
    class Meta:
        model = m.Vendor
        fields = ['id', 'user', 'address']
    
    def __init__(self, *args, **kwargs):
        super(VendorListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
        
class VendorDetailSerializer(s.ModelSerializer):
    class Meta:
        model = m.Vendor
        fields = ['id', 'user', 'address']
        
    def __init__(self, *args, **kwargs):
        super(VendorDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
        
# Product
class ProductListSerializer(s.ModelSerializer):
    class Meta:
        model = m.Product
        fields = ['id', 'title', 'price']
    
    def __init__(self, *args, **kwargs):
        super(ProductListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
        
class ProductDetailSerializer(s.ModelSerializer):
    class Meta:
        model = m.Product
        fields = ['id', 'category', 'vendor', 'title', 'detail', 'price']
        
    def __init__(self, *args, **kwargs):
        super(ProductDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

# Customer  
class CustomerListSerializer(s.ModelSerializer):
    class Meta:
        model = m.Customer
        fields = ['id', 'user', 'mobile']
    
    def __init__(self, *args, **kwargs):
        super(CustomerListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
        
class CustomerDetailSerializer(s.ModelSerializer):
    class Meta:
        model = m.Customer
        fields = ['id', 'user', 'mobile']
        
    def __init__(self, *args, **kwargs):
        super(CustomerDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

# Order  
class OrderListSerializer(s.ModelSerializer):
    class Meta:
        model = m.Order
        fields = ['id', 'customer', 'order_time']
    
    def __init__(self, *args, **kwargs):
        super(OrderListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
        
class OrderDetailSerializer(s.ModelSerializer):
    class Meta:
        model = m.Order_Item
        fields = ['id', 'order', 'product']
        
    def __init__(self, *args, **kwargs):
        super(OrderDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
