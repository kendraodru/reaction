import React, { useReducer } from 'react';
import reducer, { initialState }  from './state/reducer';

function App() {


  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div >
      <h2>Reaction</h2>
    </div>
  );
}

export default App;
