import React from 'react';

// Mock data for projects
const mockProjects = [
  {
    id: 1,
    title: 'New trends in Tech',
    description: 'This is a section of some simple filler text, also known as placeholder text.',
    imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600',

  },
  {
    id: 2,

    title: 'Working with legacy stacks',
    description: 'This is a section of some simple filler text, also known as placeholder text.',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600',
    
  },
  {
    id: 3,
    title: '10 best smartphones for devs',
    description: 'This is a section of some simple filler text, also known as placeholder text.',
    imageUrl: 'https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600',

  },
  {
    id: 4,
    title: '8 High performance Notebooks',
    description: 'This is a section of some simple filler text, also known as placeholder text.',
    imageUrl: 'https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600',

  },
  
];

const Projects = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Text section */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Projects</h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
          {mockProjects.map((project) => (
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
                <span className="text-sm text-gray-400">{project.date}</span>

                <h2 className="text-xl font-bold text-gray-800">
                  <a href={project.link} className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">{project.title}</a>
                </h2>

                <p className="text-gray-500">{project.description}</p>

               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
