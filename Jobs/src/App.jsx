import { useState, useEffect } from 'react'
import './App.css'

const API_KEY = '9488653d.....'; // YOUR CRACKEDDEVS API KEY HERE
async function crackeddevs() {
  const response = await fetch(
    `https://api.crackeddevs.com/v1/get-jobs`,
    {
      headers: {
        'api-key': `${API_KEY}`, // API KEY HERE
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
