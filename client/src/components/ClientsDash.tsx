import { useState, useEffect } from 'react';
type Client =
{
  id: number,
  firstName: string,
  lastName: string
  title: string,
  department: string,
  company: string,
  country: string,
  commercial: string
}

function ClientsDash() {
  
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost:3000/clients';

        const fetchClients = async () => {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();

                setClients(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchClients();
    }, []);

    const limitedClients = clients.slice(0, 5);

    return (
        <div className='dashClients'>
            <h1>Clients latest</h1>
           <ul className='headings'>
            <li>Company</li>
            <li>First Name</li>
            <li>Last Name</li>
            <li>Title</li>
            <li>Department</li>
            <li>Country</li>
            <li>Commercial</li>
           </ul>
            {clients.length > 0  ? (
                <ul className="clientList">
                    {
                    limitedClients.map((client: Client) => 
                          
                    <li key={client.id} className="listStyle">
                        <span className="underline">{client.company}</span>
                        <span className="underline">{client.firstName}</span>
                        <span className="underline">{client.lastName}</span>
                        <span className="underline">{client.title}</span>
                        <span className="underline">{client.department}</span>
                        <span className="underline">{client.country}</span>
                        <span className="underline">{client.commercial}</span>
                    </li>
               
                    )}
                </ul>
            ) : (
                <p>No clients found.</p>
            )}
        </div>
    );
}


export default ClientsDash;
