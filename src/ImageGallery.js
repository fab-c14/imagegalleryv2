import React, { useState, useEffect } from 'react';
import 'tachyons';

const ImageGallery = () => {
  const [selectedTag, setSelectedTag] = useState('all');
  const [images, setImages] = useState([]);

  const handleTagChange = (tag) => {
    setSelectedTag(tag);
  };

useEffect(() => {
    
    const sampleImages = [
      { id: 1, download_url: 'https://picsum.photos/id/1018/800/600', tags: ['nature'] },
      { id: 2, download_url: 'https://picsum.photos/id/102/800/600', tags: ['animals'] },
      { id: 3, download_url: 'https://picsum.photos/id/103/800/600', tags: ['nature'] },
      { id: 4, download_url: 'https://picsum.photos/id/104/800/600', tags: ['animals'] },
      { id: 5, download_url: 'https://picsum.photos/id/106/800/600', tags: ['animals'] },
      { id: 6, download_url: 'https://picsum.photos/id/107/800/600', tags: ['nature'] },
      { id: 7, download_url: 'https://picsum.photos/id/108/800/600', tags: ['animals'] },
    ];
    setImages(sampleImages);
  }, []);
  
  // filtering the images
  const filteredImages = selectedTag === 'all' ? images : images.filter(image => image.tags?.includes(selectedTag));

  return (
    <div className="pa3 shadow-3">
      <div className="mb3">
        <button className="f6 link dim ph3 pv2 mb2 mr2 ba b--dark-blue bg-light-blue white" onClick={() => handleTagChange('all')}>All</button>
        <button className="f6 link dim ph3 pv2 mb2 mr2 ba b--dark-green bg-light-green white" onClick={() => handleTagChange('nature')}>Nature</button>
        <button className="f6 link dim ph3 pv2 mb2 mr2 ba b--dark-red bg-light-red white" onClick={() => handleTagChange('animals')}>Animals</button>
      </div>

      <div className="flex flex-wrap">
        {filteredImages.map(image => (
          <article key={image.id} className="ma2 ba b--black-10 center shadow-3">
            <img src={image.download_url} alt={`Image ${image.id}`} className="br2" width={300} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
