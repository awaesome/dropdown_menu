import React from 'react';

function Page({setPage}) {
  return (
    <>
      <h1>Page 1</h1>
      <button onClick={setPage}>Go back</button>
    </>
  );
}

export default Page;
