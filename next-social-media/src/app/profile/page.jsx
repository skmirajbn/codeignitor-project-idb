/* eslint-disable @next/next/no-img-element */
import Header from "@/components/header";

export default function Profile() {
  return (
    <div>
      <Header />
      <div className="container">
        <img className="h-[30rem] w-full object-cover rounded-lg" src="img/cover.jpg" alt="" />
        <img className="h-36 w-36 object-cover rounded-full" src="img/profile.jpg" alt="" />
      </div>
    </div>
  );
}
