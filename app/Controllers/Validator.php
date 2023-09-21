<?php
namespace App\Controllers;

class Validator extends BaseController {
    public function getUpdateUser(int $userID) {
        if (!$this->validate([
            'email' => "required|is_unique[users.email,id,{$userID}]",
            'name' => 'required|alpha_numeric_spaces',
        ])) {
            // The validation failed.

            echo "Validation Failed";
        }

        // The validation was successful.

        // Get the validated data.
        echo " Valid";

        // ...
    }
}
?>