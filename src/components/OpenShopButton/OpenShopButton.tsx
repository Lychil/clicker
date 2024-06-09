import { OpenShopButtonImg, OpenShopButtons } from "./styles";
import upPassiveImg from "../../images/svg/up-passive.svg";
import peopleImg from "../../images/svg/people.svg";

interface OpenShopButtonProps {
    setIsIncomeShop: (f: boolean) => void,
    setIsPopulationShop: (f: boolean) => void,
}

export default function OpenShopButton({ setIsIncomeShop, setIsPopulationShop }: OpenShopButtonProps) {
    return (
        <OpenShopButtons>
            <OpenShopButtonImg src={upPassiveImg} onClick={() => setIsIncomeShop(true)} />
            <OpenShopButtonImg src={peopleImg} onClick={() => setIsPopulationShop(true)} />
        </OpenShopButtons>
    )
}
