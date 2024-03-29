import { FaMoneyCheckAlt } from 'react-icons/fa'
import { FaMoneyBillTransfer, FaMoneyCheck } from 'react-icons/fa6'
import './FriendBill.css'

const FriendBill = ({ selectedFriend, setFriendsList }) => {
    const handleSubmitPayment = e => {
        e.preventDefault()

        const { totalBill, mySpend, whoWillPay } = e.target.elements

        setFriendsList(friends =>
            friends.map(friend => selectedFriend.id === friend.id
                ? {
                ...friend,
                bill: whoWillPay.value === "you"
                ? friend.bill + (+totalBill.value - +mySpend.value)
                : friend.bill - mySpend.value
                } : friend
            ).map(friend => ({
                ...friend,
                selected: friend.selected = false
            }))
        )
    }

    return (
        <form className="form-friend-bill" onSubmit={handleSubmitPayment}>
            <div className="friend-bill">
                    <h2>Rache a conta com {selectedFriend.name}</h2>
                    <div>
                        <FaMoneyCheckAlt size={20} style={{ marginRight: "1rem" }} />
                        <span>Valor total</span>
                        <input type="number" name="totalBill" placeholder="60" autoFocus/>
                    </div>
                    <div>
                        <FaMoneyCheck size={20} style={{ marginRight: "1rem" }} />
                        <span>Seus gastos</span>
                        <input type="number" name="mySpend" placeholder="25"/>
                    </div>
                    <div>
                        <FaMoneyBillTransfer size={20} style={{ marginRight: "1rem" }} />
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