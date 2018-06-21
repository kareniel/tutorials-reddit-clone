var html = require('choo/html')

module.exports = layout

function layout (view) {
  return (state, emit) => html`
    <body>
      <div class="container">
        <header>
          <h1>reddit-clone</h1>
        </header>
        
        ${view(state, emit)}
        
        <footer>
          You can find the code for this demo on 
          <a href="https://github.com/kareniel/tutorials-reddit-clone">
            Github
          </a>
        </footer>
      </div>
    </body>`
}
