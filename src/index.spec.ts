import supertest from "supertest";
import { server } from './index';

describe('Server', () => {
    const request = supertest.agent(server); //gets the server

    afterAll( (done : jest.DoneCallback) => { //after all tests are done, do this...
        server.close(done); //when done, close the server (we take a done arg into the func)
    })

    // a test:
    it('should get /', async () => { //making the func asyncronus
        const response = await request.get('/'); //get the response from the server (+ await waits for the response)

        expect(response.status).toBe(200); //expect the status to be 200
        expect(response.text).toBe('Hello, World:)\n'); //expect the body to be 'Hello, World:)\n'
        
    });

});
