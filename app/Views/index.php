<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>This is My Website</title>
    <link rel="stylesheet" href="<?= base_url() ?>public/css/output.css">
</head>

<body>
    <div class="bg-gray-200 text-black py-5">
        <header class="container flex justify-between items-center">
            <div><img class="w-8" src="<?= base_url() ?>public/img/logo.svg" alt=""></div>
            <nav class="space-x-8 text-bold">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Social</a>
                <a href="#">Career</a>
                <a href="#">Contact</a>
            </nav>
            <div>
                <input class="rounded-full px-4 py-1 text-black" type="text" placeholder="Search">
            </div>
        </header>

    </div>
    <section class="bg-blue-600 flex justify-center items-center py-16">
        <h2>This is Banner</h2>
    </section>
</body>

</html>