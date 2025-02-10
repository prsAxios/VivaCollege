

import cloudinary from '@lib/cloudinary';
import {NextResponse} from 'next/server';
import multer from 'multer';

const upload = multer ({storage:multer.memoryStorage()});

export const config = {
    api:{
        bodyParser : false,
    }
}

export async function POST(req){
    const form = new FormData();
    const data = await req.formData();
    const file = data.get('file');
    const buffer = Buffer.from 
}