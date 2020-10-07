import '@testing-library/jest-dom';
import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Assignment from './Assignment';

afterEach(cleanup);

describe('Assignment', () => {

  test('shows error', () => {
    const A = false;
    const B = false;
    const C = false;
    const D = 12.5;
    const E = 4;
    const F = 2;
    render(
      <Assignment
        A={A}
        B={B}
        C={C}
        D={D}
        E={E}
        F={F}
        currentType={'Base'}
        setCurrentType={jest.fn()}
      />);
    expect(screen.getByText('Wrong conditions')).not.toBe(null);
  });

  test('shows result for H and K for Base conditions', () => {
    const A = true;
    const B = true;
    const C = false;
    const D = 12.5;
    const E = 4;
    const F = 2;
    const { container } = render(
      <Assignment
        A={A}
        B={B}
        C={C}
        D={D}
        E={E}
        F={F}
        currentType={'Base'}
        setCurrentType={jest.fn()}
      />);
    expect(container.querySelector('.error-text')).toBe(null);
    expect(screen.getByText('H === M')).not.toBe(null);
    expect(screen.getByText('K === 17.50')).not.toBe(null);
  });

  test('shows result for H and K for Custom1 conditions 1', () => {
    const A = true;
    const B = true;
    const C = false;
    const D = 12.5;
    const E = 4;
    const F = 2;
    const { container } = render(
      <Assignment
        A={A}
        B={B}
        C={C}
        D={D}
        E={E}
        F={F}
        currentType={'Custom1'}
        setCurrentType={jest.fn()}
      />);
    expect(container.querySelector('.error-text')).toBe(null);
    expect(screen.getByText('H === M')).not.toBe(null);
    expect(screen.getByText(`K === ${(D + (D * E / 10)).toFixed(2)}`)).not.toBe(null);
  });

  test('shows result for H and K for Custom2 conditions 1', () => {
    const A = true;
    const B = true;
    const C = false;
    const D = 12.5;
    const E = 4;
    const F = 2;
    const { container } = render(
      <Assignment
        A={A}
        B={B}
        C={C}
        D={D}
        E={E}
        F={F}
        currentType={'Custom2'}
        setCurrentType={jest.fn()}
      />);
    expect(container.querySelector('.error-text')).toBe(null);
    expect(screen.getByText('H === T')).not.toBe(null);
    expect(screen.getByText(`K === ${(D - (D * F / 30)).toFixed(2)}`)).not.toBe(null);
  });

  test('shows result for H and K for Custom1 conditions 2', () => {
    const A = true;
    const B = false;
    const C = true;
    const D = 0.5;
    const E = 4;
    const F = 2;
    const { container } = render(
      <Assignment
        A={A}
        B={B}
        C={C}
        D={D}
        E={E}
        F={F}
        currentType={'Custom1'}
        setCurrentType={jest.fn()}
      />);
    expect(container.querySelector('.error-text')).not.toBe(null);
    expect(container.querySelector('.result')).toBe(null);
  });

  test('shows result for H and K for Custom2 conditions 2', () => {
    const A = true;
    const B = false;
    const C = true;
    const D = 0.5;
    const E = 4;
    const F = 2;
    const { container } = render(
      <Assignment
        A={A}
        B={B}
        C={C}
        D={D}
        E={E}
        F={F}
        currentType={'Custom2'}
        setCurrentType={jest.fn()}
      />);
    expect(container.querySelector('.error-text')).toBe(null);
    expect(screen.getByText('H === M')).not.toBe(null);
    expect(screen.getByText(`K === ${(F + D + (D * E / 100)).toFixed(2)}`)).not.toBe(null);
  });
});
