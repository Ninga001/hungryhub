from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from base.views import GetCategories, GetCategory, GetCategoryProducts, GetOption, GetOptions, GetProduct, GetProducts, GetFeaturedProducts

urlpatterns = [
    path('admin/', admin.site.urls),
    path('categories/', GetCategories.as_view()),
    path('category/<pk>/', GetCategory.as_view()),
    path('category/<pk>/products/', GetCategoryProducts.as_view()),
    path('options/', GetOptions.as_view()),
    path('option/<pk>/', GetOption.as_view()),
    path('products/', GetProducts.as_view()),
    path('products/featured/', GetFeaturedProducts.as_view()),
    path('product/<pk>/', GetProduct.as_view())
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)