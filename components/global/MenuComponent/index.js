import { useState } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import style from './style.module.css'

const MenuComponent = () => {
  const router = useRouter();
  const [ menu, setMenu ] = useState(false);
  const navMobileClass = menu ? style.nav_mobile_list : style.nav_mobile_list + ' ' + style.close;
  return (
    <div className={style.fixed_container}>
      <div className={style.menu_container}>
        <p>devways</p>
        <nav className={style.nav_desktop}>
          <ul>
            <li><Link href='/me'><a><p className={router.route === '/me' ? style.current : ''}>me</p></a></Link></li>
            <li><Link href='/frontendmentor/challenges'><a><p className={router.route === '/frontendmentor/challenges' ? style.current : ''}>challenges</p></a></Link></li>
          </ul>
        </nav>
        <nav className={style.nav_mobile}>
          <FontAwesomeIcon icon={ menu ? faTimes : faBars } className={style.menu_icon} onClick={() => setMenu(!menu)}/>
          <ul className={navMobileClass}>
            <li><Link href='/me'><a><p>me</p></a></Link></li>
            <li><Link href='/frontendmentor/challenges'><a><p>challenges</p></a></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default MenuComponent;