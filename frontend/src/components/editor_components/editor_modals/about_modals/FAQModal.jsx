import React, { useState } from 'react';

const FAQModal = ({ isOpen, onClose }) => {
  // Initial state based on the provided JSON
  const [data, setData] = useState({
    title: "Frequently Asked Questions",
    subtitle: "This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.",
    faqs: [
      {
        question: "What services do you offer?",
        answer: "We offer a variety of services including event planning, venue booking, and catering options tailored to your needs."
      },
      {
        question: "How can I book a venue?",
        answer: "You can book a venue through our website by selecting your desired location, date, and filling out the booking form."
      },
      {
        question: "What is your cancellation policy?",
        answer: "We have a flexible cancellation policy. Please refer to our terms and conditions for specific details regarding cancellations and refunds."
      },
      {
        question: "Can I customize my event package?",
        answer: "Yes, we offer customizable event packages. You can discuss your requirements with our team during the booking process."
      },
      {
        question: "How can I contact customer support?",
        answer: "You can reach our customer support team via email, phone, or our website's contact form. We are here to assist you 24/7."
      },
    ]
  });

  // Handle input changes for title, subtitle, and FAQs
  const handleInputChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = [...data.faqs];
    updatedFaqs[index][field] = value;
    setData((prevData) => ({
      ...prevData,
      faqs: updatedFaqs
    }));
  };

  // Handle adding a new FAQ
  const handleAddFaq = () => {
    const newFaq = { question: '', answer: '' };
    setData((prevData) => ({
      ...prevData,
      faqs: [...prevData.faqs, newFaq]
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    // Here you can handle the submission logic (e.g., API call)
    console.log('Updated FAQ Data:', data);
    onClose(); // Close modal after saving
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-11/12 max-w-2xl relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>

        <h3 className="font-bold text-lg mb-4">Edit FAQ Section</h3>

        <div className="mb-4">
          <label className="block mb-1">Title:</label>
          <input
            type="text"
            value={data.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="input input-bordered w-full mb-1"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Subtitle:</label>
          <textarea
            value={data.subtitle}
            onChange={(e) => handleInputChange('subtitle', e.target.value)}
            className="textarea textarea-bordered w-full mb-1"
            rows={3}
          />
        </div>

        <table className="table w-full mb-4">
          <thead>
            <tr>
              <th>Question</th>
              <th>Answer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.faqs.map((faq, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                    className="input input-bordered w-full"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={faq.answer}
                    onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                    className="input input-bordered w-full"
                  />
                </td>
                <td>
                  <button className="btn btn-secondary btn-sm" onClick={() => {
                    const updatedFaqs = data.faqs.filter((_, i) => i !== index);
                    setData((prevData) => ({
                      ...prevData,
                      faqs: updatedFaqs
                    }));
                  }}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mb-4">
          <button className="btn btn-primary" onClick={handleAddFaq}>Add FAQ</button>
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary" onClick={handleSubmit}>Save Changes</button>
        </div>
      </div>
    </dialog>
  );
};

export default FAQModal;
