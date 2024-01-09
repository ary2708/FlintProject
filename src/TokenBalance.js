import React, { useEffect, useState } from 'react';
import { Alchemy, Utils } from 'alchemy-sdk';
import EthDater from 'ethereum-block-by-date';

const apiKey = "<-- ALCHEMY API KEY -->";
const settings = {
  apiKey: apiKey
};

const alchemy = new Alchemy(settings);
const dater = new EthDater(alchemy.core);

const TokenBalance = ({ address }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const timestamp = new Date().toISOString();
        let block = await dater.getDate(timestamp);
        block = block['block'];
        let currentBalance = await alchemy.core.getBalance(address, block);
        currentBalance = Utils.formatEther(currentBalance);
        setBalance(currentBalance);
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
    // Fetch balance every 12 hours (in milliseconds)
    const interval = setInterval(fetchBalance, 12 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [address]);

  return (
    <div>
      <h2>Balance of {address}:</h2>
      {balance !== null ? (
        <>
          <p>{balance} ETH</p>
          {/* Add logic to check percentage change and show alert */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TokenBalance;
