from rest_framework import generics, permissions
from .serializers import VendorSerializer, VendorDetailSerializer
from .models import Vendor

class VendorList(generics.ListAPIView):
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer

class VendorDetail(generics.RetrieveAPIView):
    queryset = Vendor.objects.all()
    serializer_class = VendorDetailSerializer