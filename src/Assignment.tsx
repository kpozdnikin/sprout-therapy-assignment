import React, { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import useExpressions, { CurrentType, ExpressionsType } from './useExpressions';

interface IAssignmentProps {
  A: boolean;
  B: boolean;
  C: boolean;
  D: number;
  E: number;
  F: number;
  currentType: CurrentType;
  setCurrentType: (value: CurrentType) => void;
}

const Assignment: React.FC<IAssignmentProps> = (props) => {
  const { A, B, C, D, E, F, currentType, setCurrentType } = props;
  const {
    H,
    K,
    error
  }: ExpressionsType = useExpressions(A, B, C, D, E, F, currentType);

  return (
    <div className='assignment'>
      <p>A === {A.toString()}, B === {B.toString()}, C === {C.toString()}, D === {D}, E === {E}, F === {F}</p>
      <ButtonGroup>
        <Button variant="contained" color={currentType === 'Base' ? 'primary' : 'default'} onClick={setCurrentType.bind(this, 'Base')} disableElevation>
          Base
        </Button>
        <Button variant="contained" color={currentType === 'Custom1' ? 'primary' : 'default'} onClick={setCurrentType.bind(this, 'Custom1')} disableElevation>
          Custom1
        </Button>
        <Button variant="contained" color={currentType === 'Custom2' ? 'primary' : 'default'} onClick={setCurrentType.bind(this, 'Custom2')} disableElevation>
          Custom2
        </Button>
      </ ButtonGroup>
      { !error && (
        <div className='result'>
          <p>H === {H}</p>
          <p>K === {K && K.toFixed(2)}</p>
        </div>
      )}
      { error && (
        <p className={'error-text'}>
         {error}
        </p>
      )}
    </div>
  );
};

export default React.memo(Assignment);
