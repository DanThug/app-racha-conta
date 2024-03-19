import './FriendsList.css'

const Span = ({ bill }) => {
    if (bill < 0) {
       return <span className="debt">Você deve R$ {Math.abs(bill)} reais</span>
    }

    if (bill > 0) {
       return <span className="credit">Te deve R$ {bill} reais</span>
    }

    return <span className="even">Estão quites</span>
}

const FriendsList = ({ friendsList, handleSelectedFriend, setModalAddFriend }) => (
    <div className="friends-list">
        {friendsList.map(({ id, name, urlPic, bill, selected }) => (
            <div className={ selected ? "friend selected" : "friend" } key={id}>
                <img src={urlPic} alt="" />
                <div className="friend-text-container">
                    <h3>{name}</h3>
                    <Span bill={bill} />
                </div>
                <button
                    className={selected ? "selected-button" : "friend-select-button"}
                    onClick={() => handleSelectedFriend(id)}>
                    {selected ? "Fechar" : "Selecionar"}
                </button>
            </div>
        ))}
        <button className="friend-add-button" onClick={() => setModalAddFriend(m => !m)}>Adicionar amigo(a)</button>
    </div>
)

export { FriendsList }