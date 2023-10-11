from django import forms
from .models import School


# Create your forms here.

class SchoolForm(forms.Form):
    firstname = forms.CharField(required=True, max_length=200)
    lastname = forms.CharField(required=True, max_length=200)
    username = forms.CharField(required=True, max_length=200)
    email = forms.EmailField(required=False, max_length=200)
    password = forms.CharField(widget=forms.PasswordInput, max_length=200, required=True)
    
    


class SchoolForm(forms.ModelForm):
    class Meta:
        model = School
        fields = '__all__'

    def save(self, commit=True):
        user = super(SchoolForm, self).save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
            return user
