import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard'; // Adjust the import path as needed
import './Listing.css'; // Import the CSS file
import { API } from '../utils/API';
const Listing = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`${API}/api/listing/get`); // Replace with your API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="listing-container">
      {properties.length > 0 ? (
        properties.map(property => (
          <div className="property-card" key={property.id}>
            <PropertyCard property={property} />
          </div>
        ))
      ) : (
        <div>No properties available</div>
      )}
    </div>
  );
};

export default Listing;






