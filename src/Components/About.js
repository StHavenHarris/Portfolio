// src/components/About.js
import img1 from "../ProfilePic.jpg"

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, my name is Stephen-Haven Harris.
                <br className="hidden lg:inline-block" />I love building and designing applications with Java and JavaScript.
              </h1>
              <p className="mb-8 leading-relaxed">
              I am a Java Developer who has built a foundation on being an inquisitive problem solver and a meticulous debugger. With previous experience spanning business and people management, events, customer engagement, and branding, I have created life-long goals to gain experience in the workforce and make connections to grow in life, and use personal experience to continue to develop skills that will eventually push technology forward and improve the lives of others.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Contact Me!
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  Take a look at my past projects
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src= {img1}
              />
            </div>
          </div>
        </section>
      );
}
