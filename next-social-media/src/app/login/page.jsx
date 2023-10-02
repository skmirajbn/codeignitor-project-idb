export default function SignUp() {
  return (
    <section className="bg-[#F0F2F5] flex container justify-center py-32 gap-16 items-center">
      <div>
        <h2 className="text-6xl text-blue-600 font-bold">facebook</h2>
        <p className="text-2xl">
          Facebook helps you connect and share <br /> with the people in your life.
        </p>
      </div>
      <div className="space-y-8">
        <form action="" className="flex flex-col gap-3 bg-white shadow-lg px-6 py-6">
          <input className="w-96 py-3 px-4 border-2 border-gray-300 focus:border-blue-600  rounded-md" type="text" placeholder="Email Address or Phone Number" />
          <input className="w-96 py-3 px-4 border-2 border-gray-300 focus:border-blue-600  rounded-md" type="text" placeholder="Password" />
          <button className="bg-[#1877F2] text-white py-3 rounded-md font-medium text-xl">Log in</button>
          <h5 className="text-center text-blue-600 text-sm">Forgotten Password?</h5>
          <hr />
          <h2 className="bg-[#42B72A] text-white inline-block w-fit px-6 py-3 rounded-md mx-auto font-medium">Create New Account</h2>
        </form>
        <h3 className="text-sm text-center">
          <b>Create a Page</b> for a celebrity, brand or business.
        </h3>
      </div>
    </section>
  );
}
