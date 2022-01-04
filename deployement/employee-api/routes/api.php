<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\AuthController;
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


Route::post("/auth/create",[AuthController::class,"register"]);
Route::post("/auth",[AuthController::class,"login"]);

Route::group(["middleware" => ['auth:sanctum']],function(){
    Route::post("/auth/logout",[AuthController::class,"logout"]);
    Route::get("/",[EmployeesController::class,"index"]);
    Route::get("/{id}",[EmployeesController::class,"show"]);
    Route::post("/",[EmployeesController::class,"store"]);
    Route::put("/{id}",[EmployeesController::class,"update"]);
    Route::delete("/{id}",[EmployeesController::class,"destroy"]);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
