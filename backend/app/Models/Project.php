<?php
// app/Models/Project.php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $primaryKey = 'project_id';
    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'project_id', 'title', 'description', 'percentage', 'date', 
        'completed', 'project_leader_id'
    ];

    protected $casts = [
        'date' => 'date',
        'completed' => 'boolean',
    ];

    // Relationships
    public function leader()
    {
        return $this->belongsTo(User::class, 'project_leader_id', 'user_id');
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_projects', 'project_id', 'user_id')
                    ->withPivot('role', 'joined_date');
    }

    public function tasks()
    {
        return $this->hasMany(Task::class, 'project_id', 'project_id');
    }
}