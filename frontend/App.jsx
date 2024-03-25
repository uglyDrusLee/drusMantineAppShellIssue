import {AppShell, Loader, MantineProvider} from "@mantine/core";
import {lazy, Suspense} from "react";

const AnotherComponent = lazy(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 1000));
    return import("./AnotherComponent.jsx")
});

function App() {
    return (
        <Suspense fallback={<Loader/>}>
            <MantineProvider>
                <AppShell>
                    <div>waiting</div>
                    <Suspense fallback={'...'}>
                        <AnotherComponent />
                    </Suspense>
               </AppShell>
            </MantineProvider>
        </Suspense>
    );
}

export default App;
