<?php
// database/seeders/AdminUserSeeder.php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminUserSeeder extends Seeder
{
    public function run()
    {
        $userId = 'ADM_' . Str::upper(Str::random(6));
        
        DB::table('users')->insert([
            'user_id' => $userId,
            'name' => 'Administrator',
            'email' => 'admin@taskapp.com',
            'password' => Hash::make('adminPass123'), // Change this password!
            'image_path' => null,
            "role" => "admin",
            'contact_number' => '+1234567890',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $this->command->info("Admin user created successfully!");
        $this->command->info("Email: admin@taskapp.com");
        $this->command->info("Password: admin123");
        $this->command->info("User ID: " . $userId);
    }
}