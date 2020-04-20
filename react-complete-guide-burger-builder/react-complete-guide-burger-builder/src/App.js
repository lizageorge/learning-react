import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BugerBuilder/BurgerBuilder';

function App() {
  //Using App as a root componenet instead of Layout just gives more future flexibility
  return (
    <div>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
