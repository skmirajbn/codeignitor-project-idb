"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "./../../public/img/logo.png";
import profile from "./../../public/img/profile.jpg";

export default function Header() {
  return (
    <header class=" flex justify-between items-center bg-white text-black py-3 px-5 shadow-lg sticky top-0 z-10">
      <Link href="/" class="flex space-x-4 w-1/4">
        <Image class="w-10" src={logo} alt="" />
        <input class="w-44 rounded-full px-4 py-1 text-black bg-gray-200" type="text" placeholder="Search" />
      </Link>
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
        <a class="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full relative" onClick={() => document.getElementById("my_modal_2").showModal()}>
          <i class="fa-brands fa-facebook-messenger "></i>
          <div className="bg-red-600 h-5 w-5 rounded-full absolute flex justify-center items-center text-xs text-white font-medium -right-1 -top-1">15</div>
        </a>
        <a href="#" class="bg-gray-200 w-10 h-10 flex justify-center items-center rounded-full relative">
          <i class="fa-solid fa-bell "></i>
          <div className="bg-red-600 h-5 w-5 rounded-full absolute flex justify-center items-center text-xs text-white font-medium -right-1 -top-1">28</div>
        </a>
        <a href="#">
          <Image class="w-12 h-12 rounded-full overflow-hidden object-cover" src={profile} alt="" />
        </a>
      </div>

      {/* Messageing Modal */}

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Messages!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </header>
  );
}
