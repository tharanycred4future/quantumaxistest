import PropTypes from 'prop-types';

import { services } from '../../assets/assets';
import { createContext } from "react";

export const StoreContext = createContext(null);


const StoreContextProvider = (props) =>{





    const contextValue = {
        services
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

StoreContextProvider.propTypes = {
     children:PropTypes.node.isRequired,
}   

export default StoreContextProvider;
