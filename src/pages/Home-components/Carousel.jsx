import { useState, useEffect } from "react";

const images = [
  {
    url: "../../../public/photo1.jpg",
    title: "Titre 1",
    description: "Description de l'image 1",
    buttonText: "En savoir plus",
    buttonLink: "#",
  },
  {
    url: "../../../public/photo2.jpg",
    title: "Titre 2",
    description: "Description de l'image 2",
    buttonText: "Acheter maintenant",
    buttonLink: "#",
  },
  {
    url: "../../../public/photo3.jpg",
    title: "Titre 3",
    description: "Description de l'image 3",
    buttonText: "Voir plus",
    buttonLink: "#",
  },
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage(
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }, 4000); // Change l'image toutes les 4 secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle lorsque le composant est démonté
  }, [currentImageIndex]);

  const changeImage = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setFade(true);
    }, 350); // Délai pour l'effet de transition
  };

  const prevImage = () => {
    changeImage(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const nextImage = () => {
    changeImage(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className={`carousel-content ${fade ? "fade-in" : "fade-out"}`}>
        <img src={images[currentImageIndex].url} alt="carousel" />
        <div className="carousel-text">
          <h2>{images[currentImageIndex].title}</h2>
          <p>{images[currentImageIndex].description}</p>
          <a
            href={images[currentImageIndex].buttonLink}
            className="carousel-button"
          >
            {images[currentImageIndex].buttonText}
          </a>
        </div>
      </div>
      <button onClick={prevImage} className="nav-button prev">
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button onClick={nextImage} className="nav-button next">
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default ImageCarousel;
