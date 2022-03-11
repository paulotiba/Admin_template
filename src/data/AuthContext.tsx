import  route from 'next/router'
import firebase from "../firebase/config";
import Cookies from 'js-cookie'
import { createContext, useEffect, useState } from "react";
import Usuario from "../model/Usuario";

interface AuthContextProps {
  usuario?: Usuario;
  carregando?: boolean;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({});

async function usuarioNormalizado(
  usuarioFirebase: firebase.User
): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken();

  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0].providerId,
    imageUrl: usuarioFirebase.photoURL,
  };
}

function gerenciarCookie(logado: boolean) {
  if(logado) {
    Cookies.set('admin-template-netz-auth', logado, {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-netz-auth')
  }

}

export function AuthProvider(props) {
  const [carregando, setCarregando] = useState(true)
  const [usuario, setUsuario] = useState<Usuario>(null);

    async function configurarSessao(usuarioFirebase) {
    if(usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase)
      setUsuario(usuario)
        gerenciarCookie(true)
        setCarregando(false)
        return usuario.email
    } else {
      setUsuario(null)
        gerenciarCookie(false)
        setCarregando(false)
        return false
    }
  }

  async function loginGoogle() {
   try {
     setCarregando(true)
    const resp = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
  )
 configurarSessao(resp.user)
 route.push('/')

   } finally {
     setCarregando(false)


   }

  }

  async function logout() {
   try {
    setCarregando(true)
    await firebase.auth().signOut()
    await configurarSessao(null)

   } finally {
     setCarregando(false)

   }
  }

  useEffect(() => {
    if(Cookies.get('admin-template-netz-auth')) {
      const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
      return () => cancelar()
    } else {
      setCarregando(false)
    }

  },[])

  return (
    <AuthContext.Provider
      value={{
        usuario,
        carregando,
        loginGoogle,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
