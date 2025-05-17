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
      <div className="container">
        <Box
          sx={{
            height: '80vh',
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
              Kirish
            </Typography>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="Email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl sx={{ mt: 2 }}>
              <FormLabel>Parol</FormLabel>
              <Input
                type="password"
                placeholder="Parolingiz"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button fullWidth sx={{
              mt: 3, background: "#1DB954",
              '&:hover': {
                backgroundColor: '#1AAE4D',
              },
            }} onClick={handleLogin}>
              Kirish
            </Button>

            <Typography mt={2} textAlign="center">
              Hisobingiz yo‘qmi? <Link href="/register">Ro‘yxatdan o‘tish</Link>
            </Typography>
          </Box>
        </Box>

      </div>
    </>
  );
};

export default Login;
