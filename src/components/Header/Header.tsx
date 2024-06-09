import { CountPeopleContainer, CountPeopleImg, CountPeopleP, HeaderContainer, Logo } from "./styles";
import peopleImg from "../../images/svg/people.svg";
import coinsImg from "../../images/svg/coins.svg";
import { useSelector } from "react-redux";
import { useActions } from "../../store/actions";
import { useEffect } from "react";

const UPDATE_COUNT = 2000;

export default function Header() {
    const coins = useSelector((state: any) => state.coinsReducer);
    const people = useSelector((state: any) => state.peopleReducer);
    const { setCoinsPassive } = useActions();

    useEffect(() => {
        const interval = setInterval(() => {
            setCoinsPassive();
        }, UPDATE_COUNT);

        return () => clearInterval(interval);
    }, [])

    return (
        <HeaderContainer>
            <Logo>Clicker</Logo>
            <CountPeopleContainer>
                <CountPeopleImg src={coinsImg} />
                <CountPeopleP>{coins.count}</CountPeopleP>
            </CountPeopleContainer>
            <CountPeopleContainer>
                <CountPeopleImg src={peopleImg} />
                <CountPeopleP>{people.count}</CountPeopleP>
            </CountPeopleContainer>
        </HeaderContainer>
    )
}
