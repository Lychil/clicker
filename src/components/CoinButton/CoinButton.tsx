import { CoinButtonimg } from "./styles";
import ruble from "../../images/svg/ruble.svg";
import { useActions } from "../../store/actions";

export default function CoinButton() {
    const { setCoins } = useActions();
    return (
        <CoinButtonimg onClick={() => setCoins()} src={ruble} />
    )
}
