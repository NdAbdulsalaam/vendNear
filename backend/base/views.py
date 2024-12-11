from rest_framework import generics, permissions
from . import serializers as s
from . import models as m

class VendorListView(generics.ListCreateAPIView):
    queryset = m.Vendor.objects.all()
    serializer_class = s.VendorListSerializer

class VendorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = m.Vendor.objects.all()
    serializer_class = s.VendorDetailSerializer

class ProductListView(generics.ListCreateAPIView):
    queryset = m.Product.objects.all()
    serializer_class = s.ProductListSerializer
    
class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = m.Product.objects.all()
    serializer_class = s.ProductDetailSerializer