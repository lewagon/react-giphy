import React from 'react';
import Gif from './gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif} key={gif} selectGif={props.selectGif} />)}
    </div>
  );
};

export default GifList;
