from django.urls import path
from . import views
urlpatterns = [
    path('api/', views.getRoutes, name="routes"),
    path('signup/', views.signup, name="signup"),
    path('', views.login_request, name="login"),
    path('register/', views.register_request, name="register"),
    path('myschool/', views.myschool, name="myschool"),
]