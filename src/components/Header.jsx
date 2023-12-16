import './Header.css'
import headerImg from '../images/Rectangle2.png'

const Header = () => {
  return (
    <div className='header-container'>
        <img className='todo-img' src={headerImg} alt="" />
        <div className='image-text'>
             <span className='date'>Thur 9</span>
            <p className='time-display'>6:34</p>
        </div>
    </div>
  )
}

export default Header