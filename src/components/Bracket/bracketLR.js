import React, { Component }from 'react';
import './bracket.css';

class BracketLR extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 'current',
        };
    }

    render() {
      return (
        <div>
<main id="tournament" class="right">
  <ul class="roundR round-1">
    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR winnerR">Lousville <span>79</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR ">NC A&T <span>48</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR winnerR">Colo St <span>84</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR ">Missouri <span>72</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR ">Oklahoma St <span>55</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR winnerR">Oregon <span>68</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR winnerR">Saint Louis <span>64</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR ">New Mexico St <span>44</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR winnerR">Memphis <span>54</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR ">St Mary's <span>52</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR winnerR">Mich St <span>65</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR ">Valparaiso <span>54</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR winnerR">Creighton <span>67</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR ">Cincinnati <span>63</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR winnerR">Duke <span>73</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR ">Albany <span>61</span></li>

    <li class="spacerR">&nbsp;</li>
  </ul>
  <ul class="roundR round-2">
    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR winnerR">Lousville <span>82</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR ">Colo St <span>56</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR winnerR">Oregon <span>74</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR ">Saint Louis <span>57</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR ">Memphis <span>48</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR winnerR">Mich St <span>70</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR ">Creighton <span>50</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR winnerR">Duke <span>66</span></li>

    <li class="spacerR">&nbsp;</li>
  </ul>
  <ul class="roundR round-3">
    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR winnerR">Lousville <span>77</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR ">Oregon <span>69</span></li>

    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR ">Mich St <span>61</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR winnerR">Duke <span>71</span></li>

    <li class="spacerR">&nbsp;</li>
  </ul>
  <ul class="roundR round-4">
    <li class="spacerR">&nbsp;</li>
    
    <li class="gameR game-topR winnerR">Lousville <span>85</span></li>
    <li class="gameR game-spacerR">&nbsp;</li>
    <li class="gameR game-bottomR ">Duke <span>63</span></li>
    
    <li class="spacerR">&nbsp;</li>
  </ul>   
</main>
</div>
      )
    }
}

export default BracketLR;