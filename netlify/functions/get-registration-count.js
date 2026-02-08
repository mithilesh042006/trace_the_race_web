// Netlify Function to fetch form submission count
// This function calls Netlify's API to get the count of form submissions

export async function handler(event, context) {
    // Set CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    };

    // Handle preflight request
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        // Get the Netlify API token from environment variable
        const NETLIFY_ACCESS_TOKEN = process.env.NETLIFY_ACCESS_TOKEN;
        const SITE_ID = process.env.MY_NETLIFY_SITE_ID;

        if (!NETLIFY_ACCESS_TOKEN || !SITE_ID) {
            console.log('Missing environment variables, returning default count');
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    count: 0,
                    message: 'Environment variables not configured'
                }),
            };
        }

        // First, get the form ID for the "register" form
        const formsResponse = await fetch(
            `https://api.netlify.com/api/v1/sites/${SITE_ID}/forms`,
            {
                headers: {
                    Authorization: `Bearer ${NETLIFY_ACCESS_TOKEN}`,
                },
            }
        );

        if (!formsResponse.ok) {
            throw new Error(`Failed to fetch forms: ${formsResponse.status}`);
        }

        const forms = await formsResponse.json();

        // Find the "register" form
        const registerForm = forms.find(form => form.name === 'register');

        if (!registerForm) {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    count: 0,
                    message: 'Registration form not found'
                }),
            };
        }

        // Return the submission count
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                count: registerForm.submission_count || 0,
                formName: registerForm.name,
                lastUpdated: new Date().toISOString()
            }),
        };

    } catch (error) {
        console.error('Error fetching registration count:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: 'Failed to fetch registration count',
                message: error.message
            }),
        };
    }
}
