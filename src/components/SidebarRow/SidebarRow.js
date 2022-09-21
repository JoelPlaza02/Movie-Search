import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarRow.css';


const SidebarRow = () => {

  return (
    <section className='sidebarRow'>
        <Link to="/HomePage" style={{textDecoration: 'none'}}>
            <div className='sidebarRow__category'>Movies🎥</div>
        </Link>
        <Link to="/StreamingOnTv" style={{textDecoration: 'none'}}>
            <div className='sidebarRow__category'>Streaming On TV📺</div>
        </Link>
        <Link to="/TrailerSearch" style={{textDecoration: 'none'}}>
            <div className='sidebarRow__category'>Trailers🎬</div>
        </Link>
    </section>
  );
}

export default SidebarRow;


/*<section className='sidebarRow'>
        <div className={changeColor === 1 ? "sidebarRow__category active" : "sidebarRow__category"}
             onClick={() => handleColorChange(1)}>Movies</div>
        <div className={changeColor === 2 ? "sidebarRow__category active" : "sidebarRow__category"}
             onClick={() => handleColorChange(2)}>Trending</div>
        <div className={changeColor === 3 ? "sidebarRow__category active" : "sidebarRow__category"}
             onClick={() => handleColorChange(3)}>Coming Soon</div>
        <div className={changeColor === 4 ? "sidebarRow__category active" : "sidebarRow__category"}
             onClick={() => handleColorChange(4)}>Favourites</div>
        <div className={changeColor === 5 ? "sidebarRow__category active" : "sidebarRow__category"}
             onClick={() => handleColorChange(5)}>Watch Later</div>
    </section>
    
    const [changeColor, setChangeColor] = useState(1);

  const handleColorChange = (index) => {
      setChangeColor(index);
  }
    */