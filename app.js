const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const fs = require('fs');

app.use(require('cors')())
app.use(express.json());

app.post('/save', (req, res) => {
    console.log(req.body)
    const { subFolderName, fileName, toProduction, sprMdl } = req.body
    // Convert the object to a string representing TypeScript code and prepend the export keyword
    const tsCodeString = `const ${fileName}_Obj = ${JSON.stringify(sprMdl.spriteData, null, 4)} 
export const ${fileName} = () => ${fileName}_Obj`
//     const tsCodeString = `export const ${fileName} = () => {
//     return ${JSON.stringify(sprMdl.spriteData, null, 4)}
// }`

    // Specify the file path
    const filePath = `./${fileName}.ts`;

    // Write the TypeScript code string to the file
    fs.writeFile(filePath, tsCodeString, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('File saved successfully!');
        }
    });

    res.send('success')
  });

app.listen(port, () => console.log(`Listening on ${port}`));