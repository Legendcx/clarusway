from django.contrib.auth.models import User
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


@receiver(post_save, sender=User)
def create_Token(sender, instance=None, creted=False, **kwargs):
  if creted:
    Token.objects.create(user=instance)