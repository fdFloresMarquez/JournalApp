import { Link as RouterLink } from 'react-router-dom'

import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'

import { AuthLayout } from '../layout/AuthLayout'


export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Registrarse">

        <form>

          <Grid container>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Ingrese su nombre"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Ingrese su contraseña"
                fullWidth
              />

            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12}>
                <Button variant='contained' fullWidth>
                  Crear Cuenta
                </Button>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                <Typography sx={{mr:1}}>¿Ya tienes una cuenta?</Typography>
                <Link component={RouterLink} color='inherit' to='/auth/login'>
                  Ingresar

                </Link>
              </Grid>

            </Grid>

          </Grid>
        </form>
      </AuthLayout>

    </>
  )
}
