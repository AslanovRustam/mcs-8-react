import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export default function UserDetailsPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const res = await axios.get(`https://dummyjson.com/users/${userId}`);
      setUser(res.data);
    }

    fetchUser();
  }, [userId]);

  return (
    <div>
      <h1>UserDetailsPage</h1>
      {user && (
        <>
          <p>First name: {user.firstName}</p>
          <p>Last name: {user.lastName}</p>
          <p>Phone: {user.phone}</p>
          <p>Email: {user.email}</p>
        </>
      )}

      <ul>
        <li>
          <Link to="posts">Posts</Link>
        </li>
        <li>
          <Link to="todos">Todos</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
