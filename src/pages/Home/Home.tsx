import { useState } from "react";
import CoinButton from "../../components/CoinButton/CoinButton";
import OpenShopButton from "../../components/OpenShopButton/OpenShopButton";
import { ContainerCoinButton, HomeContainer } from "./styles";
import PopulationShop from "../../components/Shop/PopulationShop";
import IncomeShop from "../../components/Shop/IncomeShop";

export default function Home() {
    const [isIncomeShop, setIsIncomeShop] = useState(false);
    const [isPopulationShop, setIsPopulationShop] = useState(false);
    return (
        <HomeContainer >
            <OpenShopButton setIsIncomeShop={setIsIncomeShop} setIsPopulationShop={setIsPopulationShop} />
            <ContainerCoinButton>
                <CoinButton />
            </ContainerCoinButton>
            {isPopulationShop && <PopulationShop setIsPopulationShop={setIsPopulationShop} />}
            {isIncomeShop && <IncomeShop setIsIncomeShop={setIsIncomeShop}/>}
        </HomeContainer>
    )
}
