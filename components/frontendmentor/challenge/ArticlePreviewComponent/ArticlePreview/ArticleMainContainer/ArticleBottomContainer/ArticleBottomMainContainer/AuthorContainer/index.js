import style from './style.module.css'

const AuthorContainer = () => (
  <div className={style.author_container}>
    <div className={style.author_picture}>
      <img src="/frontendmentor/challenge/article-preview-component/avatar-michelle.jpg" />
    </div>
    <div className={style.author_content}>
      <p>Michelle Appleton</p>
      <p>28 Jun 2020</p>
    </div>
  </div>
)

export default AuthorContainer;