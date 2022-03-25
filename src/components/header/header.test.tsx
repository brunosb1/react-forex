import { Header } from './header';
import  {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'



it('should have a h1 title', ()=>{

    render(<Header />)
    expect(screen.getByText('Exchange Currency Real Time')).toBeInTheDocument()


})

it('should have a img', ()=>{
    render(<Header />)
    const img = screen.getByAltText(/exchange/i)
    expect(img).toBeTruthy()
    expect(img).not.toBeUndefined()
    expect(screen.getByAltText(/exchange/i)).toBeInTheDocument()
})

