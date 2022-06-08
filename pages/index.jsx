import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [url, setUrl] = useState('')
  const [keyword, setKeyword] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/create-url', {
        url,
        keyword
      })
      alert(res.data.message)
    } catch(err){
      console.log(err.message)
    }
  }

  return (
    <div className="h-screen">
      <Head>
        <title>URL shortener</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-full h-full relative bg-blue-400 flex items-center justify-center'>
        <form onSubmit={submitHandler} className='flex flex-col space-y-3'>
          <div className='flex items-center justify-between space-x-2'>
            <h1 className='font-semibold text-lg'>URL:</h1>
            <input value={url} onChange={(e) => setUrl(e.target.value)} className='outline-none px-3 py-2'/>
          </div>
          <div className='flex items-center space-x-2'>
            <h1 className='font-semibold text-lg'>keyword:</h1>
            <input value={keyword} onChange={(e) => setKeyword(e.target.value)} className='outline-none px-3 py-2'/>
          </div>
          <button type='submit' className='bg-red-400 mx-auto px-3 rounded-lg py-2 font-semibold border border-black shadow-lg'>SUBMIT</button>
        </form>


      </div>

      
    </div>
  )
}

export default Home
