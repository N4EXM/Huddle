<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */

    protected $primaryKey = "user_id";
    protected $keyType = "string";
    protected $incrementing = false;

    protected $fillable = [
        'user_id',
        'name',
        'email',
        'password',
        'image_path',
        'contact_number'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    // Relationships
    public function tasks()
    {
        return $this->belongsToMany(Task::class, 'user_tasks', 'user_id', 'task_id')
                    ->withTimestamps('assigned_date');
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class, 'user_projects', 'user_id', 'project_id')
                    ->withPivot('role', 'joined_date');
    }

    public function ledProjects()
    {
        return $this->hasMany(Project::class, 'project_leader_id', 'user_id');
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
