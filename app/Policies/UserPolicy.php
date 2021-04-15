<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy {
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct() {
        //
    }

    public function control_users(User $user) {
        foreach ($user->permission as $permission) {
            if ($permission->name === 'Gerenciar usuários') {
                return true;
            }
        }
    }
}
