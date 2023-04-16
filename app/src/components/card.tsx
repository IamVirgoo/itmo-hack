import { Link } from "react-router-dom";
import { CircularProgressbar, CircularProgressbarWithChildren } from "react-circular-progressbar";

import 'react-circular-progressbar/dist/styles.css';

import restart from '../assets/restart.svg'
import done from '../assets/done.svg'

export default function Card(props : any) {
    return <>
        { props.type == "main"
            ? <>
                <div className={'main-card'}>
                    <div className={'main-card--state-wrapper'}>
                        <CircularProgressbarWithChildren
                            value={props.number_value}
                            maxValue={1}
                            styles={{
                                root : {},
                                path: {
                                    stroke : 'rgba(36, 195, 142, 1)'
                                },
                            }}
                        >
                            <p className={'main-card--state-wrapper--bar-text'}>
                                {props.number_value * 10} / 10 <br/> <span>заданий</span>
                            </p>
                        </CircularProgressbarWithChildren>
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
            : <>
                <div className={'card'}>
                    <div className={'card--content'}>
                        <div className={'card--content--heading'}>
                            <p className={'card--content--heading--title'}>{props.title || "Начало работы"}</p>
                            <p className={'card--content--heading--info'}>{props.info || "Для новичка * Основы работы"}</p>
                            <p className={'card--content--heading--description'}>{props.description || "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете"}</p>
                        </div>
                        { props.cardProgressType == "not started"
                            ? <div className={'card--content--buttons'}>
                                <Link to={''} className={'card--content--buttons--main-button'}>Начать</Link>
                                <div className={'card--content--buttons--state'}>
                                    <p><span>{props.number_value || 10}</span> заданий</p>
                                </div>
                            </div>
                            : <>
                                { props.cardProgressType == "done"
                                    ? <div className={'card--content--buttons'}>
                                        <Link to={''} className={'card--content--buttons--main-button__done'}>
                                            <img src={restart} alt=""/>
                                            <p>Пройти заново</p>
                                        </Link>
                                        <img src={done} alt=""/>
                                    </div>
                                    : <>
                                        { props.cardProgressType == "started"
                                            ? <div className={'card--content--buttons'}>
                                                <Link to={''} className={'card--content--buttons--main-button'}>{props.mainButton || "Продолжить тему"}</Link>
                                                <div className={'card--content--buttons--state'}>
                                                    <p><span>{props.number_value * 10 } / 10</span> заданий</p>
                                                    <div className={'card--content--buttons--state--bar'}>
                                                        <CircularProgressbar
                                                            value={props.number_value}
                                                            maxValue={1}
                                                            text={``}
                                                            styles={{
                                                                root: {},
                                                                path: {
                                                                    stroke : 'rgba(36, 195, 142, 1)'
                                                                },
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            : <></>
                                        }
                                    </>
                                }
                            </>
                        }
                    </div>
                </div>
            </>
        }
    </>
}
