from django.urls import path
from . import views as v
from rest_framework import routers

router = routers.DefaultRouter()
router.register('vendor', v.VendorView)
router.register('product', v.ProductView)
router.register('customer', v.CustomerView)
router.register('order', v.OrderView)
router.register('customer-address', v.CustomerAddressView)
router.register('product-rating', v.ProductRatingView)


urlpatterns = router.urls