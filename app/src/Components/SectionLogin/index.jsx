import SectionLogin from './style';

export default function Login(){
    return (
        <>
        <SectionLogin>
            <h2>Faça seu login</h2>
            <p>Se ainda não possui uma conta, <a>Cadastre - se!</a></p>
            <form action='#'>
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