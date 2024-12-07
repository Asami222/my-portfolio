"use client";

import Link from "next/link";
import { useState } from "react";
import { Box,Button,FormControl,FormControlLabel,Checkbox,TextField, Typography, } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DoneIcon from '@mui/icons-material/Done';
import { createContactData } from "@/app/_actions/contact";


export default function ContactForm() {
    const [formState, setformState] = useState({fullname: '',email: '', message: '', privacy: ''});
    const [errors,setErrors] = useState({fullname: '', email: '', message: '', privacy: ''});
    const [success,setSuccess] = useState('');
    const handleSubmit = async(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const result = await createContactData(null,formData);
        if(result.status === "error") {
            setErrors(result.errors);
        } else {
            console.log(result.message);
            setSuccess(result.message)
        }
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
                color={success ? "success" : "primary"}
                size='medium' 
                endIcon={ success ? <DoneIcon color="success"/> : <SendIcon color="primary"/>} 
                sx={{ width:'88px',m:{xs:'0 auto',sm:'inherit'}}}>
                    {success ? "完了" : "送信"}
                </Button>
            </Box>
        </Box>
    )
}