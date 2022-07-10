import React, { useState } from 'react';
import '../Styles/Realizations/Realizations.sass';
import Realization from './Realization';
import P41 from '../images/projects/puissance4/p4_1.png'
import P42 from '../images/projects/puissance4/p4_2.png'
import P43 from '../images/projects/puissance4/p4_3.png'
import Morpion1 from '../images/projects/morpion/morpion_1.png'
import Morpion2 from '../images/projects/morpion/morpion_2.png'
import H5AI1 from '../images/projects/h5ai/h5ai_1.png'
import H5AI2 from '../images/projects/h5ai/h5ai_2.png'
import H5AI3 from '../images/projects/h5ai/h5ai_3.png'
import Irc1 from '../images/projects/irc/irc_1.png'
import Irc2 from '../images/projects/irc/irc_2.png'
import Irc3 from '../images/projects/irc/irc_3.png'
import Meet1 from '../images/projects/meetic/meetic_1.png'
import Meet2 from '../images/projects/meetic/meetic_2.png'
import Meet3 from '../images/projects/meetic/meetic_3.png'
import Resp3 from '../images/projects/responsive/resp_3.png'
import Resp2 from '../images/projects/responsive/resp_2.png'
import Resp1 from '../images/projects/responsive/resp_1.png'
import Quiz3 from '../images/projects/quiz/quiz_3.png'
import Quiz1 from '../images/projects/quiz/quiz_1.png'
import Quiz2 from '../images/projects/quiz/quiz_2.png'
import Ads2 from '../images/projects/ads/adis_2.png'
import Ads3 from '../images/projects/ads/adis_3.png'
import Ads1 from '../images/projects/ads/adis_1.png'

function Realizations(props) {

    const [isRealizationOpen, setIsRealizationOpen] = useState(false);
    const [title, setTitle] = useState('')
    const [images, setImages] = useState([])
    const [features, setFeatures] = useState([])
    const [desc, setDesc] = useState([])
    const [techs, setTechs] = useState([])
    const [type, setType] = useState('')

    const handleClick = (realization) => {

        switch (realization) {
            case 'p4':
                setTitle('Puissance 4')
                setImages([P41, P42, P43])
                setDesc("Un jeu de puissance 4 jouable jusqu'à 4 joueurs dont la taille de la grille est paramétrable.")
                setFeatures([
                    "Sélectionner la taille de la grille",
                    "Jouable jusqu'à 4 joueurs",
                    "Choix des couleurs des jetons"
                ])
                setTechs([
                    'Html',
                    'JS',
                    'JQuery',
                    'CSS'
                ])
                setType('Frontend')
                break;
            case 'morpion':
                setTitle('Jeu du Morpion')
                setImages([Morpion1, Morpion2])
                setDesc("Le classique jeu du Morpion, parfait pour s'initier au Javascript. Ce jeu a été réaliser en 3h00 lors d'une colle.")
                setFeatures([])
                setTechs([
                    "Html",
                    'CSS',
                    'JS'
                ])
                setType('Frontend')
                break;
            case 'h5ai':
                setTitle('H5AI')
                setImages([H5AI1, H5AI2, H5AI3])
                setDesc("H5AI est un clone de l'interface du même nom servant à faciliter la naviguation sur serveur.")
                setFeatures([
                    "Afficher l'arborescence des dossiers",
                    "Ajouter des tags aux éléments (fichiers et dossiers)",
                    "Changer la couleur des éléments",
                    "Rechercher des éléments"
                ])
                setTechs([
                    'PHP',
                    'HTML',
                    'CSS',
                    'SQL',
                ])
                setType('Frontend')
                break;
            case 'irc':
                setTitle('IRC')
                setImages([Irc1, Irc2, Irc3])
                setDesc("L'IRC (Internet Relay Chat) est une messagerie instantanée permettant d'échanger des messsages entre les utilisateurs connectés sur un même channel. Il est également possible d'enoyer des messages privés.")
                setFeatures([
                    "Créer, ajouter, supprimmer des channels",
                    "Modifier son pseudonyme",
                    "Accéder aux anciens messages",
                    "Supprimmer un channel automatiquement si aucun message n'a été envoyé lors des 2 derniers jours"
                ])
                setTechs([
                    'ExpressJS',
                    'Socket.io',
                    'React',
                    'Sass'
                ])
                setType('Frontend / Backend')
                break;
            case 'meetic':
                setTitle('Meetic')
                setImages([Meet1, Meet2, Meet3])
                setDesc("Il s'agit d'une imitation du site Meetic. Réalisé en début de formation, ce projet avait pour objectif de nous initier au échanges entre les clients et la base de donnée.")
                setFeatures([
                    "Pouvoir s'inscrire et se connecter",
                    "Modifier et supprimmer son compter",
                    "Voir les profilsdes membres du site",
                    "Rechercher des profils selon différends critères (age, sexe...)"
                ])
                setTechs([
                    'PHP',
                    'SQL',
                    'CSS',
                    'HTML'
                ])
                setType('Backend')
                break;
            case 'resp':
                setTitle('Maquette Responsive')
                setImages([Resp1, Resp2, Resp3])
                setDesc("Pour ce projet, nous devions coder une page Html identique à des maquesttes représentant un même site affiché sur des écrans de taille différentes.")
                setFeatures([
                    "Adaptation de l'affichage en fonction de la taille de l'écran",
                    "Carousel d'images codé en JavaScript"
                ])
                setTechs([
                    'HTML',
                    'CSS',
                    'JS'
                ])
                setType('Frontend')
                break;
            case 'quizz':
                setTitle('Site de Quizz')
                setImages([Quiz1, Quiz2, Quiz3])
                setDesc("Dans le but de nous familiariser avec le framework Symfony, nous devions créer un site ou il était possible de répondre à des quizz.")
                setFeatures([
                    "Création d'un espace administrateur",
                    "Création et gestion de comptes utilisateurs",
                    "Créer et modifier des quizz",
                    "Répondre aux quizz",
                    "Enregistrer les scores et afficher les statistiques des utilisateurs"
                ])
                setTechs([
                    'Symfony',
                    'Twig',
                    'Doctrine'
                ])
                setType('Backend')
                break;
            case 'ads':
                setTitle('Site de petites annonces')
                setImages([Ads1, Ads2, Ads3])
                setDesc("Dans le but de nous familiariser avec le framework Laravel, nous devions pour ce projet créer un site ou il était possible de consulter et de créer des petites annonces.")
                setFeatures([
                    "Création d'un espace administrateur",
                    "Création et gestion de comptes utilisateurs",
                    "Création, consultation et modification d'annonces",
                    "Recherches d'annonces selon différends critères (type, prix...)"
                ])
                setTechs([
                    'Laravel',
                    'PUG',
                    'Eloquent'
                ])
                setType('Backend')
                break;
            default:
                break;
        }
        if (!isRealizationOpen) {
            setIsRealizationOpen(true)
        }
    }

    return (
        <>
            <div className='realizations'>
                <h2 className='realizations__title'>Réalisations</h2>
                <div className="realizations__content">
                    <div className="realization" onClick={() => { handleClick('p4') }}>
                        <h3 className="realization__title">Puissance 4</h3>
                        <div className="realization__body">
                            <div className="realization__frame">
                                <img className='realization__image' src={P41} alt="A puissance 4 game" />
                            </div>
                            <div className="realization__description">
                                <p className='realization__text'>Le célèbre jeu de de Puissance 4... mais avec des couleurs différentes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="realization" onClick={() => { handleClick('morpion') }}>
                        <h3 className="realization__title">Morpion</h3>
                        <div className="realization__body">
                            <div className="realization__frame">
                                <img className='realization__image' src={Morpion1} alt="A morpion Game" />
                            </div>
                            <div className="realization__description">
                                <p className='realization__text'>Pour gagner, il vaut mieux jouer en premier !</p>
                            </div>
                        </div>
                    </div>
                    <div className="realization" onClick={() => { handleClick('h5ai') }}>
                        <h3 className="realization__title">H5AI</h3>
                        <div className="realization__body">
                            <div className="realization__frame">
                                <img className='realization__image' src={H5AI1} alt="A interface for folder" />
                            </div>
                            <div className="realization__description">
                                <p className='realization__text'>Une interface de fichiers pour serveur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="realization" onClick={() => { handleClick('irc') }}>
                        <h3 className="realization__title">IRC</h3>
                        <div className="realization__body">
                            <div className="realization__frame">
                                <img className='realization__image' src={Irc1} alt="A chat" />
                            </div>
                            <div className="realization__description">
                                <p className='realization__text'>Un service de messagerie instantanée.</p>
                            </div>
                        </div>
                    </div>
                    <div className="realization" onClick={() => { handleClick('meetic') }}>
                        <h3 className="realization__title">Meetic</h3>
                        <div className="realization__body">
                            <div className="realization__frame">
                                <img className='realization__image' src={Meet1} alt="A meet website" />
                            </div>
                            <div className="realization__description">
                                <p className='realization__text'>Le "clone" d'un site de rencontre.</p>
                            </div>
                        </div>
                    </div>
                    <div className="realization" onClick={() => { handleClick('resp') }}>
                        <h3 className="realization__title">Maquette Responsive</h3>
                        <div className="realization__body">
                            <div className="realization__frame">
                                <img className='realization__image' src={Resp3} alt="A website" />
                            </div>
                            <div className="realization__description">
                                <p className='realization__text'>L'intégration html d'une maquette. Adaptable selon la taille de l'écran.</p>
                            </div>
                        </div>
                    </div>
                    <div className="realization" onClick={() => { handleClick('quizz') }}>
                        <h3 className="realization__title">Quizz</h3>
                        <div className="realization__body">
                            <div className="realization__frame">
                                <img className='realization__image' src={Quiz1} alt="A website" />
                            </div>
                            <div className="realization__description">
                                <p className='realization__text'>Un site permettant de créer et de répondre à des quizz.</p>
                            </div>
                        </div>
                    </div>
                    <div className="realization realization--last" onClick={() => { handleClick('ads') }}>
                        <h3 className="realization__title">Free Ads</h3>
                        <div className="realization__body">
                            <div className="realization__frame">
                                <img className='realization__image' src={Ads1} alt="A website" />
                            </div>
                            <div className="realization__description">
                                <p className='realization__text'>Un site permettant de créer et de consulter des petites annonces.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isRealizationOpen && <Realization
                title={title}
                images={images}
                desc={desc}
                techs={techs}
                type={type}
                setIsRealizationOpen={setIsRealizationOpen}
                features={features}
            />}
        </>
    );
}

export default Realizations;