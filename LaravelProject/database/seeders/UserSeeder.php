<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user')->insert([

            'username' => 'umberto', 
            'password' => bcrypt('okok'),
            'email' => 'umberto.labarbera@student.univaq.it',
            'role_id' => 1
            ]
        );

    }
}
