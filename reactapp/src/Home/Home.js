import "./Home.css";
import HomeBody from "../Components/HomeBody";

function Home(props){
    return (
        <main>
            <h1 style={{'text-align': 'center'}} className="my-2">ACM User Management</h1>
            <hr />
            <HomeBody />
        </main>
    );
}

export default Home;