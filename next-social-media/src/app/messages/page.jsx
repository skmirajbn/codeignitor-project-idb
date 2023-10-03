/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";

export default function Page() {
  return (
    <div className="h-screen">
      <Header />
      <section className="flex">
        {/* Message Sidebar */}
        <div className="w-1/4 py-4 px-6 space-y-3 h-full">
          <div className=" bg-white  flex justify-between items-center">
            <h2 className="text-2xl font-bold">Chats</h2>
            <div className="flex gap-4">
              <div className="bg-gray-300 h-10 w-10 flex justify-center items-center rounded-full">
                <i class="fa-solid fa-ellipsis text-xl"></i>
              </div>
              <div className="bg-gray-300 h-10 w-10 flex justify-center items-center rounded-full">
                <i class="fa-solid fa-pen-to-square text-xl"></i>
              </div>
            </div>
          </div>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs rounded-full bg-gray-100 h-[2rem]" />
          <h3 className="text-xl font-bold">Inbox</h3>
          <div className="overflow-auto space-y-3 h-[70vh]">
            {/* single Message Sidebar */}
            <div className="flex gap-3 items-center">
              <img className="h-10 w-10 object-cover rounded-full" src="img/profile.jpg" alt="" />
              <div>
                <h3>Jahangir Alam</h3>
                <p>Hello How are you?</p>
              </div>
              <i class="fa-solid fa-comment text-blue-600"></i>
            </div>
            {/* single Message Sidebar */}
            <div className="flex gap-3 items-center">
              <img className="h-10 w-10 object-cover rounded-full" src="img/profile.jpg" alt="" />
              <div>
                <h3>Jahangir Alam</h3>
                <p>Hello How are you?</p>
              </div>
              <i class="fa-solid fa-comment text-blue-600"></i>
            </div>
            {/* single Message Sidebar */}
            <div className="flex gap-3 items-center">
              <img className="h-10 w-10 object-cover rounded-full" src="img/profile.jpg" alt="" />
              <div>
                <h3>Jahangir Alam</h3>
                <p>Hello How are you?</p>
              </div>
              <i class="fa-solid fa-comment text-blue-600"></i>
            </div>
            {/* single Message Sidebar */}
            <div className="flex gap-3 items-center">
              <img className="h-10 w-10 object-cover rounded-full" src="img/profile.jpg" alt="" />
              <div>
                <h3>Jahangir Alam</h3>
                <p>Hello How are you?</p>
              </div>
              <i class="fa-solid fa-comment text-blue-600"></i>
            </div>
            {/* single Message Sidebar */}
            <div className="flex gap-3 items-center">
              <img className="h-10 w-10 object-cover rounded-full" src="img/profile.jpg" alt="" />
              <div>
                <h3>Jahangir Alam</h3>
                <p>Hello How are you?</p>
              </div>
              <i class="fa-solid fa-comment text-blue-600"></i>
            </div>
            {/* single Message Sidebar */}
            <div className="flex gap-3 items-center">
              <img className="h-10 w-10 object-cover rounded-full" src="img/profile.jpg" alt="" />
              <div>
                <h3>Jahangir Alam</h3>
                <p>Hello How are you?</p>
              </div>
              <i class="fa-solid fa-comment text-blue-600"></i>
            </div>
            {/* single Message Sidebar */}
            <div className="flex gap-3 items-center">
              <img className="h-10 w-10 object-cover rounded-full" src="img/profile.jpg" alt="" />
              <div>
                <h3>Jahangir Alam</h3>
                <p>Hello How are you?</p>
              </div>
              <i class="fa-solid fa-comment text-blue-600"></i>
            </div>
            {/* single Message Sidebar */}
            <div className="flex gap-3 items-center">
              <img className="h-10 w-10 object-cover rounded-full" src="img/profile.jpg" alt="" />
              <div>
                <h3>Jahangir Alam</h3>
                <p>Hello How are you?</p>
              </div>
              <i class="fa-solid fa-comment text-blue-600"></i>
            </div>
            {/* single Message Sidebar */}
            <div className="flex gap-3 items-center">
              <img className="h-10 w-10 object-cover rounded-full" src="img/profile.jpg" alt="" />
              <div>
                <h3>Jahangir Alam</h3>
                <p>Hello How are you?</p>
              </div>
              <i class="fa-solid fa-comment text-blue-600"></i>
            </div>
            {/* single Message Sidebar */}
            <div className="flex gap-3 items-center">
              <img className="h-10 w-10 object-cover rounded-full" src="img/profile.jpg" alt="" />
              <div>
                <h3>Jahangir Alam</h3>
                <p>Hello How are you?</p>
              </div>
              <i class="fa-solid fa-comment text-blue-600"></i>
            </div>
            {/* single Message Sidebar */}
            <div className="flex gap-3 items-center">
              <img className="h-10 w-10 object-cover rounded-full" src="img/profile.jpg" alt="" />
              <div>
                <h3>Jahangir Alam</h3>
                <p>Hello How are you?</p>
              </div>
              <i class="fa-solid fa-comment text-blue-600"></i>
            </div>
          </div>
        </div>
        {/* Message Body */}
        <div className="w-2/4 p-4 space-y-3">
          <div className="flex items-center gap-4 justify-between">
            <div className="flex items-center gap-4">
              <img className="h-14 w-14 object-cover rounded-full" src="img/profile.jpg" alt="" />
              <h3 className="text-xl font-bold">Mr. Mokhles Uddin</h3>
            </div>
            <div className="flex gap-4 text-blue-600">
              <i class="fa-solid fa-phone text-xl"></i>
              <i class="fa-solid fa-video text-xl"></i>
              <i class="fa-solid fa-circle-info text-xl"></i>
            </div>
          </div>
          <hr />
        </div>
        {/* Message options */}
        <div className="w-1/4 "></div>
      </section>
    </div>
  );
}
