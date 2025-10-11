<?php
// database/migrations/xxxx_xx_xx_xxxxxx_create_tasks_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->string('task_id', 50)->primary();
            $table->string('title', 255);
            $table->text('description')->nullable();
            $table->date('date')->nullable();
            $table->boolean('completed')->default(false);
            $table->string('project_id', 50)->nullable();
            $table->timestamps();

            $table->foreign('project_id')
                  ->references('project_id')
                  ->on('projects')
                  ->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('tasks');
    }
};