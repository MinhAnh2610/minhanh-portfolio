"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    descrition:
      "Web development involves creating and maintaining websites and web applications. It combines both frontend and backend technologies to build functional, responsive, and user-friendly platforms.",
    href: "https://www.geeksforgeeks.org/web-development/",
  },
  {
    num: "02",
    title: "Frontend Development",
    descrition:
      "Frontend development focuses on the user interface and experience. Using React, I create dynamic, responsive, and visually appealing web applications that work seamlessly across all devices and browsers.",
    href: "https://www.geeksforgeeks.org/front-end-development",
  },
  {
    num: "03",
    title: "Backend Development",
    descrition:
      "Backend development focuses on the server-side of applications, including APIs, database management, and security. With .NET, I build scalable and efficient backends that handle business logic, data management, and user authentication.",
    href: "https://www.geeksforgeeks.org/backend-development",
  },
  {
    num: "04",
    title: "Business Analyst",
    descrition:
      "Business analysis involves understanding business needs and translating them into technical solutions. I collaborate with stakeholders to gather requirements, analyze processes, and ensure the development team aligns with business goals for efficient project delivery.",
    href: "https://www.geeksforgeeks.org/how-to-become-a-business-analyst",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{service.descrition}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
