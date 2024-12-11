from rest_framework import generics, permissions
from . import serializers as s
from . import models as m

# Vendor Views
class VendorListView(generics.ListCreateAPIView):
    queryset = m.Vendor.objects.all()
    serializer_class = s.VendorListSerializer

class VendorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = m.Vendor.objects.all()
    serializer_class = s.VendorDetailSerializer

# Product Views
class ProductListView(generics.ListCreateAPIView):
    queryset = m.Product.objects.all()
    serializer_class = s.ProductListSerializer
    
class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = m.Product.objects.all()
    serializer_class = s.ProductDetailSerializer

# Customer Views
class CustomerListView(generics.ListCreateAPIView):
    queryset = m.Customer.objects.all()
    serializer_class = s.CustomerListSerializer
    
class CustomerDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = m.Customer.objects.all()
    serializer_class = s.CustomerDetailSerializer