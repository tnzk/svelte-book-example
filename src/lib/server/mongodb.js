import { MongoClient } from 'mongodb';
import { env } from '$env/dynamic/private';
import { building } from '$app/environment';

export const client = building ? { db: () => {} } : new MongoClient(env.MONGODB_URI);
export const database = client.db();
