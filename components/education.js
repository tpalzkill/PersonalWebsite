Vue.component('education', {

    // setting the template that this component will use to render
    template:
    `<div id='ancestor' class="tile is-ancestor">
  <div class="tile is-parent">
    <div class="tile is-child box">
      <p class="title">Galvanize Austin</p>
      <p class="subtitle">October 2017 - April 2018</p>
      <div class='is-child column' id='stubborn'>
      <a href="https://www.galvanize.com/austin/campus">
        <img src='static/img/galvanize.svg' alt='galvy' id='galvy' width='350'/>
              </a>
      <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
      </div>
    </div>
  </div>
  <div class="tile is-5 is-vertical is-parent">
    <div class="tile is-child box">
      <p class="title">University of Houston</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
    </div>
    <div class="tile is-child box">
      <p class="title">McCormick and Schmick's</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
    </div>
  </div>
</div>
`
      // "<div id='education' class='container is-fluid'><ul class='columns'><li v-for='university in universities' class='column projcolumn '><div class='box'><div class='container is-fluid'><img :src='university.image' class='image' :alt='university.alt' width=100 height=30></div><div class='container is-fluid'><p class='is-size-3'>{{university.name}}</p><p class='is-size-6'>{{university.years}}</p><p class='is-size-6'>{{university.degree}}</p></div></div></li></ul></div>"
    ,

    // the data function is where we define all the variables this component will need
    // in this specific case, we only need to worry about an array of posts
    data: () => ({
        universities: []
    }),

    // this is called whenever this component is mounted onto the DOM
    // basically whenever we want to show all the posts, we go and get them
    mounted() {
        this.getUniversities();
    },

    // this is where you define all the methods this component needs
    methods: {
         // getPost simply sets the 'posts' variable with static data
        getUniversities() {
            this.universities = [
                {
                    "name": "University of Houston",
                    "years": "August 2014 - May 2017",
                    "degree": "B.S. in Political Science with a minor in Energy and Sustainability",
                    "image": "static/img/University_of_Houston_logo.svg.png",
                    "alt": "UH",
                },
                {
                    "name": "McCormick & Schmick's",
                    "years": "April 2015 - October 2017",
                    "degree": "Server",
                    "image":  "static/img/mccormick-and-schmicks.jpg",
                    "alt": "m&s",
                },
                {
                    "name": "Galvanize Austin",
                    "years": "October 2017 - April 2018",
                    "degree": "Web Development Immersive",
                    "image": "static/img/galvanize.jpeg",
                    "alt": "Galvanize",
                }
            ];
        }
    }
});
new Vue({
    el: '#education'
});
