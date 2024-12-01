"use client";

import { useAuth } from "src/core/providers/AuthProvider";

function Portfolio() {
  const { user, loading, refetchUser } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Position: {user.position?.name}</p>
      <button onClick={refetchUser}>Refresh Data</button>
    </div>
  );
}

export default Portfolio;
