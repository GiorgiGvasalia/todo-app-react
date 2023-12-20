
import './Header.css';
import headerImg from '../images/Rectangle2.png';

const Header = ({ currentTime }) => {
  const tododTimeDisplay = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dayOfWeek = currentTime.toLocaleDateString('en-US', { weekday: 'short' });
  const dayOfMonth = currentTime.getDate();

  return (
    <div className='header-container'>
      <img className='todo-img' src={headerImg} alt="" />
      <div className='image-text'>
        <span className='date'>{dayOfWeek} {dayOfMonth}</span>
        <p className='time-display'>{tododTimeDisplay}</p>
      </div>
    </div>
  );
};

export default Header;
