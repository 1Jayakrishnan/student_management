from django.db import models

# Create your models here.

class studentDb(models.Model):
    Name = models.CharField(max_length=100, null=True, blank=True)
    Age = models.IntegerField(null=True, blank=True)
    Place = models.CharField(max_length=200, null=True, blank=True)
    College = models.CharField(max_length=200, null=True, blank=True)
    Course = models.CharField( max_length=200, null=True, blank=True)
    Mobile = models.CharField(max_length=200,null=True, blank=True)

    def __str__(self):
        return self.Name

class teacherDb(models.Model):
    TeacherName = models.CharField(max_length=200, null=True, blank=True)
    TeacherAge = models.CharField(max_length=200, null=True, blank=True)
    TeacherPlace = models.CharField(max_length=200, null=True, blank=True)
    TeacherSubject = models.CharField(max_length=200, null=True, blank=True)
    TeacherEmail = models.EmailField(max_length=200, null=True, blank=True)
    TeacherPhone = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.TeacherName

