from django.urls import path
from .views import AttendenceCreate,AttendenceList

urlpatterns = [
    path('attendence/',AttendenceCreate.as_view()),
    path('attendence-list/',AttendenceList.as_view()),
]
