export default function Post() {
  return (
    <div className="space-y-2 py-2">
      <h3 className="text-3xl">Here is the post text</h3>
      <img className="rounded-lg w-full" src="img/post-image.webp" alt="" />
      {/* Like Comment Share Section */}
      <div>
        <i class="fa-solid fa-thumbs-up"></i> Like
      </div>
    </div>
  );
}
