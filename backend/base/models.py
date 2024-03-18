from django.db import models

class Category(models.Model):
    slug = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to='category/')
    color = models.CharField(max_length=50)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title
    
class Option(models.Model):
    title = models.CharField(max_length=50)
    price = models.FloatField(default=0.0)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title

class Product(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to='product/')
    price = models.FloatField(default=0.0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    options = models.ManyToManyField(Option)
    isFeatured = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title

