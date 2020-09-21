import React from 'react';
import '../../../App.css'
import './Accueil.css'


function Accueil(props) {
    return (
        <div className="container mt-5 text-center">
            <div className="card border-dark mb-3">
                <div className="card-header">
                    <h4 className="card-title">REACT MEMO</h4>
                </div>
                <div className="card-body  text-justify">
                    <p className="card-text">
                        Bienvenue sur le site React Memo. Un simple site fabriqué sous
                        React regroupant les principes de base indispensables pour créer un site internet en ... React.
                        En esperant que ce site vous aide comme il m'as aidé :).
                    </p>
                    <br/>
                    <p>
                        Cet site d'apprentissage à été créer avec la version 16.13.0 ( 26 février 2020 ) qui inclu
                        les nouvelles spécificités comme les React hooks )
                    </p>
                        <br/>
                    <p>
                        Ici pas de grandes folies niveau front. Un simple Bootstrap fera l'affaire ! :) Le code sera
                        probablement beaucoup plus intéressant à voir que l'interface :) <hr/>
                        Made by dev for dev !
                    </p>
                        <img src="https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png"
                             alt=""
                             className="responsive"
                        />

                </div>
            </div>
        </div>
    );
}

export default Accueil;
