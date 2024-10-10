import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

export default function Newletter() {
  const formRef = useRef();

  const [form, setForm] = useState({ email: "" });
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
        "service_tihl0jo",
        "template_t1wxkdp",

        {
          to_name: "Boundary Bytes Cricket Acadamy",
          from_name: " Boundary Bytes Cricket Acadamy",
          message: "",
        },

        "OHAtu8lXwNGRRl-Ci"
      )

      .then(
        () => {
          setLoading(false);
          alert("thank you, i will get back to you as soon as possible");
          setForm({ email: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };
  return (
    <main className="w-full h-full  mx-auto  ">
      <div className=" relative w-full   max-w-[64rem] h-[59vh] mx-auto items-center justify-center flex">
        <div className="absolute max-w-5xl  flex flex-row   items-start gap-8  top-[120px] justify-center  ">
          <div className="flex flex-col  sm:justify-center  items-center ">
            <div className="sm:h-40  ml-4 w-1 shadow-sm bg-gradient-to-b from-indigo-500 to-orange-400  " />{" "}
          </div>
          <div className="mb-4">
            <h1
              className={` font-Raleway  md:text-5xl font-semibold text-white dark:text-gray-200`}
            >
              {" "}
              <span className=" text-3xl sm:text-5xl font-semibold bg-clip-text   flex-wrap   bg-gradient-to-r from-indigo-400  to-orange-600 bg-text-clip text-transparent">
                Join our Gaming community{" "}
              </span>{" "}
            </h1>
            <p
              className={`sm:text-sm text-xs mt-6 font-lora  flex capitalize text-gray-600 flex-wrap m-4 `}
            >
              {" "}
              Simplicity is our aim, with bracket predictions, voting, and
              themes for your newsletters.
            </p>
            <div className="flex flex-row  gap-3 flex-wrap  ">
              <form
                className="flex flex-col  justify-center flex-wrap  h-[60%]"
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <span className=" flex flex-col mt-7 ">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className=" bg-[#ffffff]  sm:w-[34rem] w-[14rem
                    ]  sm:h-[3rem]  h-[1.6rem]  shadow-xl focus:outline-none  rounded-full focus:ring focus:ring-[#91919139] sm:p-4  p-2 flex-1 "
                  />
                </span>
              </form>
              <a className="mt-6 gap-5 justify-center items-center flex text-center">
                <button
                  type="submit"
                  className=" bg-[#1d1d1c] dark:bg-orange-500  border-gary-300 placeholder:text-stone-300 dark:placeholder:text-stone-600  px-5 py-3 outline-none w-fit font-bold shadow-md shadow-primary rounded-lg text-[#ffffff]    "
                  // Disable the button when loading is true
                >
                  {loading ? "Sending..." : "send"}{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
