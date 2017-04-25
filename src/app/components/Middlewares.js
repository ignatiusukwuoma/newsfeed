import React from 'react';


const loggedIn = () => {
  
};

export const requireAuth = (nextState, replace) => {
  if (!loggedIn()) {
    replace({
      pathname: '/login'
    })
  }
};
