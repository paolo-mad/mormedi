import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PencilIcon from "../assets/pencil.svg";
import { Offer } from "../lib/types";

function Offers() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

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

  // Filter offers based on the search query
  const filteredOffers = offers.filter((offer: Offer) =>
    // Convert the offer properties to lowercase and search query to lowercase
    // to enable case-insensitive matching
    offer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    offer.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    offer.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
    offer.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
    offer.commercial.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="containerMain">
      <div className="headingOffers">
        <h1>Offers</h1>
        {/* Add the search bar */}
        <input className='searchInput'
          type="text"
          placeholder="Search offers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{border: "1.5px solid lightgrey"}}
        />
        <div className="buttonsTop">
            <button type="submit" className='buttonTop'>
                <Link to={"/offers"} style={{ color: "white", textDecoration: "none" }}>
                    Export
                </Link>
            </button>
            <button type="reset" className='buttonTop'>
                <Link to={"/offers/addOffer"} style={{ color: "white", textDecoration: "none" }}>
                    Add
                </Link>
            </button>
        </div>
        
      </div>

      <ul className="headings">
        <li>Title</li>
        <li>Company</li>
        <li>Amount</li>
        <li>Sector</li>
        <li>Country</li>
        <li>Commercial</li>
        <li>Edit</li>
      </ul>
      {filteredOffers.length > 0 ? (
        <ul className="clientList">
          {filteredOffers.map((offer: Offer) => (
            <li key={offer.id} className="listStyle">
              <span className="underline">{offer.title}</span>
              <span className="underline">{offer.company}</span>
              <span className="underline" >{`${offer.amount} €`}</span>
              <span className="underline">{offer.sector}</span>
              <span className="underline">{offer.country}</span>
              <span className="underline">{offer.commercial}</span>
              <span>
                <Link to="/offers/addOffer">
                  <img src={PencilIcon} alt="Edit" style={{ paddingTop: "15px" }} />
                </Link>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No offers found.</p>
      )}
    </div>
  );
}

export default Offers;

