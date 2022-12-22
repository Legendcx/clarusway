from django.shortcuts import render
from django.shortcuts import render, HttpResponse

# Create your views here.
def home(request):
  return HttpResponse('<h1>API Page</h1>')