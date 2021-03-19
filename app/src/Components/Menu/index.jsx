import Link from 'next/link';
import HEADER from './style';

function Menu(props) {
    return (
        <>
            <HEADER>
                <Link href={props.home}><h1>BikeApp<span></span></h1></Link>
                <ul className='ul-sign'>
                    <li><Link href='#'>{props.link1}</Link></li>
                    <li><Link href="#">{props.link2}</Link></li>
                    <li><Link href="#">{props.link3}</Link></li>
                    <li><a href="#" >Cadastre - se</a></li>
                    <li><a href="#" className='btn-entrar'>Entrar</a></li>
                </ul>
            </HEADER>
        </>
    )
}

export default Menu;