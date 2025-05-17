import {
    Box,
    Button,
    Typography,
    Input,
    FormControl,
    FormLabel,
    Link,
} from '@mui/joy';
import { useState } from 'react';
import LoginNavbar from '../components/LoginNavbar';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        console.log({ name, email, password });
    };

    return (
        <>
            <LoginNavbar />
            <div className="container">
                <Box
                    sx={{
                        height: '85vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: 400,
                            p: 4,
                            borderRadius: 'md',
                            boxShadow: 'lg',
                            bgcolor: 'background.surface',
                        }}
                    >
                        <Typography level="h4" textAlign="center" mb={2}>
                            Ro‘yxatdan o‘tish
                        </Typography>

                        <FormControl sx={{ mb: 2 }}>
                            <FormLabel>Ism</FormLabel>
                            <Input
                                type="text"
                                placeholder="Ismingiz"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>

                        <FormControl sx={{ mb: 2 }}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                placeholder="example@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>

                        <FormControl sx={{ mb: 2 }}>
                            <FormLabel>Parol</FormLabel>
                            <Input
                                type="password"
                                placeholder="Parolingiz"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormControl>

                        <Button fullWidth sx={{
                            mt: 2,
                            background: "#1DB954",
                            '&:hover': {
                                backgroundColor: '#1AAE4D',
                            },
                        }} onClick={handleRegister}>
                            Ro‘yxatdan o‘tish
                        </Button>

                        <Typography mt={2} textAlign="center">
                            Hisobingiz bormi? <Link href="/login">Kirish</Link>
                        </Typography>
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default Register;
