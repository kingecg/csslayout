/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import RelatedPatterns from '../../components/RelatedPatterns';
import Pattern from '../../constants/Pattern';
import DetailsLayout from '../../layouts/DetailsLayout';
import BrowserFrame from '../../placeholders/BrowserFrame';

const Details: React.FC<{}> = () => {
    return (
        <DetailsLayout title="Stacked cards">
            <Helmet>
                <meta name="description" content="Create stacked cards with CSS" />
                <meta name="keywords" content="css card, css stacked cards, css transform rotate" />
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
                                    backgroundColor: '#fff',
                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                    borderRadius: '4px',
                                    height: '250px',
                                    position: 'relative',
                                    width: '200px',
                                }}
                            >
                                {
                                    Array(5).fill(0).map((_, index) => {
                                        return (
                                            <div
                                                key={index}
                                                style={{
                                                    backgroundColor: '#fff',
                                                    border: '1px solid rgba(0, 0, 0, 0.3)',
                                                    borderRadius: '4px',
                                                    height: '100%',
                                                    left: 0,
                                                    position: 'absolute',
                                                    top: 0,
                                                    transform: `rotate(${5 * (index + 1)}deg)`,
                                                    width: '100%',
                                                    zIndex: -1,
                                                }}
                                            />
                                        );
                                    })
                                }
                            </div>
                        </div>
                    )}
                    source={`
<div style="
    /* Used to position the stacked cards */
    position: relative;
">
    <!-- Repeat if you want to have more cards -->
    <div style="
        /* Absolute position */
        left: 0px;
        position: absolute;
        top: 0px;

        /* Take full size */
        height: 100%;
        width: 100%;

        /* Displayed under the container */
        z-index: -1;

        /* Background and border colors */
        background-color: rgb(255, 255, 255);
        border: 1px solid rgba(0, 0, 0, 0.3);

        /* Rotate it. Change the number of degrees for the following cards */
        transform: rotate(5deg);
    " />

    <!-- Main card's content -->
    ...
</div>
`}
                />
            </div>

            <RelatedPatterns patterns={[Pattern.Card]} />
        </DetailsLayout>
    );
};

export default Details;
