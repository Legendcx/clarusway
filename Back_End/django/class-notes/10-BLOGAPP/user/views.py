
from rest_framework.generics import CreateAPIView
from django.contrib.auth.models import User
from .serializer import RegistrationSerializer



class RegisterView(CreateAPIView):
  queryset = User.objects.all()
  serializer_class = RegistrationSerializer
  
  
  
  
  
  

# Create your views here.
