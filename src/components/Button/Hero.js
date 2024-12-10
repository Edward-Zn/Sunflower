function Hero() {
    const heroes = ['Aurora', 'Iris', 'Celeste', 'Dante', 'Martha'];
    const tableHeroes = heroes.map((item) => <tr><td>{item}</td></tr>);

    return (
        <table className='fancyTable'>
        <tr>
            <th>Heroes</th>
        </tr>
            {tableHeroes}
        </table>
    );
}

export default Hero;