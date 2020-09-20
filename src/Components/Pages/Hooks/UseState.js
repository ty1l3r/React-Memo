import React, {useState} from 'react'
import Photo1 from "../../../Images/reactHooks.png"

function UseState(props) {

{/*=================================================================================*/}

    const [monState, setMonState] = useState("Mon state initial");

    const changeState = () => {
        setMonState('Mon state mise à jours')
    }
    const reinitialise = () => {
        setMonState("Mon state initial")
    }

{/*=================================================================================*/}

    return (
        <div className="container mt-5 text-center">
            <div className="card border-dark mb-3">
                <div className="card-header">
                    <h4 className="card-title">UseState</h4>
                </div>
                <div className="card-body  text-justify">
                    <p> Les React hooks sont devenu la norme et il est conseillé de les utiliser et ne plus coder avec
                        les composants de type 'classe'<br/>
                        Les hooks rajoutent notamenent des fonctionalitées supplémentaires au composant de type 'fonction'.
                        Il est desormais possible d'utilise du "state" dans ce type de composant. La méthode "useState"
                        renvois un tableau <span style={{color:'#8bc34a'}}>[ State de départ, fonction () ]</span> <br/>
                    </p> <br/>
                    Il est possible d'utiliser autant de Hooks que l'on veut à condition de bien les placer dans le code: <br/>
                    <ul>
                        <li>toujours les utiliser dans les composants de type fonction</li>
                        <li>Toujour déclaer ses hooks à la racine (à la base du composant)</li>
                    </ul>

<hr className="hrClasse mt-2 mb-2"/>
                    <h5>Mise en place</h5>
                    <ul>
                        <li>
                            Importer le useState !
                        </li>
                        <li>
                            Toujours utiliser les hook dans les composant de type fonction.
                        </li>
                        <li>
                            Toujours les décaler à la racine.
                        </li>
                    </ul>

                    <div className="text-center">
                        <img className="img-fluid img-responsive mt-3" src={Photo1} alt="code"/>
                    </div>
<hr className="hrClasse mt-2 mb-2"/>
                    <div className="text-center">
                    <button onClick={changeState} className="btn btn-outline-primary mr-3">Change mon state</button>
                    <button onClick={reinitialise} type="button" className="btn btn-outline-danger">Reinitialise mon state</button>
                    <h5 className="mt-3">
                        {monState}
                    </h5>
                    </div>


                    {/*=================================================================================*/}

                 {/*   <h5>Le props rendu dans cet element enfant : (via un router):
                        <span className="styleProps"> {props.someProps1}</span>
                    </h5>*/}

                    {/*=================================================================================*/}
                </div>
            </div>

        </div>
    );
}

export default UseState;
