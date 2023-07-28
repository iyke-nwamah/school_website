from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import SchoolSerializer
from .models import School

# Create your views here.

# Lets use a decorator to tell django to use the response from rest framework


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array'
        },
        {
            'Endpoint': '/about/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an about page'
        },
        {
            'Endpoint': '/courses/id/',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single courses page'
        },
        {
            'Endpoint': '/pricing/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array'
        },
        {
            'Endpoint': '/pricing/id/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array'
        },
        {
            'Endpoint': '/signup/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array'
        },
        {
            'Endpoint': '/login/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array'
        },
    ]

    return Response(routes)

@api_view(['GET'])
def signup(request):
    signup = School.objects.all()
    serializer = SchoolSerializer(signup, many=True) #many=True means if we want to serialize multiple object or a single object
    return Response(serializer.data)
    
