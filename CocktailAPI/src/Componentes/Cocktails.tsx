import react, {FC, useEffect, useState} from 'react';
import styled from "@emotion/styled";
import "./Styles/Componentes.css";
import { inputList, cocktailApi, cocktailApiList } from './Types/Types';

const Cocktail: FC<inputList> = ({setList}) => {

    const [info, setInfo] = useState<cocktailApi | undefined>(undefined);

    useEffect(() => {
        setInfo(undefined);
    }, [setList]);

    return(
        <div className = "ContainerList">
            {info === undefined && 
                <List>
                    {setList.drinks.map((cocktail) => {
                        return(
                            <a onClick={() => setInfo(cocktail)}>
                            <CocktailInfo>
                                <img src = {cocktail.strDrinkThumb} height="120px" width="-webkit-fill-available"/>
                                <p>{cocktail.strDrink}</p>
                            </CocktailInfo>
                            </a>
                        )
                    })}
                </List>
            }

            {info !== undefined && 
                <CocktailInfo>
                    <Info>
                        {setList.drinks.indexOf(info as cocktailApi) !== 0 && 
                        <a className = "btn1" href= "javascript:;" onClick={() => setInfo(setList.drinks[setList.drinks.indexOf(info as cocktailApi) - 1])}>
                            <img src = {require("./Img/arrow-down.png")} height="30px" width="30px"/> 
                        </a>}

                        <Foto>
                            <img className = "imgCoctail" src = {(info as cocktailApi).strDrinkThumb} height = "50%" width = "50%"/>
                            <p>{info.strDrink}</p>
                            <p>{info.strTags}</p>
                            <p>{info.strCategory}</p>
                        </Foto>

                        <Ingredients>
                            {(info as cocktailApi).strIngredient1 !== null && 
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient1}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient1}</p>
                                <p>{(info as cocktailApi).strMeasure1}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient2 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient2}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient2}</p>
                                <p>{(info as cocktailApi).strMeasure2}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient3 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient3}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient3}</p>
                                <p>{(info as cocktailApi).strMeasure3}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient4 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient4}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient4}</p>
                                <p>{(info as cocktailApi).strMeasure4}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient5 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient5}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient5}</p>
                                <p>{(info as cocktailApi).strMeasure5}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient6 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient6}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient6}</p>
                                <p>{(info as cocktailApi).strMeasure6}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient7 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient7}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient7}</p>
                                <p>{(info as cocktailApi).strMeasure7}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient8 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient8}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient8}</p>
                                <p>{(info as cocktailApi).strMeasure8}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient9 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient9}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient9}</p>
                                <p>{(info as cocktailApi).strMeasure9}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient10 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient10}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient10}</p>
                                <p>{(info as cocktailApi).strMeasure10}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient11 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient11}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient11}</p>
                                <p>{(info as cocktailApi).strMeasure11}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient12 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient12}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient12}</p>
                                <p>{(info as cocktailApi).strMeasure12}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient13 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient13}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient13}</p>
                                <p>{(info as cocktailApi).strMeasure13}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient14 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient14}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient14}</p>
                                <p>{(info as cocktailApi).strMeasure14}</p>
                            </div>}

                            {(info as cocktailApi).strIngredient15 !== null &&
                            <div>
                                <img src = {`https://www.thecocktaildb.com/images/ingredients/${(info as cocktailApi).strIngredient15}-Medium.png`} width="180px" height="180px" />
                                <p>{(info as cocktailApi).strIngredient15}</p>
                                <p>{(info as cocktailApi).strMeasure15}</p>
                            </div>}
                        </Ingredients>

                        {setList.drinks.indexOf(info as cocktailApi) !== setList.drinks.length - 1 && 
                        <a className = "btn2" href = "javascript:;" onClick = {() => setInfo(setList.drinks[setList.drinks.indexOf(info as cocktailApi) + 1])}>
                            <img src = {require("./Img/arrow-down.png")} height="30px" width="30px"/> 
                        </a>
                        }
                    </Info>
                </CocktailInfo> 
            }
        </div>
    )

}

export default Cocktail;

const List = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

const CocktailInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px;
    -webkit-box-pack: center;
    justify-content: center;
    align-items: center;
`;

const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    
`

const Foto = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Ingredients = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`