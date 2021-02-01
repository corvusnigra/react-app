const GamePage = ({onChangePage}) => {
    const handleClick = () => {
        onChangePage && onChangePage('app')
    };
    return (
        <div>
            This is our game
            <button onClick={handleClick}>
                go to home page
            </button>
        </div>
    )
};

export default GamePage
