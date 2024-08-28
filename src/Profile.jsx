import style from './styles/profile.module.css'
import Info from './Info'
import Botao from './Botao'

export default function Profile(props) {
    return (
        <div className={style.container}>
            <img src={props.foto} alt="foto de perfil" />
            <h1>Arcesti Ricci</h1>
            <Info info="Full-stack javascript developer."/>
            <Info info="+55(18)99667-0191"/>
            <Info info="arcesti15@gmail.com"/>
            <Botao nome="GitHub"/>
            <Botao nome="LinkedIn"/>
            <Botao nome="Instagram"/>
        </div>
    )
}