<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class verifyRegister {
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */    
    public function handle(Request $request, Closure $next) {
        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);
        return $next($request);
    }
}
