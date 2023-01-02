from rest_framework.viewsets import ModelViewSet

from .models import Category, Blog
from .serializer import CategorySerializer, BlogSerializer


class CategoryView(ModelViewSet):  # crud
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_fields = ['name']
    
    
class BlogView(ModelViewSet):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    filter_fields = ['category']
    
    