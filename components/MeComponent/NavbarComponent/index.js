import style from './style.module.css';

const NavbarComponent = ({ moveToSpecificView, currentState }) => {
  return (
    <div className={style.navbar}>
      <div>
        <a  onClick={() => moveToSpecificView(1)}><p className={currentState.name === 'intro' ? style.current : ''}>intro</p></a>
        <a onClick={() => moveToSpecificView(2)}><p className={currentState.name === 'experience' ? style.current : ''}>experiences</p></a>
        <a onClick={() => moveToSpecificView(3)}><p className={currentState.name === 'school' ? style.current : ''}>schools</p></a>
        <a onClick={() => moveToSpecificView(4)}><p className={currentState.name === 'skill' ? style.current : ''}>skills</p></a>
        <a onClick={() => moveToSpecificView(5)}><p className={currentState.name === 'hobby' ? style.current : ''}>hobbies</p></a>
        <a onClick={() => moveToSpecificView(6)}><p className={currentState.name === 'contact' ? style.current : ''}>contacts</p></a>
      </div>
      <div>
        <svg width="15" height="515" viewBox="0 0 15 515" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.50002 0.5L7.5 514" stroke="#CBC2D5" strokeWidth="5"/>
          <circle cx="7.5" cy="7.5" r="7.5" fill="#CBC2D5" />
          <circle cx="7.5" cy="107.5" r="7.5" fill="#CBC2D5" />
          <circle cx="7.5" cy="207.5" r="7.5" fill="#CBC2D5" />
          <circle cx="7.5" cy="307.5" r="7.5" fill="#CBC2D5" />
          <circle cx="7.5" cy="407.5" r="7.5" fill="#CBC2D5" />
          <circle cx="7.5" cy="507.5" r="7.5" fill="#CBC2D5" />
          <circle cx="7.5" cy={currentState.pos} r="5.5" fill="#FCF9FF"/>
        </svg>
      </div>
    </div>
  )
}

export default NavbarComponent;