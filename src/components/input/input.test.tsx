import { Input } from './input';
import  {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'


// import { rest } from 'msw'
// import {setupServer} from 'msw/node'


// const apiResponse = rest.post('http://localhost:4000/api/transactions', (req, res, ctx) =>{
//     return res(ctx.json({ from: 'USD', to: 'GBP', valeuFrom: 40, valueTo: 60  }))
// })
// const getResponse = rest.get('http://localhost:4000/api/transactions', (req, res, ctx) =>{
//     return res(ctx.json([{ from: 'USD', to: 'GBP', valeuFrom: 40, valueTo: 60  }]))
// })



// const server = setupServer(rest.post('http://localhost:4000/api/transactions', (req, res, ctx) =>{
//     return res(ctx.json([{ from: 'USD', to: 'GBP', valeuFrom: 40, valueTo: 60  }]))
// }));

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());
// beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));



describe('testing input component',()=>{ 
jest.setTimeout(50000)
it('testing input render', ()=>{
    render(<Input />)
    expect(screen.getByText('Real time currencie: USD')).toBeInTheDocument()
})

it('testing button', ()=>{
   
    const onClick = jest.fn()
    render(<Input />)
    const button = screen.getByTestId('button')
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(onClick).not.toBeNull()
    
})
// it('testing post transaction', async ()=>{
//     server.use(
//         rest.post('http://localhost:4000/api/transactions', (req, res, ctx) =>{
//             return res(ctx.json([{ from: 'USD', to: 'GBP', valeuFrom: 40, valueTo: 60  }]));
//         })
        
        
//     )
    
    
// })
})

