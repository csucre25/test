import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Counter from './Counter/Counter';

describe('render App', () => {
  test('initial value hardcoded is 2', () => {
    render(<App />);
    const initialValue = screen.getByText(/2/i);
    expect(initialValue).toBeInTheDocument();
  });
});

describe('render the correct initial value', () => {
  test('initial value is 2', () => {
    render(<Counter value = {2}/>);
    const initialValue = screen.getByText(/2/i);
    expect(initialValue).toBeInTheDocument();
  });
  test('initial value is 3', () => {
    render(<Counter value = {3}/>);
    const initialValue = screen.getByText(/3/i);
    expect(initialValue).toBeInTheDocument();
  });
  test('initial value is 10', () => {
    render(<Counter value = {10}/>);
    const initialValue = screen.getByText(/10/i);
    expect(initialValue).toBeInTheDocument();
  });
});

describe('function ADD button', () => {
  test('initial value is 2, 1 click the new value is 3', () => {
    render(<Counter value = {2}/>);
    const btnAdd = screen.getByText(/ADD/i);
    fireEvent.click(btnAdd);
    const resultValue = screen.getByText(/3/i);
    expect(resultValue).toBeInTheDocument();
  });
  test('initial value is 2, 2 click the new value is 4', () => {
    render(<Counter value = {2}/>);
    const btnAdd = screen.getByText(/ADD/i);
    for (let index = 0; index < 2; index++) {
      fireEvent.click(btnAdd);
    }
    const resultValue = screen.getByText(/4/i);
    expect(resultValue).toBeInTheDocument();
  });
  test('initial value is 2, 10 click the new value is 12', () => {
    render(<Counter value = {2}/>);
    const btnAdd = screen.getByText(/ADD/i);
    for (let index = 0; index < 10; index++) {
      fireEvent.click(btnAdd);
    }
    const resultValue = screen.getByText(/12/i);
    expect(resultValue).toBeInTheDocument();
  });
});

describe('function SUB button', () => {
  test('initial value is 5, 1 click the new value is 4', () => {
    render(<Counter value = {5}/>);
    const btnSub = screen.getByText(/SUB/i);
    fireEvent.click(btnSub);
    const resultValue = screen.getByText(/4/i);
    expect(resultValue).toBeInTheDocument();
  });
  test('initial value is 10, 32 click the new value is -22', () => {
    render(<Counter value = {10}/>);
    const btnSub = screen.getByText(/SUB/i);
    for (let index = 0; index < 32; index++) {
      fireEvent.click(btnSub);
    }
    const resultValue = screen.getByText(/-22/i);
    expect(resultValue).toBeInTheDocument();
  });
  test('initial value is 12, 10 click the new value is 2', () => {
    render(<Counter value = {12}/>);
    const btnSub = screen.getByText(/SUB/i);
    for (let index = 0; index < 10; index++) {
      fireEvent.click(btnSub);
    }
    const resultValue = screen.getByText(/2/i);
    expect(resultValue).toBeInTheDocument();
  });
});

describe('function RESET button', () => {
  test('initial value is 5, 1 click the new value is 0', () => {
    render(<Counter value = {5}/>);
    const btnReset = screen.getByText(/RESET/i);
    fireEvent.click(btnReset);
    const resultValue = screen.getByText(/0/i);
    expect(resultValue).toBeInTheDocument();
  });
  test('initial value is 11, 1 click the new value is 0', () => {
    render(<Counter value = {10}/>);
    const btnReset = screen.getByText(/RESET/i);
    fireEvent.click(btnReset);
    const resultValue = screen.getByText(/0/i);
    expect(resultValue).toBeInTheDocument();
  });
  test('initial value is 12, 1 click the new value is 0', () => {
    render(<Counter value = {12}/>);
    const btnReset = screen.getByText(/RESET/i);
    fireEvent.click(btnReset);
    const resultValue = screen.getByText(/0/i);
    expect(resultValue).toBeInTheDocument();
  });
});