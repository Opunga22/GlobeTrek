import React from 'react';
import Image from 'next/image';

const initiatives = [
  {
    id: 1,
    title: 'Community Outreach Program',
    image: '/assets/youth.jpeg',
    badge: 'Ongoing',
    description: 'Mobile outreach and local clinics providing counselling, resources, and immediate assistance.'
  },
  {
    id: 2,
    title: 'Sustainable Energy Support',
    image: '/assets/img20.jpeg',
    badge: 'Active',
    description: 'Promotes sustainable energy solutions by supporting access to clean, affordable, and renewable energy sources, helping communities improve livelihoods while protecting the environment for future generations.'
  },
  {
    id: 3,
    title: 'Skills & Empowerment Workshops',
    image: '/assets/img1.jpeg',
    badge: 'Scheduled',
    description: 'Community-led training sessions to build practical skills, leadership, and resilience.'
  },
  {
    id: 4,
    title: 'Disaster Response Unit',
    image: '/assets/img2.jpeg',
    badge: 'Active',
    description: 'Specialized teams trained for immediate deployment in natural disaster scenarios.'
  },
  {
    id: 5,
    title: 'Healthcare Accessibility Initiative',
    image: '/assets/img3.jpeg',
    badge: 'Ongoing',
    description: 'Bringing medical services to remote areas through mobile clinics and telehealth.'
  },
  {
    id: 6,
    title: 'Food Security Program',
    image: '/assets/img4.jpeg',
    badge: 'Active',
    description: 'Sustainable food distribution networks and local community garden projects.'
  },
  {
    id: 7,
    title: 'Clean Water Access Project',
    image: '/assets/img5.jpeg',
    badge: 'Ongoing',
    description: 'Installing filtration systems and building wells in water-scarce communities.'
  },
  {
    id: 8,
    title: 'Youth Mentorship Program',
    image: '/assets/img7.jpeg',
    badge: 'Active',
    description: 'Connecting young people with professional mentors to guide their career paths.'
  },
  {
    id: 9,
    title: 'Women Empowerment Center',
    image: '/assets/img8.jpeg',
    badge: 'Ongoing',
    description: 'Providing resources, training, and support for women starting local businesses.'
  },
  {
    id: 10,
    title: 'Sustainable Agriculture Support',
    image: '/assets/img9.jpeg',
    badge: 'Active',
    description: 'Training farmers in modern, eco-friendly techniques to improve crop yields.'
  },
  {
    id: 11,
    title: 'Education for All Initiative',
    image: '/assets/img10.jpeg',
    badge: 'Ongoing',
    description: 'Building schools and providing supplies to children in underserved regions.'
  },
  {
    id: 12,
    title: 'Mental Health Support Network',
    image: '/assets/img11.jpeg',
    badge: 'Active',
    description: 'Providing counseling services and reducing stigma around mental health.'
  },
  {
    id: 13,
    title: 'Infrastructure Rehabilitation',
    image: '/assets/img12.jpeg',
    badge: 'Ongoing',
    description: 'Repairing roads and bridges to improve connectivity and access to services.'
  },
  {
    id: 14,
    title: 'Climate Resilience Project',
    image: '/assets/img13.jpeg',
    badge: 'Active',
    description: 'Helping communities adapt to changing weather patterns and environmental shifts.'
  },
  {
    id: 15,
    title: 'Vocational Training Center',
    image: '/assets/img14.jpeg',
    badge: 'Ongoing',
    description: 'Equipping adults with technical skills for employment in growing industries.'
  },
  {
    id: 16,
    title: 'Elderly Care Program',
    image: '/assets/img15.jpeg',
    badge: 'Active',
    description: 'Supporting senior citizens with healthcare, nutrition, and social activities.'
  },
  {
    id: 17,
    title: 'Refugee Support Services',
    image: '/assets/img16.jpeg',
    badge: 'Ongoing',
    description: 'Assisting displaced families with integration and basic needs support.'
  },
  {
    id: 18,
    title: 'Urban Renewal Project',
    image: '/assets/img17.jpeg',
    badge: 'Active',
    description: 'Improving living conditions in high-density urban areas through community action.'
  }
];

export default function FeaturedDestinations() {
  return (
    <section className="py-20 px-4 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured initiatives</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore ongoing community initiatives and programs delivering support, relief, and capacity building across regions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-64 bg-slate-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 9}
                />
                {/* <div className="absolute top-4 right-4 rounded-full bg-white/90 px-4 py-1 text-sm font-semibold text-red-600 shadow-sm">
                  {item.badge}
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600 mb-4">{item.description}</p>
                <button className="text-red-600 font-bold hover:text-red-700">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
