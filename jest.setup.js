import 'whatwg-fetch'; // <-- yarn add whatwg-fetch



jest.setTimeout(11000)

require('dotenv').config({
    path: '.env.test'
});

jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments: () => ({ ...process.env })
}));