import React from 'react';
import Photo1 from '../../../Images/propTypes1.png'
import Photo2 from '../../../Images/errorPropTypes.png'
import './props.css'
import PropTypes from 'prop-types';


function MyPropTypes(props) {
    return (
        <div className="container mt-5 text-center">
            <div className="card border-dark mb-3">
                <div className="card-header">
                    <h4 className="card-title">Les PropTypes</h4>
                </div>
                <div className="card-body  text-justify">
                    <p className="card-text">
                        Commencer par l'installation du paquet avec "
                        <span className="styleProps"> npm i prop-types</span> "
                    </p>
                    <p> import PropTypes from 'prop-Types'</p>
<hr className="hrClasse"/>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={Photo1} alt="code"/>
                        </div>
                        <div className="col">
                            <img src={Photo2} alt="code"/>
                        </div>
                    </div>
                    <hr className="hrClasse"/>
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Il y aura une erreur si le type ne correspond pas avec le PropTypes.[type].isRequired</p>

                            <p>la liste de tous les types et autres possibilités :
                                <a href="https://fr.reactjs.org/docs/typechecking-with-proptypes.html">React
                                    PropTypes</a>
                            </p>
                        </div>
                    </div>
<hr className="hrClasse"/>
                    <p>quoi mettre dans le fonction Composant.propTypes :</p>
                    <ul>
                        <li>nomDuComposant.propType</li>
                        <li>nomDuProp: PropTypes.type.isRequired</li>
                    </ul>
<hr className="hrClasse"/>

{/*=================================================================================*/}
                    <h5>Le propTypes rendu dans cet element enfant : (via un router) :
                        <span className="styleProps"> {props.somPropType}</span>
                    </h5>
{/*=================================================================================*/}
                </div>
            </div>
        </div>
    );
}
{/*=================================================================================*/}
MyPropTypes.propTypes = {
    somPropType: PropTypes.string.isRequired
}
{/*=================================================================================*/}

export default MyPropTypes;