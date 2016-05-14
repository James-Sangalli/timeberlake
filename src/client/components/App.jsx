import React, {Component} from 'react'
import Overview from './Overview.jsx'
import Transactions from './Transactions.jsx'
import Payment from './Payment.jsx'

export default class Client extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className='container'>
        <div id='overview'>
          <Overview />
        </div>
      </div>
    )
  }
}
