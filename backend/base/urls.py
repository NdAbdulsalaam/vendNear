from django.urls import path
from . import views as v

urlpatterns = [
    path('vendors/', v.VendorListView.as_view()),
    path('vendor/<int:pk>/', v.VendorDetailView.as_view()),
    path('products/', v.ProductListView.as_view()),
    path('product/<int:pk>/', v.ProductDetailView.as_view()),
]
