import { useState } from 'react'
import './app.css'
import { ModalAddFriend } from './ModalAddFriend'
import { FriendsList } from './FriendsList'
import { FriendBill } from './FriendBill'

const friends = [
  {
    id: crypto.randomUUID(),
    name: "Henrique",
    urlPic: "friends/henrique.jpg",
    bill: "7",
    selected: false
  },
  {
    id: crypto.randomUUID(),
    name: "Renata",
    urlPic: "friends/renata.jpg",
    bill: "20",
    selected: false
  },
  {
    id: crypto.randomUUID(),
    name: "Antonio",
    urlPic: "friends/antonio.jpg",
    bill: "0",
    selected: false
  }
]

const App = () => {
  const [friendsList, setfriendsList] = useState(friends)
  const [selectedFriend, setSelectedFriend] = useState({})
  const [modalAddFriend, setModalAddFriend] = useState(false)

  const handleSelectedFriend = id => {
    setfriendsList(f => f.map(obj => obj.id === id ? {...obj, selected: !obj.selected} : {...obj, selected: false}))
    setSelectedFriend(() => friendsList.find(obj => obj.id === id))
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <img src="logo-racha-conta.png" alt="logo-racha-conta" />
      </header>
      <main className="app-main">
        <ModalAddFriend
          setfriendsList={setfriendsList}
          modalAddFriend={modalAddFriend}
          setModalAddFriend={setModalAddFriend}
        />
        {
          friendsList.length > 0
          ? <FriendsList
              friendsList={friendsList}
              handleSelectedFriend={handleSelectedFriend}
              setModalAddFriend={setModalAddFriend}
            />
          : (
            <div className="empty-friends-list">
              <img className="friend-icon" src="friends.png" alt="friends icon" />
              <button onClick={() => setModalAddFriend(m => !m)}>Adicionar amigo(a)</button>
            </div>
          )
        }
        {
          friendsList.find(({ selected }) => selected)
          ? <FriendBill selectedFriend={selectedFriend} />
          : (
            <div className="empty-friend-bill">
              <img className="empty-icon" src="empty.png" alt="empty icon" />
              <h2>Tudo certo aqui!</h2>
            </div>
          )
        }
      </main>
    </div>
  )
}
  export { App }