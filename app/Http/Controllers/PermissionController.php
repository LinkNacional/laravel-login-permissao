<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permission;

class permissionController extends Controller {
    /**
     * Return listing of the permissions and groups.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() {
        $return = [];
        foreach (Permission::all() as $Permission) {
            foreach ($Permission->groups as $group) {
                if (isset($return[$group->name])) {
                    array_push($return[$group->name],$Permission->name);
                } else {
                    $return[$group->name] = [$Permission->name];
                }
            }
            if (isset($return['all auths'])) {
                $return['all auths'] = [...$return['all auths'], $Permission->name];
            } else {
                $return['all auths'] = [$Permission->name];
            }
        }
        return $return;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) {
        //
    }
}
