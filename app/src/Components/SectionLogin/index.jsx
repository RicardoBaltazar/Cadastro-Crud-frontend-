import styled from 'styled-components';

const SectionLogin = styled.section`
    display: flex;
    /* border: 1px solid yellow; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    /* height: 50vh; */
    height: 100vh;
    width: 100vw;
    background-color: var(--primary-color);
    color: #fff;
    /* margin-top: -3rem; */

    

    form {
      display: flex;
      flex-direction: column;
      width: 25vw;
      /* border: 1px solid #fff; */
      padding: 1rem 0;

      @media screen and (max-width: 900px) {
        width: 50vw;
      }
      @media screen and (max-width: 600px) {
        width: 90vw;
      }
    }

    h2{
      margin-bottom: 0.5rem;
      font-size: 2rem;
    }

    label {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }

    input {
      border: none;
      padding: 1rem ;
      border-radius: 25px;
    }

    button {
      padding: 1rem 2rem;
      border-radius: 25px;
      background-color: #fff;
      margin: 2rem 0 0rem 0;
      font-size: 1rem;
      color: #444;
      font-weight: bold;
      border: none;
      transition: 0.2s;
      cursor: pointer;
      opacity:80% ;
      &:hover{
        opacity:100% ;
      }
    }

    p {
      color: #fff;
      @media screen and (max-width: 900px) {
        font-size: 0.8rem;
      }
    }

    p a {
      font-weight: bold;
    }
`

export default function Login(){
    return (
        <>
        <SectionLogin>
            <h2>Faça seu login</h2>
            <p>Se ainda não possui uma conta, <a>Cadastre - se!</a></p>
            <form>
              <label>Email</label>
              <input placeholder='Digite seu email' />
              <label>Senha</label>
              <input placeholder='Digite sua senha' />
              <button>Entrar</button>
            </form>
          </SectionLogin>
        </>
    )
}