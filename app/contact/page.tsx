import ContactLeft from "@/components/contactLeft";
import { bebas_neue } from "@/lib/fonts";
import React from "react";

const Contact = () => {
  return (
    <section className="h-screen max-w-screen flex items-center justify-center -mt-[105px]">
      <div className="flex lg:flex-row flex-col items-start justify-between w-full gap-5 lg:gap-0">
          <ContactLeft/>
        <div className="flex flex-col max-w-[600px] sm:max-w-full lg:max-w-[600px] xl:max-w-[700px]">
          <span>flasdfjklasdjflk</span><br/>
          <span>flasdfjklasdjflk</span><br/>
          <span>flasdfjklasdjflk</span><br/>
          <span>flasdfjklasdjflk</span><br/>
          <span>flasdfjklasdjflk</span><br/>
          <span>flasdfjklasdjflk</span><br/>
          <span>flasdfjklasdjflk</span><br/>
          <span>flasdfjklasdjflk</span><br/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
