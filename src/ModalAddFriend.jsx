import './ModalAddFriend.css'

const ModalAddFriend = ({ setfriendsList, modalAddFriend, setModalAddFriend }) => {
    const validValue = value => /([a-zA-Z])/.test(value) && value.length > 1

    const handleSubmitFriend = e => {
        e.preventDefault()

        const { newFriendName, urlPic } = e.target.elements
        const isValidValue = validValue(newFriendName.value)

        if (isValidValue) {
            const newFriend = {
                id: crypto.randomUUID(),
                name: newFriendName.value,
                urlPic: urlPic.value,
                bill: "0"
            }
            setfriendsList(f => [...f, newFriend])
            setModalAddFriend(m => !m) 
        }
    }

    return (
        modalAddFriend
        ? (
            <form action="" onSubmit={handleSubmitFriend} >
                <div className="modal-add-friend">
                    <div className="modal-add-friend-container">
                        <div>
                            <span>Nome</span>
                            <input type="text" name="newFriendName" autoFocus />
                        </div>
                        <div>
                            <span>Foto</span>
                            <input type="text" name="urlPic" />
                        </div>
                        <div className="modal-add-friend-buttons">
                            <button className="add-button" title="Adicionar amigo">Adicionar</button>
                            <input onClick={() => setModalAddFriend(m => !m)} type="button" className="close-button" title="Fechar tela" value="X" />
                        </div>
                    </div>
                </div>
            </form>
        )
        : <></>
    )
}

export { ModalAddFriend }