/**
 * A collection of popular layouts and patterns made with CSS (https://csslayout.io)
 * (c) 2019 - 2020 Nguyen Huu Phuoc <https://twitter.com/nghuuphuoc>
 */

import React from 'react';
import { Link } from 'react-router-dom';

import useDocumentTitle from '../hooks/useDocumentTitle';
import Layout from './Layout';
import ProductHuntBadge from './ProductHuntBadge';

interface DetailsLayoutProps {
    title: string;
}

const DetailsLayout: React.FC<DetailsLayoutProps> = ({ title, children }) => {
    useDocumentTitle(`CSS Layout ∙ ${title}`);

    return (
        <Layout>
            <div style={{ position: 'absolute', right: 0, top: '24px' }}>
                <ProductHuntBadge />
            </div>
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: '#00449E',
                    borderRadius: '4px',
                    color: '#FFF',
                    display: 'inline-flex',
                    margin: '32px 0',
                }}
            >
                <Link
                    to="/"
                    style={{
                        color: '#FFF',
                        padding: '8px 16px',
                        textDecoration: 'none',
                    }}
                >
                    .home
                </Link>
                <div>~</div>
                <Link
                    to="/patterns"
                    style={{
                        color: '#FFF',
                        padding: '8px 16px',
                        textDecoration: 'none',
                    }}
                >
                    .explore
                </Link>
            </div>
            <div
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    borderBottomColor: 'transparent',
                    position: 'relative',
                }}
            >
                <h1
                    style={{
                        backgroundColor: '#FFF',
                        fontSize: '36px',
                        fontWeight: 600,
                        left: '50%',
                        lineHeight: 1.5,
                        margin: 0,
                        padding: '0 16px',
                        position: 'absolute',
                        top: 0,
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    {title}
                </h1>
                {children}
            </div>
        </Layout>
    );
};

export default DetailsLayout;
