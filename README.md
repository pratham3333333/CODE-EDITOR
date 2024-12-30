# HTML Code Editor Project with Monaco Editor ✨

This project demonstrates how to create a simple HTML code editor using the Monaco Editor. It allows you to write HTML code and see the output live in an iframe. Perfect for learning or experimenting with HTML code!

## Features 🚀
- **Monaco Editor** for writing HTML code 📝
- **Live Output** in an iframe 🔥
- **Run Code** button to view results 🖱️

## Step-by-Step Guide 📜

### 1. Set Up Your Project Directory 🗂️
- Create a folder for your project, e.g., `html-code-editor`.
- Inside the folder, create the following files:
  - `index.html` (Main HTML file)
  - `styles.css` (For styling)
  - `script.js` (For functionality)

### 2. Download or Link Monaco Editor 📦

#### Option 1: Use a CDN (Quick Setup) 🌐
Add the following script to your `index.html`:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.39.0/min/vs/loader.min.js"></script>
```


### 3. Create the HTML Structure 🏗️
Open `index.html` and add the following content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Code Editor</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.39.0/min/vs/loader.min.js"></script>
</head>
<body>
    <div class="container">
        <div class="editor-section">
            <h2>HTML Editor</h2>
            <div id="editor" style="height: 300px; border: 1px solid #ccc;"></div>
            <button id="run-btn">Run Code</button>
        </div>
        <div class="output-section">
            <h2>Output</h2>
            <iframe id="output" style="width: 100%; height: 300px; border: 1px solid #ccc;"></iframe>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### 4. Add CSS for Styling 🎨
Open `styles.css` and add the following content:

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
}

.editor-section, .output-section {
    flex: 1;
    min-width: 300px;
}

#editor {
    border-radius: 4px;
}

#run-btn {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

#run-btn:hover {
    background-color: #0056b3;
}

iframe {
    border-radius: 4px;
}
```

### 5. Initialize Monaco Editor in JavaScript 🖥️
Open `script.js` and add the following content:

```javascript
require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.39.0/min/vs' } });

require(['vs/editor/editor.main'], function () {
    // Initialize Monaco Editor
    const editor = monaco.editor.create(document.getElementById('editor'), {
        value: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <title>Document</title>\n</head>\n<body>\n\n</body>\n</html>',
        language: 'html',
        theme: 'vs-light',
        automaticLayout: true,
    });

    // Get the Run button and output iframe
    const runBtn = document.getElementById('run-btn');
    const output = document.getElementById('output');

    // Run the code and display output
    runBtn.addEventListener('click', () => {
        const htmlContent = editor.getValue();
        const outputDoc = output.contentDocument || output.contentWindow.document;
        outputDoc.open();
        outputDoc.write(htmlContent);
        outputDoc.close();
    });
});
```

### 6. Run Your Project 🚀
- Open the `index.html` file in a web browser.
- You'll see an HTML editor on the left and an output iframe on the right.
- Write HTML code in the editor and click the **Run Code** button to see the output.



![code](https://github.com/user-attachments/assets/ff9b6f18-cb5d-4415-a786-616e2de0da05)
