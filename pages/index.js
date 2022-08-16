import TeamForm from '../components/TeamForm';
import SearchForm from '../components/SearchForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home(props) {
  return (
    <main>
      <Navbar />
      <hr />
      <div className="pop">
        <h1>Create a Team</h1>
      </div>
      <TeamForm />
      <hr />
      <div className="pop">
        <h1>Find a Team</h1>
      </div>
      <SearchForm />
      <hr />
      <Footer />
    </main>
  );
}
