import React, {useState} from 'react';
import Assignment from './Assignment';
import { CurrentType } from './useExpressions';
import './App.css';

function App() {
  const [currentType, setCurrentType] = useState<CurrentType>('Base');
  const A = true;
  const B = true;
  const C = false;
  const D = 12.5;
  const E = 4;
  const F = 2;

  return (
    <div className="App">
      <h1 className="App-header">Sprout Therapy Assignment</h1>
      <h2>Description</h2>
      <div className='conditions-block'>
        <div className='conditions'>
          <h3>Base</h3>
          <p>{'A && B && !C => H = M'}</p>
          <p>{'A && B && C => H = P'}</p>
          <p>{'!A && B && C => H = T'}</p>
          <p>{'[other] => [error]'}</p>
          <p>{'H = M => K = D + (D * E / 10)'}</p>
          <p>{'H = P => K = D + (D * (E - F) / 25.5)'}</p>
          <p>{'H = T => K = D - (D * F / 30)'}</p>
        </div>
        <div className='conditions'>
          <h3>Custom 1</h3>
          <p>{'H = P => K = 2 * D + (D * E / 100)'}</p>
        </div>
        <div className='conditions'>
          <h3>Custom 2</h3>
          <p>{'A && B && !C => H = T'}</p>
          <p>{'A && !B && C => H = M'}</p>
          <p>{'H = M => K = F + D + (D * E / 100)'}</p>
        </div>
      </div>
      <h2>Solution</h2>
      <p>A && B && C, !A && B && C, A && !B && C, A && B && !C cannot be simultaneously true,</p>
      <p>so we can use them as mutually exclusive conditions.</p>
      <p>Base expressions - our prototype object.</p>
      <p>Condition 1 and Condition 2 inherit base conditions with overloading, Custom 2 have extended rule with A, !B, C</p>
      <p>I use react with typescript and custom hooks for app, react-testing utility for testing as my favourite stack.</p>
      <Assignment
        A={A}
        B={B}
        C={C}
        D={D}
        E={E}
        F={F}
        currentType={currentType}
        setCurrentType={setCurrentType}
      />
    </div>
  );
}

export default React.memo(App);
