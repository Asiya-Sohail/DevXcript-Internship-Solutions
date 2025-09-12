// import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch('https://api.github.com/users/Asiya-Sohail')
  //   .then(response => response.json())
  //   .then(data => {
  //     // console.log(data);
  //     setData(data)

  //   })
  // }, [])
  if (!data || data.message) {
  return (
    <div className='text-center m-4 bg-red-600 text-white text-3xl p-4'>
      Error: {data?.message || "Failed to load data"}
    </div>
  )
}

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>
      Github Followers : {data.followers}
      <img 
        src={data.avatar_url}
        alt="Github Picture"
        width={300}
      />
    </div>
  )
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Asiya-Sohail')
  if (!response.ok) throw new Error("Failed to fetch GitHub data")
  return response.json()
}