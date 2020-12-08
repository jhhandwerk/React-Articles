import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=931e29ffbc4d403eb76f6379cec04ddb'
//const url = 'https://course-api.com/react-tours-project'
//const url = "http://api.openweathermap.org/data/2.5/forecast?zip=532-0013,jp&units=metric&appid=d21182cea448ccd30b383aa34b9af45a"
//the api below works
//const url = "https://www.anapioficeandfire.com/api/books?pageSize=30"
function App() {
  const [loading, setLoading] = useState (true);
  const [data, setData] = useState ([]);

  const fetchArticles = async () =>{
    setLoading(true);
    try {
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setData(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    
  };
  useEffect(() =>{
    fetchArticles();
  },[]);
  if(loading){
    return (
      <main> 
        <Loading/>
      </main>
    )
  }
  return (
    <main>
      <Tours data={data}/>
    </main>
  )
} 

export default App
