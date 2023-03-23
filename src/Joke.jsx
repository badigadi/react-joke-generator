import React from 'react';
import axios from 'axios';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

export default class Joke extends React.Component {
  state = {
    joke: []
  }

  componentDidMount() {
    axios.get(`https://official-joke-api.appspot.com/random_ten`)
      .then(res => {
        const joke = res.data;
        this.setState({ joke });
      })
  }

  render() {

    return (
    <div>
        {this.state.joke
          .map(meme => 
          <li>
            <Accordion className='meme'>
              <AccordionSummary className='meme-title'>{meme.setup}</AccordionSummary>
              <AccordionDetails className='meme-punchline'>{meme.punchline}</AccordionDetails>
            </Accordion>
          </li>
          )}
    </div>
    )
  }
}