import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'


const sql = neon(process.env.NEXT_PUBLIC_DB);
 export const db = drizzle(sql,{schema});


 

//  import { db } from "@/utils/db"; // ✅ Ensure this path is correct
// import { UserAnswer } from "@/utils/schem
//  import { drizzle } from "drizzle-orm/postgres-js";
//  import postgres from "postgres";

//  const connection = postgres(process.env.DATABASE_URL); // Ensure DATABASE_URL is set
//  export const db = drizzle(connection);