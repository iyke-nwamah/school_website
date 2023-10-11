from django.urls import path
from .views import display_cover_image
from . import views
urlpatterns = [
    path('api/', views.getRoutes, name="routes"),
    path('signup/', views.signup, name="signup"),
    path('', views.login_request, name="login"),
    path('register/', views.register_request, name="register"),
    path('dashboard/', views.dashboard, name="dashboard"),
    path('cover_image/<int:school_id>/', views.display_cover_image, name='display_cover_image'),
]