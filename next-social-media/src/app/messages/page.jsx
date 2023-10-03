/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";
import MessageSender from "./messageSender";
import MessageSidebar from "./messageSidebar";

export default function Page() {
  return (
    <div className="h-screen">
      <Header />
      <section className="flex flex-1">
        <MessageSidebar />
        {/* Message Body */}
        <div className="w-2/4 px-4" style={{ height: "calc(100vh - 5rem)" }}>
          <div className="h-24 py-4">
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
            <div className="w-full h-px bg-gray-200 mt-2"></div>
          </div>
          {/* Messages */}
          <div className="overflow-y-auto flex flex-col gap-3 justify-end py-4 px-3" style={{ height: "calc(100% - 10rem)" }}>
            <MessageSender />
            <MessageSender />

            {/* Message Receiver*/}
            <div className="flex items-center gap-4 justify-start">
              <img className="h-11 w-11 object-cover rounded-full" src="img/profile.jpg" alt="" />
              <h5 className="bg-blue-600 w-fit px-4 py-2 rounded-full text-white">I am Fine my dear!</h5>
            </div>
          </div>
          {/* Messging Writing */}
          <div className="h-16 flex items-center gap-4">
            <input type="text" placeholder="Write Message Here" className="input input-bordered w-full" />
            <i class="fa-solid fa-face-smile text-2xl"></i>
            <i class="fa-solid fa-thumbs-up text-2xl"></i>
          </div>
        </div>
        {/* Message options */}
        <div className="w-1/4"></div>
      </section>
    </div>
  );
}
