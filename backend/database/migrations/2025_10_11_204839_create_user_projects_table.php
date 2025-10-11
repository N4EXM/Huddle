<?php
// database/migrations/xxxx_xx_xx_xxxxxx_create_user_projects_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('user_projects', function (Blueprint $table) {
            $table->string('user_id', 50);
            $table->string('project_id', 50);
            $table->string('role', 50)->default('member');
            $table->timestamp('joined_date')->useCurrent();

            $table->primary(['user_id', 'project_id']);

            $table->foreign('user_id')
                  ->references('user_id')
                  ->on('users')
                  ->onDelete('cascade');

            $table->foreign('project_id')
                  ->references('project_id')
                  ->on('projects')
                  ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('user_projects');
    }
};