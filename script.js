require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.39.0/min/vs' } });

require(['vs/editor/editor.main'], () => {
    // Initialize Monaco Editor for HTML
    const htmlEditor = monaco.editor.create(document.getElementById('html-editor'), {
        value: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Document</title>\n</head>\n<body>\n\n</body>\n</html>',
        language: 'html',
        theme: 'vs-light',
        automaticLayout: true,
        suggestOnTriggerCharacters: true,
        quickSuggestions: true,
        wordWrap: "on",
    });

    // Get references to iframe and Run button
    const outputFrame = document.getElementById('output-frame');
    const runButton = document.getElementById('run-button');

    // Add functionality to the Run button
    runButton.addEventListener('click', () => {
        const htmlContent = htmlEditor.getValue();

        // Write the HTML content to the iframe
        const output = outputFrame.contentDocument || outputFrame.contentWindow.document;
        output.open();
        output.write(htmlContent);
        output.close();
    });
});
