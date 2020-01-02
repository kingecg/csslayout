/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';

import Frame from '../../placeholders/Frame';
import Line from '../../placeholders/Line';

const Cover: React.FC<{}> = () => {
    return (
        <Frame>
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    justifyContent: 'center',
                    padding: '8px',
                }}
            >
                <div style={{ marginBottom: '4px', width: '80%' }}>
                    <Line backgroundColor='#fff' />
                </div>
                <div style={{ marginBottom: '4px', width: '60%' }}>
                    <Line backgroundColor='#fff' />
                </div>
                <div style={{ width: '40%' }}>
                    <Line backgroundColor='#fff' />
                </div>
            </div>
        </Frame>
    );
};

export default Cover;
