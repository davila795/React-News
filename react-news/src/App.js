import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Header from './components/Header'

function App() {
  const [category, setCategory] = useState('')
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=a09e7ee9dd8049c59ca76da0b84b3769`
      const response = await fetch(url)
      const news = await response.json()
      setNews(news.articles)
    }
    fetchApi()
  }, [category])


  return (
    <>
      <Header title='News' />
      <div className='container white'>
        <Form
          setCategory={setCategory}
        />
      </div>
    </>
  );
}

export default App;
