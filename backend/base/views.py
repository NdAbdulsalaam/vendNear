from rest_framework import viewsets
from . import serializers as s
from . import models as m

# Vendor Views
class VendorView(viewsets.ModelViewSet):
    queryset = m.Vendor.objects.all()
    serializer_class = s.VendorSerializer


# Product Views
class ProductView(viewsets.ModelViewSet):
    queryset = m.Product.objects.all()
    serializer_class = s.ProductSerializer
    
class ProductRatingView(viewsets.ModelViewSet):
    queryset = m.Product_Rating.objects.all()
    serializer_class = s.ProductRatingSerializer


# Customer Views
class CustomerView(viewsets.ModelViewSet):
    queryset = m.Customer.objects.all()
    serializer_class = s.CustomerSerializer
  
class CustomerAddressView(viewsets.ModelViewSet):
    serializer_class = s.CustomerAddressSerializer
    queryset = m.Customer_Address.objects.all()
   
    
# Order Views
class OrderView(viewsets.ModelViewSet):
    queryset = m.Order.objects.all()
    serializer_class = s.OrderSerializer