import { CodeBracketIcon, } from "@heroicons/react/24/solid";
import React from "react";
import { project, project2 } from "../Data.js";
import img2 from "C:/Users/Owner/Desktop/Port/Portfolio/src/Images/VendingApplication.png"
import img3 from "C:/Users/Owner/Desktop/Port/Portfolio/src/Images/TEnmoApplication.png"
export default function Projects() {

  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some projects that I worked on during my time in the Merit America Bootcamp as well as some personal projects.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {project.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                 src={img2}
                  alt= {project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                 
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-green-500 mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
            
          ))}       
          
          <div className="flex flex-wrap -m-4">
          {project2.map((project2) => (
            <b
              href={project2.link}
              key={project2.image}
              className="sm:w-1/2 w-100 p-4">
              <div2 className="flex relative">
                <img
                 src={img3}
                  alt= {project2.title}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                 
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h3 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project2.subtitle}
                  </h3>
                  <h4 className="title-font text-lg font-medium text-green-500 mb-3">
                    {project2.title}
                  </h4>
                  <p className="leading-relaxed">{project2.description}</p>
                </div>
              </div2>
            </b>
          ))}
          
        </div>


        
      </div>
</div>
      
    </section>

)
}