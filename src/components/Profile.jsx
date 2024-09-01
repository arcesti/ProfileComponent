import style from '../styles/profile.module.css'
import Info from './Info'
import Botao from './Botao'

export default function Profile(props) {
    function onclick() {
        fetch('https://github.com/arcesti');
    }


    return (
        <div className={style.container}>
            <section className={style.perfil}>
                <img src={props.foto} alt="foto de perfil" />
                <h1 className={style.blocoTxt}>Arcesti Ricci</h1>
            </section>
            <section className={style.info}>
                <Info info="Full-stack javascript developer." />
                <Info info="+55(18)99667-0191" />
                <Info info="arcesti15@gmail.com" />
            </section>
            <section className={style.contBotao}>
                <Botao nome="GitHub" />
                <Botao nome="LinkedIn" />
                <Botao nome="Instagram" />
            </section>
        </div>
    )
}