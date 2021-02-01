import style from './style.module.css'

const ArticleContentContainer = () => (
  <div className={style.article_content_container}>
    <p className={style.article_content_title}>
      Shift the overall look and feel by adding these wonderful 
      touches to furniture in your home
    </p>
    <p  className={style.article_content_description}>
      Ever been in a room and felt like something was missing? Perhaps 
      it felt slightly bare and uninviting. I’ve got some simple tips 
      to help you make any room feel complete.
    </p>
  </div>
)

export default ArticleContentContainer;