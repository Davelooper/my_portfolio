import  React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useScrollDirection } from 'react-use-scroll-direction'
import Photo from '../images/photo_cv.png'
import '../Styles/About/About.sass'
import Hat from '../images/hat.png'
import Skills from '../images/skills.png'
import Webac from '../images/webac.png'
import Grafikart from '../images/grafikart.png'
import Ocr from '../images/ocr.png'
import Brush from '../images/toothbrush.png'
import Clean from '../images/clean.png'
import CV from '../documents/CV_david_DONNOT.pdf'

function About(props) {
    const { ref: brushRef, inView: brushIsVisible, entry } = useInView({threshold: 1, triggerOnce: true});
    const [showBrush, setShowBrush] = useState(false)
    const [showBright, setShowBright] = useState(false)
    
    useEffect(() => {
        if (brushIsVisible) {
            if (!showBrush) {
                setShowBrush(true)
            }
            if (!showBright) {
                setTimeout(() => {
                    setShowBright(true)
                }, 850)
            }
            
        }
    }, [brushIsVisible])

    useEffect(() => {
        if (showBrush) {
            setTimeout(() => {
                setShowBrush(false)
            }, 600);
        }
    }, [showBrush])

    useEffect(() => {
        if (showBright) {
            setTimeout(() => {
                setShowBright(false)
            }, 500)
        }
    }, [showBright])
    
    return (
        <>
        <div className='about'>
            <h2 className='about__title'>Mon parcours</h2>
            <div className="about__presentation">
                <div className="about__frame">
                    <img className='about__image' src={Photo} ref={brushRef} alt="A beatiful man" />
                    <img className={`about__brush ${showBrush ? 'about__brush--visible' : ''}`}  src={Brush} alt="A toothbrush" />
                    <img className={`about__bright ${showBright ? 'about__bright--visible' : ''}`} src={Clean} alt="A glow" />
                </div>
                <div className="presentation">
                    <div className="presentation__wrapper">
                        <p className="persentation__info presentation__info--mt">
                            <strong>Nom : </strong> David DONNOT
                        </p>
                        <p className="persentation__info">
                            <strong>Age : </strong> 31 ans
                        </p>
                        <p className="persentation__info">
                            <strong>Ville actuelle : </strong> Nancy
                        </p>
                        <p className="persentation__info">
                            <strong>Hobbies : </strong>
                            Guitare,
                            course à pied,
                            littérature
                        </p>
                    </div>
                    <div className="presentation__text">
                        <p className='presentation__'>Je suis David Donnot, Développeur Web & Mobile, passionné par les nouvelles technologies et leurs facultés à améliorer la productivité des entreprises.</p>
                        <p className='presentation__'>Je recherche un contrat d'alternance à compter du 12/09/2022 jusqu'au 20/10/2022</p>
                    </div>

                </div>
            </div>
            <div className="divider"></div>
            <div className="about__route">
                <div className="card">
                    <div className="card__header">
                        <h3 className="card__title">Formations</h3>
                        <div className="card__frame">
                            <img className='card__image' src={Hat} alt="A university hat" />
                        </div>
                    </div>
                    <div className="card__body">
                        <div className="card__wrapper">
                            <div className="card__logo">
                                <img className='card__picture' src={Webac} alt="A logo from a school" />
                            </div>
                            <p className="card__text"><strong className='strong strong--blue'>2022 : </strong>Web@cadémie by Epitech</p>
                        </div>
                        <div className="card__wrapper">
                            <div className="card__logo">
                                <img className='card__picture' src={Grafikart} alt="A logo from a school" />
                            </div>
                            <p className="card__text"><strong className='strong strong--blue'>2021 : </strong>Formation React by Grafikart</p>
                        </div>
                        <div className="card__wrapper">
                            <div className="card__logo">
                                <img className='card__picture' src={Ocr} alt="A logo from a school" />
                            </div>
                            <p className="card__text"><strong className='strong strong--blue'>2021 : </strong>Formations JS | Php | Html | Css by OpenClassRooms</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card__header">
                        <h3 className="card__title">Compétences</h3>
                        <div className="card__frame">
                            <img className='card__image' src={Skills} alt="A skills wheel" />
                        </div>
                    </div>
                    <div className="card__body">
                        <h4 className="card__subtitle">Front-end</h4>
                        <div className="card__text">
                            <p> React, Html, CSS, Sass, Javascript</p>
                        </div>
                        <h4 className="card__subtitle">Back-end</h4>
                        <div className="card__text">
                            <p> Laravel, PHP, SQL </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cv">
                <a href={CV} download className='cv__link'>
                    <button className='cv__button'>Télécharger mon CV</button>
                </a>
            </div>
        </div>
        <hr/>
        </>
    );
}
export default About;