import { ShopCard, ShopCardButtonUp, ShopCardDescription, ShopCardImg, ShopCardImgContainer, ShopCardIndicators, ShopCardPrice, ShopCardPriceImg, ShopCardPriceItem, ShopCardPriceText, ShopCardText } from "../styles";
import { IncomeSliceProps } from "../../../store/reducers/incomeSlice";
import { useActions } from "../../../store/actions";
import populationImg from "../../../images/svg/people.svg";
import coinsImg from "../../../images/svg/coins.svg";
import { useSelector } from "react-redux";

interface ShopCardsItemProps {
    elem: IncomeSliceProps
}

export default function IncomeShopCardsItem({ elem }: ShopCardsItemProps) {
    const { upPassive, setLevelUpIncome } = useActions();
    const coins = useSelector((state: any) => state.coinsReducer);
    const people = useSelector((state: any) => state.peopleReducer);
    const hangleUpLevel = () => {
        if (elem.coins <= coins.count && elem.people <= people.count) {
            upPassive({ passive: elem.up, count: elem.coins })
            setLevelUpIncome({ id: elem.id, up: elem.up })
        }
    }

    const isUp = () => {
        if (elem.coins <= coins.count && elem.people <= people.count) {
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
                    <ShopCardText>Доход: {elem.income}</ShopCardText>
                    <ShopCardText>След. ур.: +{elem.up}</ShopCardText>
                </ShopCardIndicators>
                <ShopCardButtonUp onClick={hangleUpLevel}>{isUp()}</ShopCardButtonUp>
                <ShopCardPrice>
                    <ShopCardPriceItem>
                        <ShopCardPriceImg src={coinsImg} />
                        <ShopCardPriceText style={{ color: coins.count < elem.coins ? 'red' : 'black' }}>{elem.coins}</ShopCardPriceText>
                    </ShopCardPriceItem>
                    <ShopCardPriceItem>
                        <ShopCardPriceImg src={populationImg} />
                        <ShopCardPriceText style={{ color: people.count < elem.people ? 'red' : 'black' }}>{elem.people}</ShopCardPriceText>
                    </ShopCardPriceItem>
                </ShopCardPrice>
            </ShopCardDescription>
        </ShopCard>
    )
}
