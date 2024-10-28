import React from 'react';

const FAQ = ({ bgColor, textColor }) => {
  const faqs = [
    {
      question: "What is the application process for studying abroad?",
      answer: "The application process typically involves submitting transcripts, language test scores, a statement of purpose, and letters of recommendation."
    },
    {
      question: "How much does it cost to study abroad?",
      answer: "Costs vary by country and institution but generally include tuition, accommodation, and living expenses. Scholarships and financial aid can help reduce costs."
    },
    {
      question: "Do I need to know the local language?",
      answer: "In many cases, no. Many programs offer courses in English, but learning the basics of the local language is highly recommended."
    },
    {
      question: "How can I apply for a student visa?",
      answer: "Each country has specific requirements for a student visa. Generally, you need an acceptance letter from your chosen institution and proof of funds."
    },
    {
      question: "Are there scholarships available for international students?",
      answer: "Yes, many universities and organizations offer scholarships to international students based on academic merit, financial need, or specific backgrounds."
    },
    {
      question: "Can I work while studying abroad?",
      answer: "In many countries, international students can work part-time during their studies and full-time during breaks. Check the specific country’s regulations."
    },
    {
      question: "What accommodation options are available?",
      answer: "Options include on-campus dormitories, shared apartments, and homestays. It's best to research the housing options offered by the institution."
    },
    {
      question: "Is health insurance required?",
      answer: "Yes, most countries require international students to have health insurance. Some universities provide options, or you can find a suitable plan on your own."
    },
    {
      question: "How can I stay safe while studying abroad?",
      answer: "Research local safety tips, understand the area, and have emergency contacts saved. Many universities also have security services to assist students."
    },
    {
      question: "How can I manage culture shock?",
      answer: "Joining student clubs, staying in touch with friends and family, and being open to new experiences can help ease the transition."
    },
    {
      question: "Can I extend my stay after my studies?",
      answer: "Some countries offer post-study work visas or allow students to apply for work visas. Check with the country’s immigration policies for options."
    },
    {
      question: "How can I make friends while studying abroad?",
      answer: "Joining clubs, attending events, and participating in activities on and off campus are great ways to meet new people and make friends."
    }
  ];

  return (
    <div className="py-4 sm:py-6 lg:py-8" style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-6 md:mb-10">
          <h2 className="mb-3 text-center text-xl font-bold md:mb-5 lg:text-2xl">Frequently Asked Questions</h2>
          <p className="mx-auto max-w-screen-md text-center md:text-base">
            Find answers to common questions about studying abroad.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {faqs.map((faq, index) => (
            <div key={index} className="relative rounded-md p-4 pt-6 bg-black text-csc shadow-md">
              <span className="absolute -top-3 left-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </span>

              <h3 className="mb-2 text-xl font-bold ">{faq.question}</h3>
              <p className="text-xs">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
