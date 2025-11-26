import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Web3 from 'web3';

const Dashboard = () => {
    const [usage, setUsage] = useState(0);
    const [recommendation, setRecommendation] = useState('');
    const [balance, setBalance] = useState(0);
    const web3 = new Web3(window.ethereum);
    const contractAddress = 'your_contract_address';
    const abi = [/* Smart Contract ABI */];
    const energyTrading = new web3.eth.Contract(abi, contractAddress);

    useEffect(() => {
        // Fetch energy data from backend
        axios.get('http://localhost:5000/api/energy')
            .then(response => {
                setUsage(response.data.usage);
                setRecommendation(response.data.recommendation);
            })
            .catch(error => console.error('Error fetching energy data:', error));
    }, []);

    const sellEnergy = async () => {
        const accounts = await web3.eth.requestAccounts();
        await energyTrading.methods.sellEnergy(10).send({ from: accounts[0] });
        alert('Energy sold successfully!');
    };

    const buyEnergy = async () => {
        const accounts = await web3.eth.requestAccounts();
        await energyTrading.methods.buyEnergy(5).send({ from: accounts[0] });
        alert('Energy bought successfully!');
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>GreenCharge AI Dashboard</h1>
            <p>Energy Usage: {usage} kWh</p>
            <p>AI Recommendation: {recommendation}</p>
            <button onClick={sellEnergy}>Sell Energy</button>
            <button onClick={buyEnergy}>Buy Energy</button>
        </div>
    );
};

export default Dashboard;