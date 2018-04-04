Vue.component('contact', {

    // setting the template that this component will use to render
    template:
    `<div id='ancestor' class="tile is-ancestor">
  <div class="tile is-4 is-vertical is-parent">
    <div class="tile is-child box">
    <a href="https://github.com/tpalzkill">
      <figure class="image">
      <img src='https://2.bp.blogspot.com/-HeghwWyWOGQ/VU4kbFtws5I/AAAAAAAAA1o/WN8SAVMliQA/s1600/GitHub%2BLogo%2BBanner.png' alt='GitHub'/>
      </figure>
      </a>
    </div>
    <div class="tile is-child box">
    <a href="https://www.linkedin.com/in/thomaspalzkill/">
    <figure class="image">
      <img src='https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg' alt='LinkedIn' id='LinkedIn_Logo'/>
      </figure>
            </a>
    </div>
  </div>
  <div class="tile is-parent">
    <div class="tile is-child box">
      <p class="title">Direct</p>
      <div class='content'>
      <table>
        <thead>
          <tr>
            <th>Forum</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phone</td>
            <td>713-820-2278</td>
          </tr>
          <tr>
            <td>Contracting</td>
            <td>PalzkillBuilds@gmail.com</td>
          </tr>
          <tr>
            <td>Mentorship</td>
            <td>tpalzkilll@gmail.com</td>
          </tr>
          <tr>
            <td>Talent Profile</td>
            <a href='https://talent.galvanize.com/students/2058'><td>Open</td></a>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</div>`
    ,

    // the data function is where we define all the variables this component will need
    // in this specific case, we only need to worry about an array of posts
    data: () => ({
        contacts: []
    }),

    // this is called whenever this component is mounted onto the DOM
    // basically whenever we want to show all the posts, we go and get them
    mounted() {
        this.getContact();
    },

    // this is where you define all the methods this component needs
    methods: {
         // getPost simply sets the 'posts' variable with static data
        getContact() {
            this.contacts = [
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
    el: '#app3'
});
