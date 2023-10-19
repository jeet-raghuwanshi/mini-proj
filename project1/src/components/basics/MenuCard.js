import React from 'react';

const MenuCard = ({ menuData }) => {
  // console.log(menuData);

  return (
    <>
      <section className='main-card--cointainer'>
        {menuData.map((currElem) => {

          const {id,category,name,image,description} = currElem;

          return(
            <>
              <div className='card-container' key={id}>
                <div className='card's>
                    <div className='card-body'>
                        <span className='card-number card-circle subtle'>{id}</span>
                        <span className='card-aurthor subtle'>{category}</span>
                        <span className='card-title'>{name}</span>
                        <span className='card-description subtle'>
                            {description}
                        </span>
                        <div className='card-read'>Read</div>
                    </div>
                    <img src={currElem.image} alt="images" className='card-media'  />

                    <span className='card-tag subtle'>Order Now</span>
                </div>
              </div>
            </>
          )
        })}
      </section>
    </>
  );
};

export default MenuCard;
