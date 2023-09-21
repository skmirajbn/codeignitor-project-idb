<?php
namespace App\Controllers;

use CodeIgniter\Controller;

class Welcome extends Controller {
    public function getIndex() {
        echo "hello";
    }
    public function _remap() {
        echo "this is remap";
    }
}


?>