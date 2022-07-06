<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::with('aliases')->with('missions')->get();
        return $people;
    }

    public function getPeopleByStatus(Request $request)
    {
        $status = $request->input('status');

        if (empty($status)) {
            $people = Person::with('aliases')->with('missions')->get();
        } else {
            $people = Person::with('aliases')->with('missions')->where('status_id', '=', $status)->get();
        }

        // dd($people);
        return $people;
    }

    public function edit(Request $request, $id)
    {
        $person = Person::findOrFail($id);

        $person->name = $request->input('name');
        $person->occupation = $request->input('occupation');

        $person->save();

        return ['status' => 'success'];
    }
}
