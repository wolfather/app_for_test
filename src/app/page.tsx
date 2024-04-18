'use client' 
import { redirect } from "next/navigation";
import { AppContext, AppContextProvider } from "./context/app_context";
import { useContext, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [login, setLogin] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const [loginErrorVisible, setLoginErrorVisible] = useState(false)
  const [passErrorVisible, setPassErrorVisible] = useState(false)

  const { userData, logged, setLogged, setUserData } = useContext(AppContext)

  function onSubmitHandler(e: any) {
    e.preventDefault()

    if(login === 'admin' && pass === '123') {
      console.log({login, pass}, 'success')
      setLogged(true);
      setUserData({
        name: 'John Doe',
        age: 25,
        sex: 'male',
      })
      setLoginErrorVisible(false)
      setPassErrorVisible(false)
      redirect('/home')
    } else {
      setLoginErrorVisible(true)
      setPassErrorVisible(true)
    }
    
    if(logged) {
      setLoginErrorVisible(false)
      setPassErrorVisible(false)
      redirect('/home')
    }
  }

  return (
    <AppContextProvider>
      <div>
        <Link href='blog/1'>ir para o artigo 1 do blog</Link>
        
        <form onSubmit={onSubmitHandler}>
          <fieldset>
            <legend>login</legend>
            <div>
              <label>
                <input id="inputLogin"
                  className={`text-black border-2`}
                  style={{borderColor: loginErrorVisible ? 'red' : ''}}
                  type="text" 
                  value={login} 
                  onChange={e => setLogin(e.target.value)} />
              </label>
              {
                loginErrorVisible && 
                <p id="loginErrorMessage">Campo de login é inválido</p>
              }
            </div>

            <div>
              <label>
                <input id="inputPass"
                  className="text-black"
                  type="password" 
                  value={pass} 
                  onChange={e => setPass(e.target.value)} />
              </label>
              {
                passErrorVisible &&
                <p id="passErrorMessage">Campo de senha é inválido</p>
              }
            </div>

            <div>
              <button id="buttonSubmit" type="submit">Login</button>
            </div>
          </fieldset>
        </form>
      </div>
    </AppContextProvider>
  );
}
