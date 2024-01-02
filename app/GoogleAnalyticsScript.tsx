import Script from 'next/script';

const GoogleAnalyticsScript = () => {
    return (
        <>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-R5Z3TYPSR8"
            />
            <Script id="google">
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-R5Z3TYPSR8');`}
            </Script>
        </>
    );
};

export default GoogleAnalyticsScript;
