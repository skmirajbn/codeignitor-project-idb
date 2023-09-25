<?php

namespace App\Controllers;

use App\Models\CommonModel;
use CodeIgniter\Controller;

class Home extends Controller {
    private $model;
    function __construct() {
        $this->model = new CommonModel();
    }
    public function index(): void {

        $fetchRecord = $this->model->selectRecord('users');
        echo "<pre>";
        print_r($fetchRecord);
    }
}