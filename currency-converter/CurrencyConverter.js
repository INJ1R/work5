import axios from 'axios';
import React, { useState } from 'react';

const CurrencyConverter = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState('USD');

  const handleConvert = async () => {
    const regex = /^(\d+\.?\d*)\s+([a-zA-Z]{3})\s+in\s+([a-zA-Z]{3})$/;
    const match = input.match(regex);

    if (match) {
      const amount = parseFloat(match[1]);
      const fromCurrency = match[2].toUpperCase();
      const toCurrency = match[3].toUpperCase();

      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        const rate = response.data.rates[toCurrency];
        if (rate) {
          setResult(amount * rate);
        } else {
          setResult('Неверная валюта');
        }
      } catch (error) {
        setResult('Ошибка при получении данных');
      }
    } else {
      setResult('Неверный формат ввода');
    }
  };

  return (
    <div>
      <h2>Конвертер валют</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="15 USD in RUB"
      />
      <button onClick={handleConvert}>Конвертировать</button>
      {result !== null && <p>Результат: {result}</p>}
    </div>
  );
};

export default CurrencyConverter;