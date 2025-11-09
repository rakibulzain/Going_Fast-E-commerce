import { useEffect, useState } from "react";

function Example() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect: component লোড হলে একবার চালু হবে
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []); // খালি array → শুধু একবার চলবে

  console.log(users);

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">👤 User List</h1>

      {loading ? (
        <p>⏳ Loading...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          {users.map(user => (
            <div key={user.id} className="bg-base-200 p-4 rounded-xl shadow">
              <h2 className="text-lg font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Example;