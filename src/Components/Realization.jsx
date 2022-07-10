import React from 'react';
import Slider from 'react-slick';
import '../Styles/Project/Project.sass'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function NextArrow({ onClick }) {
    return (
        <div className='slider__next' onClick={onClick} />
    )
}

function PrevArrow({ onClick }) {
    return (
        <div className="slider__prev" onClick={onClick} />
    )
}

function Realization({ title, images, desc, techs, type, setIsRealizationOpen, features }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 5000
    }

    function handleOverlayClick(e) {
        setIsRealizationOpen(false)
    }

    function handleProjectClick(e) {
        e.stopPropagation()
    }
    
    return (
        <div className='overlay' onClick={handleOverlayClick}>
            <div className="project" onClick={handleProjectClick}>
                <h2 className='project__title'>{title}</h2>
                <div className="project__carousel">
                    <Slider {...settings} >
                        {
                            images.map(image => <div>
                                <img className='slider__image' src={image} alt='An image from carousel' />
                            </div>)
                        }
                    </Slider>
                </div>
                <div className="project__type">

                </div>
                <div className="project__description">
                    <p className="project__text">{desc}</p>
                </div>
                {
                    features.length > 0 && 
                    <div className="project__features">
                    <h3 className="project__subtitle">Fonctionnalités</h3>
                    <ul className='project__list'>
                        {
                            features.map((feature, i) => {
                                return <li key={`feat${i}`} className='project__item'>{feature}</li>
                            })
                        }
                    </ul>
                </div>
                }
                <div className="project__techs">
                    <h3 className="project__subtitle">Technologies utilisées</h3>
                        <ul className="project__list">
                            {
                                techs.map((tech, i) => {
                                    return <li key={`tech${i}`} className='project__item'>{tech}</li>
                                })
                            }
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Realization