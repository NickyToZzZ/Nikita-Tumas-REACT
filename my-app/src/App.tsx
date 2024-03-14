import './App.css';
import Title from './components/Title/Title';
import Tabs from './components/Tabs/Tabs';


export default function App() {

  function tabClick():void  {
    alert('Hello!');
  }
  // tabClick()

  return (
    <>
    <Title text='Sign In'></Title>
    <Tabs text1='All' 
          text2='My Favourites' 
          text3='Popular' 
          tabClassName='container-tabs__item' 
          isDisabled={true}
          clickFunction={tabClick}></Tabs>
    </>
  )
}