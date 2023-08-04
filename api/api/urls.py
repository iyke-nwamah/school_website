from django.urls import path
from . import views
urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('signup/', views.signup, name="signup"),
    path('login/', views.login_request, name="login"),
    path('register/', views.register_request, name="register"),
]