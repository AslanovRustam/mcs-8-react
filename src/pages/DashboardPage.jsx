import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

// export const NotFoundPage
// React.lazy(() => import('./NotFoundPage').then(module => ({ ...module, default: module.NotFoundPage })))
// Promise<{default: "wojrgiuwgohrwohgwgr"}>
// default export NotFoundPage
// React.lazy(() => import('./NotFoundPage'))

export default function DashboardPage() {
  const location = useLocation();

  const [users, setUsers] = useState([]);

  const [params, setParams] = useSearchParams();
  const searchText = params.get("searchText") ?? "";
  const debouncedSetParams = useDebouncedCallback(setParams, 300);

  const changeSearchText = event => {
    const nextParams = new URLSearchParams(params);
    nextParams.set("searchText", event.target.value);
    debouncedSetParams(nextParams);
  };

  useEffect(() => {
    async function fetchUsers() {
      const res = await axios.get(
        `https://dummyjson.com/users/search?q=${searchText}`
      );
      setUsers(res.data.users);
    }
    fetchUsers();
  }, [searchText]);

  return (
    <div>
      <h1>DashboardPage</h1>
      <input
        type="text"
        defaultValue={searchText}
        onChange={changeSearchText}
      />
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <Link to={`/dashboard/${user.id}`} state={location}>
                {user.firstName} {user.lastName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
