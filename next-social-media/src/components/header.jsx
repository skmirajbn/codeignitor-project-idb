import Image from "next/image";
import logo from "./../../public/img/logo.png";
import profile from "./../../public/img/profile.jpg";

export default function Header() {
  return (
    <header class=" flex justify-between items-center bg-white text-black py-3 px-5 shadow-lg">
      <div class="flex space-x-4 w-1/4">
        <Image class="w-10" src={logo} alt="" />
        <input class="w-44 rounded-full px-4 py-1 text-black bg-gray-200" type="text" placeholder="Search" />
      </div>
      <nav class="flex space-x-16 text-bold justify-center w-2/4 text-2xl">
        <a class="text-blue-600" href="#">
          <i class="fa-solid fa-house"></i>
        </a>
        <a href="#">
          <i class="fa-solid fa-people-group"></i>
        </a>
        <a href="#">
          <i class="fa-solid fa-gamepad"></i>
        </a>
      </nav>
      <div class="w-1/4 flex space-x-4 justify-end items-center text-2xl">
        <div class="  block">
          <div class="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full">
            <a href="#">
              <i class="fa-solid fa-ellipsis-vertical px-px"></i>
            </a>
            <a href="#">
              <i class="fa-solid fa-ellipsis-vertical px-px"></i>
            </a>
            <a href="#">
              <i class="fa-solid fa-ellipsis-vertical px-px"></i>
            </a>
          </div>
        </div>
        <a href="#" class="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full">
          <i class="fa-brands fa-facebook-messenger "></i>
        </a>
        <a href="#" class="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full">
          <i class="fa-solid fa-bell "></i>
        </a>
        <a href="#">
          <Image class="w-12 h-12 rounded-full overflow-hidden object-cover" src={profile} alt="" />
        </a>
      </div>
    </header>
  );
}
