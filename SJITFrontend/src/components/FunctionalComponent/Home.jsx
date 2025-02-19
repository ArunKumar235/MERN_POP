function Home(properties) {   
    var style = {
        textAlign: 'center'
    }
    var num = 10;
    return (
        <div>
            <h1 style={style}>Home</h1>
            <h2>Below tag is for props</h2>
            <h3>Props: {num}, {properties.message}</h3>
        </div>
    );
}

export default Home;