<?php
// app/Traits/GeneratesUniqueId.php
namespace App\Traits;

use Illuminate\Support\Str;

trait GeneratesUniqueId
{
    protected static function bootGeneratesUniqueId()
    {
        static::creating(function ($model) {
            if (empty($model->{$model->getKeyName()})) {
                $model->{$model->getKeyName()} = static::generateUniqueId();
            }
        });
    }

    public static function generateUniqueId()
    {
        $id = Str::random(8); // Or use: 'USR_' . Str::random(6)
        
        // Ensure uniqueness
        while (static::where('id', $id)->exists()) {
            $id = Str::random(8);
        }
        return $id;
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }
}