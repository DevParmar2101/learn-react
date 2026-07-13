function FruitList() {
    const fruits = [
        'Apple',
        "Banana",
        "Chiku",
        "Dragon Fruit",
        "Egg Plant",
        "Mango",
        "Orange",
        "Kiwi",
    ];

    return (
        <div>
            <h2>Fruit List</h2>
            <ol>
                {fruits.map((fruit,index) =>(
                    <li key={index}>{fruit}</li>
                ))}
            </ol>
        </div>
    );
}

export default FruitList;