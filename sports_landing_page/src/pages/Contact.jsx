import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", message: "", email: "" });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_76p8u31",
        "template_g0iu9fv",
        {
          from_name: form.name,
          to_name: "Mukta",
          from_email: form.email,
          to_email: "@jwonwoo112@gmail.com",
          message: form.message,
        },
        "HXqNyCSyL9g4qABAK"
      )

      .then(
        () => {
          setLoading(false);
          alert("thank you, i will get back to you as soon as possible ");

          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          alert("something went wrong");
        }
      );
  };

  return (
    <div id="contact" className=" contact  xl:flex-row lg:flex-row md:flex-row  flex-col-reverse  flex overflow-hidden">
      <div className="flex-1  bg-whie bg-gray-100  relative lg:w-1/2 justify-between  p-8 md:w-1/2 w-full ">
      <motion.h1
        className="text-3xl mx-auto space my-9 mt-28 space-y-4 space-x-5 text-[28px] font-extrabold sm:text-[3rem]  text-black uppercase font-Manrope leading-13 text-center 
        
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
       Contact
        <span className="text-orange-500 "> Us</span>
      </motion.h1>
      <p className="text-xs   sm:text-[14px]  text-center   font-lora  mt-10 text-neutral-500 flex justify-center items-center ">
      Have any question? We'd love to hear from you{" "}
    
  </p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col mt-16 gap-5 "
        >
          <label className="flex flex-col ">
            {" "}
            <span className="text-gray-600 font-medium mb-8 mt-5">
              {" "}
              Your Name{" "}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="enter your name"
              className="p-2 text-md text-gray-600  bg-gray-50   "
            />
          </label>

          {/* email */}

          <label className="flex flex-col ">
            {" "}
            <span className="text-gray-600 font-medium mb-4 mt-5">
              {" "}
              Your Email{" "}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="enter your email"
              className="p-2 text-md text-gray-600 bg-gray-50  "
            />
          </label>
          {/* 
          message */}
          <label className="flex flex-col ">
            <span className="flex flex-1 flex-col text-base font-manrope text-gray-600  font-medium mb-4 mt-5">
              Message{" "}
            </span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              className="p-2 bg-gray-50 rounded-lg border-gray-500 "
            />{" "}
          </label>
          <button
            type="submit"
            className="p-2 bg-[#1d1d1c] dark:bg-white border-gary-300 placeholder:text-stone-300 dark:placeholder:text-stone-600 py-3 px-8 outline-none w-fit font-bold shadow-md shadow-primary rounded-xl text-[#1d1d1c] "
            // Disable the button when loading is true
          >
            {loading ? "Sending..." : "send"}{" "}
          </button>
        </form>
      </div>
        <img
          src="https://i.pinimg.com/474x/6f/2c/5a/6f2c5a8f5b4479e5e5b4be9d927e4885.jpg"
          className=" xl:flex-1  h-[55rem] object-cover  md:h-[55rem] "   alt="imj"
        />
    </div>
  );
};
export default Contact;

