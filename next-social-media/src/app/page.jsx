import Sidebar from "@/components/sidebar";
import Post from "../components/post";
export default function Home() {
  return (
    <section class="flex mt-2 bg-[#F0F2F5] gap-10 relative">
      <Sidebar />
      <div className=" w-2/4">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="w-1/4 bg-white flex flex-col items-end px-8 py-6 sticky top-20 h-full">
        {/* Single User */}
        <div className="flex items-center gap-3 relative">
          <img className="w-10 h-10 rounded-full object-cover" src="img/profile.jpg" alt="" />
          <i class="fa-solid fa-circle text-green-600 absolute top-0"></i>
          <h3>Sk Miraj</h3>
        </div>
      </div>
    </section>
  );
}
