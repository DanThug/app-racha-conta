import './FriendBill.css'

const FriendBill = ({ selectedFriend, setSelectedFriend, setFriendsList }) => {
    const handleSubmitPayment = e => {
        e.preventDefault()

        const { totalBill, mySpend, whoWillPay } = e.target.elements

        setFriendsList(friends => {
            const friendsArr = friends.map(friend => selectedFriend.id === friend.id
                ? {
                ...friend,
                bill: whoWillPay.value === "you"
                ? friend.bill + (+totalBill.value -  +mySpend.value)
                : friend.bill - mySpend.value
                } : friend
            )

            return friendsArr.map(friend => ({
                ...friend,
                selected: friend.selected = false
            }))
        })
    }

    return (
        <form className="form-friend-bill" onSubmit={handleSubmitPayment}>
            <div className="friend-bill">
                    <h2>Rache a conta com {selectedFriend.name}</h2>
                    <div>
                        <span>Valor total</span>
                        <input type="number" name="totalBill" placeholder="60"/>
                    </div>
                    <div>
                        <span>Seus gastos</span>
                        <input type="number" name="mySpend" placeholder="25"/>
                    </div>
                    <div>
                        <span>Quem Vai pagar?</span>
                        <select name="whoWillPay" id="">
                            <option value="you">Você</option>
                            <option value={selectedFriend.name}>{selectedFriend.name}</option>
                        </select>
                    </div>
                    <button className="split-bill-button">Rachar conta</button>
            </div>
        </form>
    )
}

export { FriendBill }