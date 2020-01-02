/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import random from '../../helpers/random';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Statistic">
            <Helmet>
                <meta name="description" content="Create a statistic component with CSS flexbox" />
                <meta name="keywords" content="css flexbox, css statistic" />
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
                                    display: 'inline-flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <div style={{ fontSize: '4rem', fontWeight: 500 }}>
                                    {random(1000, 9999).toLocaleString()}
                                </div>
                                <div style={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase' }}>
                                    stars
                                </div>
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Center the content */
    align-items: center;
    display: inline-flex;
    flex-direction: column;
">
    <!-- Value -->
    <div style="
        /* Big font size */
        font-size: 4rem;
        font-weight: 500;
    ">
        ...
    </div>

    <!-- Label -->
    <div style="
        /* Smaller font size */
        font-size: 1rem;
        font-weight: 700;

        /* Uppercase the label */
        text-transform: uppercase;
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
