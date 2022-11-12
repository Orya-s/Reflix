import React, { Component } from 'react';
import { BrowserRouter as Router,  Route, Link} from 'react-router-dom'

import './App.css';
import Home from './components/Home';
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
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
      ],
      rented: 0
    }
  }


  updateBudget = (user, rented) => {
    let updatedUsers = [...this.state.users]
    let indexToUpdate = updatedUsers.findIndex(u => u.name === user.name)
    let tempUser = {...updatedUsers[indexToUpdate]}
    tempUser.budget = rented ? tempUser.budget - 3 : tempUser.budget + 3
    updatedUsers[indexToUpdate] = tempUser
    this.setState({users: updatedUsers})
  }

  updateRent = (movie, rented) => {
    this.setState({rented: rented ? this.state.rented +1 : this.state.rented -1 })
    let updatedMovies = [...this.state.movies]
    // movie.isRented = !movie.isRented
    let indexToUpdate = updatedMovies.findIndex(m => m.id === movie.id)
    updatedMovies[indexToUpdate].isRented = !updatedMovies[indexToUpdate].isRented
    this.setState({movies: updatedMovies})
  }


  render() {
    const state = this.state

    return (
      <Router> 
        <div className="App">
          <div id="home-background"></div>
          <div id="main-links">
            <Link to="/">Home</Link>
            <Link to="/catalog">Catalog</Link>
            {/*   CATALOG OPTIONS - default user / last user logged (error when don't have one/default) / ... */}

          </div>
          <div id='logo'>REFLIX</div>
          <Route path="/" exact render={() => <Home users={state.users} />} />
          <Route path="/catalog" exact render={({ match, location }) => <Catalog match={match} location={location} state={state} updateRent={this.updateRent} updateBudget={this.updateBudget}/>}/>
          <Route path="/movie/:id" exact render={({ match }) => <MovieInfo match={match} movies={state.movies}/>}/>

        </div>
      </Router>
    );
  }

  
}

export default App;
