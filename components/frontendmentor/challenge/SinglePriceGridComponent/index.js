import style from './style.module.css';

const SinglePriceGridComponent = () => (
  <div className={style.container}>
    <div className={style.container_centered}>
      <div className={style.introduction_container}>
        <h1>Join our community</h1>
        <p className={style.subtitle}>30-day, hassle-free money back guarantee</p>
        <p>
          Gain access to our full library of tutorials along with expert code reviews. 
          Perfect for any developers who are serious about honing their skills.
        </p>
      </div>
      <div className={style.main_container}>
        <div className={style.subscription_container}>
          <p>Monthly Subscription</p>
          <p>
            <span>$29</span>
            <span>per month</span>
          </p>
          <p>Full access for less than $1 a day</p>
          <button>Sign Up</button>
        </div>
        <div className={style.description_container}>
          <p className={style.description_title}>Why Us</p>
          <p className={style.description}>
            <span>Tutorials by industry experts</span>
            <span>Peer & expert code review</span>
            <span>Coding exercises</span>
            <span>Access to our GitHub repos</span>
            <span>Community forum</span>
            <span>Flashcard decks</span>
            <span>New videos every week</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SinglePriceGridComponent;