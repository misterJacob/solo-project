import globe from '../images/globe.png'

export default function Header(){
    return(
        <header className='header'>
        <img src={globe} alt="globe" className="globe" />
        <h2>My Travel Journal</h2>
        </header>
    )
}