import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CounterWithUseState } from './CounterWithUseState';
import { CounterWithUseStateCustom } from './CounterWithUseStateCustom';
import { CountDownWithUseEffect } from './CountDownWithUseEffect';
import { CountDownWithUseEffectCustom } from './CountDownWithUseEffectCustom';

import './styles.css';

function App() {
  return (
    <div className="App">
      <CounterWithUseState />
      <CounterWithUseStateCustom />
      <CountDownWithUseEffect interval={1000} initialCount={10} />
      <CountDownWithUseEffectCustom interval={1000} initialCount={10} />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
