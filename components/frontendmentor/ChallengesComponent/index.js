import { useRouter } from 'next/router';
import Link from 'next/link';
import style from './style.module.css';

import data from './data'

const ChallengesComponent = () => {
  const router = useRouter()
  return (
    <div className={style.container}>
      <div className={style.challenge_container}>
        {
          data.map((item) => 
            <div className={style.challenge_item} key={item.name}>
              <img src={item.imagePreview} />
              <div>
                <p>{item.name}</p>
                <div>
                  <Link href={item.pageUrl}><a><button>view</button></a></Link>
                  <button onClick={() => window.open(item.githubUrl, '_blank') || window.location.replace(item.githubUrl)}>github</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default ChallengesComponent;