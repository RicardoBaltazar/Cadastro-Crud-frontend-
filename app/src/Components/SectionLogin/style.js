import styled from 'styled-components';

const SectionLogin = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: var(--primary-color);
    color: #fff;
    form {
      display: flex;
      flex-direction: column;
      width: 25vw;
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

export default SectionLogin;