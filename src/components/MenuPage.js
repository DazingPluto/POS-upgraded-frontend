import React, { Component } from 'react';
import axios from 'axios';
import './MenuPage.css';

import Ghost from './Ghost';

const data = [
    {
      title: "Dragon Ball Z",
      creator: "Takao Koyama",
      caption:
        "Doragon Bōru Zetto, commonly abbreviated as DBZ) is a Japanese anime television series produced by Toei Animation",
      user: "@romebell",
      tags: ["anime", "dope"],
      date: "April 26, 1989",
      imageUrl:
        "https://i.pinimg.com/originals/2b/a0/7e/2ba07e697bf5022a207a3863545168f5.gif",
    },
    {
      title: "Fullmetal Alchemist",
      creator: "Hiromu Arakawa",
      caption:
        "Set in the early 20th century, in a fictional universe in which alchemy is a widely practiced science, the series follows the journey of two alchemist brothers, Edward and Alphonse Elric, who are searching for the philosophers stone to restore their bodies after a failed attempt to bring their mother back to life using alchemy.",
      user: "Sydney",
      tags: ["#shonen", "#female-mangaka"],
      date: "October 4, 2003",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/b/b1/Fullmetal_Alchemist_%282003%29_key_visual.png",
    },
    {
        title: "Fullmetal Alchemist",
        creator: "Hiromu Arakawa",
        caption:
          "Set in the early 20th century, in a fictional universe in which alchemy is a widely practiced science, the series follows the journey of two alchemist brothers, Edward and Alphonse Elric, who are searching for the philosophers stone to restore their bodies after a failed attempt to bring their mother back to life using alchemy.",
        user: "Sydney",
        tags: ["#shonen", "#female-mangaka"],
        date: "October 4, 2003",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/b/b1/Fullmetal_Alchemist_%282003%29_key_visual.png",
      },

]


const displayCharacters = data.map((a, idx) =>{
    return (
        <>
        <div className="tab-pane is-active" id="pane-2">
                        <div className="content">
                            <div className="columns featured-post is-multiline">
                                <div className="column is-12 post">
                                    <article className="columns featured">
                                        <div className="column is-7 post-img ">
                                            <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" />
                                        </div>
                                        <div className="column is-5 featured-content va">
                                            <div>
                                                <h3 className="heading post-category">Category Name</h3>
                                                <h1 className="title post-title">Blog Posts Template</h1>
                                                <p className="post-excerpt">This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                                                <br />
                                                <a href="#" className="button is-primary">Read More</a>
                                            </div>

                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='menuFlex'>
                        <a className='menuItem'>
                            <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                        </a>
                        <a className='menuItem'>
                            <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                        </a>
                        <a className='menuItem'>
                            <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                        </a>
                    </div>
                    </>
    );
  });

class MenuPage extends Component {
    constructor(props) {
        super(props);
    }

    // this is for the ghost display thingy

    displayGhost() {

    }

    ///// YOOOO THIS IS THE CHANGE!!!!!!!!~~~~~~~~~~??????????ß
    render() {
        return (
            <>
                <nav className="navbar is-info">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
                        </a>
                        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start is-link">
                            <a className="navbar-item" href="https://github.com/BulmaTemplates/bulma-templates">
                                Home
                            </a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link" href="/documentation/overview/start/">
                                    Docs
                                </a>
                                <div className="navbar-dropdown is-boxed">
                                    <a className="navbar-item" href="admin.html">
                                        Admin
                                    </a>
                                    <a className="navbar-item" href="forum.html">
                                        Forum
                                    </a>
                                    <a className="navbar-item" href="cover.html">
                                        Cover
                                    </a>
                                    <a className="navbar-item" href="cards.html">
                                        Cards
                                    </a>
                                    <a className="navbar-item" href="blog.html">
                                        Blog
                                    </a>
                                    <hr className="navbar-divider"></hr>
                                    <a className="navbar-item" href="search.html">
                                        Search
                                    </a>
                                    <a className="navbar-item is-active" href="kanban.html">
                                        Kanban
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="field is-grouped">
                                    <p className="control">
                                        <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="#" target="_blank" href="https://twitter.com/intent/tweet?text=get free bulma templates:;url=https://github.com/BulmaTemplates/bulma-templates">
                                            <span className="icon">
                                                <i className="fab fa-twitter"></i>
                                            </span>
                                            <span>
                                                Tweet
                                            </span>
                                        </a>
                                    </p>
                                    <p className="control">
                                        <a className="button is-primary" href="https://github.com/BulmaTemplates/bulma-templates">
                                            <span className="icon">
                                                <i className="fas fa-download"></i>
                                            </span>
                                            <span>Download</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <section className="hero is-info">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Tabs
                            </h1>
                            <h2 className="subtitle">
                                example
                            </h2>
                        </div>
                    </div>
                    <div className="tabs is-boxed is-centered main-menu" id="nav">
                        <ul>
                            <li data-target="pane-1" id="1">
                                <a>
                                    <span className="icon is-small"><i className="fa fa-image"></i></span>
                                    <span>Pictures</span>
                                </a>
                            </li>
                            <li data-target="pane-2" id="2" className="is-active">
                                <a>
                                    <span className="icon is-small"><i className="fab fa-empire"></i></span>
                                    <span>Article</span>
                                </a>
                            </li>
                            <li data-target="pane-3" id="3">
                                <a>
                                    <span className="icon is-small"><i className="fab fa-superpowers"></i></span>
                                    <span>Team</span>
                                </a>
                            </li>
                            <li data-target="pane-4" id="4">
                                <a>
                                    <span className="icon is-small"><i className="fa fa-film"></i></span>
                                    <span>Video</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content"></div>
                    <div className="tab-pane" id="pane-1">
                        <figure>
                            <img src="https://source.unsplash.com/0_xMuEbpFAQ/400x400" alt="💯" className="cent"></img>
                        </figure>
                        <figure>
                            <img src="https://source.unsplash.com/wPMvPMD9KBI/800x600" alt="💯" className="cent"></img>
                        </figure>
                    </div>
                    <div className="tab-pane" id="pane-3">
                        <div className="columns">
                            <div className="container">
                                <div className="columns">
                                    <div className="column">
                                        <article className="media">
                                            <div className="media-left">
                                                <i className="fab fa-github-square fa-4x"></i>
                                            </div>
                                            <div className="media-content">
                                                <div className="content">
                                                    <p>
                                                        <strong>Dominic Ipsum</strong>
                                                        <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="media">
                                            <div className="media-left">
                                                <i className="fab fa-empire fa-4x"></i>
                                            </div>
                                            <div className="media-content">
                                                <div className="content">
                                                    <p>
                                                        <strong>Cassie Ipsum</strong>
                                                        <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <div className="column">
                                        <article className="media">
                                            <div className="media-left">
                                                <i className="fab fa-ravelry fa-4x"></i>
                                            </div>
                                            <div className="media-content">
                                                <div className="content">
                                                    <p>
                                                        <strong>Avery Ipsum</strong>
                                                        <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="media">
                                            <div className="media-left">
                                                <i className="fab fa-github-alt fa-4x"></i>
                                            </div>
                                            <div className="media-content">
                                                <div className="content">
                                                    <p>
                                                        <strong>io Ipsum</strong>
                                                        <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis. ╳
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane" id="pane-4">
                        <div className="columns is-centered">
                            <div className="column is-three-quarters">
                                <div className="embed-container image">
                                    <iframe src="https://player.vimeo.com/video/261794608" frameBorder="0" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane is-active" id="pane-2">
                        <div className="content">
                            <div className="columns featured-post is-multiline">
                                <div className="column is-12 post">
                                    <article className="columns featured">
                                        <div className="column is-7 post-img ">
                                            <img src="https://cdn.emk.dev/templates/featured-image.png" alt="" />
                                        </div>
                                        <div className="column is-5 featured-content va">
                                            <div>
                                                <h3 className="heading post-category">Category Name</h3>
                                                <h1 className="title post-title">Blog Posts Template</h1>
                                                <p className="post-excerpt">This template is based off of the official default blog template created by the fine folks over at <a href="https://ghost.io">Ghost</a>. If you are looking for a fully featured blog platform, I highly recommend checking them out!</p>
                                                <br />
                                                <a href="#" className="button is-primary">Read More</a>
                                            </div>

                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='menuFlex'>
                        <a className='menuItem'>
                            <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                        </a>
                        <a className='menuItem'>
                            <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                        </a>
                        <a className='menuItem'>
                            <img src='/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/deliverables/POS-upgraded-frontend/src/img/StevenUniverse-CoverPhoto-scaled.jpeg'></img>
                        </a>
                    </div>
                    {displayCharacters}
                </section>
                {<script src="../js/bulma.js"></script>}
                {<script src="../js/tabs.js"></script>}
            </>
        );
    }
}

export default MenuPage;