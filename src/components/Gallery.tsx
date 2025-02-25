import {useState, useEffect} from "react";

interface Image {
    id: number;
    src: string;
    title?: string;
}

interface GalleryProps {
    images: Image[];
}

export default function Gallery({ images }: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

    const openPopup = (src: string, index: number) => {
        setSelectedImage(src)
        setSelectedImageIndex(index)
    }

    const closePopup= () => {
        setSelectedImage(null)
        setSelectedImageIndex(null)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (selectedImageIndex === null) return;

        if (event.key === "ArrowRight") {
            const nextIndex = (selectedImageIndex + 1) % images.length;
            setSelectedImage(images[nextIndex].src);
            setSelectedImageIndex(nextIndex);
        } else if (event.key === "ArrowLeft") {
            const prevIndex = (selectedImageIndex - 1 + images.length) % images.length;
            setSelectedImage(images[prevIndex].src);
            setSelectedImageIndex(prevIndex);
        } else if (event.key === "Escape") {
            closePopup();
        }
    };

    useEffect(() => {
        if (selectedImage) {
            window.addEventListener("keydown", handleKeyDown);
        } else {
            window.removeEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage, selectedImageIndex]);

    return (
        <>
            <ul className="gallery">
                {images.map((item, index) => (
                    <li key={item.id}>
                        <img src={item.src}
                             alt={item.title || "Image"}
                             className="gallery__img thumbnail"
                             onClick={() => openPopup(item.src, index)}/>
                    </li>
                ))}
            </ul>
            <div className={`image-popup ${selectedImage ? "active" : ""}`} onClick={closePopup}>
                {selectedImage && <img src={selectedImage} alt="Image en grand" />}
            </div>
        </>
    );
}