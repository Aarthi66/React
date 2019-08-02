import React, { Component } from 'react';

class Comp1 extends Component {
    render() { 
        return ( 
            <div className='notes' onClick={this.props.deleteMethod}>
                {this.props.text}
            </div>
         );
    }
}
 
export default Comp1;