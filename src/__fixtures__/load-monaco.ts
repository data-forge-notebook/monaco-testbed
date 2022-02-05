declare var window: any;

export function loadMonaco(amdRequire: any) {
    return new Promise<void>((resolve, reject) => {
        amdRequire.config({
            baseUrl: "lib/monaco-editor/min",
        });

        // workaround monaco-css not understanding the environment
        (self as any).module = undefined;
    
        amdRequire(
            ['vs/editor/editor.main'], 
            () => {
                resolve();
            },
            (err: any) => {
                reject(err);
            }
        );
    });
}