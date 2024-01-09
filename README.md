# Flint Labs Token Balance App

This is a simple React web application that fetches the native token balance of an externally owned Ethereum account using Alchemy SDK. Additionally, it displays the percentage change in balance in the last 12 hours and notifies the user with an alert if the balance reduces by 10%.

## Prerequisites

- Node.js and npm installed on your machine.
- Alchemy API key (replace `<-- ALCHEMY API KEY -->` in `TokenBalance.js` with your actual API key).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/token-balance-app.git
   cd token-balance-app

2. Install dependencies:

bash
Copy code
npm install
Replace <-- ALCHEMY API KEY --> with your Alchemy API key in src/TokenBalance.js.

## Usage
Start the React app:

npm start

Open your web browser and visit http://localhost:3000 to view the app.

The balance will be fetched initially, and it will be updated every 12 hours. The app will display the current balance, and you can customize the logic to show an alert if the balance reduces by 10%.
