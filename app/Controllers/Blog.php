<?php
namespace App\Controllers;

use CodeIgniter\Controller;

class Blog extends Controller {
    public function getIndex() {
        echo view('header');
        echo view('myveiw');
        echo view('footer');
    }
}
?>