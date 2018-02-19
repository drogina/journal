from rest_framework import viewsets
from api.models import Journal
from api.serializers import JournalSerializer


class JournalViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows employees to be viewed or edited
    """
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer
