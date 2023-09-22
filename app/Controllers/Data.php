<?php
namespace App\Controllers;

use CodeIgniter\Controller;
use CodeIgniter\View\Table;

class Data extends Controller {
    public function getIndex() {
        $table = new Table();

        $table->generate(($data));
    }
}
?>