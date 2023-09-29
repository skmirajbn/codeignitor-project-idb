<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bangladesh's Largets Social Media</title>
    <link rel="stylesheet" href="<?= base_url() ?>public/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="<?= base_url() ?>public/css/output.css">
</head>

<body>
    <header class=" flex justify-between items-center bg-white text-black py-3 px-5 shadow-lg">

        <div class="flex space-x-4 w-1/4">
            <img class="w-10" src="<?= base_url() ?>public/img/logo.png" alt="">
            <input class="w-44 rounded-full px-4 py-1 text-black bg-gray-200" type="text" placeholder="Search">
        </div>
        <nav class="flex space-x-16 text-bold justify-center w-2/4 text-2xl">
            <a class="text-blue-600" href="#"><i class="fa-solid fa-house"></i></a>
            <a href="#"><i class="fa-solid fa-people-group"></i></a>
            <a href="#"><i class="fa-solid fa-gamepad"></i></a>
        </nav>
        <div class="w-1/4 flex space-x-4 justify-end items-center text-2xl">
            <a href="#" class="  block">
                <div class="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full">
                    <a href="#"><i class="fa-solid fa-ellipsis-vertical px-px"></i></a>
                    <a href="#"><i class="fa-solid fa-ellipsis-vertical px-px"></i></a>
                    <a href="#"><i class="fa-solid fa-ellipsis-vertical px-px"></i></a>
                </div>
            </a>
            <a href="#" class="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full"><i
                    class="fa-brands fa-facebook-messenger "></i></a>
            <a href="#" class="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full"><i
                    class="fa-solid fa-bell "></i></a>
            <a href="#"><img class="w-12 h-12 rounded-full overflow-hidden object-cover"
                    src="<?= base_url() ?>public/img/profile.jpg" alt=""></a>
        </div>
    </header>


    <section class="flex mt-2 bg-[#F0F2F5]">
        <div class="w-1/4 px-4 py-3 space-y-3 ">
            <!-- Single sidebar item -->
            <div class="flex items-center space-x-3">
                <img class="w-10 h-10 rounded-full object-cover" src="<?= base_url() ?>public/img/profile.jpg" alt="">
                <h3>Sheikh Rownakul Islam Miraj</h3>
            </div>
            <div class="flex items-center space-x-3">
                <img class="w-10 h-10 scale-75" src="<?= base_url() ?>public/img/friends.png" alt="">
                <h3>Friends</h3>
            </div>
            <div class="flex items-center space-x-3">
                <img class="w-10 h-10 rounded-full object-cover" src="<?= base_url() ?>public/img/profile.jpg" alt="">
                <h3>Groups</h3>
            </div>
        </div>
    </section>
</body>

</html>