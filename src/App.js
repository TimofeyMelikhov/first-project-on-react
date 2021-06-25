import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route, BrowserRouter} from 'react-router-dom';
function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs messages={props.messages} dialogs={props.dialogs}/> }/>
          <Route path='/profile' render={ () => <Profile posts={props.posts}/>}/>
          <Route path='/news' render={ () => <News />}/>
          <Route path='/music' render={ () => <Music />}/>
          <Route path='/setting' render={ () => <Settings />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
