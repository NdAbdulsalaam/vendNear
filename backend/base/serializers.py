from rest_framework import serializers as s
from . import models as m

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