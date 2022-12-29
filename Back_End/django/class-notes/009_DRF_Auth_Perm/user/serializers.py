from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
# from django.conf import settings


class REgisteeSerializer(serializers.ModelSerializer):
  email = serializers.EmailField(required=True, validators=[UniqueValidator(queryset=User.objects.all())])
  password = serializers.CharField(write_only=True)
  password2 = serializers.CharField(write_only= True, required=True)
  
  
  class Meta:
    model = User
    fields = (
      'id',
      'username',
      'email',
      'firstname',
      'lastname',
      'password',
      'password2'
    )