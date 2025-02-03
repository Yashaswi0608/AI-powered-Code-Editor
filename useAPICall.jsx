
const constructPrompt = (config) => {
    const cmd = config.prompt;
    let cmdPieces = cmd.split('--');
    cmdPieces = cmdPieces.map(x => x.trim());
    console.log(cmdPieces);  // Debugging: See the split pieces

    const cmdKey = cmdPieces[0];  // Using first piece as cmdKey
    
    let input = '';

    // You can construct 'input' based on your cmd logic here.
    // You don't need the `switch` block with `action` and `state`.
    
    // Construct the prompt to be used in the API call
    input = `${cmdKey}: ${cmdPieces.slice(1).join(" ")}`;

    return input;
}




export const useApiCall = () => {
    return (config) => {
        const API_KEY = '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';
        const ENDPOINT = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    
        // Using the constructed prompt from config
        const input = `${constructPrompt(config)}`;

        const params = {
            "prompt": input,
            "temperature": 0.5,
            "max_tokens": 500,
        };

        // Headers for API request
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`,
        };

        console.log(input);  // Debugging: Check if input is correctly constructed
    
        return new Promise((resolve, reject) => {
            fetch(ENDPOINT, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({
                    "prompt": input,
                    "max_tokens": params.max_tokens,
                    "temperature": params.temperature,
                })
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }
}

        
