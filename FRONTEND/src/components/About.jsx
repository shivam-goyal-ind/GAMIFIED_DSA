import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-gray-400 rounded-3xl text-black">
      <h1 className="text-[4vw] px-10">
        GAMIFIED DSA is a strategic preparation platform for future DEVELOPERS
        or learning enthusiasts that need to learn & practice Data Structures &
        Algorithms in GAMIFIED MANNER.
      </h1>
      <div className="w-full border-t-[1px] mt-20 border-blue-200">
        <div className="text-[2vw] px-10 py-20 text-slate-100">
          <h2 className="text-black">What you can expect : </h2>
          <div className="flex gap-10 py-10 text-gray-600">
            <div className="w-1/2">
              We provide platform to help learners to practice and learn DSA
              without getting bored.
            </div>
            <div className="w-1/2">
              We believe the mix of DSA and Sports (with a bit of coffee) is
              what takes your preparation to next level.
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-5 w-full border-t-[1px] p-20 mt-20 border-blue-200">
        <div className="w-1/2">
          <h1 className="text-[4vw]">Our Approach</h1>
          <button className="flex gap-10 px-10 py-6 mt-10 bg-zinc-900 rounded-full text-[1.5vw] text-white items-center">Read More
            <div className="h-3 w-3 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="w-1/2 h-[40vh] rounded-3xl bg-red-600 bg-cover">
          <img className="rounded-3xl" src="https://miro.medium.com/v2/resize:fit:1242/1*pQlCKP5D5rrsn7kZtjddRQ.png" alt="image">
          </img>
        </div>
      </div>
    </div>
  );
}

export default About;
