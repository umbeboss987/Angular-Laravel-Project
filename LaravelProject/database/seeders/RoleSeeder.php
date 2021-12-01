<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\support\Facades\DB;


class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('role')->insert([
            'id' => 1,
            'role' => 'admin'
            ]
        );

        DB::table('role')->insert([
            'id' => 2,
            'role' => 'user'
            ]
        );
    }
}
