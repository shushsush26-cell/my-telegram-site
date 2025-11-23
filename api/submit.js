import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    
    const clientIP = req.headers['x-forwarded-for'];

    try {
      await fetch('https://api
