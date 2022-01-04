<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;

use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
    private $token_name = "tokenname";

    public function login(Request $request){
        $fields = $request->validate([
            "email" => "required|string",
            "password" => "required|string"
        ]);
        // $user = Auth::attempt(['email' => $email, 'password' => becrypt($fields["password"])]);
        $user = User::where("email",$fields["email"])->first();
        if(!$user || !Hash::check($fields["password"],$user["password"])){
            return Response(["message" => "invalide credentials"],401);
        }

       

        $user->tokens()->where('tokenable_id', $user->id)->delete();

        $token = $user->createToken($this->token_name)->plainTextToken;
        $user["password"] = null;
        return Response([
            "token" => $token,
            "user" => $user,
        ]);
    }

    public function register(Request $request){
        $fields = $request->validate([
            "name" => "required",
            "email" => "required|unique:users,email|string",
            "password" => "required|string|confirmed"
        ]);
        $user = User::create([
            "name" => $fields["name"],
            "email" => $fields["email"],
            "password" => Hash::make($fields["password"])
        ]);

        $token = $user->createToken($this->token_name)->plainTextToken;
        $user["password"] = null;
        return Response([
            "token" => $token,
            "user" => $user
        ],201);
    }   

    public function logout(Request $request){
        $res = $request->user()->currentAccessToken()->delete();
        if($res == 1){
            return ["message" => "logout successfull"];
        }
        return Response(["message" => "something went wrong"],300);
    }


}
