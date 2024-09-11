import React from 'react';
import { useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import House from "../assets/50820.jpg"
import Footer from '../components/Footer';
export default function Home() {

  const [offerListings, setOfferListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);

  return (
    <div style={{ backgroundColor: 'white', overflowX: 'hidden' }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '24px',
        marginBottom: '40px',
        maxWidth: '1200px',
        margin: 'auto',
        marginTop:'50px',
        padding: '0 24px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          paddingTop: '28px',
          paddingBottom: '28px',
          flex: '1 1 100%',
          maxWidth: '600px'
        }}>
          <h1 style={{
            color: 'black',
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            lineHeight: '1.2',
            margin: '0',
            '@media (min-width: 768px)': {
              fontSize: '3rem',
            }
          }}>
          
            Rent or Buy, We’ve Got You Covered
          </h1>
          <div style={{
            color: 'black',
            fontSize: '0.875rem',
            textAlign: 'center',
            '@media (min-width: 768px)': {
              fontSize: '1rem',
            }
          }}>
           Explore the best listings for homes on rent or sale. Find your perfect space, tailored to your lifestyle and budget.
          </div>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flex: '1 1 100%',
          maxWidth: '500px',
          margin: 'auto'
        }}>
          <img style={{
            width: '100%',
            height: 'auto',
            marginTop: '20px'
          }} src={House} alt='Home' />
        </div>
      </div>

      <Footer />
    </div>
  )
}

