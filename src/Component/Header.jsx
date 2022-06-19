import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="heading">
        <KeyboardBackspaceIcon />
        <p>Sell & Withdraw</p>
      </div>
      <div className="btn-section">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Sell Crypto Request
        </button>
        <button
          onClick={() => {
            navigate("/withdraw");
          }}
        >
          Withdraw Cash
        </button>
      </div>
    </div>
  );
}

export default Header;
