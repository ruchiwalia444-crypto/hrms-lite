from django.shortcuts import render
from rest_framework import generics
from .models import Attendence
from .serializers import AttendenceSerializer

class AttendenceCreate(generics.CreateAPIView):
    queryset = Attendence.objects.all()
    serializer_class = AttendenceSerializer

class AttendenceList(generics.ListAPIView):
    queryset = Attendence.objects.all()
    serializer_class = AttendenceSerializer
