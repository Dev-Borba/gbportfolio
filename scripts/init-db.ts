import { initializeDatabase } from '../lib/db';

// Initialize the database and create the messages table
console.log('Initializing database...');
initializeDatabase();
console.log('Database initialized successfully!');
