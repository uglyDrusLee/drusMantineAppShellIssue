function Html({ children }) {
    return (
        <>
            <head>
                <script
                    async
                    type="module"
                    dangerouslySetInnerHTML={{
                        __html: `
import RefreshRuntime from "/@react-refresh"
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type
window.__vite_plugin_react_preamble_installed__ = true
				`,
                    }}
                />
                <title></title>
            </head>
            <body>
            <div id="root">
                {children}
            </div>
            </body>
        </>
    );
}

export default Html;
