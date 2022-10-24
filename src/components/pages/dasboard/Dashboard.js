import React from 'react';
import './Dashboard.css';
import Nav from '../nav/Nav';
import Sidebar from '../../sidebar/Sidebar';
import Utilities from '../../utilities/Utilities';
import {ImPower} from "react-icons/im";

const Dashboard = () => {
  let utilities = [
    {
    "icon":<ImPower/>,
    "name":"Buy Electricity"
      },
    {
      "icon":<ImPower/>,
      "name":"Airtime & Data"
      },
      {
        "icon":<ImPower/>,
        "name":"Rwanda Electricity"
        },
    {
      "icon":<ImPower/>,
      "name":"Cable TV Subscription"
      },
    {
      "icon":<ImPower/>,
      "name":"Help & Support"
      },

      {
        "icon":<ImPower/>,
        "name":"Smart Conntrol"
        },
  ]
  return (
    <div className='dashboard_container'>
      <Nav/>
      <Utilities utilities={utilities}/>
    </div>
  )
}

export default Dashboard
