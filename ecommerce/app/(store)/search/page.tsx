import React from "react";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { query: string };
}) => {
  const { query } = await searchParams;
  return (
    <div>
      <h1> search results for {query}</h1>
    </div>
  );
};

export default SearchPage;
