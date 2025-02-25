import data from '../../data/data.json';

// Components
import Gallery from '../../components/Gallery';

export default function HomePage() {
    const img = data

    return (
        <main className="main">
            <h2 className="main__text">Illustratrice Freelance</h2>
            <Gallery images={img} />
        </main>
    );
}