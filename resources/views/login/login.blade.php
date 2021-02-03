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
        <h1>login<h1>
        <form method="POST" action="/login">
            @csrf
            <label>Email:</label>
            <br/>
            <input type="email" name="email"/>
            <br/>
            <label>Senha:</label>
            <br/>
            <input type="password" name="password">
            <br/>
            <input type="submit" value="login">
        </form>
        <a href="/register">cadastrar</a>
    </body>
</html>
