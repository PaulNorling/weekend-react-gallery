import {useEffect, useState} from 'react';
import axios from 'axios';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  // store get response data
  const [itemList, setItemList] = useState([]);
  
  const fecthItems = () => {
    axios({
      method: 'GET',
      url:'/gallery'
    })
    .then( (response) => {
      console.log(response.data);
      setItemList(response.data);
    })
    .catch(function (error) {
      console.log('Error on GET:', error);
    })
  }

  const updateLikeCount = (gallery) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${gallery.id}`
    })
    .then((response) => {
      fecthItems();
      console.log('data PUT:', response)
    })
    .catch(function (error) {
      console.log('Error on PUT:', error)
    })
  }
  // run fetchItems one time
  useEffect( () => {
    fecthItems();
  }, [])
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
        items={itemList}
        handleLikes={updateLikeCount}
        />
      </div>
    );
}

export default App;
