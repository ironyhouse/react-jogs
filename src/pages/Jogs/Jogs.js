import React, { Component } from 'react'
import AddButton from '../../components/AddButton/AddButton';
import Jog from '../../components/Jog/Jog'
import SadFace from '../../components/SadFace/SadFace';
import classes from './Jogs.module.scss';

class Jogs extends Component {
    state = {
        isJogs: true,
        jogs: [
                ['20.12.2010', '20','15','60'],['20.12.2011', '20','15','60'],
                ['20.12.2012', '20','15','60']
            ]

    }


    render() {
        return(
            <>
                {this.state.isJogs === true  
                    ? <div className={classes.Jogs}>
                        { this.state.jogs.map((i, index) => {
                            return(
                                <Jog 
                                    key = {index} 
                                    Date={this.state.jogs[index][0]} 
                                    Speed={this.state.jogs[index][1]} 
                                    Distance={this.state.jogs[index][2]} 
                                    Time={this.state.jogs[index][3]} 
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