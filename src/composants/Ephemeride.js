import React, { Component } from 'react'
import cities from '../data/villes.json'
import { TableEphemeride } from './TableEphemeride'

export class Ephemeride extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            villes: cities,
            villeSelected: cities[0],
            today : this.getToday(),
            cartes: []
        }
    }

    getToday = () => {
        let today = new Date();
        return { 
            jour: today.getDate(),
            mois: today.getMonth(),
            annee: today.getFullYear(),
            jourAnnee:  this.getDayOfYear(today)
        }
    }

    getDayOfYear = (jour) => {
        const firstDayOfYear = new Date(jour.getFullYear(), 0, 1);
        const diff = jour - firstDayOfYear;
        const unJour = 1000 * 60 * 60 * 24;
        return Math.ceil(diff/unJour);
    } 

    handleSelectionVille = (e) => {
        this.setState({
            villeSelected: this.state.villes.find(ville => ville.ville === e.target.value)
        })
    }

    insertCarte() {
        let cartes = this.state.cartes;
        let carte = this.state.villeSelected;
        if(!cartes.some(ville => ville.ville === carte.ville)) {
            cartes.push(carte);
            this.setState({cartes: cartes});
        }
        console.log(this.state.cartes)
    }
    
    supprimerCarte(carte) {
        let cartes = this.state.cartes;
        let cartesFilter = cartes.filter((c) =>{
            if(c.ville !== carte.ville) {
                return c.ville;
            }
        })
        this.setState({ cartes: cartesFilter })
    }

    render() {
        return (
            <div className='ephemerides' >
                <h2>Jour {this.state.today.jourAnnee} de l'année {this.state.today.annee}</h2>
                <select onChange={this.handleSelectionVille}>
                    {
                        this.state.villes.map((ville, index) => {
                            return(
                                <option key={index} value={ville.ville} >{ville.ville}</option>  
                            )
                        })
                    }
                </select>
                <button onClick={this.insertCarte.bind(this)}>Ajouter</button>
                <TableEphemeride  cartes={this.state.cartes} date={this.state.today} app={this}/>
            </div>
        )
    }
}

export default Ephemeride