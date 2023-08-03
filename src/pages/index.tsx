import Layout from '../components/Layouts/Layout';
import ProtectedComponent from '../components/ProtectedComponent'
const Home = () => {

    return (
        <Layout>
            <ProtectedComponent>
                <div className="above-the-fold">
                    <h1>Welcome to Tech Finder!</h1>
                    <p>Some introductory text goes here</p>
                </div>
            </ProtectedComponent>
        </Layout>
    );
};

export default Home;
