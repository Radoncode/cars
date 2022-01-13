const Car = ({ children, color }) => {

    const colorInfo = color ? (<p>couleur: { color } </p>) : (<p>Couleur: Néant </p>);

    if (children) {
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>
                <p>marque: { children }</p>
                { colorInfo }
            </div>
        )
    } else {
        return (
            <div style={ {backgroundColor: 'pink', width: '400px', padding: '10px', margin: '5px auto' }}>
                <p>Pas de data!</p>
            </div>
        ) 
    }
    
}

export default Car;