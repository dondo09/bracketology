import React, { Component }from 'react';
import './bracket.css';

class BracketUL extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'current',
        };
    }

    render() {
      return (
        <div>
        <h1>2013 NCAA Tournament - Midwest Bracket</h1>
<main id="tournament" class="left">
  <ul class="roundL round-1">
    <li class="spacerL">&nbsp;</li>
    
    <li id="48" class="gameL game-topL winnerL">Lousville <span>79</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="49" class="gameL game-bottomL ">NC A&T <span>48</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="50" class="gameL game-topL winnerL">Colo St <span>84</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="51" class="gameL game-bottomL ">Missouri <span>72</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="52" class="gameL game-topL ">Oklahoma St <span>55</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="53" class="gameL game-bottomL winnerL">Oregon <span>68</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="54" class="gameL game-topL winnerL">Saint Louis <span>64</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="55" class="gameL game-bottomL ">New Mexico St <span>44</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="56" class="gameL game-topL winnerL">Memphis <span>54</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="57" class="gameL game-bottomL ">St Mary's <span>52</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="58" class="gameL game-topL winnerL">Mich St <span>65</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="59" class="gameL game-bottomL ">Valparaiso <span>54</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="60" class="gameL game-topL winnerL">Creighton <span>67</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="61" class="gameL game-bottomL ">Cincinnati <span>63</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="62" class="gameL game-topL winnerL">Duke <span>73</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="63" class="gameL game-bottomL ">Albany <span>61</span></li>

    <li class="spacerL">&nbsp;</li>
  </ul>
  <ul class="roundL round-2">
    <li class="spacerL">&nbsp;</li>
    
    <li id="88" class="gameL game-topL winnerL">Lousville <span>82</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="89" class="gameL game-bottomL ">Colo St <span>56</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="90" class="gameL game-topL winnerL">Oregon <span>74</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="91" class="gameL game-bottomL ">Saint Louis <span>57</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="92" class="gameL game-topL ">Memphis <span>48</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="93" class="gameL game-bottomL winnerL">Mich St <span>70</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="94" class="gameL game-topL ">Creighton <span>50</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="95" class="gameL game-bottomL winnerL">Duke <span>66</span></li>

    <li class="spacerL">&nbsp;</li>
  </ul>
  <ul class="roundL round-3">
    <li class="spacerL">&nbsp;</li>
    
    <li id="108" class="gameL game-topL winnerL">Lousville <span>77</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="109" class="gameL game-bottomL ">Oregon <span>69</span></li>

    <li class="spacerL">&nbsp;</li>
    
    <li id="110" class="gameL game-topL ">Mich St <span>61</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="111" class="gameL game-bottomL winnerL">Duke <span>71</span></li>

    <li class="spacerL">&nbsp;</li>
  </ul>
  <ul class="roundL round-4">
    <li class="spacerL">&nbsp;</li>
    
    <li id="118" class="gameL game-topL winnerL">Lousville <span>85</span></li>
    <li class="gameL game-spacerL">&nbsp;</li>
    <li id="119" class="gameL game-bottomL ">Duke <span>63</span></li>
    
    <li class="spacerL">&nbsp;</li>
  </ul>   
</main>
</div>
      )
    }
}

export default BracketUL;