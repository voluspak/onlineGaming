import Input from "./Input";

const Formulario = () => {
    const login = () => {
        alert("Iniciaste sesion")
    }
  return (
    <div>
    <form>
        <Input placeholder="Ingresa tu nombre"/>
        <Input placeholder="Ingresa tu password"/>
        <button onClick={login}>Login</button>
    </form>
    </div>
  )
}

export default Formulario