<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

// Route::get('/', function () {
//     return view('index');
// });

Route::get('/', 'HomepageController@index');

Route::get('about', 'HomepageController@about');

Route::get('tabs_page', 'HomepageController@tabs_page');
