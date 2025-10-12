<?php
// database/migrations/xxxx_xx_xx_xxxxxx_create_users_table.php
use App\Enums\PostStatus;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->string('user_id', 50)->primary();
            $table->string('name', 100);
            $table->string('image_path', 255)->nullable();
            $table->string('password');
            $table->string('email', 100)->unique();
            $table->string('contact_number', 20)->nullable();
            $table->enum("role", array_column(PostStatus::cases(), 'value')) -> default(PostStatus::Normal->value);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('users');
    }
};