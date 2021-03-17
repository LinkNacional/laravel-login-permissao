<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>dashboard</title>
    </head>
    <body>
        <table style="width:100%">
            <tr>
                <th>Nome</th>
                <th>Email</th>
            </tr>
            
            @foreach ($users as $user)
            <tr>
                <th>{{$user->name}}</th>
                <th>{{$user->email}}</th>
                <th><button>deletar</button></th>
                <th><button>editar</button></th>
            </tr>
            @endforeach
        </table>
    </body>
</html>
