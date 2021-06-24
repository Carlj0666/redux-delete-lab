import React, { Component } from 'react';
import Band from './Band'
import uuid from 'uuid'

class Bands extends Component {
    render() {
        return(
           <div>
               {this.props.bands.map((band) => {
                   return (<Band key={uuid()} band={band}/>)
                })  
                }
                
           </div>
        )
    }
}


export default Bands