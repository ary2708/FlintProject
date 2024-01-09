import React from 'react';
import TokenBalance from './TokenBalance';

function App() {
  const address = '0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7'; // Replace with your Ethereum address

  return (
    <div className="App">
      <h1>Flint Labs</h1>
      <TokenBalance address={address} />
    </div>
  );
}

export default App;
