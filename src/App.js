import './App.css';
import { Pie } from './Components/pie';
function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <div className="logo">
          <div className='frame'>
          </div>
        </div>
        <div className="container">
          <div className='search'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_804_10)">
                <path d="M10.3333 9.33333H9.80667L9.62 9.15333C10.2733 8.39333 10.6667 7.40667 10.6667 6.33333C10.6667 3.94 8.72667 2 6.33333 2C3.94 2 2 3.94 2 6.33333C2 8.72667 3.94 10.6667 6.33333 10.6667C7.40667 10.6667 8.39333 10.2733 9.15333 9.62L9.33333 9.80667V10.3333L12.6667 13.66L13.66 12.6667L10.3333 9.33333ZM6.33333 9.33333C4.67333 9.33333 3.33333 7.99333 3.33333 6.33333C3.33333 4.67333 4.67333 3.33333 6.33333 3.33333C7.99333 3.33333 9.33333 4.67333 9.33333 6.33333C9.33333 7.99333 7.99333 9.33333 6.33333 9.33333Z" fill="#B5B7B9" />
              </g>
              <defs>
                <clipPath id="clip0_804_10">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className='profilebox'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M8.00002 19C9.10377 19 9.99908 18.1047 9.99908 17H6.00096C6.00096 18.1047 6.89627 19 8.00002 19ZM14.731 14.3216C14.1272 13.6728 12.9975 12.6969 12.9975 9.5C12.9975 7.07188 11.295 5.12812 8.9994 4.65125V4C8.9994 3.44781 8.5519 3 8.00002 3C7.44815 3 7.00065 3.44781 7.00065 4V4.65125C4.70502 5.12812 3.00252 7.07188 3.00252 9.5C3.00252 12.6969 1.87283 13.6728 1.26908 14.3216C1.08158 14.5231 0.998459 14.7641 1.00002 15C1.00346 15.5125 1.40565 16 2.00315 16H13.9969C14.5944 16 14.9969 15.5125 15 15C15.0016 14.7641 14.9185 14.5228 14.731 14.3216Z" fill="#C5C7CD" />
                <circle cx="13" cy="5" r="3.75" fill="#CE4848" stroke="#151718" stroke-width="1.5" />
              </svg><svg xmlns="http://www.w3.org/2000/svg" width="1" height="40" viewBox="0 0 1 40" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 40V0H1V40H0Z" fill="#ECECEC" />
              </svg>
              <span className='profile'>Kate Westrich</span>
              <div className='avatar'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='menu'>
        <div className='menuitems'>

        </div>
      </div>
      <div className='cardsection'>
        <div className='promobox'>
          <div className='descript'>
            <div className='promotitle'>
              <p>Welcome to your dashboard!</p>
            </div>
            <div className='intro'>
              <p>Try our new Admin Dashboard Template, build with live Ant-Design components. Customize it to your needs and release to production!</p>
            </div>
          </div>
          <div className='promoimg'></div>
        </div>
        <div className='chart1'>
          <p className='chart1title'>Stocks</p>
        <Pie/>
        </div>
        <div className='chart2'>
          <p className='chart1title'>Graph</p>
          <div className='graph'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
