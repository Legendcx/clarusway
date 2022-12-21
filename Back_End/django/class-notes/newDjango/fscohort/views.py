from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def postclass(request):
  return HttpResponse("Welcome postclass")

def postclass1(request):
  return HttpResponse("Welcomeeeee postclass")
