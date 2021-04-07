<?php

namespace Database\Factories;

use App\Models\Detail;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class DetailFactory extends Factory {
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Detail::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition() {
        return [
            'adm_user' => 1,
            'department_id' => 1,
            'unit' => 'teste',
            'lastname' => $this->faker->lastName,
            'phone' => $this->faker->phoneNumber,
            'role' => 'função',
            'ramal' => 'ramal',
            'technical_time' => 20,
        ];
    }
}
