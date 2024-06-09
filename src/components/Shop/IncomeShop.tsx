import { useSelector } from "react-redux";
import { ShopCloseButton, ShopContainer } from "./styles";
import { IncomeSliceProps } from "../../store/reducers/incomeSlice";
import IncomeShopCardsItem from "./components/IncomeShopCardsItem";
import closeImg from "../../images/svg/close.svg";

interface ShopProps {
    setIsIncomeShop: (f: boolean) => void
}

export default function IncomeShop({setIsIncomeShop}: ShopProps) {
    const income = useSelector((state: any) => state.incomeReducer);
    return (
        <ShopContainer>
            <ShopCloseButton onClick={() => setIsIncomeShop(false)} src={closeImg}/>
            {income.map((elem: IncomeSliceProps) => <IncomeShopCardsItem key={elem.id} elem={elem}/>)}
        </ShopContainer>
    )
}
