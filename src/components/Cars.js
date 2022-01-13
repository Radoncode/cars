const Car = ({ nom, color, year }) => {

    const colorInfo = color ? (<p>couleur: { color } </p>) : (<p>Couleur: Néant </p>);

    if (nom) {
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>
                <p>marque: { nom }</p>
                <p>age: { year }</p>
                { colorInfo }
            </div>
        )
    } else {
        return  null;
    }
    
}

export default Car;