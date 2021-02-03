<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>dashboard</title>
    </head>
    <body>
        <form method="POST" action="/permissionsEdit">
            @csrf
            @foreach ($permissions as $permission)
            <div>
                <input type="checkbox" value={{$permission->id}} name="permissions[{{$permission->id}}]">
                <label for="{{ $permission->name }}">{{ $permission->name }}</label>
            </div>
            @endforeach
            <input type="submit" value="salvar">
        </form>
    </body>
</html>
