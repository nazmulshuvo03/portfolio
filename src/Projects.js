import React from "react";

import WebProjectCard from "./WebProjectCard";

import movieReview01 from "./Image/movieReview01.png";
import movieReview02 from "./Image/movieReview02.png";
import movieReview03 from "./Image/movieReview03.png";
import movieReview04 from "./Image/movieReview04.png";
import movieReview05 from "./Image/movieReview05.png";
import movieReview06 from "./Image/movieReview06.png";
import movieReview07 from "./Image/movieReview07.png";
import movieReview08 from "./Image/movieReview08.png";

import gameRanking01 from "./Image/gameRanking01.png";
import gameRanking02 from "./Image/gameRanking02.png";
import gameRanking03 from "./Image/gameRanking03.png";
import gameRanking04 from "./Image/gameRanking04.png";
import gameRanking05 from "./Image/gameRanking05.png";

import mojarStore01 from "./Image/mojarStore01.png";
import mojarStore02 from "./Image/mojarStore02.png";
import mojarStore03 from "./Image/mojarStore03.png";
import mojarStore04 from "./Image/mojarStore04.png";
import mojarStore05 from "./Image/mojarStore05.png";

function Projects({ id }) {
    var movieReviewCard = {
        images: [
            movieReview01,
            movieReview02,
            movieReview03,
            movieReview04,
            movieReview05,
            movieReview06,
            movieReview07,
            movieReview08
        ],
        title: "Movie Review",
        description:
            "This is a website where anyone can sign up and post the reviews of the movies they have watched. The whole website is created using React. Redux is used here to manage data flow. The backend, along with database, is handled with Firebase. Firebase notification function  is used here to get the user notified about recent activities. User can search reviews here in the dashboard. There is another search facility, where user can search movies from MovieDB database and use the name and poster from their database.",
        technologies: "React, Redux, Firebase",
        visit_link: "https://movie-review-03.netlify.com",
        source_link: "https://github.com/nazmulshuvo03/Movie_Review"
    };

    var gameRankingCard = {
        images: [
            gameRanking01,
            gameRanking02,
            gameRanking03,
            gameRanking04,
            gameRanking05
        ],
        title: "Game Ranking System",
        description:
            "Foosball is an indoor game. People can play it in their office or in a club. This game can be played one vs one, two vs two or even one vs two players. If they need to rank their players and keep their winning records, they can use this web app. This app can keep their game records and visualize it with beautiful progressbars. This app is built with React. And data flow is managed by Redux.",
        technologies: "React, Redux",
        visit_link: "https://game-ranking-system.netlify.com",
        source_link: "https://github.com/nazmulshuvo03/Game_Ranking_System"
    };

    var mojarStoreCard = {
        images: [
            mojarStore01,
            mojarStore02,
            mojarStore03,
            mojarStore04,
            mojarStore05
        ],
        title: "Mojar Store",
        description:
            "This is an online shopping store, built with React. Here users can add their favourite items into a cart and remove them if necessary. When the shopping is done, they can checkout using Paypal. Data flow is managed here with React Context.",
        technologies: "React, React Context",
        visit_link: "https://mojar-store.netlify.com",
        source_link: "https://github.com/nazmulshuvo03/Mojar-Strore"
    };

    return (
        <div className="projects" id={id}>
            <div className="projects_title text-center">
                <i className="fas fa-tasks"></i> Projects
            </div>
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col mb-4">
                    <WebProjectCard card={movieReviewCard} />
                </div>
                <div className="col mb-4">
                    <WebProjectCard card={gameRankingCard} />
                </div>
                <div className="col mb-4">
                    <WebProjectCard card={mojarStoreCard} />
                </div>
            </div>
        </div>
    );
}

export default Projects;
