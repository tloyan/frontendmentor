import IconNext from '../../public/coding-bootcamp-testimonials-slider/icon-next.svg';
import IconPrev from '../../public/coding-bootcamp-testimonials-slider/icon-prev.svg';

import style from './style.module.css';

const CodingBootcampTestimonialsSliderComponent = () => (
  <div className={style.container}>
    <div className={style.slider}>
      <div className={style.slider_images}>
        <img src="/coding-bootcamp-testimonials-slider/image-tanya.jpg" />
      </div>
      <div className={style.slider_buttons}>
        <button>
          <IconPrev />
        </button>
        <button>
          <IconNext />
        </button>
      </div>
    </div>
    <div className={style.testimonial}>
      <p className={style.testimonial_content}>
        “ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”
      </p>
      <div className={style.testimonial_author}>
        <p className={style.testimonial_author_name}>Tanya Sinclair</p>
        <p className={style.testimonial_author_job}>UX Engineer</p>
      </div>
    </div>
  </div>
)

export default CodingBootcampTestimonialsSliderComponent;