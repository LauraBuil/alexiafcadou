interface SocialLinks {
    href: string;
    src?: string | undefined;
    alt?: string | undefined;
    title?: string | undefined;
}

export default function SocialLinks({href, src, alt, title}: SocialLinks) {
    return (
        <a href={href} className="about__div__link">
            <img src={src} alt={alt} title={title} className="about__div__link__icon"/>
            {title}
        </a>
    );
}