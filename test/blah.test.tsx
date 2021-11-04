import React from 'react';
import * as ReactDOM from 'react-dom';
import { BotonCooler } from '../src/index';

describe('testeo del boton', () => {
  it('el sistema no crashea', () => {
    const boton = document.createElement('button');
    ReactDOM.render(<BotonCooler />, boton);
    ReactDOM.unmountComponentAtNode(boton);
  });
});
