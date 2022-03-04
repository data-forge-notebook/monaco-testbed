import * as React from "react";
import * as ReactDOM from "react-dom";
import { MonacoEditor } from "./components/monaco-editor";

function App() {
    return (
        <div>
            <MonacoEditor />            
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));