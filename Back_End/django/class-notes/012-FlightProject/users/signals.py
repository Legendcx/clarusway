from django.contrib.auth.models import User
from django.db.models.signals import post_save
# post save edilir edilmez signal göndermek için kullanıyoruz.
from django.dispatch import receiver
# recevier ile birlikte signal iyakalamak için kullanıyoruz.
from rest_framework.authtoken.models import Token
# token i create edeceğimiz Token tablosunu buradan alıyoruz. Miraz alıyoruz.



@receiver(post_save, sender=User)
def create_Token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
