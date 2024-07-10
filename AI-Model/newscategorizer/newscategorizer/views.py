from rest_framework.response import Response
from rest_framework.decorators import APIView

class ClassifyNews(APIView):
    def post(request):
        
        return Response("you casified")