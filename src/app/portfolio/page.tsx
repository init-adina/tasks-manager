"use client";

import PortfolioTop from "@widgets/portfolio/PortfolioTop";
import { useAuth } from "src/core/providers/AuthProvider";

function Portfolio() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <>
      <PortfolioTop />
    </>
  );
}

export default Portfolio;
