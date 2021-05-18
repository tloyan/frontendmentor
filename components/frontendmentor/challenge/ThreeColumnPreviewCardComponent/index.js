import style from './style.module.css';

import IconSedans from '../../../../public/frontendmentor/challenge/3-column-preview-card-component/icon-sedans.svg';
import IconLuxury from '../../../../public/frontendmentor/challenge/3-column-preview-card-component/icon-luxury.svg';
import IconSuvs from '../../../../public/frontendmentor/challenge/3-column-preview-card-component/icon-suvs.svg';

const ThreeColumnPreviewCardComponent = () => (
  <div className={style.container}>
    <div className={style.column_container}>
      <div className={style.card_item}>
        <div><IconSedans /></div>
        <p className={style.card_item_title}>sedans</p>
        <p className={style.card_item_description}>
          Choose a sedan for its affordability and excellent fuel economy. 
          Ideal for cruising in the city or on your next road trip.
        </p>
        <button>
          <p>learn more</p>
        </button>
      </div>
      <div className={style.card_item}>
        <div><IconSuvs /></div>
        <p className={style.card_item_title}>suvs</p>
        <p className={style.card_item_description}>
          Take an SUV for its spacious interior, power, and versatility. 
          Perfect for your next family vacation and off-road adventures.
        </p>
        <button>
          <p>learn more</p>
        </button>
      </div>
      <div className={style.card_item}>
        <div><IconLuxury /></div>
        <p className={style.card_item_title}>luxury</p>
        <p className={style.card_item_description}>
          Cruise in the best car brands without the bloated prices. 
          Enjoy the enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button>
          <p>learn more</p>
        </button>
      </div>
    </div>
  </div>
);

export default ThreeColumnPreviewCardComponent;
