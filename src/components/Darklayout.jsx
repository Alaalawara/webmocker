export default function DarkLayout({ url }) {

    function isValidUrl(str) {
        try {
            const url = new URL(str);
            return url.protocol === 'http:' || url.protocol === 'https:';
        } catch (_) {
            return false;
        }
    }

    return (
        <div
            id='4'
            className="border-20 relative rounded-3xl"
            style={{
                width: '1300px',
                height: '650px',
                borderColor:"var(--b-dark)"
            }}
        >
            
            {/* Iframe (Website preview) */}
            {url && isValidUrl(url) ? (
                <iframe
                    src={url}
                    className="absolute left-0 border-0 z-0"
                    style={{
                        width: '100%',
                        height: '100%',
                        left: 0,
                        right: 0,
                    }}
                />
            ) : (
                <span
                    className="absolute left-0 w-full h-full flex items-center justify-center text-black text-lg font-medium"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: "var(--accent)",
                        overflow: "hidden"
                    }}
                >
                    Enter a URL to preview
                </span>
            )}
        </div>
    );
}
