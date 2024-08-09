"use client";
import React, { useEffect, useState } from "react";
import InputField from "./contactInputField";
import emailjs from "@emailjs/browser";
import { FaCheck } from "react-icons/fa";
import { inDevEnvironment } from "@/lib/utils";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    setErrors({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    
    let values;

    if (inDevEnvironment) {
        values = [process.env.NEXT_PUBLIC_PUBLIC_KEY, process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID]
    }
    else {
        values = [process.env.PUBLIC_KEY, process.env.SERVICE_ID, process.env.TEMPLATE_ID]
    }
    
    emailjs.init(values[0] || "");
    await emailjs.send(
       values[1] || "",
        values[2] || "",
        {
          to_name: "Fatih Bahadır",
          from_name: `${formData.email} ${formData.name}`,
          subject: formData.subject,
          message: formData.message,
        }
      );




    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setCompleted(true);
    setLoading(false);
    setTimeout(() => {
        setCompleted(false);
    }, 5000);
  };

  return (
    <div className="w-full">
      <form
        className="w-full flex flex-col gap-2 lg:gap-4 pb-2"
        onSubmit={handleSubmit}
      >
        <InputField
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          label="Name"
          disabled={(loading || completed)}
        />
        <InputField
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          label="Email"
          disabled={(loading || completed)}
        />
        <InputField
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          label="Subject"
          disabled={(loading || completed)}
        />
        <InputField
          id="message"
          name="message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          label="Message"
          disabled={(loading || completed)}
        />
        <button
          className={`${completed && 'animate-bounce transition-all'} self-start mt-1 sm:mt-3 bg-primary transition-all flex items-center justify-center w-[120px] h-[40px] uppercase text-[14px] lg:text-[16px] text-main-bg font-bold rounded-[100px]`}
          type="submit"
          disabled={(loading || completed)}
        >
          {loading ? (
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full animate-pulse bg-main-bg"></div>
              <div className="w-3 h-3 rounded-full animate-pulse bg-main-bg"></div>
              <div className="w-3 h-3 rounded-full animate-pulse bg-main-bg"></div>
            </div>
          ) : completed ? 
          <div className="flex items-center justify-center gap-2 text-green-700 ">
            <FaCheck/>
            Sent
          </div>
          : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
