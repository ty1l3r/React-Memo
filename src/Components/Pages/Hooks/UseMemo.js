import React, {Fragment, useState} from 'react';
import UseMemoEnfant from "./UseMemoEnfant";
import UseMemoEnfant2 from "./UseMemoEnfant2";


function UseMemo(props) {

    const [compteur, setCompteur] = useState(0);


    return (
        <Fragment>
            <div className="container mt-5 text-center">
                <div className="card border-dark mb-3">
                    <div className="card-header">
                        <h4 className="card-title">UseMemo & UseCallBack</h4>
                    </div>
                    <div className="card-body  text-justify">
                        <p> UseMemo (mémoriser). Permet de ne pas remettre a jour des composants enfants quand
                            un parent passe des props ou se met à jour.
                            <br/>
                            <a href="https://fr.reactjs.org/docs/hooks-reference.html#usememo">
                                <span style={{color: 'red'}}>Documentation UseMemo</span>
                            </a></p>
                        <strong>A utiliser avec parcimonie ! </strong>
                        <ul>
                            <li>Rend les composants assez verbeux pour un travail en équipe</li>
                            <li>La logique derière l'utilisation multiplié de ce hook peut prendre autant de
                                ressources
                                que ce qui à voulu être évitée. (non optimal)
                            </li>
                        </ul>
                        <strong>Quand les utiliser ? </strong>
                        <ul>
                            <li> Avec des fonctions mauvaise en performances (gros calculs)</li>
                            <li> quand des données sont responsable à la mise a jour de beaucoup de composant enfants.
                            </li>
                        </ul>
                        <hr className="hrClasse"/>
                        <div className="text-center">
                            <div className="row">
                                <div className="col-12 mb-4 alert alert-dismissible alert-success pt-4">
                                    OUVRIR ET OBSERVER LA CONSOLE.
                                    <p>En cliquant sur le bouton -1 ou +1, le composant enfant se remet toujours à jour.
                                </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <p>Le parent</p>
                                    <h4>{compteur}</h4>
                                    <div>
                                        <button onClick={() => setCompteur(compteur - 1)} type="button"
                                                className="btn btn-outline-warning mt-3 mr-3"> -1
                                        </button>
                                        <button onClick={() => setCompteur(compteur + 1)} type="button"
                                                className="btn btn-outline-primary mt-3 mr-3"> +1
                                        </button>
                                    </div>
                                    {/* <img className="img-responsive" style={{maxWidth: '500px'}} src={Photo1} alt=""/>*/}
                                </div>
                                <div className="col-6">
                                    <p>L'enfant</p>
                                    <h4><UseMemoEnfant/></h4>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-12 mb-4 alert alert-dismissible alert-info">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>Pour eviter cela nous pouvons utiliser React Memo pour que l'enfant ne se
                                        remette
                                        pas à jour a chaque changement de state.</strong>
                                </div>
                                <div className="col-6">
                                    <p>Le parent</p>
                                    <h4>{compteur}</h4>
                                    <div>
                                        <button onClick={() => setCompteur(compteur - 1)} type="button"
                                                className="btn btn-outline-warning mt-3 mr-3"> -1
                                        </button>
                                        <button onClick={() => setCompteur(compteur + 1)} type="button"
                                                className="btn btn-outline-primary mt-3 mr-3"> +1
                                        </button>

                                    </div>
                                    {/* <img className="img-responsive" style={{maxWidth: '500px'}} src={Photo1} alt=""/>*/}
                                </div>
                                <div className="col-6">
                                    <p>L'enfant</p>
                                    <h4><UseMemoEnfant2/></h4>

                                </div>
                            </div>
                        </div>
                        <hr className="hrClasse"/>

                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default UseMemo;