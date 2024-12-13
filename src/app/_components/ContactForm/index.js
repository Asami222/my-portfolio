"use client";

import Link from "next/link";
import { useState } from "react";
import { Box,Button,FormControl,FormControlLabel,Checkbox,TextField, Typography, } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { createContactData } from "@/app/_actions/contact";
import { sendGAEvent } from "@next/third-parties/google";


export default function ContactForm() {
    const [formState, setformState] = useState({fullname: '',email: '', message: '', privacy: ''});
    const [errors,setErrors] = useState({fullname: '', email: '', message: '', privacy: ''});
    const [success,setSuccess] = useState('');
    const [button, setButton] = useState({
        text:"送信",
        width: "88px",
        color: "primary",
        icon: <SendIcon color="primary"/>
    });
    const handleSubmit = async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const result = await createContactData(null,formData);
        if(result.status === "error") {
            setErrors(result.errors);
            setButton({text:"送信失敗",width:"116px",color:"error",icon:<ClearIcon color="error"/>});
        } else {
            console.log(result.message);
            setButton({text:"送信完了",width:"116px",color:"success",icon:<DoneIcon color="success"/>});
            setSuccess(result.message)
        }

        sendGAEvent({ event: "contact", value: "submit"});
    };

   
       
    

    /*
    if(state.status === "success") {
        return (
            <Box component="p">
                お問い合わせいただきありがとうございます。
                <br />
                お返事まで今しばらくお待ちください。
            </Box>
        );
    }
    */
    return (     
        <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display:'flex', flexDirection: 'column', gap:{xs:3,sm:4}}}
        onSubmit={handleSubmit}
        >
            <Box sx={{display:'flex',flexDirection:'column'}}>
                <TextField 
                    required
                    id="outlined-required"
                    label="お名前"
                    sx={{width:{xs:'100%',sm:'380px'},mr:{xs:0,sm:4}}}
                    name="fullname"
                    value={formState.fullname}
                    onChange={(e) => setformState({...formState,fullname: e.target.value})}
                    error={errors.fullname && "error"}
                />
                {errors.fullname &&
                    <Typography variant="caption" color="error" sx={{pl:1}}>{errors.fullname}</Typography>
                }
            </Box>
            <Box sx={{display:'flex',flexDirection:'column'}}>
                <TextField
                    required 
                    id="outlined-required"
                    label="メールアドレス"
                    sx={{width:{xs:'100%',sm:'380px'}}}
                    name="email"
                    value={formState.email}
                    onChange={(e) => setformState({...formState,email: e.target.value})}
                    error={errors.email && "error"}
                />
                {errors.email &&
                    <Typography variant="caption" color="error" sx={{pl:1}}>{errors.email}</Typography>
                }
            </Box>
            <Box sx={{display:'flex',flexDirection:'column'}}>
                <TextField
                    required
                    id="outlined-multiline-static"
                    label="内容"
                    multiline
                    rows={2}
                    fullWidth
                    name="message"
                    value={formState.message}
                    onChange={(e) => setformState({...formState,message: e.target.value})}
                    error={errors.message && "error"}
                    helpertext={errors.message}
                />
                {errors.message &&
                    <Typography variant="caption" color="error" sx={{pl:1}}>{errors.message}</Typography>
                }
            </Box>
            <Box sx={{display:'flex',flexDirection:'column'}}>
                <FormControl sx={{m:{xs:'0 auto',sm:'inherit'}}}>
                    <FormControlLabel 
                    required 
                    control={<Checkbox type="checkbox" size="small" name="privacy" checked={formState.privacy} onChange={(e) => setformState({...formState,privacy: e.target.checked})} />} 
                    label={<Link href="/contact/privacy" target="_blank" style={{textDecoration:'underline', fontSize:'14px'}}>プライバシーポリシーに同意する</Link>}
                    error={errors.privacy && "error"}
                    />
                </FormControl>
                {errors.privacy &&
                    <Typography variant="caption" color="error" sx={{pl:1}}>{errors.privacy}</Typography>
                }
            </Box>
            <Box>
                {success &&
                    <Typography variant="body2" color="success" sx={{mb:1}}>
                        お問い合わせいただきありがとうございます。<br/>お返事まで今しばらくお待ちください。
                    </Typography>
                }
                <Button 
                label="送信" 
                variant='outlined' 
                type='submit' 
                color={button.color}
                size='medium' 
                endIcon={button.icon} 
                sx={{ width:`${button.width}`,m:{xs:'0 auto',sm:'inherit'}}}>
                    {button.text}
                </Button>
            </Box>
        </Box>
    )
}