import { useState } from "react"

function App() {
  const [name, setName] = useState("Fatih")
  const [age, setAge] = useState(22)
  const [friends, setFriends] = useState(["Ali", "Veli"])
  const [address, setAddress] = useState({ title: "Istanbul", zip: 34000 })

  return (
    <>
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ali")}>Change Name</button>
      <button onClick={() => setAge(23)}>Change Age</button>

      <hr />

      <h2>Friends</h2>
      {friends.map((friend, key) => (
        <div key={key}> {friend} </div>
      ))}
      <br />
      <button onClick={() => setFriends([...friends, "Cuma"])}>
        Add new Friend
      </button>

      <hr />

      <h2>Address</h2>
      <div>
        {address.title} {address.zip}
      </div>
      <br />
      <button
        onClick={() => setAddress({ ...address, title: "Ankara", zip: 6000 })}
      >
        Change The Address
      </button>
    </>
  )
}

export default App
