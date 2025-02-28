import insta from '../../assets/img/insta.svg'
import linktree from '../../assets/img/linktree.svg'
import artstation from '../../assets/img/artstation.svg'
import email from '../../assets/img/mail.svg'
import SocialLinks from '../SocialLink'

export default function About() {
    return (
        <section className="about">
            <h2 className="about__title">Contactez moi</h2>
            <div className="about__div">
                <SocialLinks href="https://linktr.ee/alexia.f.cadou?utm_source=linktree_profile_share&ltsid=f900a5a2-9e26-4b6e-9c24-49b1b52d681b"
                             src={linktree}
                             alt="linktree"
                             title="Linktree"/>
                <SocialLinks href="https://www.artstation.com/afcvisual"
                             src={artstation}
                             alt="artstation"
                             title="Artstation"/>
                <SocialLinks href="https://www.instagram.com/alexia_f.c/"
                             src={insta}
                             alt="Instagram"
                             title="Instagram"/>
                <SocialLinks href="mailto:alexia.f.cadou@gmail.com?subject=Bonjour&body=Voici%20un%20message"
                             src={email}
                             alt="Email"
                             title="Envoyez moi un email"/>
            </div>
            <h3 className="about__text">Bienvenue ! Je suis Alexia, Illustratrice Freelance spécialisée dans le réalisme et le fantastique. Polyvalente, je crée aussi bien des environnements immersifs que des props et personnages uniques. Découvrez mon univers et donnons vie à vos projets ensemble !</h3>
        </section>
    );
}