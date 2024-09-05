import { useState, useEffect } from 'react'
import './App.css'

const API_KEY = '9488653d.....';
async function crackeddevs() {
  const response = await fetch(
    `https://api.crackeddevs.com/v1/get-jobs`,
    {
      headers: {
        'api-key': `${API_KEY}`,
      },
    }
  );

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data;
  } else {
    console.log('HTTP-Error: ' + response.status);
  }
}

crackeddevs();
const Jobs = () => {
  return ( 
    <>
    {jobs.map((job) => {
      const { index } = job

      return <article key={index}>job Data </article>
    })}
      <h1>hi</h1>
      </>
  )
}
export default Jobs
