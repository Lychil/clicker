import { useSelector } from "react-redux";
import { ShopCloseButton, ShopContainer } from "./styles";
import closeImg from "../../images/svg/close.svg";
import PopulationShopCardsItem from "./components/PopulationShopCardsItem";
import { PopulationSliceProps } from "../../store/reducers/populationSlice";

interface ShopProps {
    setIsPopulationShop: (f: boolean) => void
}

export default function PopulationShop({setIsPopulationShop}: ShopProps) {
    const population = useSelector((state: any) => state.populationReducer);
    return (
        <ShopContainer>
            <ShopCloseButton onClick={() => setIsPopulationShop(false)} src={closeImg} />
            {population.map((elem: PopulationSliceProps) => <PopulationShopCardsItem key={elem.id} elem={elem} />)}
        </ShopContainer>
    )
}
