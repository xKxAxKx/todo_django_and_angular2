from django.conf.urls import url, include
from django.contrib import admin

from to_do.urls import router as to_do_router

# 認証を追加
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include(to_do_router.urls)),
]
