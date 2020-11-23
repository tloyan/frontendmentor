import style from './style.module.css';

const ArticlePreviewComponentComponent = () => (
  <div className={style.container}>
    <div className={style.article_preview_container}>
      <div><img src="/article-preview-component/drawers.jpg" /></div>
      <div>
        <p>
          Shift the overall look and feel by adding these wonderful 
          touches to furniture in your home
        </p>
        <p>
          Ever been in a room and felt like something was missing? Perhaps 
          it felt slightly bare and uninviting. I’ve got some simple tips 
          to help you make any room feel complete.
        </p>
        <div>
          <div>
            <div>
              <div>
                <img src="/article-preview-component/avatar-michelle.jpg" />
              </div>
              <div>
                <p>Michelle Appleton</p>
                <p>28 Jun 2020</p>
              </div>
            </div>
            <div><img src="/article-preview-component/icon-share.svg" /></div>
          </div>
          <div>
            <p>Share</p>
            <div>
              <div><img src="/article-preview-component/icon-facebook.svg" /></div>
              <div><img src="/article-preview-component/icon-twitter.svg" /></div>
              <div><img src="/article-preview-component/icon-pinterest.svg" /></div>
            </div>
            <div><img src="/article-preview-component/icon-share.svg" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ArticlePreviewComponentComponent;