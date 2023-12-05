import React from 'react';
import logo from './logo.svg';
import './App.css';

const MyComponent = () => {
  return (
    <div>MyComponent</div>
  )
}
MyComponent.displayName = 'MyComponent';

const MyWrapper = () => {
  return (
    <div>
      <MyComponent/>
      <MyComponent/>
    </div>
  )
}
MyWrapper.displayName = 'MyWrapper';

function App() {
  return (
    <div className="App">
      <MyWrapper/>
      <div>
        I'm outside of wrapper:
        <MyComponent/>
      </div>
    </div>
  );
}

export default App;
