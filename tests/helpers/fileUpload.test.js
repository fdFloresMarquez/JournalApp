
import { fileUpload } from '../../src/helpers/fileUpload';

describe('Puebas en fileUpload', () => {

    // test('debe de subir el archivo correctamente a Cloudinary', async() => {
        
    //     const imageUrl = 'https://19yw4b240vb03ws8qm25h366-wpengine.netdna-ssl.com/wp-content/uploads/10-Free-To-Use-CORS-Proxies-1024x768.png';

    //     const resp = await fetch(imageUrl);
    //     const blob = await resp.blob();
    //     const file = new File([blob], 'foto.jpg');

    //     const url = await fileUpload( file );
    //     expect( typeof url).toBe('string');

    // });

    test('debe de retornar null', async() => {
        
        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
        expect( url ).toBe( null );

    });
});