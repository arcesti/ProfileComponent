import style from './styles/botao.module.css'

export default function Botao(props) {
    return (
        <>
            <button className={style.botao}>{props.nome}</button>
        </>
    )
}