# Generated by Django 4.1.4 on 2022-12-21 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bycohort', '0002_student_about_student_avatar_student_email_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='files',
            field=models.ImageField(blank=True, null=True, upload_to='student'),
        ),
    ]
