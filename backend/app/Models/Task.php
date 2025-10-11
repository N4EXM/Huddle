<?php
// app/Models/Task.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $primaryKey = 'task_id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'task_id', 'title', 'description', 'date', 'completed', 'project_id'
    ];

    protected $casts = [
        'date' => 'date',
        'completed' => 'boolean',
    ];

    // Relationships
    public function project()
    {
        return $this->belongsTo(Project::class, 'project_id', 'project_id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_tasks', 'task_id', 'user_id')
                    ->withTimestamps('assigned_date');
    }
}