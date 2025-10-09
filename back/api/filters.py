import django_filters as df
from django.db.models import Q
from .models import Autor

class AutoFilter(df.FilterSet):
    nome = df.CharFilter(method='filter_nome')
    nacion = df.CharFilter(method='nacionalidade')
    
    def filter_nome(self, qs, name, value: str):
        if not value:
            return qs
        return qs.filter(Q(nome__icontains=value) | Q(sobrenome__icontains=value))
    
    def nacionalidade(self, qs, name, value: str):
        if not value:
            return qs
        return qs.filter(Q(nacio__icontains=value))
    
    class Meta:
        model = Autor
        fields = []