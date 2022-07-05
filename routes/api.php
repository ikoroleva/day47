<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::get('/people-of-interest/all', [App\Http\Controllers\Api\PersonController::class, 'index']);
Route::get('/statuses', [App\Http\Controllers\Api\StatusController::class, 'index']);


Route::get('/people-of-interest', [App\Http\Controllers\Api\PersonController::class, 'getPeopleByStatus']);

Route::post('/people-of-interest/{id}/edit', [App\Http\Controllers\Api\PersonController::class, 'edit']);
