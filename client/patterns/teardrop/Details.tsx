/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';
import Circle from '../../placeholders/Circle';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Teardrop">
            <Helmet>
                <meta name="description" content="Create a teardrop with CSS" />
                <meta
                    name="keywords"
                    content="css border radius, css teardrop, css water drop shape, css water droplet"
                />
            </Helmet>
            <div style={{ padding: '64px 32px' }}>
                <BrowserFrame
                    content={(
                        <div
                            style={{
                                alignItems: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                justifyContent: 'center',
                                padding: '8px',
                            }}
                        >
                            <div
                                style={{
                                    alignItems: 'center',
                                    border: '2px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '0 50% 50% 50%',
                                    display: 'flex',
                                    height: '64px',
                                    justifyContent: 'center',
                                    transform: 'rotate(45deg)',
                                    width: '64px',
                                }}
                            >
                                <div style={{ transform: 'rotate(-45deg)' }}>
                                    <Circle />
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Center the content */
    align-items: center;
    display: flex;
    justify-content: center;

    /* Border */
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 0px 50% 50% 50%;

    /* Angle at the top */
    transform: rotate(45deg);

    /* Size */
    height: 64px;
    width: 64px;
">
    <!-- Display the content vertically -->
    <div style="
        transform: rotate(-45deg);
    ">
        ...
    </div>
</div>
`}
                />
            </div>
        </DetailsLayout>
    );
};

export default Details;
