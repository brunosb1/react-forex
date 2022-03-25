// import {Helper} from './helper'
// import  { render, screen} from '@testing-library/react'
// import '@testing-library/jest-dom'


// import { rest } from 'msw'
// import {setupServer} from 'msw/node'


//  const apiResponse = rest.get('http://localhost:4000/api/transactions', (req, res, ctx) =>{
//      return res(ctx.json([{ from: 'USD', to: 'GBP', valeuFrom: 40, valueTo: 60  }]))
//  })
// // const getResponse = rest.get('http://localhost:4000/api/transactions', (req, res, ctx) =>{
// //     return res(ctx.json([{ from: 'USD', to: 'GBP', valeuFrom: 40, valueTo: 60  }]))
// // })


// const handlers = [apiResponse];

// const server = setupServer(...handlers);



// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
// beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));


 export {};


// it('testing get transaction', async ()=>{
//     render(<Helper />)
//     const get = await screen.findAllByTestId('TEST')
//     expect(get).toBeTruthy();
   
    
// })