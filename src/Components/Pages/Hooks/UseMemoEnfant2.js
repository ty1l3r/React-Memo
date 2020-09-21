import React from 'react';

const Enfant = function () {

    console.log('MISE A JOUR DU COMPOSANT UseState')

    return (
        <div>
            <h4>Le composant enfant UseState</h4>
        </div>
    )

}

export default React.memo(Enfant);