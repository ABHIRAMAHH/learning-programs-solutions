import React from 'react';

const office = {
  name: 'DBS',
  rent: 50000,
  address: 'Chennai',
  image: 'https://images.pexels.com/photos/3582420/pexels-photo-3582420.jpeg', // Example public domain office image
};

function OfficeSpace() {
  return (
    <div style={{ marginLeft: 100, marginTop: 50 }}>
      <h1>
        Office Space , at Affordable Range
      </h1>
      <img
        src={office.image}
        alt="Office"
        style={{
          width: 300,
          height: 200,
          objectFit: 'cover',
          display: 'block',
          marginTop: 30,
          marginBottom: 30,
        }}
      />
      <div style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 12 }}>
        Name: {office.name}
      </div>
      <div style={{ fontSize: 20, color: 'red', marginBottom: 12 }}>
        Rent: Rs. {office.rent}
      </div>
      <div style={{ fontSize: 18, fontWeight: 'bold' }}>
        Address: {office.address}
      </div>
    </div>
  );
}

export default OfficeSpace;
