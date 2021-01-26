import { useState } from 'react';
import ShareLogo from 'public/frontendmentor/challenge/article-preview-component/icon-share.svg';
import style from './style.module.css';

const ArticlePreviewComponentComponent = () => {
  const [active, setActive] = useState(false);
  const sharecontentstyle = active ? style.share_content + ' ' + style.active : style.share_content;
  const sharecontentdesktopstyle = active ? style.share_content_desktop + ' ' + style.active : style.share_content_desktop;
  return (
    <div className={style.container}>
      <div className={style.article_preview_container}>
        <div className={style.article_preview_image_wrapper}>
          <img src="/frontendmentor/challenge/article-preview-component/drawers.jpg" />
        </div>
        <div className={style.article_preview_main}>
          <div className={style.article_preview_content}>
            <p className={style.article_preview_content_title}>
              Shift the overall look and feel by adding these wonderful 
              touches to furniture in your home
            </p>
            <p  className={style.article_preview_content_description}>
              Ever been in a room and felt like something was missing? Perhaps 
              it felt slightly bare and uninviting. I’ve got some simple tips 
              to help you make any room feel complete.
            </p>
          </div>
          <div className={style.article_preview_content_author}>
            <div className={style.author_content}>
              <div className={style.author_content_description}>
                <div className={style.author_content_description_image}>
                  <img src="/frontendmentor/challenge/article-preview-component/avatar-michelle.jpg" />
                </div>
                <div className={style.author_content_description_namedate}>
                  <p>Michelle Appleton</p>
                  <p>28 Jun 2020</p>
                </div>
              </div>
              <div className={style.sharewrapper}>
                <div className={sharecontentdesktopstyle}>
                  <div className={style.share_content_main}>
                    <p>Share</p>
                    <div className={style.share_content_main_icon_container}>
                      <div><img src="/frontendmentor/challenge/article-preview-component/icon-facebook.svg" /></div>
                      <div><img src="/frontendmentor/challenge/article-preview-component/icon-twitter.svg" /></div>
                      <div><img src="/frontendmentor/challenge/article-preview-component/icon-pinterest.svg" /></div>
                    </div>
                  </div>
                  <div className={style.triange}></div>
                </div>
                <button className={style.author_content_description_share_button} onClick={() => setActive(!active)}>
                  <ShareLogo />
                </button>
              </div>
            </div>
            <div className={sharecontentstyle}>
              <div className={style.share_content_main}>
                <p>Share</p>
                <div className={style.share_content_main_icon_container}>
                  <div><img src="/frontendmentor/challenge/article-preview-component/icon-facebook.svg" /></div>
                  <div><img src="/frontendmentor/challenge/article-preview-component/icon-twitter.svg" /></div>
                  <div><img src="/frontendmentor/challenge/article-preview-component/icon-pinterest.svg" /></div>
                </div>
              </div>
              <button className={style.share_content_button} onClick={() => setActive(false)}>
                <ShareLogo />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePreviewComponentComponent;