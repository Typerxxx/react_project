import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Profile from './components/profile/profile';
import Post from './components/posts/post';
import PostInput from './components/posts/post_input';



const App = () =>{
  return (
    <div className="App" >
      <Header/>
      <Sidebar/>
      <Profile/>
      <PostInput/>
      <Post/>
    </div>
  );
}


export default App;
