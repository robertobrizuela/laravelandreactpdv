<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run()
    {
        $categories = [
            [
                'name' => 'Paletas',
                'description' => 'Todo tipo de paletas'
            ],
            [
                'name' => 'Chicles',
                'description' => 'Variedad de chicles'
            ],
            [
                'name' => 'Chocolates',
                'description' => 'Chocolates variados'
            ],
            [
                'name' => 'Dulces',
                'description' => 'Dulces varios'
            ],
            [
                'name' => 'Gomitas',
                'description' => 'Gomitas de diferentes sabores'
            ]
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
} 