import React, { useEffect, useState } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';
export default function ListOfGifs({ keySearch }) {
  const [gifs, setGifs] = useState([]);

  useEffect(
    function () {
      getGifs({ keySearch }).then((gifs) => setGifs(gifs));
    },
    [keySearch]
  );

  return gifs.map((singleGif) => (
    <Gif
      key={singleGif.id}
      title={singleGif.title}
      id={singleGif.id}
      url={singleGif.url}
    />
  ));
}
