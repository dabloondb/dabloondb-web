import logo from './logo.png';
import './App.css';
import saveIcon from './icons/save.svg'
import chartIcon from './icons/chart.svg'
import payIcon from './icons/payments.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id='top-container'>
          <img src={logo} id="logo" alt="DabloonsDB Logo"></img>
          <div id='auth-buttons'>
              <button id='login' className='authButton' disabled>Log In</button>
              <button id='signup' className='authButton' disabled>Sign Up</button>
          </div>
          <h3>Signup isn't available yet! This site will open on December 15th.</h3>
        </div>
        <div id='info'>
          <div id='info-1'>
            <img src={saveIcon} alt="Save Icon" id='info-icon'></img>
            <h3>Save a log of your transactions & earnings</h3>
            <p>DabloonsDB allows you to keep a complete log of any transactions made, any recieved Dabloons, and details for both</p>
          </div>
          <div id='info-2'>
            <img src={chartIcon} alt="Chart Icon" id='info-icon'></img>
            <h3>Keep track of your current amount of Dabloons</h3>
            <p>Frankly, using Google Sheets to keep track of your Dabloons is a clunky, slow, and not very good experience. DabloonsDB can provide the same, if not a better, experience in less time.</p>
          </div>
          <div id='info-3'>
            <img src={payIcon} alt="Chart Icon" id='info-icon'></img>
            <h3>Create and Send Transactions</h3>
            <p id='bottom'>You can create a transaction, give it data (Image, Price, Name), and create a link which people can click on to make a purchase directly on DabloonsDB.com</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
