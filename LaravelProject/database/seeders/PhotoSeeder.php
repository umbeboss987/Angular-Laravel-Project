<?php

namespace Database\Seeders;

use Illuminate\support\Facades\DB;
use Illuminate\Database\Seeder;

class PhotoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('photo')->insert([

            'product_id' => 1, 
            'left_photo' => 'Xiaomi ', 
            'right_photo' => '130.30',
            'top_photo' => 'https://i.ebayimg.com/images/g/Gu8AAOSwWkteQHTN/s-l640.jpg',
            'bottom_photo'  => 'phone',
            ]
        );

    }
}
