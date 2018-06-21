var html = require('choo/html')

module.exports = layout

function layout (view) {
  return (state, emit) => html`
    <body>
      <div class="container">
        <header>
          <h1><a href="/">reddit-clone</a></h1>
        </header>

        <main>
          ${view(state, emit)}

          <aside>
            <a href="/submit">Submit a new link</a>
          </aside>
        </main>
        
        <footer>
          You can find the code for this demo on 
          <a href="https://github.com/kareniel/tutorials-reddit-clone">
            Github
          </a>
        </footer>
      </div>
    </body>`
}
