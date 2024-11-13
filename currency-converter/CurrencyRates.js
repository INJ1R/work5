import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CurrencyRates = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        setRates(response.data.rates);
      } catch (error) {
        console.error('Ошибка при получении курсов валют', error);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return (
    <div>
      <h2>Текущие курсы валют</h2>
      <select onChange={(e) => setBaseCurrency(e.target.value)} value={baseCurrency}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="RUB">RUB</option>
        {/* Добавьте другие валюты по необходимости */}
      </select>
      <ul>
        {Object.entries(rates).map(([currency, rate]) => (
          <li key={currency}>{`1 ${baseCurrency} = ${rate} ${currency}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyRates;