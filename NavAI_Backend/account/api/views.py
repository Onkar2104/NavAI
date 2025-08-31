from rest_framework import viewsets
from ..models import User
from .serializers import UserModelSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer