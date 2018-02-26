import React, { Component } from 'react';
import './bracket.css';

class Final extends Component {
	constructor(props) {
    super(props);
    this.state = {
      current: 'current',
    };
  }

  render() {
    return (
      <div>
      <div>
<main id="tournament" class="left">
  <ul class="roundL round-1">
    <li class="spacerL">&nbsp;</li>
    <li class="gameL game-topL winnerL">Lousville <span>79</span></li>
  </ul>
</main>
      </div>
      <div>
<main id="tournament" class="left">
  <ul class="roundL round-1">
    <li class="spacerL">&nbsp;</li>
    <li class="gameL game-topL winnerL">Lousville <span>79</span></li>
  </ul>
</main>
      </div>
      <div>
<main id="tournament" class="left">
  <ul class="roundL round-1">
    <li class="spacerL">&nbsp;</li>
    <li class="gameL game-topL winnerL">Lousville <span>79</span></li>
  </ul>
</main>
      </div>
      </div>
    )
  }
}

export default Final;