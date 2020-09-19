from django.contrib.auth.views import LoginView
from django.views.generic import FormView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

# Create your views here.


class IndexView(APIView):
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {'message': 'Hallo, wie gehts?'}
        return Response(content)

