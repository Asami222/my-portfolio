import Image from "next/image";
import { Box } from '@mui/material';

export default function Icon() {
    return (
            <Box sx={{display:'grid', placeItems:'center'}}>
                <Image
                    src="/home/icon.svg"
                    alt='menu'
                    width={38}
                    height={26}
                    sizes='(min-width:18px) 18px, 3.2vw'
                    style={{width:'90%', height:'auto'}}
                    priority
                />
            </Box>
    )
}