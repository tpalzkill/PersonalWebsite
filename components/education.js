Vue.component('education', {

    // setting the template that this component will use to render
    template:
    `<div id='ancestor' class="tile is-ancestor">
  <div class="tile is-parent">
    <div data-aos="fade-right" class="tile is-child box">
      <p class="title">Galvanize Austin</p>
      <p class="subtitle">October 2017 - April 2018</p>
      <div class='is-child column' id='stubborn'>
      <a href="https://www.galvanize.com/austin/campus">
        <img src='static/img/galvanize.svg' alt='galvy' id='galvy' width='350'/>
              </a>
      <p>My time at Galvanize gave me the time to hone my skills. The curriculum has its students focus heavilly on the in's and out's of javaScript, before diving into backend work, unfamiliar environments and independent study.</p>
      </div>
    </div>
  </div>
  <div class="tile is-5 is-vertical is-parent">
    <div data-aos="fade-left" class="tile is-child box">
      <p class="title">University of Houston</p>
      <p>In University I studied Politcial Science and Energy and Sustainability. I use the critical thinking skills I learned there in every decision I make. Happy to be a graduate of one the most diverse Universities in the nation. Go Coogs!</p>
    </div>
    <div data-aos="fade-up-left" class="tile is-child box">
      <p class="title">McCormick and Schmick's</p>
      <p>Throughout my time in college I worked as a server. It is hard to match the camaraderie thst exists among restaurant staffs. Waiting tables was one of the most consistently challenging things I have ever had to do. </p>
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
