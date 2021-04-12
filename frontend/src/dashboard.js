import React, {Component, Fragment} from 'react'
import DashboardTabBar from './dashboardTabBar'
import DashboardMainBlock from './dashboardMainBlock'

class Dashboard extends Component{
    render(){
        return(
            <div>
                <DashboardTabBar />
                <DashboardMainBlock />
            </div>
        )
    }
}

export default Dashboard