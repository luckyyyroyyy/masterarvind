import React from 'react';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Location = () => {
  const cities = [
    { name: "Calgary", image: "/images/locations/calgary.png", desc: "Our main spiritual center offering all premium services." },
    { name: "Vancouver", image: "/images/locations/vancouver.png", desc: "Specialized in healing and positive energy restoration." },
    { name: "Montreal", image: "/images/locations/montreal.png", desc: "Expert guidance in love, relationships, and marriage." },
    { name: "Toronto", image: "/images/locations/toronto.png", desc: "Career and business astrology consultations." },
    { name: "Edmonton", image: "/images/locations/edmonton.png", desc: "Providing clarity through psychic and palm readings." },
    { name: "Ottawa", image: "/images/locations/ottawa.png", desc: "Dedicated services for family and legal dispute resolution." }
  ];

  return (
    <div className="page-wrapper animate-fade-in section-padding">
      <div className="page-header text-center mb-5">
        <h1 className="section-title">Our Locations in Canada</h1>
        <p className="text-secondary" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '3rem' }}>
          While our spiritual guidance transcends physical boundaries through phone and online consultations, we have a dedicated focus on serving clients across these major Canadian cities.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px', maxWidth: '1400px', margin: '0 auto' }}>
        {cities.map((city, index) => (
          <div key={index} className="glass-panel" style={{ position: 'relative', overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column' }}>
            <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={city.image} 
                alt={`${city.name} location`} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                className="location-card-img"
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to top, rgba(11, 16, 33, 1), transparent)' }}></div>
            </div>
            
            <div style={{ padding: '2rem', position: 'relative', zIndex: 1, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <MapPin className="text-gold" size={24} />
                <h2 style={{ fontSize: '1.8rem', margin: 0, color: 'var(--accent-gold)' }}>{city.name}</h2>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', flexGrow: 1 }}>
                {city.desc}
              </p>
              <Link to="/book" className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem', textAlign: 'center' }}>
                Book Session in {city.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
