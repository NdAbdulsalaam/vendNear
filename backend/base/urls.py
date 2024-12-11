from django.urls import path
from . import views as v

urlpatterns = [
    # vendor
    path('vendors/', v.VendorListView.as_view()),
    path('vendor/<int:pk>/', v.VendorDetailView.as_view()),
    
    # product
    path('products/', v.ProductListView.as_view()),
    path('product/<int:pk>/', v.ProductDetailView.as_view()),
    
    # customer
    path('customers/', v.CustomerListView.as_view()),
    path('customer/<int:pk>/', v.CustomerDetailView.as_view()),
]
