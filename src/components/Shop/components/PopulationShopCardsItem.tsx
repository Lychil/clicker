import { ShopCard, ShopCardButtonUp, ShopCardDescription, ShopCardImg, ShopCardImgContainer, ShopCardIndicators, ShopCardPrice, ShopCardPriceImg, ShopCardPriceText, ShopCardText } from "../styles";
import { useActions } from "../../../store/actions";
import coinsImg from "../../../images/svg/coins.svg";
import { PopulationSliceProps } from "../../../store/reducers/populationSlice";
import { useSelector } from "react-redux";

interface ShopCardsItemProps {
    elem: PopulationSliceProps
}

export default function PopulationShopCardsItem({ elem }: ShopCardsItemProps) {
    const coins = useSelector((state: any) => state.coinsReducer);
    const { upPassive, setPeople, setLevelUpPopulation } = useActions();
    const hangleUpLevel = () => {
        if (elem.price <= coins.count) {
            upPassive({ count: elem.price, passive: 0 });
            setPeople({count: elem.up});
            setLevelUpPopulation({ id: elem.id, up: elem.up });
        }
    }

    const isUp = () => {
        if (elem.price <= coins.count) {
            return 'Улучшить';
        } else {
            return 'Недостаточно ресурсов';
        }
    }
    return (
        <ShopCard>
            <ShopCardImgContainer>
                <ShopCardImg src={elem.icon} />
            </ShopCardImgContainer>
            <ShopCardDescription>
                <ShopCardIndicators>
                    <ShopCardText>{elem.title}</ShopCardText>
                    <ShopCardText>ур.{elem.level}</ShopCardText>
                    <ShopCardText>Люди: {elem.people}</ShopCardText>
                    <ShopCardText>След. ур.: +{elem.up}</ShopCardText>
                </ShopCardIndicators>
                <ShopCardButtonUp onClick={hangleUpLevel}>{isUp()}</ShopCardButtonUp>
                <ShopCardPrice>
                    <ShopCardPriceImg src={coinsImg} />
                    <ShopCardPriceText>{elem.price}</ShopCardPriceText>
                </ShopCardPrice>
            </ShopCardDescription>
        </ShopCard>
    )
}
