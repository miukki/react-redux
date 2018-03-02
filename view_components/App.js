import React from 'react'
import Footer from './Footer'
import VisibleAddItem from '../containers/VisibleAddItem'
import VisibleItemList from '../containers/VisibleItemList'
 
const App = () => (
  <div>
    <VisibleAddItem />
    <VisibleItemList />
    <Footer />
  </div>
)
 
export default App