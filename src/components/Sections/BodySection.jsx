

import React, {useState} from 'react'

import FloatMenu from './FloatMenu'

import ObrasPublicas from './containers/ObrasPublicas'
import SAPA from './containers/SAPA'

import './BodySection.css'

//ICONS
import icons from '../../icons/icons.jsx'



const BodySection = () => {
    const [container, setContainer] = useState(menuOptions[0].container);
    
    const changeOption = (event) => setContainer(menuOptions[event.target.value].container)

    return (
        <main className = 'bodySection'>
            <FloatMenu menuOptions = {menuOptions} onChangeFun = {changeOption}/>
            {container}
        </main>
    );
}



const menuOptions  = [
    {
        text:      'DIF',
        icon:      icons.dif,
        container: <> </>
    },
    {
        text:      'SAPA',
        icon:      icons.sapa,
        container: <SAPA  />
    },
    {
        text:      'Obras públicas',
        icon:      icons.obrasPublicas,
        container: <ObrasPublicas  />
    },
    {
        text:      'Tesorería',
        icon:      icons.tesoreria,
        container: <> </>
    },
    {
        text:      'Sindicatura',
        icon:      icons.sindicatura,
        container: <> </>
    }
]





// const options  = ['Obras públicas', 'SAPA', 'DIF', 'Tesorería', 'Sindicatura'];
export default BodySection
