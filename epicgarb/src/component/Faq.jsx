import React, { useState } from 'react';

export default function Faq() {
    const [openQuestion, setOpenQuestion] = useState(null);

    const handleQuestionClick = (index) => {
        setOpenQuestion((prevOpenQuestion) => (prevOpenQuestion === index ? null : index));
    };

    const faqData = [
        {
          question: "How does EpicGarb identify different types of garbage in real-time?",
          answer: "EpicGarb utilizes advanced artificial intelligence algorithms to analyze visual data captured by your device camera. This allows the system to identify and categorize various types of garbage in real-time accurately.",
        },
        {
          question: "What categories does EpicGarb classify the garbage into?",
          answer: "EpicGarb classifies garbage into several categories, including recyclable, non-recyclable, organic, and more. This detailed categorization helps users make informed decisions about proper disposal methods.",
        },
        {
          question: "Is EpicGarb user-friendly for all ages?",
          answer: "Absolutely! EpicGarb features an intuitive and user-friendly interface, making it accessible for users of all ages. Simply point your camera at the waste material, and EpicGarb will provide instant results.",
        },
        {
          question: "Can I track my waste reduction efforts over time with EpicGarb?",
          answer: "Yes, you can! EpicGarb offers personalized data insights and analytics, allowing users to track their waste reduction progress over time. Stay informed about your environmental impact and contribute to a greener planet.",
        },
        {
          question: "How can I connect with others and contribute to the EpicGarb community?",
          answer: "Joining the EpicGarb community is easy! EpicGarb provides a platform for users to connect with like-minded individuals, share their achievements, and participate in community challenges. Together, we can make a collective impact towards a sustainable and eco-friendly world.",
        },
      ];
      

    return (
        <div>
            <div className="accordion section">
                <div className="image-box">
                    <img src="qna.png" alt="" />
                </div>
                <div className="accordion-text">
                    <div className="title">Frequently Asked Questions</div>
                    <ul className="faq-text">
                        {faqData.map((faq, index) => (
                            <li key={index} className={index === openQuestion ? 'showAnswer' : ''}>
                                <div className="question-arrow" onClick={() => handleQuestionClick(index)}>
                                    <span className="question">{faq.question}</span>
                                    <i className="bx bxs-chevron-down arrow"></i>
                                </div>
                                <p>{faq.answer}</p>
                                <span className="line"></span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
