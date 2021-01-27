import React, { useState } from 'react';

import IconNext from 'public/frontendmentor/challenge/coding-bootcamp-testimonials-slider/icon-next.svg';
import IconPrev from 'public/frontendmentor/challenge/coding-bootcamp-testimonials-slider/icon-prev.svg';

import style from './style.module.css';

import data from './data';

const CodingBootcampTestimonialsSliderComponent = () => {
  const [index, setIndex] = useState(0);

  const handleClickPrev = () => {
    if (index === 0) return setIndex(data.length - 1);
    setIndex(index - 1);
  }

  const handleClickNext = () => {
    if(index === data.length - 1) return setIndex(0);
    setIndex(index + 1);
  }

  return (
    <div className={style.container}>
      <div className={style.testimonial_container}>
        <div className={style.slider}>
          <div className={style.slider_images}>
            <div className={style.image_wrapper}>
              <img src={`/frontendmentor/challenge/coding-bootcamp-testimonials-slider/${data[index].picture}`} />
            </div>
          </div>
          <div className={style.slider_buttons}>
            <button onClick={() => handleClickPrev()}>
              <IconPrev />
            </button>
            <button onClick={() => handleClickNext()}>
              <IconNext />
            </button>
          </div>
        </div>
        <div className={style.testimonial}>
          <p className={style.testimonial_content}>
            “ {`${data[index].testimonial}`} ”
          </p>
          <div className={style.testimonial_author}>
            <p className={style.testimonial_author_name}>{`${data[index].name}`}</p>
            <p className={style.testimonial_author_job}>{`${data[index].job}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodingBootcampTestimonialsSliderComponent;