from rest_framework.test import APITestCase, APIRequestFactory
from django.urls import reverse
from flight.views import FlightView

class FlightTestCase(APITestCase):
  
  def setUp(self):
    self.factory = APIRequestFactory()
    
    
  def test_flight_list_as_non_auth_user(self):
    request = self.factory.get('/flight/flights/')
    response = FlightView.as_view({'get': 'list'})(request)
    print(response)
    self.assertEquals(response.status_code, 200)