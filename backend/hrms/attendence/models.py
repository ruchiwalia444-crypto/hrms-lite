from django.db import models

from employees.models import Employee

class Attendence(models.Model):
    STATUS_CHOICE = [
        ("present","Present"),
        ("absent","Absent"),
    ]

    employee = models.ForeignKey(Employee,on_delete=models.CASCADE)
    date = models.DateField()
    status = models.CharField(max_length=20,choices=STATUS_CHOICE)