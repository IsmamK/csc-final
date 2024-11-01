import json
import os
from django.http import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.conf import settings

# Helper function to read JSON files
def read_json_file(file_path):
    with open(file_path) as f:

        return json.load(f)

# Helper function to write to JSON files
def write_json_file(file_path, data):
    with open(file_path, 'w') as f:
     
        json.dump(data, f, indent=4)

# Helper function to handle file uploads
def handle_uploaded_file(f, component, index):
    upload_path = os.path.join(settings.MEDIA_ROOT, component)
    os.makedirs(upload_path, exist_ok=True)  # Create directory if it doesn't exist
    file_name = f"{component}_{index}.png"  # Customize file naming as needed
    file_path = os.path.join(upload_path, file_name)
    with open(file_path, 'wb+') as destination:
  
        for chunk in f.chunks():
            destination.write(chunk)
    return os.path.join(settings.MEDIA_URL, component, file_name)  # URL to access the file

# Views for each component
class About1View(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request):
        data = read_json_file('api/data/about_data/about1.json')
        return JsonResponse(data)

    def patch(self, request):
        data = read_json_file('api/data/about_data/about1.json')
        updated_data = json.loads(request.body)

        print(updated_data)
        # Handle file uploads if they exist
        if request.FILES:
            for index, (key, value) in enumerate(updated_data.items()):
                if key.startswith("image") and request.FILES.get(key):
                    updated_data[key] = handle_uploaded_file(request.FILES[key], 'about1', index + 1)

        data.update(updated_data)
        write_json_file('api/data/about_data/about1.json', data)
        return JsonResponse(data)


class About2View(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request):
        data = read_json_file('api/data/about_data/about2.json')
        return JsonResponse(data)

    def patch(self, request):
        data = read_json_file('api/data/about_data/about2.json')
        updated_data = json.loads(request.body)
       

        # Handle file uploads if they exist
        if request.FILES:
            for index, (key, value) in enumerate(updated_data.items()):
                if key.startswith("image") and request.FILES.get(key):
                    updated_data[key] = handle_uploaded_file(request.FILES[key], 'about2', index + 1)

        data.update(updated_data)
        write_json_file('api/data/about_data/about2.json', data)
        return JsonResponse(data)

class FaqView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request):
        data = read_json_file('api/data/about_data/faq.json')
        return JsonResponse(data)

    def patch(self, request):
        data = read_json_file('api/data/about_data/faq.json')
        updated_data = json.loads(request.body)
        data.update(updated_data)
        write_json_file('api/data/about_data/faq.json', data)
        return JsonResponse(data)

class TeamView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request):
        data = read_json_file('api/data/about_data/team.json')
        return JsonResponse(data,safe=False)

    def patch(self, request):
        data = read_json_file('api/data/about_data/team.json')
        updated_data = json.loads(request.body)

        # Handle file uploads if they exist
        if request.FILES:
            for member in updated_data:
                if 'imageUrl' in member and request.FILES.get(f"image_{member['id']}"):
                    member['imageUrl'] = handle_uploaded_file(request.FILES[f"image_{member['id']}"], 'team', member['id'])

        data.update(updated_data)
        write_json_file('api/data/about_data/team.json', data)
        return JsonResponse(data,safe=False)

class Contact1View(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request):
        data = read_json_file('api/data/contact_data/contact1.json')
        return JsonResponse(data)

    def patch(self, request):
        data = read_json_file('api/data/contact_data/contact1.json')
        updated_data = json.loads(request.body)

        # Handle file uploads if they exist
        if request.FILES:
            for index, location in enumerate(updated_data.get("locations", [])):
                if 'imgSrc' in location and request.FILES.get(f"image_{index}"):
                    location['imgSrc'] = handle_uploaded_file(request.FILES[f"image_{index}"], 'contact1', index + 1)

        data.update(updated_data)
        write_json_file('api/data/contact_data/contact1.json', data)
        return JsonResponse(data)

# Contact2View Class
class Contact2View(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request):
        data = read_json_file('api/data/contact_data/contact2.json')
        return JsonResponse(data)

    def patch(self, request):
        data = read_json_file('api/data/contact_data/contact2.json')
        updated_data = json.loads(request.body)

        # Handle file uploads if they exist
        if request.FILES and request.FILES.get("image"):
            updated_data["imageUrl"] = handle_uploaded_file(request.FILES["image"], 'contact2', 1)

        data.update(updated_data)
        write_json_file('api/data/contact_data/contact2.json', data)
        return JsonResponse(data)
    
# ------------------------ PROJECTS  ------------------

class ProjectsView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request):
        data = read_json_file('api/data/project_data/projects.json')
        return JsonResponse(data, safe=False)

    def patch(self, request):
        data = read_json_file('api/data/project_data/projects.json')
        updated_data = json.loads(request.body)

        # Handle file uploads if they exist
        if request.FILES:
            for index, project in enumerate(updated_data):
                if 'imageUrl' in project and request.FILES.get(f"image_{project['id']}"):
                    project['imageUrl'] = handle_uploaded_file(request.FILES[f"image_{project['id']}"], 'projects', project['id'])

        data.update(updated_data)
        write_json_file('api/data/projects.json', data)
        return JsonResponse(data, safe=False)

class GalleryView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)

    def get(self, request):
        # Read data from the gallery JSON file
        data = read_json_file('api/data/gallery_data/gallery.json')
        return JsonResponse(data)

    def patch(self, request):
        # Read the existing data from the gallery JSON file
        data = read_json_file('api/data/gallery_data/gallery.json')
        updated_data = json.loads(request.body)

        # Handle file uploads if they exist
        if request.FILES:
            for index, item in enumerate(updated_data['items']):
                if 'image' in item and request.FILES.get(f"image_{index}"):
                    item['image'] = handle_uploaded_file(request.FILES[f"image_{index}"], 'gallery', index + 1)

        # Update the existing data with the new data
        data.update(updated_data)
        write_json_file('api/data/gallery_data/gallery.json', data)
        return JsonResponse(data)
