import React from 'react'
import PropTypes from 'prop-types';

const Profesor= ( {profesor:{name, imageUrl}})=> {
    return (
        <div className="s-mb-2 s-main-center">
            <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                <div className="circle img-container">
                    <img src={ imageUrl} alt={name}/>
                </div>
                </div>
                <span className="small">{name}</span>   
            </div>
        </div>
) 
}  
const Curso = ({url, title, price, profesor}) => (
    <>  
        <article className="card">   
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={url} alt={title}/>
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center"> 
                   {title}
            </h3>
            <Profesor profesor={profesor} />  
            <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#go">$ {price} USD</a> 
            </div>
        </div> 
        </article> 
    </>
)

Curso.propTypes  = { 
    title: PropTypes.string,
    url: PropTypes.string,
    price: PropTypes.number,
    profesor: PropTypes.object

}

Curso.defaultProps = {
    title: "No se encontro título",
    url: "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/3171998/580/326/m1/fpnw/wm0/05_animation_background-.jpg?1503916720&s=e9e6aa0572728d90989ae0aa129a4774", 
    price: "--",
    profesor:{
        name:'Profesor por defenir',
        imageUrl:'https://gregorianfoundation.org/wp-content/uploads/2016/04/Man-Icon-b.png'   
    }

}
export default Curso




// Eliminados
const cursos = [
    { 
      "url":'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-04/React%20desde%20cero%20%281%29.png',
      "title":'React.js Desde Cero',
      "price":67,
      "profesor":{
        "name":"Beto Quiroga",
        "imageUrl":"https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
      }
    },
    {
      
      "url":'https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2019-01/Android%20Bases%20de%20datos.png?itok=3pW_l_7C',
      "title":'Android Bases de datos',
      "price":50,
      "profesor":{
        "name":"José Dimas Luján",
        "imageUrl":"https://drupal.ed.team/sites/default/files/styles/perfil_en_views_200x200_/public/pictures/2018-11/lujan.jpg?itok=By-TfmuL"
      }
    },
    {
      "url":'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-10/Laravel%20Desde%20Cero.jpg',
      "title":'Laravel Desde Cero (2019)',
      "price":74, 
      "profesor":{
        "name":"Yesi Days",
        "imageUrl":"https://api.ed.team/files/avatars/747dea4d-4438-4a7e-904a-427a5cd6aac7.jpg"
      }
    },
    {
      "url":'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2018-10/swift-ii.png',
      "title":'Funciones y Objetos en Swift',
      "price":84, 
      "profesor":{
        "name":"Juan Villalvazo ",
        "imageUrl":"https://api.ed.team/files/avatars/7852ed52-833a-4911-a0d9-967d82c2bba3.jpg"
      }
    },
    {
      "url":'https://drupal.ed.team/sites/default/files/styles/medium/public/courses/images/aws-iv.jpg?itok=08OK4f5U',
      "title":'Servicios de cómputo',
      "price": 108, 
      "profesor":{
        "name":"Manuel Rodriguez",
        "imageUrl":"https://api.ed.team/files/avatars/a32d05c5-06be-4a75-aa6e-839693ac1aca.jpeg"
      }
    },
    {
      // "url":'https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2018-12/Flutter.png?itok=MpF412ML',
      "title":'Flutter Desde Cero', 
      "profesor":{
        "name":"Hansy Schmitt",
        "imageUrl":"https://api.ed.team/files/avatars/2bcf0198-504f-45fd-8d69-81528fbed53d.png" //corrigir
      }
    }
  
  ]

//   <div className="ed-grid m-grid-3 ">
//   {cursos.map((curso)=> <Curso 
//     url={curso.url} 
//     title={curso.title} 
//     price={curso.price}
//     profesor={curso.profesor} />
//     )}
// </div>
