<?php
namespace App\Controllers;

use CodeIgniter\Controller;

class Blog extends Controller {
    public function getIndex() {
        $data = [
            "page_title" => "CodeIgnitor 4",
            "page_heading" => "CodeIgniter 4 views"
        ];
        echo view('header');
        echo view('myview', $data);
        echo view('footer');
    }
}
?>