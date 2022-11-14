import React, { Component } from 'react';
import { BrowserRouter as Router,  Route, Link} from 'react-router-dom'

import './App.css';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Catalog from './components/Catalog';
import MovieInfo from './components/MovieInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "Arthur", budget: 100, img: "https://ichef.bbci.co.uk/images/ic/480xn/p07l6f7g.jpg"},
        { name: "Thomas", budget: 1000, img: "https://pbs.twimg.com/profile_images/736429036268838917/Zu6VDBMI_400x400.jpg"},
        { name: "Jhon", budget: 1, img: "https://i.pinimg.com/originals/32/98/0a/32980a359f7b73bbf510ee48bc317660.jpg"},
        { name: "Ada", budget: 10, img: "https://cdn.shopify.com/s/files/1/1759/0923/articles/the-attire-of-ada-shelby-974539_grande.jpg?v=1663899768"}
      ],
      movies: [
        { id: 8, isRented: false, title: "The Little Mermaid", year: 1990, img: "https://i.ebayimg.com/images/g/1EAAAOSw9r1WDXRg/s-l500.jpg", descrShort: "A teenage mermaid princess named Ariel, who dreams of becoming human and falls in love with a human prince named Eric, which leads her to make a magic deal with the sea witch, Ursula, to become human and be with him." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 6, isRented: false, title: "Peter Pan", year: 1953, img: "https://m.media-amazon.com/images/I/51DhSWMzZlL._AC_.jpg", descrShort: " A free-spirited and mischievous young boy who can fly and never grows up, Peter Pan spends his never-ending childhood having adventures on the mythical island of Neverland as the leader of the Lost Boys, interacting with fairies, pirates, mermaids, Native Americans, and occasionally ordinary children from the world outside Neverland." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 5, isRented: false, title: "Bambi", year: 1942, img: "https://i0.wp.com/rachelsreviews.net/wp-content/uploads/2014/08/bambi-movie-poster.jpg?ssl=1", descrShort: "A young deer named Bambi joins his new friends, a rabbit named Thumper and a skunk named Flower, in exploring his forest home. As a boy, he learns from his doting mother and his father, The Great Prince of the Forest, that there are dangers in the open meadows where hunters can spot the animals, and he meets a beautiful young doe named Faline. As Bambi grows up, he learns that there is tragedy as well as beauty and joy in his forest world and on the path to adulthood." },
        { id: 9, isRented: false, title: "Aladdin", year: 1993, img: "https://lumiere-a.akamaihd.net/v1/images/p_aladdin1992_20486_174ba005.jpeg", descrShort: "Aladdin develops a relationship with the Genie and uses his wishes to become a prince to chase the affections of Princess Jasmine. When Jafar finally steals the lamp and gets three wishes of his own, Aladdin must rely on his intelligence to trick Jafar and save his friends and the Kingdom." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 7, isRented: false, title: "Robin Hood", year: 1973, img: "https://lumiere-a.akamaihd.net/v1/images/p_robinhood_19884_95b7d851.jpeg", descrShort: "An amiable rooster called Alan-a-Dale tells stories and sings songs of the heroic Robin Hood and his trusty sidekick, Little John, in this animated animal-themed adaptation of the legendary story. When evil Prince John deputizes the Sheriff of Nottingham to collect unreasonable taxes from the animals of Sherwood Forest, Robin, Little John and the other merry men wage a lighthearted battle against their evil foes." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
      ],
      rented: 0,
      currentUser: null
    }
  }

  componentDidMount() {
    // data.getData()   // remove hard coded
  }

  updateBudget = (user, didRent) => {
    let updatedUsers = [...this.state.users]
    let indexToUpdate = updatedUsers.findIndex(u => u.name === user.name)
    let tempUser = {...updatedUsers[indexToUpdate]}
    tempUser.budget = didRent ? tempUser.budget - 3 : tempUser.budget + 3
    updatedUsers[indexToUpdate] = tempUser
    this.setState({users: updatedUsers})
  }

  updateRent = (movie, didRent) => {
    this.updateRentedCount(didRent)
    let updatedMovies = [...this.state.movies]
    let indexToUpdate = updatedMovies.findIndex(m => m.id === movie.id)
    let tempMovie = {...updatedMovies[indexToUpdate]}
    tempMovie.isRented = !tempMovie.isRented
    updatedMovies[indexToUpdate] = tempMovie
    this.setState({movies: updatedMovies})
  }

  updateRentedCount = didRent => {
    this.setState({rented: didRent ? this.state.rented +1 : this.state.rented -1 })
  } 

  updateCurrentUser = user => {
    this.setState({currentUser: user})
  }


  render() {
    const state = this.state

    return (
      <Router> 
        <div className="App">
          <div id="home-background"></div>
          <NavigationBar currentUser={this.state.currentUser}/>
          
          <Route path="/" exact render={() => <Home users={state.users} updateCurrentUser={this.updateCurrentUser}/>} />
          <Route path="/catalog" exact render={({ match, location }) => <Catalog match={match} location={location} state={state} updateRent={this.updateRent} updateBudget={this.updateBudget}/>}/>
          <Route path="/movie/:id" exact render={({ match }) => <MovieInfo match={match} movies={state.movies}/>}/>
        </div>
      </Router>
    );
  }

  
}

export default App;
