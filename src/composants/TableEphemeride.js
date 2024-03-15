import React, { Component } from 'react'
import { CarteEphemeride } from './CarteEphemeride'

export class TableEphemeride extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
    }

    render() {
        return (
            <div className='tableEphemeride'>
                {
                    this.props.cartes.map((carte, index) => {
                        return <CarteEphemeride key={carte.ville} carte={carte} date={this.props.date}  app={this.props.app} />;
                    })
                }
            </div>
        )
    }
}       

export default TableEphemeride