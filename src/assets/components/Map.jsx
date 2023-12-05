import { If, Then, Else, When } from 'react-if';

// Read in from .env.local file and live, it comes from "Environment Variables"
const API_KEY = import.meta.env.VITE_API_KEY;

function Map(props) {
    return (
        <When condition={props.latitude && props.longitude}>
            <figure>
                <img src={`https://maps.locationiq.com/v3/staticmap?key=${API_KEY}&center=${props.latitude},${props.longitude}&size=400x300&format=png`} width="500" />
            </figure>
        </When>
    )
}

export default Map;