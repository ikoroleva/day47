<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mission;

class MissionController extends Controller
{
    public function store(Request $request)
    {
        $mission = new Mission;

        $mission->name = $request->input('name');
        $mission->year = $request->input('year');

        $mission->save();

        return ['status' => 'success'];
    }
}
