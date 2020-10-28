import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Layout>
          <BurgerBuilder/>
        </Layout>
        
      </div>
    )
  }
}

export default App;