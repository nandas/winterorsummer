import React from 'react'
import './SeasonDisplay.css'

const getSeason = (lat,month) => {
    if (month > 2 && month <9){
        return lat > 0  ? 'summer' : 'winter'
    }else{
        return lat > 0 ? 'winter' :'summer'
    }
}

const SeasonConfig = {
    winter:{
        text:"It is like cool like Jammu",
        iconName:"snowflake"
    },
    summer:{
        text:"It is like Chennai",
        iconName:"sun"
    }
}
const SeasonDisplay = props => {
    const localSeason = getSeason(props.lat,new Date().getMonth());
    const {text,iconName}=SeasonConfig[localSeason];
    return(
        <div className={`season-display ${localSeason}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>Season Display {text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay;