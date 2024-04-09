import Count from './Count';
import CountButtons from './CountButtons';
import Reset from './Reset';
import Title from './Title';

function Card() {
    return (
        <>
            <div className='rounded-t-lg bg-lime-500 flex flex-col justify-center items-center'>
                <Title />
                <Count />
                <Reset />
            </div>
            <div>
                <CountButtons />
            </div>
        </>
    )
}

export default  Card