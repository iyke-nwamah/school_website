from django.shortcuts import render, redirect
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import SchoolSerializer
from .models import School
from .forms import SchoolForm
from django.contrib.auth import login, authenticate  # add this
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm  # add this

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
    # many=True means if we want to serialize multiple object or a single object
    serializer = SchoolSerializer(signup, many=True)
    return Response(serializer.data)


def post(self, request, *args, **kwargs):
    cover = request.data['cover']
    username = request.data['username']
    School.objects.create(username=username, cover=cover)
    return HttpResponse({'message': 'Image successfully uploaded'}, status=200)


def register_request(request):
    if request.method == "POST":
        form = SchoolForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Registration successful.")
            return redirect("dashboard")
        messages.error(
            request, "Unsuccessful registration. Invalid information.")
    form = SchoolForm()
    return render(request=request, template_name="signup.html", context={"register_form": form})


def login_request(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"You are now logged in as {username}.")
                return redirect("dashboard")
            else:
                messages.error(request, "Invalid username or password.")
        else:
            messages.error(request, "Invalid username or password.")
            # Debugging output
    #print("Form Errors:", form.errors)
    #print("User:", user)
    form = AuthenticationForm()
    return render(request=request, template_name="login.html", context={"login_form": form})


def display_cover_image(request, school_id):
    school = School.objects.get(pk=school_id)
    return render(request, 'cover_image.html', {'school': school})


def dashboard(request):
    context = {}
    return render(request, "index.html", context)
