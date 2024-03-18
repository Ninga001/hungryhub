from django.contrib import admin
from base.models import Category, Option, Product

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("slug","title","description","image","color")
    
@admin.register(Option)
class OptionAdmin(admin.ModelAdmin):
    list_display=("title","price")

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display =("title","description","image","isFeatured","price","category")
    list_editable = ("isFeatured",)
