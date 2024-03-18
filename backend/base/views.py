from rest_framework.authtoken.views import APIView
from rest_framework.response import Response

from base.models import Category, Option, Product
from base.serializers import CategorySerializer, ProductSerializer, OptionSerializer

class GetCategories(APIView):
    serializer_class = CategorySerializer

    def get(self, request):
        categories = Category.objects.all()
        serialized_data = self.serializer_class(categories, many=True).data

        data = {"categories":serialized_data}

        return Response(data)
    
    
class GetCategory(APIView):
    serializer_class = CategorySerializer

    def get(self, request, pk):
        category = Category.objects.get(id=pk)
        serialized_data = self.serializer_class(category).data

        data = {"category":serialized_data}

        return Response(data)


class GetOptions(APIView):
    serializer_class = OptionSerializer

    def get(self, request):
        options = Option.objects.all()
        serialized_data = self.serializer_class(options, many=True).data

        data = {"options":serialized_data}

        return Response(data)
    
    
class GetOption(APIView):
    serializer_class = OptionSerializer

    def get(self, request, pk):
        option = Option.objects.get(id=pk)
        serialized_data = self.serializer_class(option).data

        data = {"option":serialized_data}

        return Response(data)
    
    
class GetProducts(APIView):
    serializer_class = ProductSerializer

    def get(self, request):
        products = Product.objects.all()
        serialized_data = self.serializer_class(products, many=True).data

        data = {"products":serialized_data}

        return Response(data)
    
    
class GetFeaturedProducts(APIView):
    serializer_class = ProductSerializer

    def get(self, request):
        products = Product.objects.filter(isFeatured=True)
        serialized_data = self.serializer_class(products, many=True).data

        data = {"products":serialized_data}

        return Response(data)
    
class GetProduct(APIView):
    serializer_class = ProductSerializer

    def get(self, request, pk):
        product = Product.objects.get(id=pk)
        serialized_data = self.serializer_class(product).data

        data = {"product":serialized_data}

        return Response(data)
    
class GetCategoryProducts(APIView):
    serializer_class = ProductSerializer

    def get(self, request, pk):
        try:
            category = Category.objects.get(slug=pk)
            products = Product.objects.filter(category=category)
            serialized_data = self.serializer_class(products, many=True).data
            
        except Exception:
            serialized_data = []

        data = {"products":serialized_data}

        return Response(data)