# Generated by Django 5.1.4 on 2024-12-11 19:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0007_rename_productcategory_product_category'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='order_item',
            options={'verbose_name_plural': 'Order Items'},
        ),
        migrations.AlterField(
            model_name='order_item',
            name='order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_items', to='base.order'),
        ),
    ]
