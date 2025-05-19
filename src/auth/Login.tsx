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

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log({ email, password });
  };

  return (
    <>
      <LoginNavbar />
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 420,
            p: 4,
            borderRadius: 5,
            boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.1)',
            bgcolor: '#fff',
          }}
        >
          <Typography level="h3" textAlign="center" fontWeight="bold" mb={3}>
            Kirish
          </Typography>

          <FormControl sx={{ mb: 2 }}>
            <FormLabel sx={{ fontWeight: 500 }}>Email</FormLabel>
            <Input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                height: 45,
                fontSize: '16px',
                '&::placeholder': {
                  color: '#9e9e9e',
                },
              }}
            />
          </FormControl>

          <FormControl sx={{ mb: 3 }}>
            <FormLabel sx={{ fontWeight: 500 }}>Parol</FormLabel>
            <Input
              type="password"
              placeholder="Parolingiz"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                height: 45,
                fontSize: '16px',
                '&::placeholder': {
                  color: '#9e9e9e',
                },
              }}
            />
          </FormControl>

          <Button
            fullWidth
            onClick={handleLogin}
            sx={{
              py: 1.5,
              fontWeight: 600,
              fontSize: '16px',
              backgroundColor: '#1DB954',
              '&:hover': {
                backgroundColor: '#1AAE4D',
              },
            }}
          >
            Kirish
          </Button>

          <Typography mt={3} textAlign="center" fontSize="14px">
            Hisobingiz yo‘qmi?{' '}
            <Link href="/register" sx={{ fontWeight: 500, color: '#1DB954' }}>
              Ro‘yxatdan o‘tish
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Login;
