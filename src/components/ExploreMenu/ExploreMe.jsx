import './ExploreMe.css';

import { menu_list } from '../../assets/assets';

const ExploreMe = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our menu</h1>
      <p className='explore-menu-text'>
        Chose from a divers menu featuring a delectable array of dishes crafted with finest ingredient and culinary
        expertise. Our mission is to satisfy your cravings and elevate your dining, one deliciouse meal at a time
      </p>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div
              className='explore-menu-list-item'
              onClick={() => setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}
              key={index}
            >
              <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMe;
