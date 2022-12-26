from rest_framework import serializers
from .models import Artist, Album, Lyric, Song
class ArtistSerializer(serializers.ModelSerializer):
    born_year = serializers.SerializerMethodField()
    path = serializers.StringRelatedField()
    class Meta:
        model = Artist, Album, Lyric, Song
        # fields = "__all__"
        fields = ["first_name", "last_name","number", "age", "born_year", "path"] # sadece .. kadar field'e getir.
        # exclude = ["number"]  # number dışındaki hepsi.
    def get_born_year(self, obj):
        import datetime
        current_time = datetime.datetime.now() #Şimdiki zaman
        return current_time.year - obj.age