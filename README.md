## What is this?
Simple to-do application using Django Rest Framework and Angular 2

Authentication function is currently under development.

## Operating environment

- python 3.6.0
- node 7.5.0
- npm 4.1.2

## SetUp Django

install library
```
$ pip install django
$ pip install djangorestframework
$ pip install django-filter
$ pip install django-cors-headers
$ pip install djangorestframework-jwt
```

migration Django
```
$python manage.py migrate
```

create admin user
```
$ python manage.py createsuperuser
```

start Django
```
$ cd django_app
$ python manage.py runserver
```

## SetUp Angular2

install Angular-CLI
```
$ npm install -g @angular/cli
```

install npm module
```
$ npm install
$ npm install --save bootstrap ng2-bootstrap
$ npm i -S auth0-lock angular2-jwt
$ npm i -D @types/auth0-lock
```

start Angular
```
$ cd ng2app
$ ng serve
```

## How to Login
Please use supereuser username and password.
(Authentication function is currently under development.)
