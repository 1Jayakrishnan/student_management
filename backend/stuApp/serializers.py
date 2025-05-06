from rest_framework import serializers
from .models import studentDb, teacherDb


class studserializer(serializers.ModelSerializer):
    class Meta:
        model = studentDb
        fields = "__all__"
        read_only_fields = ["id"]

class teacherserializer(serializers.ModelSerializer):
    class Meta:
        model = teacherDb
        fields = "__all__"
        read_only_fields = ["id"]
