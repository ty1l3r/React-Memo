import React, {Fragment} from 'react';
import Photo1 from "../../../Images/parentCustomHook.png";
import Photo2 from "../../../Images/customHook.png";

function CustomHook(props) {
    return (
        <Fragment>
            <div className="container mt-5 text-center">
                <div className="card border-dark mb-3">
                    <div className="card-header">
                        <h4 className="card-title">Les Custom Hooks</h4>
                    </div>
                    <div className="card-body  text-justify">
                        <p> Construire vos propres Hooks vous permet d’extraire la logique d’un composant sous forme de
                            fonctions réutilisables. <br/>
                            Un Hook personnalisé est une fonction JavaScript dont le nom commence par ”use” et qui peut
                            appeler d’autres Hooks.
                            Custom Hook d'un appel API (UseCatImage)
                        </p>
                        <div className="">
                            <a href="https://thecatapi.com/">
                                <span style={{color: 'red'}}>Documentation Custom Hooks</span>
                            </a>
                        </div>
                        <hr className="hrClasse"/>
                        <div className="text-center">
                        </div>
                        <div className="text-center">
                            <div className="row">
                                <div className="col-6">
                                    <p>Dans le composant parent</p>
                                    <img className="img-responsive" style={{maxWidth: '500px'}} src={Photo1} alt=""/>
                                </div>
                                <div className="col-6">
                                    <p>le Custom Hook</p>
                                    <img className="img-responsive" style={{maxWidth: '500px'}} src={Photo2} alt=""/>
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

export default CustomHook;