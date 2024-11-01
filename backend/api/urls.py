from django.urls import path
from .views import *

urlpatterns = [

    # About Section
    path('about/about1/', About1View.as_view(), name='about1'),
    path('about/about2/', About2View.as_view(), name='about2'),
    path('about/faq/', FaqView.as_view(), name='faq'),
    path('about/team/', TeamView.as_view(), name='team'),

    # Contact Section
    path('contact/contact1/', Contact1View.as_view(), name='contact1'),
    path('contact/contact2/', Contact2View.as_view(), name='contact2'),

    # Projects Section
    path('projects/', ProjectsView.as_view(), name='projects'),

 # Projects Section
    path('gallery/', GalleryView.as_view(), name='projects'),
]