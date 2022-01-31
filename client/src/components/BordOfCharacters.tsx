import React, { useEffect } from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CardForCharacter from "./CardForCharacter";



const BordOfCharacters: React.FC = () => {
    const {page, error, loading, characters} = useTypedSelector(state => state.characters)
    const {fetchCharacters, setCharactersPage} = useActions()
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
    useEffect(() => {
        fetchCharacters(page)
    }, [page])
    if(loading) {
        return(
            <div>
                <div className="ImgDiv">
                    <img src="https://img2.goodfon.ru/wallpaper/nbig/b/50/rik-i-morti-multik-rick-and.jpg" alt="" style={{width: '100%', height: '100%'}} />
                </div>
                <h1 style={{color: 'rgb(26, 255, 0)'}}>Download in progress...</h1>
            </div>
        )
    }
    if(error) {
        return <h1>{error}</h1>
    }
    return(
        <div>
            <div className="ImgDiv" >
            <img src="https://img2.goodfon.ru/wallpaper/nbig/b/50/rik-i-morti-multik-rick-and.jpg" alt="" style={{width: '100%', height: '100%'}} />
            </div>
            <div className="Bord">
                {characters.map(elem => <CardForCharacter key={elem.id} props={elem}/>)}
            </div>
            <div className="pagination">
                {pages.map(p => 
                <div 
                    onClick={() => setCharactersPage(p)}
                    style={{border: p === page ? '2px solid rgb(26, 255, 0)' : '2px solid gray', width: 30}}
                >
                    {p}
                </div>)}  
            </div>
        </div>
    )
}

export default BordOfCharacters;