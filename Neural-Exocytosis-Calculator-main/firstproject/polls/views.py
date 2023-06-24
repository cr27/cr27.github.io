from django.http import HttpResponse
from django.shortcuts import render
from django.contrib import messages
from .models import newslatteremail
from .main import exocytosis

def geeks_view(request):
    return HttpResponse("<h1>Welcome to GeeksforGeeks</h1>")

def test(request):
    args = {}
    if request.method == 'POST':
        timestamp = request.POST.get('timestamp')
        D = request.POST.get('D')
        x = request.POST.get('x/z-score')
        try:
            answer, macroscopicRateConstant, dataurl = exocytosis(timestamp, D, x)
            args['answer'] = answer
            args['macroscopicRateConstant'] = macroscopicRateConstant
            args['dataurl'] = dataurl
        except:
            args['answer'] = 'Invalid inputs.'
            args['macroscopicRateConstant'] = 'Try again.'
    return render(request, 'index.html', args)


def home(request):
    # if post request comes from the subscribe button
    # then saving user email in our database
    if 'subscribe' in request.POST:
        email = newslatteremail()
        email.userEmail = request.POST.get("email")
        email.save()
        messages.info(
            request, 'You have successfully subscribed to our newslatter.')

    # if post request comes from the unsubscribe button
    # then deleting the user email from our database
    if 'unsubscribe' in request.POST:
        newslatteremail.objects.get(
            userEmail=request.POST.get("email")).delete()
        messages.info(request, 'sorry to see you!!!')

    return render(request, 'news.html')

#6:51 https://www.youtube.com/watch?v=GRFoE8eoj20
