import Form from "@/components/contact/form";
import Information from "@/components/contact/info";
import { bebas_neue } from "@/lib/fonts";
import React from "react";

const Contact = () => {
  return (
    <section className="max-h-screen lg:mt-0 lg:h-[calc(100vh-113px)] max-w-screen flex items-center justify-center overflow-y-hidden">
      <div className="flex lg:flex-row flex-col items-start justify-between w-full gap-5 lg:gap-0">
          <Information/>
        <div className="flex flex-col w-full sm:max-w-full lg:w-[400px] xl:w-[500px]">
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
