// qui dentro andrò a creare la funzione REDUCER del mio Redux Store
// la funzione REDUCER è fondamentale perchè è la creatrice materiale dello
// STATO dell'applicativo e delle sue successive iterazioni

const initialState = {
  // qui dentro vado a definire come sarà lo stato di Redux inizialmente!
  // qua dentro devo metterci l'array del carrello
  cart: {
    // queste "sottosezioni" in Redux vengono chiamate "slices"
    content: [],
  },
}

const mainReducer = (state = initialState, action) => {
  // questa funzione ritornerà SEMPRE il nuovo stato dell'applicativo
  // all'inizio, quando l'app si carica per la prima volta, creiamo noi
  // "a mano" la prima BIGLIA, ovvero lo stato iniziale di Redux: lo creiamo
  // a partire da initialState, ovvero il valore di default del parametro "state"

  // in ogni reducer va implementato uno SWITCH CASE
  switch (action.type) {
    // qui andremo dopo a definire i vari "case"
    default:
      // default è la casistica che avviene quando NESSUNA delle precedenti
      // viene colpita
      // cosa facciamo come default quando NON SAPPIAMO come calcolare
      // il nuovo stato dell'app?
      return state // ritorno lo stato corrente come NUOVO STATO
  }
}

export default mainReducer
