import { useContext, useState } from "react"
import { AppContext } from "../context/app_context";

export default function Login() {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const {logged, userData} = useContext(AppContext)

    function submitLogin(e: any) {
        console.log(e);

        e.preventDefault();
        if(user === 'user' && pass === '1234') {

        }
    }

    return (
        <div>
            <form onSubmit={submitLogin}>
                <fieldset>
                    <legend>login</legend>
                    <label>
                        user:
                        <input 
                            type="text" 
                            value={user}
                            onChange={(e) => setUser(e.target.value)} />
                    </label>
                    <label>
                        pass:
                        <input 
                            type="password" 
                            value={pass}
                            onChange={(e) => setPass(e.target.value)} />
                    </label>

                    <input type="submit" value="login" />
                </fieldset>
            </form>
        </div>
    )
}