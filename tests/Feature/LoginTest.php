<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Http\Controllers\UserController;
use Illuminate\Database\Eloquent\Factories\Factory;

class LoginTeste extends TestCase {
    /**
     * A basic feature test example.
     *
     * @return void
     */
    use WithFaker;

    public function testHttpCode() {
        $create = $this->post('/createuser', ['name' => $this->faker->name, 'email' => $this->faker->unique()->safeEmail, 'password' => '123', 'permissions' => [18]]);

        $create->assertStatus(201);
        (string)$idUser = $create->original->id;
        $dashboard = $this->get('/dashboard');
        $dashboard->assertStatus(200);

        $permissionsUser = $this->post('/users/permissions');
        $permissionsUser->assertStatus(200);

        //users permissions

        $permissionUser = $this->get('/users/permission/' . $idUser);
        $permissionUser->assertStatus(200);

        $pageUsers = $this->get('/users');
        $pageUsers->assertStatus(200);

        $pageUsers = $this->post('/users',['page' => 1, 'rows' => 7, 'search' => '']);
        $pageUsers->assertStatus(200);

        $permissionSave = $this->post('/users/permissions/save',['id' => $idUser, 'permissions' => ['Gerenciar usuários', 'acessar sistema', 'Visualizar todos os chamados'], 'groups' => '', 'admin' => '']);
        $permissionSave->assertStatus(200);

        $permissions = $this->post('/users/permissions/' . $idUser);
        $permissions->assertStatus(200);

        $userEdit = $this->post('/users/edit/' . $idUser);
        $userEdit->assertStatus(200);

        $userEditRefresh = $this->post('/users/edit/' . $idUser . '/refresh');
        $userEditRefresh->assertStatus(200);

        $userEditRefresh = $this->post('/users/edit/' . $idUser . '/save',['technical_time' => 1]);
        $userEditRefresh->assertStatus(200);

        //delete user
        $userDeleted = $this->post('/deleteuser',['id' => $idUser]);
        $userDeleted->assertStatus(204);

        // fwrite(STDERR, print_r(json_encode($create->original->id), TRUE));
    }
}
