import { Component } from 'react';

const GifList  = ({ gifs }) => {
    return (
      <ul>
        {gifs}
        <style jsx>{`
          ul {
            line-height: 0;

            -webkit-column-count: 5;
            -webkit-column-gap:   0px;
            -moz-column-count:    5;
            -moz-column-gap:      0px;
            column-count:         5;
            column-gap:           0px;

            width: 1040px;
            margin: 0 auto;
            padding: 0;
          }
          img {
            width: 100% !important;
            height: auto !important;
            border-radius: 15px;
          }
        `}</style>
      </ul>
    )
}

export default GifList;
