<?php
// database/migrations/xxxx_xx_xx_xxxxxx_create_projects_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->string('project_id', 50)->primary();
            $table->string('title', 255);
            $table->text('description')->nullable();
            $table->integer('percentage')->default(0);
            $table->date('date')->nullable();
            $table->boolean('completed')->default(false);
            $table->string('project_leader_id', 50)->nullable();
            $table->timestamps();

            $table->foreign('project_leader_id')
                  ->references('user_id')
                  ->on('users')
                  ->onDelete('set null');

            $table->check('percentage >= 0 AND percentage <= 100');
        });
    }

    public function down()
    {
        Schema::dropIfExists('projects');
    }
};