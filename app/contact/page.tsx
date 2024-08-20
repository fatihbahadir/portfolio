import Form from "@/components/contact/form";
import Information from "@/components/contact/info";
import { bebas_neue } from "@/lib/fonts";
import React from "react";

const Contact = () => {
  return (
    <section className="screen-container flex-center pt-[65px] lg:pt-[0px]">
      <div className="flex-mobile items-start justify-between w-full gap-5 lg:gap-0">
          <Information/>
        <div className="flex-column w-full sm:max-w-full lg:w-[400px] xl:w-[500px]">
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
