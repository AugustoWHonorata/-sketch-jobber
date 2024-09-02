from rest_framework import viewsets
from .serializer import JobsSerializer
from .models import Jobs


# Create your views here.
class JobsView(viewsets.ModelViewSet):
    serializer_class = JobsSerializer
    queryset = Jobs.objects.all()