<?php
namespace App\Controllers;

use CodeIgniter\Controller;

class Data extends Controller {
    public function getIndex() {
        $parser = \Config\Services::parser();
        $data = [
            'page_title' => 'My Website Title',
            'page_heading' => 'My Website Heading'
        ];
        $parser->setData($data);
        return $parser->render('myview');
        // echo view('dataview', $data);
    }
}
?>