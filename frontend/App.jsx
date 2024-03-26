import {AppShell, Loader, MantineProvider} from "@mantine/core";
import {lazy, Suspense} from "react";
import AnotherComponent from "./AnotherComponent.jsx";

function App({ store }) {
    return (
        <Suspense fallback={<Loader/>}>
            <MantineProvider>
                <AppShell>
                    <div>waiting</div>
                    <Suspense fallback={'...'}>
                        <AnotherComponent store={store}/>
                    </Suspense>
               </AppShell>
            </MantineProvider>
        </Suspense>
    );
}

export default App;
