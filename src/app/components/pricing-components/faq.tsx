import React from "react";
import { FiChevronRight } from "react-icons/fi";

let Faq = () => {
  const faqs = [
    {
      question: "The quick fox jumps over the lazy dog",
      answer:
        "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
    },
    {
        question: "The quick fox jumps over the lazy dog",
        answer:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      },
      {
        question: "The quick fox jumps over the lazy dog",
        answer:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      },
      {
        question: "The quick fox jumps over the lazy dog",
        answer:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      },
      {
        question: "The quick fox jumps over the lazy dog",
        answer:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      },
      {
        question: "The quick fox jumps over the lazy dog",
        answer:
          "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
      },
  ];

  return (
    <div className="mt-10 py-10 flex flex-col justify-center items-center bg-[#FAFAFA]">
      <div className="text-center mb-8">
        <h2 className="text-[#252B42] font-bold text-[40px]">Pricing FAQs</h2>
        <p className="text-[#737373] text-[20px] mt-4">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-4 rounded-lg flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <FiChevronRight className="text-[#23A6F0] text-[25px]" /> {/* Icon */}
              <h3 className="text-[#252B42] font-bold text-[16px]">
                {faq.question}
              </h3>
            </div>
            <p className="text-[#737373] text-[14px] mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
      <p className="text-[#737373] text-[20px] flex justify-center mt-16">Haven&apos;t got your answer? Contact our support</p>
    </div>
  );
};

export default Faq;