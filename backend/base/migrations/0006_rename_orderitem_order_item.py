# Generated by Django 5.1.4 on 2024-12-11 19:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_customer_order_orderitem'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='OrderItem',
            new_name='Order_Item',
        ),
    ]
