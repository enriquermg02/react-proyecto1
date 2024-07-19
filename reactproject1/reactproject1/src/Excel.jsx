import  { useState } from 'react';

const ExcelDataUploader = () => {
    const [file1Data, setFile1Data] = useState([]);
    const [file2Data, setFile2Data] = useState([]);

    const handleFile1Change = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result; // File contents as a string
                const lines = data.split('\n'); // Split into lines
                const headers = lines[0].split(','); // Extract headers
                const rows = lines.slice(1).map((line) => {
                    const values = line.split(',');
                    const rowObject = {};
                    for (let i = 0; i < headers.length; i++) {
                        rowObject[headers[i]] = values[i];
                    }
                    return rowObject;
                });
                setFile1Data(rows);
            };
            reader.readAsText(file); // Read file as text
        }
    };

    const handleFile2Change = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result; // File contents as a string
                const lines = data.split('\n'); // Split into lines
                const headers = lines[0].split(','); // Extract headers
                const rows = lines.slice(1).map((line) => {
                    const values = line.split(',');
                    const rowObject = {};
                    for (let i = 0; i < headers.length; i++) {
                        rowObject[headers[i]] = values[i];
                    }
                    return rowObject;
                });
                setFile2Data(rows);
            };
            reader.readAsText(file); // Read file as text
        }
    };

    return (
        <div>
            <h2>Upload Excel Files</h2>
            <div>
                <label htmlFor="file1">Select File 1:</label>
                <input type="file" id="file1" onChange={handleFile1Change} />
            </div>
            <div>
                <label htmlFor="file2">Select File 2:</label>
                <input type="file" id="file2" onChange={handleFile2Change} />
            </div>
            <div>
                <h3>File 1 Data:</h3>
                {file1Data.length > 0 && (
                    <pre>{JSON.stringify(file1Data, null, 2)}</pre>
                )}
            </div>
            <div>
                <h3>File 2 Data:</h3>
                {file2Data.length > 0 && (
                    <pre>{JSON.stringify(file2Data, null, 2)}</pre>
                )}
            </div>
        </div>
    );
};

export default ExcelDataUploader;

