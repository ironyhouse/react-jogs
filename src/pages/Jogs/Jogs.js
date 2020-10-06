import React, { Component } from 'react'
import AddButton from '../../components/AddButton/AddButton';
import Jog from '../../components/Jog/Jog'
import SadFace from '../../components/SadFace/SadFace';
import classes from './Jogs.module.scss';

class Jogs extends Component {
    state = {
        isJogs: true,
    }

    // ISO to Date
    date = (date) => {
        const DATE = new Date(+(date + '000'))
        let pad = (date, width, character) => new Array(width - date.toString().length + 1).join(character) + date
        let strDate =
            pad(DATE.getDate(), 2, '0') +
            '.' + pad(DATE.getMonth() + 1, 2, '0') +
            '.' + DATE.getFullYear();

        return strDate
    } 

    render() {
        return(
            <>
                {this.props.jogsData
                    ? <div className={classes.Jogs}>
                        { this.props.jogsData.data.response.jogs.map((i, index) => {
                            return(
                                <Jog 
                                    Key = {index} 
                                    Date={this.date(this.props.jogsData.data.response.jogs[index].date)}
                                    Speed={ this.props.jogsData.data.response.jogs[index].speed || Math.ceil(this.props.jogsData.data.response.jogs[index].distance * 60 / this.props.jogsData.data.response.jogs[index].time) || 0 } 
                                    Distance={this.props.jogsData.data.response.jogs[index].distance} 
                                    Time={this.props.jogsData.data.response.jogs[index].time} 
                                />
                            )
                        })}
                        <AddButton />
                     </div>
                    
                    : <SadFace />
                }   
            </>        
            
        )
    }
}

export default Jogs;