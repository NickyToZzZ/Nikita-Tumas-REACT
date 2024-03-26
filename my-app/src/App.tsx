import './App.css';
import Tabs from './components/Tabs/Tabs';
import PostCardList from './components/PostCardList/PostCardList';
import Header from './components/Header/Header';


export default function App() {

  return (
    <>
    <div className="container">
      <Header username='Nikita Tumas'/>
      <div className="main-container">
        <Tabs />
        <PostCardList />
      </div>
    </div>
    </>
  )
}