from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from jobs import views

router = routers.DefaultRouter()
router.register(r'jobs', views.JobsView, 'jobs')
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('doc/', include_docs_urls(title="Jobber Api"))
]