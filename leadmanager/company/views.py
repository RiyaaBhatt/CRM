# views.py
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Company
from .Serializer import CompanySerializer

@api_view(['POST'])
def create_company(request):
    if request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("Serializer Errors:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
@api_view(['GET'])
def get_companies(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
@api_view(['GET'])
def get_company_by_user(request, user_id):
    if request.method == 'GET':
        try:
            companies = Company.objects.filter(user_id=user_id)
            serializer = CompanySerializer(companies, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Company.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
