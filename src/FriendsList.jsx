const FriendsList = ({ friendsList, handleSelectedFriend, setModalAddFriend }) => {
    return (
        <div className="friends-list">
            {friendsList.map(({ id, name, urlPic, bill, selected }) => (
                <div className={ selected ? "friend selected" : "friend" } key={id}>
                    <img src={urlPic} alt="" />
                    <div className="friend-text-container">
                    <h3>{name}</h3>
                    <span>Você deve {bill} reais</span>
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
}

export { FriendsList }