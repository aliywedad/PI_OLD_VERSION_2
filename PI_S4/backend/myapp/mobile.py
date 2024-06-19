from django.contrib.auth import authenticate
from django.http import HttpRequest, HttpResponse
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.request import Request
from rest_framework.response import Response
from .models import *
from .serializers import *
import mysql
import json
import smtplib
import random
from django.http import JsonResponse
from datetime import datetime
import pytz

# conn = mysql.connector.connect(host = "localhost", user = "root",passwd = "",database = "pis4")

@api_view(['GET'])
def Hello(request):
    return Response("hello")