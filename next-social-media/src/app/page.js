import Comment from "./../components/comment";
import Post from "./../components/post";
export default function Home() {
  return (
    <section class="flex mt-2 bg-[#F0F2F5]">
      <div class="w-1/4 px-4 py-3 space-y-3 ">
        <div class="flex items-center space-x-3">
          <img class="w-10 h-10 rounded-full object-cover" src="img/friends.png" alt="" />
          <h3>Sheikh Rownakul Islam Miraj</h3>
        </div>
        <div class="flex items-center space-x-3">
          <img class="w-10 h-10 scale-75" src="img/friends.png" alt="" />
          <h3>Friends</h3>
        </div>
        <div class="flex items-center space-x-3">
          <img class="w-10 h-10 rounded-full object-cover" src="img/friends.png" alt="" />
          <h3>Groups</h3>
        </div>
      </div>
      <div className=" w-2/4">
        <Post />
        <Comment />
      </div>
    </section>
  );
}
