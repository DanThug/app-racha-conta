const FriendBill = ({ selectedFriend }) => {
    return (
        <div className="friend-bill">
            <h2>Rache a conta com {selectedFriend.name}</h2>
            <div>
                <span>Valor total</span>
                <input type="number" name="" id="" />
            </div>
            <div>
                <span>Seus gastos</span>
                <input type="number" name="" id="" />
            </div>
            <div>
                <span>Quem Vai pagar?</span>
                <select name="" id="">
                    <option value="Você">Você</option>
                    <option value="Antonio">{selectedFriend.name}</option>
                </select>
            </div>
            <button className="split-bill-button">Rachar conta</button>
        </div>
    )
}

export { FriendBill }