import React from "react";
interface PropsState {
    props: {
        created: string,
        episode: any[],
        gender: string,
        id: number,
        image: string,
        location: {
            name: string,
            url: string
        },
        name: string,
        origin: object,
        species: string,
        status: string,
        type: string,
        url: string,
    }
}
const TypeElem: PropsState = {
    props: {
        created: '',
        episode: [],
        gender: '',
        id: 0,
        image: '',
        location: {name: '', url: ''},
        name: '',
        origin: {},
        species: '',
        status: '',
        type: '',
        url: '',
    }
    
}

const CardForCharacter: React.FC<typeof TypeElem> = (props: PropsState) => {
    return(
        <div className="placeOfCards">
            <div className="cards">
                <img src={props.props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.props.name}</h5>
                    <p className="pFlex">
                        <p className="pChart"/>{props.props.status === 'Dead' ? <p className="pDead"/> : props.props.status === 'Alive' ? <p className="pAlive"/> : <p className="pUnknown"/>} {props.props.status} - {props.props.species}</p>
                    <p className="card-text">Last known location:<p className="pLocation">{props.props.location.name}</p></p>
                </div>
            </div>
        </div>
    )
}

export default CardForCharacter; 