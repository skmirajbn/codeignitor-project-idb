/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";

export default function Profile() {
  return (
    <div>
      <Header />
      <div className="container">
        <img className="h-[30rem] w-full object-cover rounded-lg" src="img/cover.jpg" alt="" />
        <div className="flex gap-6 items-end -mt-20 px-10">
          <img className="h-44 w-44 object-cover rounded-full" src="img/profile.jpg" alt="" />
          <div>
            <h2 className="text-4xl font-bold">Sheikh rownakul Islam Miraj</h2>
            <h5>64 Friends</h5>
          </div>
        </div>
        <hr className="mt-3" />
      </div>
    </div>
  );
}
