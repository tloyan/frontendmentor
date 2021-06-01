import { useEffect, useRef, useState, useCallback } from 'react';
import NavbarComponent from './NavbarComponent';
import style from './style.module.css'
const MeComponent = () => {
  const loadingRef = useRef(false);
  const currentScrollPosRef = useRef(0)
  const currentChildPosRef = useRef(1)
  const containerRef = useRef();
  const supportsPassive = useRef();
  const wheelOpt = useRef();
  const wheelEvent = useRef();
  const isScrollingRef = useRef();
  const isWheelRef = useRef();
  const keys = {37: 1, 38: 1, 39: 1, 40: 1};

  const touchPosY = useRef(0);

  const stateList = [
    { id: 1, name: 'intro', pos: '7.5' },
    { id: 2, name: 'experience', pos: '107.5' },
    { id: 3, name: 'school', pos: '207.5' },
    { id: 4, name: 'skill', pos: '307.5' },
    { id: 5, name: 'hobby', pos: '407.5' },
    { id: 6, name: 'contact', pos: '507.5' }
  ]

  const [currentState, setCurrentState] = useState(stateList[0])
  const currentStateRef = useRef(stateList[0]);

  const preventDefault = (e) => {
    e.preventDefault();
  }

  const preventDefaultForScrollKeys = (e) => {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }
   
  const disableScroll = () => {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent.current, preventDefault, wheelOpt.current); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt.current); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
  }

  const enableScroll = () => {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent.current, preventDefault, wheelOpt.current); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt.current);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }

  const moveToSpecificView = (viewId) => {
    containerRef.current.childNodes[viewId].scrollIntoView({ 
      behavior: 'smooth' 
    })

    currentChildPosRef.current = viewId;
    currentStateRef.current = stateList.find(item => item.id === currentChildPosRef.current);
    setCurrentState({...currentStateRef.current});
  }

  const moveFromBottomToTop = () => {
    if (currentChildPosRef.current === 1) {
      loadingRef.current = false;
      return
    };

    containerRef.current.childNodes[currentChildPosRef.current - 1].scrollIntoView({ 
      behavior: 'smooth' 
    })

    currentChildPosRef.current = currentChildPosRef.current - 1;
    currentStateRef.current = stateList.find(item => item.id === currentChildPosRef.current);
    setCurrentState({...currentStateRef.current});

  }

  const moveFromTopToBottom = () => {
    if (currentChildPosRef.current === 6) {
      loadingRef.current = false;
      return
    };

    containerRef.current.childNodes[currentChildPosRef.current + 1].scrollIntoView({ 
      behavior: 'smooth' 
    })

    currentChildPosRef.current = currentChildPosRef.current + 1;
    currentStateRef.current = stateList.find(item => item.id === currentChildPosRef.current);
    setCurrentState({...currentStateRef.current});
  }

  const handleWheel = useCallback(event => {
    clearTimeout(isScrollingRef.current);

    isScrollingRef.current = setTimeout(() => {
      isWheelRef.current = false;
    }, 50);

    if (loadingRef.current === true || isWheelRef.current === true) {
      return;
    };

    isWheelRef.current = true;
    loadingRef.current = true;
      if (event.deltaY < 0) {
        moveFromBottomToTop();
        setTimeout(() => {
          loadingRef.current = false;
          currentScrollPosRef.current = window.scrollY;
        }, 750)
        return;
      }
      moveFromTopToBottom();
      setTimeout(() => {
        loadingRef.current = false;
        currentScrollPosRef.current = window.scrollY;
      }, 750)
  }, [])

  const handleTouchStart = (e) => {
    touchPosY.current = e.touches[0].clientY;
  }

  const handleTouchEnd = (e) => {
    setTimeout(() => {
      if (touchPosY.current > e.changedTouches[0].clientY) {
        moveFromTopToBottom();
      } else if (touchPosY.current < e.changedTouches[0].clientY) {
        moveFromBottomToTop();
      }
    }, 50);
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 40) {
      moveFromTopToBottom();
    }
    if (e.keyCode === 38) {
      moveFromBottomToTop();
    }
  }

  useEffect(() => {
    // modern Chrome requires { passive: false } when adding event
    supportsPassive.current = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive.current = true; } 
      }));
    } catch(e) {}
    wheelOpt.current = supportsPassive.current ? { passive: false } : false;
    wheelEvent.current = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    
    disableScroll();

    window.addEventListener(wheelEvent.current, handleWheel, wheelOpt.current);
    window.addEventListener('touchstart', handleTouchStart, wheelOpt.current);
    window.addEventListener('touchend', handleTouchEnd, wheelOpt.current);
    window.addEventListener('keydown', handleKeyDown, false);

    moveToSpecificView(1);

    return () => {
      enableScroll();
      window.removeEventListener(wheelEvent.current, handleWheel, wheelOpt.current);
      window.removeEventListener('touchstart', handleTouchStart, wheelOpt.current);
      window.removeEventListener('touchend', handleTouchEnd, wheelOpt.current);
      window.removeEventListener('keydown', handleKeyDown, false);
    }
  }, [])

  return (
    <div ref={containerRef} className={style.container}>
      <NavbarComponent moveToSpecificView={moveToSpecificView} currentState={currentState} />
      <div id="intro_container" className={style.intro_container}>Intro Coming Soon</div>
      <div id="experiences_container" className={style.experiences_container}>Experience Coming Soon</div>
      <div id="schools_container" className={style.schools_container}>School Coming Soon</div>
      <div id="skills_container" className={style.skills_container}>Skill Coming Soon</div>
      <div id="hobbies_container" className={style.skills_container}>Hobby Coming Soon</div>
      <div id="contacts_container" className={style.skills_container}>Contact Coming Soon</div>
    </div>
  );
}

export default MeComponent;