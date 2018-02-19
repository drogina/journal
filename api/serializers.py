from rest_framework import serializers
from api.models import Journal


class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields = ('id', 'title', 'text', 'created_date', 'updated_date')
