import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Define the URL of your Node.js backend endpoint
    const url = 'http://localhost:3000/api/users'; // Example URL

    // Make a GET request to fetch user data from the backend
    axios.get(url)
      .then(response => {
        // Update the state with the fetched users
        setUsers(response.data);
        console.log('User data:', response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {/* Map over the users array and render each user */}
        {users.map(user => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}<br />
            <strong>ID:</strong> {user.id}<br />
            <strong>email:</strong> {user.email}<br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
