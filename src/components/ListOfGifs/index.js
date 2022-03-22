import React, { useEffect, useState } from 'react';
import Gif from '../Gif/index.js';
import getGifs from '../services/getGifs';
import './ListOfGifs.css';
export default function ListOfGifs({ params }) {
  const [gifs, setGifs] = useState([]);
  const { keySearch } = params;
  useEffect(
    function () {
      getGifs({ keySearch }).then((gifs) => setGifs(gifs));
    },
    [keySearch]
  );

  return (
    <div className="ListOfGifs">
      {gifs.map((singleGif) => (
        <Gif
          key={singleGif.id}
          title={singleGif.title}
          id={singleGif.id}
          url={singleGif.url}
        />
      ))}
    </div>
  );
}
