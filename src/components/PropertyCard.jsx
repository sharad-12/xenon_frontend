import React from 'react';

const PropertyCard = ({property}) => {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img
          src={property.imageURLs}
          alt="Property"
          style={styles.image}
        />
        <div style={styles.imageCount}>1/12</div>
      </div>

      <div style={styles.infoContainer}>
        <div style={styles.price}>£{property.price}</div>
        <div style={styles.type}>{property.propertytype}</div>

        <div style={styles.title}>{property.title}</div>
        <div style={styles.details}>
          <span>{property.bedrooms} Beds</span>
          <span> | </span>
          <span>{property.bathrooms} Baths</span>
        </div>

        <div style={styles.description}>
          {property.description}
        </div>

      
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    marginBottom: '20px',
  },
  imageContainer: {
    position: 'relative',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  imageCount: {
    position: 'absolute',
    top: '8px',
    left: '8px',
    backgroundColor: '#000',
    color: '#fff',
    padding: '2px 6px',
    fontSize: '12px',
    borderRadius: '3px',
  },
  infoContainer: {
    flex: 2,
    padding: '10px',
  },
  price: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  },
  type: {
    fontSize: '14px',
    color: '#888',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
    color: '#333',
  },
  details: {
    fontSize: '14px',
    color: '#666',
    margin: '10px 0',
  },
  description: {
    fontSize: '14px',
    color: '#666',
  },
  footer: {
    fontSize: '12px',
    color: '#888',
    marginTop: '20px',
  },
  agentInfo: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  agentName: {
    fontWeight: 'bold',
  },
  agentPhone: {
    color: '#007BFF',
  },
  agentNote: {
    color: '#888',
  },
};

export default PropertyCard;