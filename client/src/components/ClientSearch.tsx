// import { useState, useEffect } from 'react';

// type Client = {
//   id: number;
//   firstName: string;
//   lastName: string;
//   company: string;
//   title: string;
//   department: string;
//   country: string;
// };

// function ClientSearch() {
//   const [clients, setClients] = useState<Client[]>([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Fetch clients from JSON server
//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await fetch('http://localhost:3000/clients');
//         if (!response.ok) {
//           throw new Error('Failed to fetch clients');
//         }
//         const data = await response.json();
//         setClients(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchClients();
//   }, []);

//   // Filter clients based on the search query
//   const filteredClients = clients.filter((client) =>
//     `${client.firstName} ${client.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by name..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       {/* <ul>
//         {filteredClients.map((client) => (
//           <li key={client.id}>
//             {client.firstName} {client.lastName} - {client.company}
//           </li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }

// export default ClientSearch;
