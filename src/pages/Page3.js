import React from 'react';

function Page({setPage}) {
  return (
    <>
      <h1>Page 3</h1>
      <button onClick={setPage}>Go back</button>
    </>
  );
}

export default Page;
