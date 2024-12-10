from rest_framework import generics
from .serializers import VendorSerializer
from .models import Vendor

class VendorList(generics.ListAPIView):
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer