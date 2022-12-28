from rest_framework.pagination import (
  PageNumberPagination, LimitOffsetPagination
)

class CustomPageNumberPagination(PageNumberPagination):
  page_size=30
  page_query_param = 'sayfa'
  
class CustomLimitOffsetPagination(LimitOffsetPagination):
  default_limit=10
  limit_query_param='maximum'
  offset_query_param = 'başlangıç'
  