import { Link } from "react-router-dom";
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Card(props : any) {
    return <>
        { props.type == "main"
            ? <>
                <div className={'main-card'}>
                    <div className={'main-card--state-wrapper'}>
                        <CircularProgressbar
                            value={props.value || 0.8}
                            maxValue={1}
                            text={`${props.value * 10 || 8} / 10`}
                            styles={{
                                root: {},
                                path: {
                                    stroke : 'rgba(36, 195, 142, 1)'
                                },
                                text: {
                                    fill : 'rgba(0, 32, 51, 1)',
                                    fontSize : '24px'
                                }
                            }}
                        />
                    </div>
                    <div className={'main-card--content'}>
                        <div className={'main-card--content--heading'}>
                            <p className={'main-card--content--heading--title'}>{props.title || "Начало работы"}</p>
                            <p className={'main-card--content--heading--info'}>{props.info || "Для новичка * Основы работы"}</p>
                            <p className={'main-card--content--heading--description'}>{props.description || "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"}</p>
                        </div>
                        <div className={'main-card--content--buttons'}>
                            <Link to={''} className={'main-card--content--buttons--main-button'}>{props.mainButton || "Продолжить тему"}</Link>
                            <div className={'main-card--content--buttons--state'}></div>
                        </div>
                    </div>
                </div>
            </>
            : <></>
        }
    </>
}