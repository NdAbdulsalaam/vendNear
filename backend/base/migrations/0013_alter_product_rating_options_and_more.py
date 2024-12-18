# Generated by Django 5.1.4 on 2024-12-12 06:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0012_rename_rating_product_rating'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='product_rating',
            options={'verbose_name_plural': 'Product Ratings'},
        ),
        migrations.AlterField(
            model_name='product_rating',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer_ratings', to='base.customer'),
        ),
        migrations.AlterField(
            model_name='product_rating',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_ratings', to='base.product'),
        ),
    ]
