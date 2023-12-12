from django.db import models
from django.db.models import Model


# Create your models here.
class Store(Model):
    """
    Atributos de clase que son usadas por herencia de la clase Model

    """

   
    nombre = models.CharField(max_length=100)
    estilo = models.CharField(max_length=50)
    alcohol_porcentaje = models.FloatField()
    volumen = models.FloatField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    cantidad_disponible = models.IntegerField()
    
    ubicacion = models.CharField(max_length=150, blank=True, null=True)
    fecha_habilitacion = models.DateField(auto_now=True)

    # podemos crear la tabla con un nombre especifico pero se lo tenemos
    # que indicar directamente en la metaclase

    class Meta:
        db_table = "tiendas_buenos_aires"

    def __str__(self):
       return self.name

    def get_fields(self):
        """
         Obtiene los nombres y valores de los campos de un modelo.

        Retorna una lista de tuplas donde cada tupla contiene el nombre descriptivo del campo
        y el valor correspondiente para el objeto actual.

        :return: Lista de tuplas (nombre del campo, valor del campo)
        :rtype: list
        """
        return [
            (field.verbose_name, field.value_from_object(self))
            for field in self.__class__._meta.fields[1:]
        ]


# -> paso siguiente  -> admin.py
