import React, {Fragment} from 'react';
import Photo1 from "../../../Images/useEffect.png";

function UseEffect() {

    return (
        <Fragment>
            <div className="container mt-5 text-center">
                <div className="card border-dark mb-3">
                    <div className="card-header">
                        <h4 className="card-title">Use Effect</h4>
                    </div>
                    <div className="card-body  text-justify">
                        <p> Lance une méthode lorsqu'un composant s'affiche (lorsqu'il se render). <br/>
                            Un élément s'affiche une première fois lors de l'initialisation de l'app puis à chaque fois
                            que le "state" change. <br/>
                            <span style={{color: 'red'}}> Attention à la boucle infinie ;)</span> <br/>
                            Pour éviter cela, utiliser un tableau à la fin de la fonction.
                        </p>
                        <hr className="hrClasse"/>
                        <div className="text-center">
                            <img className="img-fluid img-responsive" src={Photo1} alt="code"/>
                        </div>
                        <hr className="hrClasse"/>
                        <div className="row">
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default UseEffect;