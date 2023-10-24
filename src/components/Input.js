import {useState} from 'react'
export default function Input({pass}){
    const [value, setValue] = useState("")
    function onchange(event){
        setValue(event.target.value)
    }
    function submit(event){
        event.preventDefault()
        pass(value)
    }
    return(
        <form>
            <input value={value} onChange={onchange}/>
            <button onClick={submit}>Wyślij</button>
        </form>
    )
}