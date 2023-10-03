/* eslint-disable @next/next/no-img-element */
"use client";
import Header from "@/components/header";
import MessageBody from "./messageBody";
import MessageSidebar from "./messageSidebar";

export default function Page() {
  return (
    <div className="h-screen">
      <Header />
      <section className="flex flex-1">
        <MessageSidebar />
        <MessageBody />
        {/* Message options */}
        <div className="w-1/4"></div>
      </section>
    </div>
  );
}
