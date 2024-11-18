import React from 'react';
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaTwitterSquare } from "react-icons/fa";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { CgMail } from "react-icons/cg";
import { toast } from "react-toastify";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c3959a6c-eca1-438f-b65f-943e4b8760d7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("I appreciate you getting in touch.");
      document.getElementById('contactForm').reset();
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center mb-32 mt-14 md:mt-16 lg:mt-20">
        <div className="md:w-[85%] w-full">
          <div className="flex flex-col gap-8 justify-center items-center">
            {/* Icons Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left order-1">
              <div className="text-[200px] sm:text-[250px] md:text-[300px] lg:text-[330px] text-[#CB9DF0] dark:text-[#8f2bdf]">
                <MdOutlineConnectWithoutContact />
              </div>
              <div className="mt-5">
                <p className="text-lg font-semibold">Contact Me</p>
                <div className="flex gap-7 mt-3 justify-center md:justify-start">
                  <a
                    href="https://www.linkedin.com/in/isma-bano"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:scale-125 text-[#CB9DF0] dark:text-[#8f2bfd]"
                  >
                    <SiLinkedin />
                  </a>
                  <a
                    href="https://github.com/IsmaBano"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:scale-125 text-[#CB9DF0] dark:text-[#8f2bfd]"
                  >
                    <VscGithub />
                  </a>
                  <a
                    href="#"
                    className="text-2xl hover:scale-125 text-[#CB9DF0] dark:text-[#8f2bfd]"
                  >
                    <FaTwitterSquare />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex w-[85%] md:w-[60%] flex-col gap-6 order-2">
              <form
                onSubmit={onSubmit}
                id="contactForm"
                className="flex flex-col gap-4"
              >
                <label className="input input-bordered flex items-center gap-2 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    name="name"
                    className="grow focus:outline-none text-[#CB9DF0]"
                    placeholder="Your Name"
                    required
                  />
                </label>

                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    name="email"
                    className="grow focus:outline-none text-[#CB9DF0]"
                    placeholder="Email"
                    required
                  />
                </label>

                <div>
                  <textarea
                    name="message"
                    className="text-[#CB9DF0] textarea textarea-bordered border-slate-950 dark:border-white resize-none w-full h-32 focus:outline-none"
                    placeholder="Write your message ..."
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn text-lg text-[#CB9DF0] dark:text-[#8f2bdf] bg-transparent shadow-sm shadow-slate-900 hover:bg-transparent text-[15px] mt-5"
                  >
                    Send Message{" "}
                    <span className="text-lg hover:scale-110">
                      <CgMail />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
