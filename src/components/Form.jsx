/* eslint-disable no-useless-constructor */
 
import React, {Component} from 'react';

class Form extends Component{

    
    constructor (props) {
        super ( props )
        this.state = {name:'',email:''}; 
    }  
    getName = (event)=>{ 
        this.setState( { 
            name: event.target.value 
        }) 
    }
    getEmail = (event)=>{ 
        this.setState( { 
            email: event.target.value
        }) 
    }

    getDataForm = (e)=>{  
        e.preventDefault(); 
        alert(`Name: ${this.state.name} \nEmail: ${this.state.email}`)
        console.log(this.state)
    }
 
    render(){
        return (
        <>
            <div className="ed-grid"> 
            <h2>Formulario</h2> 
            <form className="ed-container" onSubmit={this.getDataForm} >  
                <div className="ed-item form__item l-50" >  
                    <label >Nombre Completo</label>  
                    <input type="text" value = {this.state.name} onChange ={this.getName} />
                </div> 
                <div className="ed-item form__item l-50" >  
                    <label >Correo Electrónico <input type="email"  value ={this.state.email} onChange ={this.getEmail} /> </label>  
                </div> 
                <div className="ed-item  form__item"> 
                     <input className="button full" type="submit" value="Enviar" />
                </div>
            </form> 
                <h1>Nombre {this.state.name}</h1>
                <h1>Correo {this.state.email}</h1>
            </div>
        </>
        )
    }
}


export default Form;