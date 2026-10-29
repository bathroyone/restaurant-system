import { createServer } from 'http';
import { api } from '@vercel/node';
import app from '../src/app';

// Exporta o app Express como Vercel Function
export default api(app);

// Health check endpoint direto para Vercel
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
