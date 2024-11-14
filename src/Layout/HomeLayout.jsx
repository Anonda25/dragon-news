import Header from "../Components/Header";
import LatesNews from "../Components/LatesNews";

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatesNews></LatesNews>
                </section>
            </header>
            <nav></nav>
            <main></main>

        </div>
    );
};

export default HomeLayout;