<?php
namespace App\Controllers;

use CodeIgniter\Controller;

class Blog extends Controller {
    public function getIndex() {
        return view('myview');
    }
}
?>