import React, { useEffect,useState } from 'react';



const Projects = () => {
  const [projects,setProjects] = useState({
    title: '',
    subheading: '',
    bgColor: 'white',
    textColor: 'black',
    items: [] // Initialize with an empty array
  })
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(()=>{
    fetch(`${API_URL}/projects`)
    .then(res=>res.json())
    .then(data=>{
      setProjects(data)
      console.log
    })

  },[])
  return (
    <div style={{ backgroundColor: projects.bgColor, color: projects.textColor }} className={`py-6 sm:py-8 lg:py-12`}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Text section */}
        <div className="mb-10 md:mb-16">
          <h2 className={`mb-4 text-center text-2xl font-bold  md:mb-6 lg:text-3xl`}>{projects.title}</h2>
          <p className="mx-auto max-w-screen-md text-center  md:text-lg">
            {projects.subheading}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
          {projects.items.map((project) => (
            <div key={project.id} className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a href={project.link} className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                <img
                  src={project.imageUrl}
                  loading="lazy"
                  alt={`Photo related to ${project.title}`}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
              </a>

              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold ">
                  <a href={project.link} className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{project.title}</a>
                </h2>

                <p className="">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
