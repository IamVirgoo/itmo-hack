import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import * as meta from '../devtools/meta'
import {useAppDispatch} from "../stores/appStore";
import {set_auth, set_user} from "../slices/user";

export default function Welcome() {

    const dispatch = useAppDispatch()

    /*useEffect(() => {
        // @ts-ignore
        fetch(meta.url, meta.options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => console.log(JSON.stringify(actualData['suggestions'][0].value)))
            .catch((err) => {
                console.log(err.message);
            });
    }, []);*/

    return <main className={'welcome-main'}>
        <section className={'welcome'}>
            <div className={'welcome--container'}>
                <h1 className={'welcome--container--title'}>Расскажите нам о себе</h1>
                <div className={'welcome--container--content'}>
                    <div className={'welcome--container--content--form'}>
                        <input className={'welcome--container--content--form__username'} type="text"
                               placeholder={'Username'}
                               onChange={(Event) => {dispatch(set_user(Event.target.value))}}
                        />
                        <Link to={'/'} className={'welcome--container--content--button'}
                              onClick={() => {
                                  dispatch(set_auth(true))
                              }}
                        >
                            Попробовать
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </main>
}