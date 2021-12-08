import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {Route} from 'react-router-dom';

function App(props) {
  return (
<<<<<<< HEAD
    
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/> }/>
          <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} 
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
            />}
            />
          <Route path='/news' render={ () => <News />}/>
          <Route path='/music' render={ () => <Music />}/>
          <Route path='/setting' render={ () => <Settings />}/>
        </div>
=======
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage}/> }/>
        <Route path='/profile' render={ () => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
        <Route path='/news' render={ () => <News />}/>
        <Route path='/music' render={ () => <Music />}/>
        <Route path='/setting' render={ () => <Settings />}/>
>>>>>>> 705f774c4ea054e10f2d610390afc2afdd6a71cc
      </div>
    </div>
  );
}
export default App;
