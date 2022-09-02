import { authSlice, checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { initialState, demoUser, authenticatedState, nonAuthenticatedState } from '../../fixtures/authFixtures';

describe('Pruebas en authSlice.js', () => {
    
    test('debe de regresar el estado inicial y regresar el auth', () => {
        
        expect( authSlice.name ).toBe('auth');
        const state = authSlice.reducer( initialState, {} );
        

        expect( state ).toEqual( initialState );
        
    });

    test('debe de realizar la autenticación', () => {
        
        const state = authSlice.reducer( initialState, login(demoUser));
        
        expect(state).toEqual(authenticatedState);

    });

    test('debe de realizar el logout sin argumentos', () => {
        const state = authSlice.reducer( authenticatedState, logout());

        expect(state).toEqual({
            status: 'non-authenticated', // 'checking', 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined
        })
    });

    test('debe de realizar el logout con argumentos y mostrar un mensaje de error', () => {
        
        const errorMessage = 'Credenciales no son correctas';
        const state = authSlice.reducer( authenticatedState, logout({errorMessage}));

        expect(state).toEqual({
            status: 'non-authenticated', // 'checking', 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage
        });

    });
    
    test('debe de cambiar el estado a checking', () => {

        const state = authSlice.reducer( initialState, checkingCredentials() );

        expect(state).toEqual({
            status: 'checking', 
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: null
        })
    });
});