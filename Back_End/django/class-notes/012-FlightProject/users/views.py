from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from .serializers import RegisterSerializer

class RegisterAPI(CreateAPIView):
  queryset = User.objects.all()
  serializer_class = RegisterSerializer