<?php
namespace App\Controllers;

use CodeIgniter\Controller;
use CodeIgniter\View\Table;

class Data extends Controller {
    public function getIndex() {
        $table = new Table();
        $data = [
            ['Name', 'City', 'State'],
            ['Fred', 'Hyderabad', 'Ts'],
            ['Fred', 'Hyderabad', 'Ts'],
            ['Fred', 'Hyderabad', 'Ts'],
            ['Fred', 'Hyderabad', 'Ts'],
        ];
        $table->generate(($data));
    }
}
?>