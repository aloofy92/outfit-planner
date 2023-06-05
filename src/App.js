import React, { useState } from 'react';
import './App.css';

const closet =  
[
{ name: 'T-Shirt', dressCode: 'casual', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkb1lV_RHVcPKccfJ09IKtxIDNa8pGYO4i9iSsgFSxWnbHiucLPSWntsCezUH2RKmEUY&usqp=CAU' },
{ name: 'Jeans', dressCode: 'casual', image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbb%2F0b%2Fbb0b97299d1193323f7f5e4281828f8e9c68cc3d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_jeans_straight%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]' },
{ name: 'Sneakers', dressCode: 'casual', image: 'https://i.insider.com/611559103dd01000199d659d?width=700' },
{ name: 'Blazer', dressCode: 'formal', image: 'https://i.pinimg.com/474x/fb/db/17/fbdb1713215bc26adc295ec262b36a9c--chain-links-mens-jewelry.jpg' },
{ name: 'Dress Pants', dressCode: 'formal', image: 'https://aritzia.scene7.com/is/image/Aritzia/s23_04_a06_96000_19572_off_a' },
{ name: 'Dress Shoes', dressCode: 'formal', image: 'https://m.media-amazon.com/images/I/81Duja01uRL._AC_SL1500_.jpg' },
{ name: 'Sports T-Shirt', dressCode: 'sport', image: 'https://www.shutterstock.com/image-vector/fabric-textile-design-sport-tshirt-260nw-1969942141.jpg' },
{ name: 'Sports Shorts', dressCode: 'sport', image: 'https://st2.depositphotos.com/1000300/6875/i/950/depositphotos_68757157-stock-photo-shorts-woman-sport-isolated-on.jpg' },
{ name: 'Sports Shoes', dressCode: 'sport', image: 'https://i8.amplience.net/s/scvl/103699_302291_SET/1?fmt=auto&$webPlp$' },
];

const getRandomItem = (items) => {
  if (items.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};

const App = () => {
  const [outfit, setOutfit] = useState({ top: null, bottom: null, shoes: null });

  const generateOutfit = (style) => {
    const validClothes = closet.filter((item) => item.dressCode === style);

    const randomTop = getRandomItem(validClothes.filter((item) => item.name.includes('Top')));
    const randomBottom = getRandomItem(validClothes.filter((item) => item.name.includes('Bottom')));
    const randomShoes = getRandomItem(validClothes.filter((item) => item.name.includes('Shoes')));

    if (randomTop && randomBottom && randomShoes) {
      setOutfit({ top: randomTop, bottom: randomBottom, shoes: randomShoes });
    } else {
      setOutfit({ top: null, bottom: null, shoes: null });
    }
  };

  return (
    <div className="app">
      <h1>Outfit Planner</h1>
      <div className="buttons">
        <button className="style-button" onClick={() => generateOutfit('casual')}>
          Casual
        </button>
        <button className="style-button" onClick={() => generateOutfit('sport')}>
          Sport
        </button>
        <button className="style-button" onClick={() => generateOutfit('formal')}>
          Formal
        </button>
      </div>
      <div className="outfit">
        <h2>Outfit:</h2>
        {outfit.top && (
          <div>
            <img src={outfit.top.image} alt={outfit.top.name} />
            <p>Top: {outfit.top.name}</p>
          </div>
        )}
        {outfit.bottom && (
          <div>
            <img src={outfit.bottom.image} alt={outfit.bottom.name} />
            <p>Bottom: {outfit.bottom.name}</p>
          </div>
        )}
        {outfit.shoes && (
          <div>
            <img src={outfit.shoes.image} alt={outfit.shoes.name} />
            <p>Shoes: {outfit.shoes.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
