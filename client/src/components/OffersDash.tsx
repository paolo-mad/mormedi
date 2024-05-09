import { useState, useEffect } from 'react';

type Offer = {
  id: number;
  title: string;
  amount: number;
  sector: string;
  country: string;
  company: string;
  commercial: string;
};

function OffersDash() {
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/offers';

    const fetchOffers = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setOffers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchOffers();
  }, []);

  const limitedOffers = offers.slice(0, 5);

  return (
    <div className='dashOffers'>
      
      <h1>Offers latest</h1>

      <ul className="headings">
        <li>Title</li>
        <li>Company</li>
        <li>Amount</li>
        <li>Sector</li>
        <li>Country</li>
        <li>Commercial</li>
      </ul>
      {offers.length > 0 ? (
        <ul className="clientList">
          {limitedOffers.map((offer: Offer) => (
            <li key={offer.id} className="listStyle">
              <span className="underline">{offer.title}</span>
              <span className="underline">{offer.company}</span>
              <span className="underline">{`${offer.amount} €`}</span>
              <span className="underline">{offer.sector}</span>
              <span className="underline">{offer.country}</span>
              <span className="underline">{offer.commercial}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No offers found.</p>
      )}
    </div>
  );
}

export default OffersDash;
