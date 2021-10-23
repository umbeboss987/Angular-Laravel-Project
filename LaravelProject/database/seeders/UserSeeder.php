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

            'name' => 'umberto', 
            'password' => '$2y$10$j/sYsF1TLvf4eH/4VQQeQOhgwX6C4oqd5FysBT27mtSxNaeo/7m/C',
            'email' => 'umberto.labarbera@student.univaq.it',
            'role' => 'admin'
            ]
        );

    }
}
