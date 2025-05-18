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
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 2,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 420,
            p: 4,
            borderRadius: '16px',
            backgroundColor: '#ffffff',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          }}
        >
          <Typography level="h3" fontWeight="bold" textAlign="center" mb={3} >
            Ro‘yxatdan o‘tish
          </Typography>

          <FormControl sx={{ mb: 3 }}>
            <FormLabel sx={{ color: 'neutral.700' }}>Ism</FormLabel>
            <Input
              placeholder="Ismingiz"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{
                backgroundColor: '#f9f9f9',
                '&::placeholder': { color: '#999' },
                '&:hover': { borderColor: '#1DB954' },
                '&:focus': { borderColor: '#1DB954' },
              }}
            />
          </FormControl>

          <FormControl sx={{ mb: 3 }}>
            <FormLabel sx={{ color: 'neutral.700' }}>Email</FormLabel>
            <Input
              placeholder="example@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                backgroundColor: '#f9f9f9',
                '&::placeholder': { color: '#999' },
                '&:hover': { borderColor: '#1DB954' },
                '&:focus': { borderColor: '#1DB954' },
              }}
            />
          </FormControl>

          <FormControl sx={{ mb: 3 }}>
            <FormLabel sx={{ color: 'neutral.700' }}>Parol</FormLabel>
            <Input
              placeholder="Parolingiz"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                backgroundColor: '#f9f9f9',
                '&::placeholder': { color: '#999' },
                '&:hover': { borderColor: '#1DB954' },
                '&:focus': { borderColor: '#1DB954' },
              }}
            />
          </FormControl>

          <Button
            onClick={handleRegister}
            fullWidth
            sx={{
              mt: 1,
              backgroundColor: '#1DB954',
              color: '#fff',
              fontWeight: 600,
              py: 1.5,
              fontSize: '16px',
              '&:hover': {
                backgroundColor: '#17a44b',
              },
            }}
          >
            Ro‘yxatdan o‘tish
          </Button>

          <Typography mt={3} textAlign="center" fontSize="14px" >
            Hisobingiz bormi?{' '}
            <Link href="/login" sx={{ color: '#1DB954', fontWeight: 500 }}>
              Kirish
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Register;
