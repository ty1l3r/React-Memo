import React, {Fragment, useEffect, useState} from 'react';
import Photo1 from "../../../Images/api.png";

function Api(props) {

    /*================================================================*/
    const [dataImg, setDataImg] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const reponse = await fetch('https://api.thecatapi.com/v1/images/search');
            const data = await reponse.json();
            setDataImg(data[0].url)
        }
        fetchData();
    }, [])

    /*Refresh de la page pour relancer le useEffect*/
    function refreshPage() {
        window.location.reload(false);
    }
    /*================================================================*/
    return (
        <div>
            <Fragment>
                <div className="container mt-5 text-center">
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            <h4 className="card-title">Appel d'une API</h4>
                        </div>
                        <div className="card-body  text-justify">
                            <p> Exemple avec
                                <a href="https://thecatapi.com/">
                                    <span style={{color: 'red'}}> TheCatApi</span>
                                </a>
                                <br/>
                                Utilisation de 'fetchdata' en asynchrome. <br/>
                                Attention à bien ajouter le tableau vide pour éviter la boucle infinie du useEffect.
                            </p>
                            <hr className="hrClasse"/>
                            <div className="text-center">
                            </div>
                            <div className="text-center">
                                <img className="img-responsive" style={{maxWidth: '500px'}} src={dataImg} alt=""/>
                            </div>
                            <div className="text-center">
                                <button onClick={refreshPage} type="button"
                                        className="btn btn-outline-primary mt-3">Changer
                                    d'image
                                </button>
                            </div>
                            <hr className="hrClasse"/>
                            <div className="text-center"><img className="img-fluid img-responsive" src={Photo1}
                                                              alt="code"/>
                            </div>

                        </div>
                    </div>
                </div>
            </Fragment>
        </div>
    );
}

export default Api;