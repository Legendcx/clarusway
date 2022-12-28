from django.http import HttpResponse


# bunları anasayfada rokey olmasın diye yzoyruz.

def home(request):
  return HttpResponse('<center><h1 style="background-color:powderblue;">Welcome to ApiTodo</h1></center>')