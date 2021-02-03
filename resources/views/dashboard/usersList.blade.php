<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>dashboard</title>
    </head>
    <body>
        @foreach ($users as $user)
        <p>{{$user->name}}</p>
        @endforeach
    </body>
</html>
