// pages/api/cors.js
export default function handler(req, res) {
    // Set the CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    
    // Return a response to any preflight requests
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
  
    // Handle other HTTP methods here, if needed
  
    // For example, if you want to handle a GET request
    // res.status(200).json({ message: 'Hello from CORS API!' });
  }
  