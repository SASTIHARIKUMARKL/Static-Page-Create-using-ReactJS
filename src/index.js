import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';
function App(){
  return(
    <div> 
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />,document.getElementById('root'));
