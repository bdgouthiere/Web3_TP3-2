import React, { Component } from 'react'
import { lever, dureeJour, coucher, conversionDecJourHeure } from '../modules/mecaniqueCeleste'

export class CarteEphemeride extends Component {

    constructor(props) {
      super(props)
      this.ville = props.carte.ville
    
      this.state = {
      }
    }

    getParametres = () => {
      const { latitude, longitude, decalageHoraire } = this.props.carte;
      const {jour, mois, annee } = this.props.date;
      return [latitude, longitude, decalageHoraire, jour, mois, annee];
    }

    getLeverSoleil = () => {
      return conversionDecJourHeure(lever(...this.getParametres()));
    }

    getCoucherSoleil = () => {
      return conversionDecJourHeure(coucher(...this.getParametres()));
    }

    getDureeJour = () => {
      return dureeJour(...this.getParametres());
    }

    handlerSuppressionCarte() {
        this.props.app.supprimerCarte(this);
    }

    render() {
        return (
        <div className='carte'>
            <h4>{this.props.carte.ville}</h4>
            <button className='delete' onClick={this.handlerSuppressionCarte.bind(this)}>X</button>
            <img src='./media/images/sunrise.png' className='label' alt='Lever du soleil'/>
            <p className='data'>{this.getLeverSoleil()}</p>
            <img src='./media/images/sunset.png' className='label' alt='Coucher du soleil'/>
            <p className='data'>{this.getCoucherSoleil()}</p>
            <p className='label'>Durée:</p>
            <p className='data'>{this.getDureeJour()}</p>
        </div>
    )
  }
}

export default CarteEphemeride