import { useDispatch } from "react-redux";
import { deposit, useBalance, withdraw } from "../redux/balanceSlice";
import { useState } from "react";

export default function Balance() {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const currentBalance = useBalance();

  const handleDeposit = () => dispatch(deposit(value));

  const handleWithdraw = () => dispatch(withdraw(value));

  return (
    <div>
      <p>Balance: {currentBalance} credits</p>
      <input
        type="number"
        value={value}
        onChange={e => setValue(Number(e.target.value))}
      />
      <button onClick={handleDeposit}>Deposit credits</button>
      <button onClick={handleWithdraw}>Withdraw credits</button>
    </div>
  );
}
