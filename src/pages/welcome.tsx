import { Link } from "react-router-dom";

import {useState} from "react";

export default function Welcome() {
    const [username, setUsername] = useState<string | null>(null)

    return <main className={'welcome-main'}>
        <section className={'welcome'}>
            <div className={'welcome--container'}>
                <h1 className={'welcome--container--title'}>Расскажите нам о себе</h1>
                <div className={'welcome--container--content'}>
                    <div className={'welcome--container--content--form'}>
                        <input className={'welcome--container--content--form__username'} type="text"
                               placeholder={'Username'}
                               onChange={(Event) => {setUsername(Event.target.value)}}
                        />
                    </div>
                    <Link to={'/'} className={'welcome--container--content--button'}
                        onClick={() => {
                            localStorage.setItem("authenticated", "true");
                            if (typeof username === "string") {
                                localStorage.setItem("username", username);
                            }
                        }}
                    >
                        Попробовать
                    </Link>
                </div>
            </div>
        </section>
    </main>
}