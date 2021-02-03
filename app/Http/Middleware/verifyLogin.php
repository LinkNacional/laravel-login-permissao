<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class verifyLogin {
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next) {
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
        return $next($request);
    }
}
