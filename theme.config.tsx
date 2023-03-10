import PostFooter from './components/PostFooter';
import FooterMinimal from './components/FooterMinimal';
import React from 'react';

const themeConfig = {
    darkMode: true,
    navs: [],
    head: ({ title, meta }) => (
        <>
            <title>{title} | tim wheeler's journal</title>
            {meta.description && <meta name='description' content={meta.description} />}
            {meta.author && <meta name='author' content={meta.author} />}
            {meta.tag && <meta name='keywords' content={meta.tag} />}

            {/* Open Graph*/}
            {meta.title && <meta property='og:title' content={`${meta.title} | tim wheeler's journal`} />}
            {meta.description && <meta property='og:description' content={meta.description} />}
            <meta property='og:image' content={'/img/og/og-image.jpg'} />
            <meta property='og:site_name' content="tim wheeler's journal" />

            {/* Twitter */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:image' content='https://journal.timwheeler.com/img/og/og-image.jpg' />
            <meta name='twitter:site' content='@hashmapped' />

            {/* Other */}
            <link
                rel='alternate'
                type='application/rss+xml'
                title='RSS'
                href='/feed.xml'
            />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1'
            />
        </>
    ),
    readMore: (
        '👉 Read More'
    ),
    footer: (
        <FooterMinimal />
    ),
    postFooter: (
        <PostFooter />
    ),
};

export default themeConfig;
