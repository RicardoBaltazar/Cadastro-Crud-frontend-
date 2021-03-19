import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import Container from '../src/Components/Container';
import Menu from '../src/Components/Menu';
import Button from '../src/Components/Button';
import Login from '../src/Components/SectionLogin';
import img from '../public/assets/undraw_Ride_a_bicycle_2yok.png';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 8%;
  @media screen and (max-width: 900px) {
    margin-top:-1rem;
  }
`

const SectionHome = styled.section`
  display: flex;
    justify-content: space-between;
    align-items: center;
    height: 84vh;
    .div-title-home {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    h2 {
      font-size: 55px;
      color: var(--title-color);
      @media screen and (max-width: 900px) {   
        font-size: 50px;
      }
    }
    p{
      font-size: 18px;
      color: var(--secondary-color);
      max-width: 375px;
      line-height: 1.2;
      margin: 15px 0;
    }
`

const ImgHome = styled.img`
  width: 50vw;
  @media screen and (max-width: 900px) {
    display: none;
  }
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          BikeApp - Aluguel de Bicicletas
        </title>
      </Head>
      <Container>
        <Menu
          home='#'
          link1='Home'
          link2='sobre'
          link3='bikes'
        />
        <Main
        as={motion.section}
        transition={{ ease: "easeOut", duration: 0.5 }}
        variants={{
          show: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        initial='hidden'
        animate='show'
      >
        <SectionHome>
            <div className='div-title-home'>
              <h2>Alugue uma bicicleta e explore a cidade.</h2>
              <p>
                Alugue uma bicicleta e faça um passeio sozinho ou com
                sua família e amigos pela cidade e descubra suas belezas!
            </p>
              <Button text='Alugue uma Bike' />
            </div>
            <ImgHome src={img} />
        </SectionHome>
        <Login />
        </Main>
      </Container>
    </div>
  )
}
