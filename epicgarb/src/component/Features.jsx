import React from 'react';

const cardData = [
  {
    id: 1,
    title: 'AI-Powered Identification',
    text: 'Our advanced artificial intelligence accurately identifies and categorizes waste items based on visual data.',
    imageUrl: 'ai-identify.jpg', // Replace with actual image URL
  },
  {
    id: 2,
    title: 'Educational Resources',
    text: 'Learn more about each type of garbage and discover eco-friendly alternatives with our informative resources.',
    imageUrl: 'edu-resources.png', // Replace with actual image URL
  },
  {
    id: 3,
    title: 'Data Tracking',
    text: 'Keep track of your waste reduction efforts over time with personalized data insights and analytics.',
    imageUrl: 'data-tack.jpg', // Replace with actual image URL
  },
  {
    id: 4,
    title: 'Community Engagement',
    text: 'Connect with like-minded individuals, share your achievements, and participate in community challenges to make a collective impact.',
    imageUrl: 'community.jpg', // Replace with actual image URL
  },
];


export default function Features() {
  return (
    <div className='features section'>
      <h1 className='main-heading'>Key Features</h1>
      <div className="features-container">
        {cardData.map((card) => (
          <div className="card" key={card.id}>
            <img className="card-img-top" src={card.imageUrl} alt={card.title} />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
