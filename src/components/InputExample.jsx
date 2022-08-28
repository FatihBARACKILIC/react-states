import { useState } from "react"

function InputExample() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")

  const [form, setForm] = useState({ name: "", surname: "" })

  const onChangeName = (e) => setName(e.target.value)
  const onChangeSurname = (e) => setSurname(e.target.value)

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <label htmlFor="name">Please enter a name</label>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        // value={name}
        // onChange={onChangeName}
        value={form.name}
        onChange={onChangeInput}
      />
      <br />
      <label htmlFor="surname">Please enter a surname</label>
      <br />
      <input
        type="text"
        name="surname"
        id="surname"
        // value={surname}
        // onChange={onChangeSurname}
        value={form.surname}
        onChange={onChangeInput}
      />
      <br />
      {form.name} {form.surname}
    </>
  )
}

export default InputExample
