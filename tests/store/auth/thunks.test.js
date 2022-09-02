import { loginWithUserWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth';
import { checkingAuthentication, startGoogleSignIn, startCreatingUserWithEmailPassword, startLoginWithEmailPassword, startLogout } from '../../../src/store/auth/thunks';
import { clearNotesLogout } from '../../../src/store/journal';
import { demoUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/firebase/providers')

describe('Pruebas en auth/thunks', () => {
    const dispatch = jest.fn();

    beforeEach( () => jest.clearAllMocks());
    
    test('debe de invocar el checkingCredentials ', async() => {
        await checkingAuthentication()(dispatch);
        expect(dispatch).toBeCalledWith(checkingCredentials());
    });

    test('startGoogleSignIn debe de llamar checkingCredentials y login - Exito', async() => {

        const loginData = { ok:true, ...demoUser };
        await signInWithGoogle.mockResolvedValue( loginData );
        
        await startGoogleSignIn()(dispatch); 

        expect( dispatch ).toBeCalledWith( checkingCredentials());
        expect( dispatch ).toBeCalledWith( login( loginData ));
    });

    test('startGoogleSignIn debe de llamar checkingCredentials y logout - Error', async() => {

        const loginData = { ok:false, errorMessage: 'Un error en google' };

        await signInWithGoogle.mockResolvedValue( loginData );
        
        await startGoogleSignIn()(dispatch); 

        expect( dispatch ).toBeCalledWith( checkingCredentials());
        expect( dispatch ).toBeCalledWith( logout( loginData.errorMessage ));

    });

    test('startCreatingUserWithEmailPassword debe de llamar checkingCredentials y login - Exito', async() => {
       
        const loginData = { ok: true, ...demoUser };
        const registerData = {
            email: demoUser.email,
            password: '123456', 
            displayName: demoUser.displayName
       };

        await registerUserWithEmailPassword.mockResolvedValue( loginData );
        
        await startCreatingUserWithEmailPassword(registerData)(dispatch); 

        expect( dispatch ).toBeCalledWith( checkingCredentials());
        expect( dispatch ).toBeCalledWith( login( loginData ));

    });

    test('startLoginWithEmailPassword debe de llamar checkingCredentials y login - Exito', async() => {

        const loginData = { ok: true, ...demoUser };
        const registerData = {
            email: demoUser.email,
            password: '123456', 
       };

        await loginWithUserWithEmailPassword.mockResolvedValue( loginData );
        
        await startLoginWithEmailPassword(registerData)(dispatch); 

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials());
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ));

    });

    test('startLogout debe de llamar logoutFirebase, clearNotes y logout', async() => {
        
        await startLogout()(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout());
        expect( dispatch ).toHaveBeenCalledWith( logout());
    });



});

