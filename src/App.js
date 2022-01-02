import './App.css'
import MyComponent from './MyComponent'

const App = () => {
  return (
    // props 값 지정하기
    <MyComponent name="react" favoriteNumber={1}>리액트</MyComponent>
  );
};

export default App;
