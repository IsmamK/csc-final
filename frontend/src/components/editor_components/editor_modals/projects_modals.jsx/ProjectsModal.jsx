import React, { useState } from 'react';

const ProjectsModal = ({ isOpen, onClose }) => {
  const [projects, setProjects] = useState([
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
  ]);

  const [editableProjects, setEditableProjects] = useState([...projects]);

  const handleProjectChange = (id, field, value) => {
    setEditableProjects((prevProjects) =>
      prevProjects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    );
  };

  const handleImageUpload = (id, event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file); // Create a local URL for preview

    setEditableProjects((prevProjects) =>
      prevProjects.map((proj) =>
        proj.id === id ? { ...proj, imageUrl } : proj
      )
    );
  };

  const handleSaveAll = () => {
    setProjects(editableProjects); // Save all edits
    onClose(); // Close modal after saving
  };

  const handleAdd = () => {
    const newProject = {
      id: editableProjects.length + 1,
      title: 'New Project',
      description: 'New project description goes here.',
      imageUrl: 'https://via.placeholder.com/150',
    };
    setEditableProjects([...editableProjects, newProject]);
  };

  const handleRemove = (id) => {
    setEditableProjects((prevProjects) =>
      prevProjects.filter((proj) => proj.id !== id)
    );
  };

  return (
    <dialog id="projects_modal" className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-11/12 max-w-5xl relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">Projects</h3>

        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2 w-1/4">Image</th>
              <th className="border p-2 w-1/4">Title</th>
              <th className="border p-2 w-1/2">Description</th>
              <th className="border p-2 w-1/4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {editableProjects.map((project) => (
              <tr key={project.id}>
                <td className="border p-2 text-center">
                  <img src={project.imageUrl} alt={project.title} className="w-40 h-40 object-cover mb-2" />
                  <input
                    type="file"
                    onChange={(e) => handleImageUpload(project.id, e)}
                    className="file-input file-input-bordered w-full"
                  />
                </td>
                <td className="border p-2 text-center">
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => handleProjectChange(project.id, 'title', e.target.value)}
                    className="input input-bordered w-full"
                  />
                </td>
                <td className="border p-2 text-center">
                  <textarea
                    value={project.description}
                    onChange={(e) => handleProjectChange(project.id, 'description', e.target.value)}
                    className="textarea textarea-bordered w-full"
                  />
                </td>
                <td className="border p-2 text-center">
                  <button className="btn btn-outline btn-error" onClick={() => handleRemove(project.id)}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <button className="btn btn-accent" onClick={handleAdd}>Add New Project</button>
          <button className="btn btn-primary" onClick={handleSaveAll}>Save All</button>
        </div>
      </div>
    </dialog>
  );
};

export default ProjectsModal;
