from django.contrib import admin
from . import models as m

# Register your m here.
admin.site.register(m.Vendor)
admin.site.register(m.Product_Category)
admin.site.register(m.Product)
admin.site.register(m.Customer)
admin.site.register(m.Order)
admin.site.register(m.Order_Item)