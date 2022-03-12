import { createClient } from 'pexels';
import dotenv from 'dotenv';
import { RestP } from './utileHandeler';
dotenv.config();

const apikey = process.env.API_KEY as string;
const client = createClient(apikey);

const data = {
    url: async (ID: number) => {
        const rec = await client.photos.show({ id: ID });
        const fileurl: RestP = rec as unknown as object;
        return fileurl.src?.original;
    }
};

export default data;