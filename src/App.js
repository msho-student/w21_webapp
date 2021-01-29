import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

import SearchBar from './components/SearchBar.js';
import MockData from './MOCK_DATA.json';
import Login from './components/Login';
import Logout from './components/Logout';
import { Panel, PanelGroup } from 'rsuite';


function Spacer(props) {
	return <div style={{width: props.width, height: props.height}}> </div>;
}

function custFilter(arr, filters){
	return arr.filter(item => {
		for(const criteria in filters){
			if(item[criteria] === undefined || item[criteria] !== filters[criteria]){
				return false;
			}
		}
		return true;
	});
}
		

function App() {
	const [searchIn, setSearchIn] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);
	const [name, setName] = useState();
	return (
		<div className="App">
			<div id="AppHead" className="sticky" >
				<Spacer width={100} />
				<h1>FFFF</h1>
				<Spacer width={100} />
				<div className="input-container">
					<SearchBar setSearchIn={setSearchIn} />
				</div>
				<div>
					{loggedIn ? 
					<Logout 
						className="OAuthStuff"
						loggedIn={loggedIn} 
						setLoggedIn = {(bool) => setLoggedIn(bool)}
					/> :
					<Login 
						className="OAuthStuff"
						loggedIn={loggedIn} 
						setLoggedIn = {(bool) => setLoggedIn(bool)} 
						setName={(name) => setName(name)}
					/>
					}
				</div>
				<Spacer width={50} />
				
			</div>

			<Spacer height={"5em"} />

			<div>
			{MockData.filter((item) => {
				return (searchIn === "" ||
					item.first_name.toLowerCase().includes(searchIn.toLowerCase()));
			})
				.map((val, key) => {
					return ( <div className="user" key={key} >
						<p>{val.first_name} {val.last_name[0]}.</p>
					</div> );
			})}
			</div>

		

		</div>
	);
}

/*
starter code for create-react-app:

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
	  <br />
	  testing 1 2 3
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
