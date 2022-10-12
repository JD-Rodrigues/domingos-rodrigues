const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://api.jsonbin.io/v3/b/634705682b3499323bdc5759'; 