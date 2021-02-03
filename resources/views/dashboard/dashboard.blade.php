<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>dashboard</title>
    </head>
    <body>
        @foreach ($user->getAuths() as $permission)
        @if ($permission->name === 'auth1')
        <div>
            item 1
        </div>
        @endif

        @if ($permission->name === 'auth2')
        <div>
            item 2
        </div>
        @endif

        @if ($permission->name === 'auth3')
        <div>
            item 3
        </div>
        @endif
        @endforeach
        <a href="/dashboard/logout">logout</a>
        <br/>
        <a href="/dashboard/users">verificar se tem permissão auth 1</a>
        <br/>
        <a href="/dashboard/permissionsEdit">Editar suas permissões</a>

    </body>
</html>
