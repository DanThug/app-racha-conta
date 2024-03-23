import axios from 'axios'
import './ModalAddFriend.css'
import { useState } from 'react'
import { SyncLoader } from 'react-spinners'

const ModalAddFriend = ({ setFriendsList, modalAddFriend, setModalAddFriend }) => {
    const [loading, setLoading] = useState(false)
    const [msg, setMsg] = useState(null)
    const validValue = value => /([a-zA-Z])/.test(value) && value.length > 1
    const config = {
        headers: {
            "Custom-Header": "value"
        }
    }

    const handleCloseButton = () => {
        setModalAddFriend(m => !m)
        setMsg("")
    }

    const handleSubmitFriend = e => {
        e.preventDefault()

        const { newFriendName, file } = e.target.elements
        const isValidName = validValue(newFriendName.value)
        const selectedImage = file.files[0]
        
        if (isValidName) {
            const fd = new FormData()

            fd.append('file', selectedImage)
            setMsg("")
            setLoading(true)
            axios.post("https://httpbin.org/post", fd, config)
            .then(({ data }) => {
                const newFriend = {
                    id: crypto.randomUUID(),
                    name: newFriendName.value,
                    urlPic: selectedImage ? data.files.file : "friends/friend.jpg",
                    bill: 0
                }
                
                setModalAddFriend(prevState => !prevState)
                setFriendsList(prevState => [...prevState, newFriend])
            })
            .catch(err => setMsg("Falha ao adicionar amigo!"))
            .finally(() => setLoading(false))

            return
        }

        setMsg("Preencha os campos corretamente!")
    }

    return (
        modalAddFriend
        ? (
            <form action="" onSubmit={handleSubmitFriend} >
                <div className="modal-add-friend">
                    <div className="modal-add-friend-container">
                        <div>
                            <input className="input-add-name" type="text" name="newFriendName" placeholder="Preencha seu nome..." autoFocus />
                        </div>
                        <div>
                            <label htmlFor="input-add-file" className="input-add-label">Selecionar foto</label>
                            <input className="input-add-file" type="file" name="file" id="input-add-file" accept="image/x-png,image/jpeg" />
                        </div>
                        <div className="modal-add-friend-buttons">
                            <button className="add-button" title="Adicionar amigo">Adicionar</button>
                            <input onClick={() => handleCloseButton()} type="button" className="close-button" title="Fechar tela" value="X" />
                        </div>
                        { loading && <SyncLoader color={"white"} speedMultiplier={0.6} /> }
                        { msg && <span className="error-msg">{ msg }</span> }
                    </div>
                </div>
            </form>
        )
        : <></>
    )
}

export { ModalAddFriend }