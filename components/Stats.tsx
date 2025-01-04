"use client";

import { useEffect } from "react";

import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Public Repositories",
  },
  {
    num: 2,
    text: "Projects completed",
  },
  {
    num: 15,
    text: "Technologies learned",
  },
  {
    num: 786,
    text: "Code commits",
  },
];

const Stats = () => {

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.github.com/users/MinhAnh2610");
      const userData = await response.json();
      stats[0].num = userData.public_repos;
    };

    fetchData();
  }, []);

  

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
