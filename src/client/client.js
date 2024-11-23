import React from 'react';
import { createRoot } from 'react-dom/client';
function App() {
    return React.createElement("div", null, "Hello World");
}
document.querySelectorAll('#root').forEach((el) => {
    const root = createRoot(el);
    root.render(React.createElement(App, null));
});
//# sourceMappingURL=client.js.map