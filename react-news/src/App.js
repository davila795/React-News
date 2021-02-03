import React from 'react';
import Form from './components/Form';
import Header from './components/Header'

function App() {
  return (
    <>
      <Header title='News' />
      <div className='container white'>
        <Form />
      </div>
    </>
  );
}

export default App;
