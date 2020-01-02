/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { hydrate, render } from 'react-dom';

import App from './App';

const rootElement = document.getElementById('root');
rootElement.hasChildNodes()
    ? hydrate(<App />, rootElement)
    : render(<App />, rootElement);
