/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";
import MessageSidebar from "./messageSidebar";

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <section className="flex h-full">
        <MessageSidebar />
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
