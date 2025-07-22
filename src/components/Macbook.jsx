export default function Macbook({ url }) {

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
            id='1'
            className="rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.4)]"
            style={{
                backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
                width: '1280px',
                height: '784px',
                position: 'relative',
                borderRadius: '16px',
            }}
        >
            <span className="flex flex-row justify-left items-center absolute top-0 left-0 w-full h-[40px] object-cover z-10" style={{ backgroundColor: "#F2F2F5", paddingLeft: "15px" }}>
                <span className='flex flex-row justify-left items-left'>
                    <svg height="35" width="32" xmlns="http://www.w3.org/2000/svg">
                        <circle r="7" cx="17" cy="20" fill="var(--close)" />
                    </svg>
                    <svg height="35" width="32" xmlns="http://www.w3.org/2000/svg">
                        <circle r="7" cx="17" cy="20" fill="var(--minimize)" />
                    </svg>
                    <svg height="35" width="32" xmlns="http://www.w3.org/2000/svg">
                        <circle r="7" cx="17" cy="20" fill="var(--maximize)" />
                    </svg>
                </span>
            </span>

            {/* Iframe (Website preview) */}
            {url && isValidUrl(url) ? (
                <iframe
                    src={url}
                    className="absolute top-[40px] left-0 border-0 z-0"
                    style={{
                        width: '100%',
                        height: 'calc(100% - 40px)',
                        borderBottomLeftRadius: '16px',
                        borderBottomRightRadius: '16px',
                        left: 0,
                        right: 0,
                    }}
                />
            ) : (
                <div
                    className="absolute top-[40px] left-0 w-full h-[calc(100%-40px)] flex items-center justify-center text-black text-lg font-medium"
                    style={{
                        borderBottomLeftRadius: '16px',
                        borderBottomRightRadius: '16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: "var(--accent)",
                        overflow: "hidden"
                    }}
                >
                    Enter a URL to preview
                </div>
            )}
        </div>
    );
}
