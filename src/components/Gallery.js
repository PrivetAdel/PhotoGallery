import React from 'react';
import Masonry from 'react-masonry-css';
import useFirestore from '../hooks/useFirestore';

const Gallery = ({setSelectedImg}) => {
  const {docs} = useFirestore('images');

  const breakpointColumnsObj = {
    default: 4,
    1399: 3,
    1019: 2,
    767: 1
  };

  return (
    <div className="gallery">
      <Masonry 
        breakpointCols={breakpointColumnsObj}
        className="gallery-grid"
        columnClassName="gallery-grid__column">

        {docs && docs.map(doc => (
          <div 
            className="item"
            onClick={() => setSelectedImg(doc.url)} 
            key={doc.id}>
            <img src={doc.url} alt="preview" />
          </div>
        ))}

      </Masonry>
    </div>
  );
};

export default Gallery;