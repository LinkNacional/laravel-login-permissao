<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

    </head>
    <body>
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach

                </ul>
            </div>
        @endif
        <h1>cadastrar usuario<h1>
        <form method="POST" action="/register">
            @csrf
            <label>nome:</label>
            <br/>
            <input type="text" name="name"/>
            <br/>
            <label>Email:</label>
            <br/>
            <input type="email" name="email"/>
            <br/>
            <label>Senha:</label>
            <br/>
            <input type="password" name="password">
            <br/>
            <label>permissões:</label>

            @foreach ($permissions as $permission)
            <div>
                <input type="checkbox" value={{$permission->id}} name="permissions[{{$permission->id}}]">
                <label for="{{ $permission->name }}">{{ $permission->name }}</label>
              </div>
        @endforeach
        
            <input type="submit" value="salvar">
        </form>
       
        <a href="/login">login</a>
    </body>
</html>
