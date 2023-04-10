import { useState } from 'react';
import searchImages from './api';
import ImageList from './Components/ImageList';
import SearchBar from './Components/SearchBar';

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    console.log(result);
    setImages(result);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}
export default App;
