import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const res = await axios.get("https://dummyjson.com/users");
      setUsers(res.data.users);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>DashboardPage</h1>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <Link to={`/dashboard/${user.id}`}>
                {user.firstName} {user.lastName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
