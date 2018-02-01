import React from 'react';
import ReactDOM from 'react-dom';
import Dotdotdot from 'react-dotdotdot'

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          This page is clamped version of: <a href="https://codepen.io/carolynmcneillie/pen/Lewxrm" target="_blank">Codepen</a>
          <br />
          Thanks to Carolyn McNeillie
        </div>
        <hr />
        <p className="intro">
          What CSS property do you use to set the colour of a text block? If you said <em>color</em> you were&nbsp;… wrong!
        </p>
        <p className="intro">
          Don’t take it too hard, though. It was a trick question. In typographic parlance, “color” refers to the visual density of a block of text. Here's a little sandbox where you can play with some of the properties that impact typographic color.
        </p>
        <h1>Font Weight</h1>
        <div className="wrapper">
          <div className="font-weight small">
            <h2>Light</h2>
            <Dotdotdot
              clamp={ 3 }
              useNativeClamp={ false }
            >
              <p>
                1Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
              </p>
            </Dotdotdot>
          </div>
          <div className="font-weight medium">
            <h2>Normal</h2>
            <Dotdotdot clamp={ 7 }>
              <p>
                2Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
              </p>
            </Dotdotdot>
          </div>
          <div className="font-weight large">
            <h2>Heavy</h2>
            <p>
              Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
            </p>
          </div>
        </div>
        <h1>Tracking</h1>
        <div className="wrapper">
          <div className="letter-spacing small">
            <h2>Tight</h2>
            <p>
              Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
            </p>
          </div>
          <div className="letter-spacing medium">
            <h2>Normal</h2>
            <p>
              Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
            </p>
          </div>
          <div className="letter-spacing large">
            <h2>Wide</h2>
            <p>
              Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
            </p>
          </div>
        </div>
        <h1>Word Spacing</h1>
        <div className="wrapper">
          <div className="word-spacing small">
            <h2>Tight</h2>
            <p>
              Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
            </p>
          </div>
          <div className="word-spacing medium">
            <h2>Normal</h2>
            <p>
              Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
            </p>
          </div>
          <div className="word-spacing large">
            <h2>Wide</h2>
            <p>
              Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
            </p>
          </div>
        </div>
        <h1>Ledding</h1>
        <div className="wrapper">
          <div className="line-height small">
            <h2>Tight</h2>
            <p>
              Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
            </p>
          </div>
          <div className="line-height medium">
            <h2>Normal</h2>
            <p>
              Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
            </p>
          </div>
          <div className="line-height large">
            <h2>Double</h2>
            <p>
              Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
            </p>
          </div>
        </div>
        <h1>Justification</h1>
        <div className="wrapper">
          <div className="left">
            <h2>Ragged Right</h2>
            <p>
              Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
            </p>
          </div>
          <div className="justified">
            <h2>Justified</h2>
            <p>
              Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
            </p>
          </div>
          <div className="justified-hyphen">
            <h2>Justified with Hyphenation</h2>
            <p>
              Either the well was very deep, or she fell very slowly, for she had plenty of time as she went down to look about her and to wonder what was going to happen next. First, she tried to look down and make out what she was coming to, but it was too dark to see anything; then she looked at the sides of the well, and noticed that they were filled with cupboards and book-shelves; here and there she saw maps and pictures hung upon pegs. She took down a jar from one of the shelves as she passed; it was labelled <span>`ORANGE MARMALADE'</span>, but to her great disappointment it was empty: she did not like to drop the jar for fear of killing somebody, so managed to put it into one of the cupboards as she fell past it.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.hydrate(<App />, document.querySelector('#app'));
