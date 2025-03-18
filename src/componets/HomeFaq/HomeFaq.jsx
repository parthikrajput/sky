import React, { useState } from "react";
import "./homeFaq.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const faqData = {
  Services: [
    {
      question: "What services do you offer?",
      answer:
        "Sky specializes in a range of futuristic tech solutions, including AI-powered analytics, IoT integration, cybersecurity, cloud infrastructure, and blockchain development.",
    },
    {
      question: "What industries does Sky serve?",
      answer: "Yes, we build both iOS and Android apps.",
    },
    {
      question: "Does Sky offer custom software?",
      answer:
        "Sky specializes in a range of futuristic tech solutions, including AI-powered analytics, IoT integration, cybersecurity, cloud infrastructure, and blockchain development.",
    },
    {
      question: "Why should I choose Sky?",
      answer: "Yes, we build both iOS and Android apps.",
    },
    {
      question: "How secure are Sky's services?",
      answer:
        "Sky specializes in a range of futuristic tech solutions, including AI-powered analytics, IoT integration, cybersecurity, cloud infrastructure, and blockchain development.",
    },
    {
      question: "How can Sky help my business",
      answer:
        "Sky helps businesses streamline operations, enhance security, and unlock new growth opportunities. Our solutions are not only designed to solve current challenges but also to future-proof",
    },
    {
      question: "What is the process of working?",
      answer:
        "Sky specializes in a range of futuristic tech solutions, including AI-powered analytics, IoT integration, cybersecurity, cloud infrastructure, and blockchain development.",
    },
    {
      question: "Can Sky help with scaling my business?",
      answer: "Yes, we build both iOS and Android apps.",
    },
  ],
  Solutions: [
    {
      question: "What business solutions do you provide?",
      answer: "We offer CRM, ERP, and cloud-based solutions.",
    },
    {
      question: "Can I get a customized solution?",
      answer: "Yes, we tailor solutions based on client needs.",
    },
  ],
  Technology: [
    {
      question: "Which technologies do you specialize in?",
      answer: "We work with React, Node.js, and Python.",
    },
    {
      question: "Do you use AI and ML?",
      answer: "Yes, we incorporate AI/ML for intelligent automation.",
    },
  ],
  Support: [
    {
      question: "How can I contact support?",
      answer: "You can reach us via email, chat, or call.",
    },
    {
      question: "What are your support hours?",
      answer: "We offer 24/7 support for premium customers.",
    },
  ],
  Security: [
    {
      question: "How do you ensure data security?",
      answer: "We follow industry best practices and encryption.",
    },
    {
      question: "Do you offer cybersecurity audits?",
      answer: "Yes, we provide full security assessments.",
    },
  ],
};

const HomeFaq = () => {
  const [activeTab, setActiveTab] = useState("Services");
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py faq" id="services">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="300">
          Frequently Asked Questions
        </h2>

        <div className="main-tabs">
          {Object.keys(faqData).map((tab) => (
            <div
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              data-aos="fade-up"
              data-aos-delay="500"
              onClick={() => {
                setActiveTab(tab);
                setOpenQuestion(null);
              }}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="faq-content">
          {faqData[activeTab].map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay="700"
              className="faqs"
            >
              <div className="faq" onClick={() => toggleQuestion(index)}>
                <p>{faq.question}</p>
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`faq-icon ${openQuestion === index ? "open" : ""}`}
                >
                  <path
                    d="M1.41431 1.44678L10.3069 10.3394L19.1995 1.44678"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {openQuestion === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFaq;
