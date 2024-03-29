from rest_framework.pagination import PageNumberPagination


class CustomResultSetPaginator(PageNumberPagination):
    page_size = 12
    page_size_query_param = 'size'
