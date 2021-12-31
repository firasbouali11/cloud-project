<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Employee;
use DB;

class EmployeesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        $id = $request->user()->currentAccessToken()->tokenable->id;
        return Employee::where('user_id',$id)->get();
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            "name" => "required",
            "occupation" => "required",
            "CIN" => "required|unique:employees,CIN"
        ]);
        $employee = Employee::create([
            "name" => $fields["name"],
            "occupation" => $fields["occupation"],
            "CIN" => $fields["CIN"],
            "user_id" => $request->user()->currentAccessToken()->tokenable->id
        ]);

        return $employee ;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,$id)
    {
        $user_id = $request->user()->currentAccessToken()->tokenable->id;
        return Employee::where(["id" => $id, "user_id" => $user_id ])->first();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user_id = $request->user()->currentAccessToken()->tokenable->id;
        $employee = Employee::where(["id" => $id, "user_id" => $user_id]);
        if(!$employee){
            return Response(array("message" => "error"),400);
        }

        $fields = $request->validate([
            "name" => "required",
            "occupation" => "required",
            "CIN" => "required"
        ]);

        $employee->update([
            "name" => $fields["name"],
            "occupation" => $fields["occupation"],
            "CIN" => $fields["CIN"],
            "user_id" => $user_id
        ]);

        return array(
            "message" => "update successfull"
        );


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $res = Employee::destroy($id);
        if($res == 0){
            return Response(array("message" => "Something went wrong"),300);
        }
        return array("message" => "delete done");
    }
}
