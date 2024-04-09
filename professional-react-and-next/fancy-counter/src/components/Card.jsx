import Count from './Count';
import CountButtons from './CountButtons';
import Reset from './Reset';
import Title from './Title';

function Card() {
    return (
        <div>
            <Count />
            <CountButtons />
            <Reset />
            <Title />
        </div>
    )
}

export default  Card