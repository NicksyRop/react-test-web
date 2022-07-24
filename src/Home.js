import React from "react";
import { User } from "./components/User";
import useFecth from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFecth(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div>
      <h2>Users</h2>
      {error && <h3>{error}</h3>}
      {isPending && <div>Loading.....</div>}
      {data && <User users={data} />}
    </div>
  );
};

export default Home;
