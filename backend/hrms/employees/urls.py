from django.urls import path
from .views import EmployeeListCreate,EmployeeDelete

urlpatterns = [
    path("employees/",EmployeeListCreate.as_view()),
    path("employees/<int:pk>/",EmployeeDelete.as_view()),
]
