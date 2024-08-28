import style from './styles/profile.module.css'

export default function Info(props) {
    return (
        <div className={style.risco}>
            <p>
                {props.info}
            </p>
        </div>
    )
}