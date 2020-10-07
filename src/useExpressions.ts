import { useCallback, useState, useEffect } from 'react';
import utils from './utils';

export type CurrentType = 'Base' | 'Custom1' | 'Custom2';
export type ExpressionsType = {
  H: string | null;
  K: number | null;
  error: string | null;
}

const useExpressions = (A: boolean, B: boolean, C: boolean, D: number, E: number, F: number, type: CurrentType): ExpressionsType => {
  const [K, setK] = useState<number | null>(null);
  const [H, setH] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const assign = useCallback(() => {
    setError(null);
    if (A && B && !C) {
      if (type === 'Custom2') {
        setK(utils[type].T(D, F));
        setH('T');
      } else {
        setK(utils[type].M(D, E));
        setH('M');
      }
    } else if (A && B && C) {
      setK(utils[type].P(D, E, F));
      setH('P');
    } else if (!A && B && C) {
      setK(utils[type].T(D, F));
      setH('T');
    } else if (type === 'Custom2' && A && !B && C) {
      setK(utils[type].M(D, E, F));
      setH('M');
    } else {
      setError('Wrong conditions');
    }
  }, [A, B, C, D, E, F, type]);

  useEffect(() => {
    assign();
  }, [assign, type]);

  return { H, K, error };
};

export default useExpressions;
