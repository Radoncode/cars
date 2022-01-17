const Car = ({ nom, color, year }) => {

    const colorInfo = color ? (`couleur:  ${color }`) : (<p>Couleur: Néant </p>);

    if (nom) {
        return (
            <tr>
                <td>marque: { nom }</td>
                <td>age: { year }</td>
                <td>{ colorInfo }</td>
            </tr>
        )
    } else {
        return  null;
    }
    
}

export default Car;