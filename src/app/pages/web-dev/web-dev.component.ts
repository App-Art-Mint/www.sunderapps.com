import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/objects/project';

@Component({
  selector: 'app-web-dev',
  templateUrl: './web-dev.component.html',
  styleUrls: ['./web-dev.component.scss']
})
export class WebDevComponent implements OnInit {
  projects:any[] = [
    {
      title: 'Q-Solutions Challenge',
      description: 'See how much your call center could save by taking the Q-Solutions Challenge!  This was mainly a back-end project to fix some calculations that were off.  Used Visual Basic and some SQL.',
      company: 'Sunder Apps',
      year: 2016,
      month: 2,
      url: 'http://www.q-solutionsgroup.com/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/q-solutions.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    {
      title: 'ZT Entertainment',
      description: 'DJ, Photography, and Videography services for a reasonable price.  Created using ASP.NET MCV with C#.',
      company: 'Sunder Apps',
      year: 2017,
      month: 1,
      url: '',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/zt-entertainment.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    {
      title: 'T&N Marketing',
      description: 'Unleash the power of social media marketing!  Created using ASP.NET MCV with C#.',
      company: 'Sunder Apps',
      year: 2017,
      month: 2,
      url: '',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/tn-marketing.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    {
      title: 'D\'Acierno',
      description: 'Listen to D\'Acierno\'s latest EP, "Cato Singles," studio recordings, beats, and videos!  Recreated in Angular for code organization.  Now the image changes colors with every internal router navigation.',
      company: 'Sunder Apps',
      year: 2017,
      month: 10,
      url: 'https://www.dacierno.com',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/dacierno.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    {
      title: 'Dr. Dayna D\'Acierno',
      description: 'Dr. Dayna D\'Acierno, Dr. of Chiropractic.  This was created for a friend, so I got to take my time and try new things.  At first, there was going to be a parallax effect, but I couldn\'t get it to run smoothly.',
      company: 'Sunder Apps',
      year: 2018,
      month: 7,
      url: 'https://dr.dacierno.com',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/dr-dacierno.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    {
      title: 'Brahctopus',
      description: 'Official website of the local Pittburgh band, Brahctopus 🐙  This is my largest project with the most users.',
      company: 'Sunder Apps',
      year: 2019,
      month: 1,
      url: 'https://www.brahctopus.com',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/brahctopus.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    {
      title: 'Recapture Organics',
      description: 'Recapture your life with organic cannabinoids.  Created for a CBD company in California.  Hosted on AWS and ',
      company: 'Sunder Apps',
      year: 2020,
      month: 1,
      url: 'https://www.recaptureorganics.com',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/recapture-organics.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    {
      title: 'Chance Brinkman-Sull',
      description: 'Portfolio of graphic designer, Chance Brinkman-Sull.  Chance designed this site himself and I created it in exchange for more of his design services.  Most projects in the future should have his influence.',
      company: 'Sunder Apps',
      year: 2020,
      month: 2,
      url: 'https://www.chancebrinkman-sull.com',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/chance.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    {
      title: 'Gretchen McKay',
      description: 'Portfolio of journalist, Gretchen McKay.  This was a mostly back-end project in WordPress.  I updated her PHP version, updated and added new plugins, and customized a theme.',
      company: 'Sunder Apps',
      year: 2020,
      month: 9,
      url: 'http://www.gretchenmckay.com',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/gretchen-mckay.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    {
      title: 'Sunder Apps',
      description: 'My website redone (again) in Angular.  Now with apps.',
      company: 'Sunder Apps',
      year: 2020,
      month: 10,
      url: 'https://www.sunderapps.com',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/sunderapps.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    /*{
      title: 'Crooked Snout Games',
      description: 'Games developer Crooked Snout Games\' website.',
      company: 'Sunder Apps',
      year: 2020,
      month: 2,
      url: 'https://www.crookedsnout.com',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/crooked-snout.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    {
      title: 'Kryson Photography',
      description: 'The portfolio of Pittsburgh photographer, Zachary Kryson Shahen.',
      company: 'Sunder Apps',
      year: 2020,
      month: 3,
      url: 'https://www.zacharyshahen.com',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/kryson.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    {
      title: 'Don Hopey',
      description: 'Portfolio of journalist, Don Hopey',
      company: 'Sunder Apps',
      year: 2020,
      month: 3,
      url: 'https://www.donhopey.com',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/hopey.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    {
      title: 'Nate Guidry',
      description: 'The portfolio of Pittsburgh photographer, Nate Guidry.',
      company: 'Sunder Apps',
      year: 2020,
      month: 3,
      url: 'https://www.nateguidry.com',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/guidry.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },
    {
      title: 'Towline River Service',
      description: 'The website of local Pittsburgh tug boat company, Towline River Service',
      company: 'Sunder Apps',
      year: 2020,
      month: 3,
      url: 'https://www.towlineriverservice.com',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/towline-river-service.jpg',
      avatar: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/logos/sunder-logo-white-square.png'
    },*/
    {
      title: 'PharmGenius',
      description: 'An easy, fun way to help pharmacy students learn and study.  Created with Python using Django and Google Cloud.',
      company: 'University of Pittsburgh',
      year: 2016,
      month: 2,
      url: 'https://aecs1980qg.appspot.com/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/pharm-genius.jpg',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pitt_Panthers_wordmark.svg/1280px-Pitt_Panthers_wordmark.svg.png'
    },
    {
      title: 'MapMaker',
      description: 'Create leaflet.js maps for embedding in Post-Gazette articles.  This was my single project during my internship at the PG.  I completed all requirements on time and continue to provide updates often.',
      company: 'Pittsburgh Post-Gazette',
      year: 2017,
      month: 9,
      url: '',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/map-maker.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Three Rivers, Two Mysteries',
      description: 'Homepage of the Post-Gazette\'s 8-part podcast detailing the mystery behind the disappearance of Paul Kochu and Dakota James.  This was my first interactive at the Post-Gazette.  It uses Bootstrap and jQuery.',
      company: 'Pittsburgh Post-Gazette',
      year: 2017,
      month: 10,
      url: 'https://newsinteractive.post-gazette.com/threeriverstwomysteries/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/3-rivers-2-mysteries.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Drink Map',
      description: 'Find local breweries, wineries, and distilleries in the Pittsburgh area!  ',
      company: 'Pittsburgh Post-Gazette',
      year: 2018,
      month: 1,
      url: 'https://newsinteractive.post-gazette.com/drink-map/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/drink-map.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Fish Fry Map 2018',
      description: 'Find a fish fry for the 2018 Lent season!',
      company: 'Pittsburgh Post-Gazette',
      year: 2018,
      month: 3,
      url: 'https://newsinteractive.post-gazette.com/fish-fries/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/fish-fries-2018.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Amazon HQ2 Landing Page',
      description: 'Landing page for the Post-Gazette\'s coverage of Pittsburgh\'s bid to get Amazon to build HQ2 in their city.',
      company: 'Pittsburgh Post-Gazette',
      year: 2018,
      month: 3,
      url: 'https://newsinteractive.post-gazette.com/hq2/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/hq2.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'In the Lead 2018',
      description: 'Landing page for the Post-Gazette\'s annual special edition, In the Lead (2018 Edition)',
      company: 'Pittsburgh Post-Gazette',
      year: 2018,
      month: 5,
      url: 'https://newsinteractive.post-gazette.com/in-the-lead/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/in-the-lead.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Hype Manager',
      description: 'Organizes and prepares Tumult Hype files for embedding on all Post-Gazette platforms.',
      company: 'Pittsburgh Post-Gazette',
      year: 2018,
      month: 6,
      url: '',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/hype-manager.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Consumer Alerts Map',
      description: 'What restaurants in the local Pittsburgh area have had health warnings and violations?  Find out here!',
      company: 'Pittsburgh Post-Gazette',
      year: 2018,
      month: 10,
      url: 'https://newsinteractive.post-gazette.com/consumer-alerts/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/consumer-alerts.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Unbroken ‎✡️',
      description: 'Pulitzer Prize Winner: The Tree of Life mass shooting wrought death and anguish, but also fierce resolve.',
      company: 'Pittsburgh Post-Gazette',
      year: 2018,
      month: 11,
      url: 'https://newsinteractive.post-gazette.com/pittsburgh-squirrel-hill-synagogue-massacre/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/unbroken.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Rankin: Fighting \'the depressed mindset\'',
      description: 'In a town kept down by county decisions and indecision, even the most determined families find it hard to rise above stagnation, deprivation, and violence.',
      company: 'Pittsburgh Post-Gazette',
      year: 2019,
      month: 1,
      url: 'https://newsinteractive.post-gazette.com/childhood-poverty-allegheny-county-mapping-inequality/rankin-fighting-the-depressed-mindset/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/rankin.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Business of Pittsburgh',
      description: 'Jobs, health costs, the price of food, the performance of big companies and small ones - the money that flows through Pittsburghers\' lives and helps us understand where the opportunities are, when the trouble is coming...',
      company: 'Pittsburgh Post-Gazette',
      year: 2019,
      month: 2,
      url: 'https://newsinteractive.post-gazette.com/business-of-pittsburgh-monthly-report/2019/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/business-of-pittsburgh.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Fish Fry Map 2019',
      description: 'Find a fish fry for the 2019 Lent season.',
      company: 'Pittsburgh Post-Gazette',
      year: 2019,
      month: 3,
      url: 'https://newsinteractive.post-gazette.com/fish-fries-pittsburgh/2019/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/fish-fries-2019.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Pittsburgh Pirates Broadcaster Bingo',
      description: 'Follow along with Pittsburgh Pirates games to win BINGO!',
      company: 'Pittsburgh Post-Gazette',
      year: 2019,
      month: 4,
      url: 'https://newsinteractive.post-gazette.com/pittsburgh-pirates-broadcaster-bingo-game/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/pirates-bingo.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'The Curtain Rises',
      description: 'Winner of a Golden Quill for Excellence in Visual Craft Achievement – Animation/Motion Graphics:  Kennywood\'s record-setting roller coaster is ready for riders.',
      company: 'Pittsburgh Post-Gazette',
      year: 2019,
      month: 6,
      url: 'https://newsinteractive.post-gazette.com/kennywood-steel-curtain-roller-coaster-rises/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/steel-curtain.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Farmers Markets Map 2019',
      description: 'Find farmers markets local to Pittsburgh.',
      company: 'Pittsburgh Post-Gazette',
      year: 2019,
      month: 6,
      url: 'https://newsinteractive.post-gazette.com/farmers-markets/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/farmers-markets-2019.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'The Notorious Trial of Joe Thomas',
      description: 'Winner in the Society for Features Journalism’s 2020 Excellence in Features Awards:  In a time of panic and fear, a few carefullly chosen words transformed a black man who\'d migrated from the South into a mythically evil character...  For this project, I wanted to work with web APIs to create a SPA.  I created my own SPA library - $under $erver - which handled the asynchronous loading of scripts, styles, and content based on the URL.',
      company: 'Pittsburgh Post-Gazette',
      year: 2019,
      month: 9,
      url: 'https://newsinteractive.post-gazette.com/the-notorious-trial-of-joe-thomas/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/joseph-thomas.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: '13 Luminaries to Meet in 2020',
      description: 'They are dancing, reading, writing poetry, making music and videos, and even helping spread fashion...  This was a fun project.  I got to try out some really interesting CSS transitions.  Each of the images are masked so that they can seamlessly expand to the size of the screen, no matter the size of the screen.  Clicking on an image pushes it inward and the release popus it open, simultaneously loading the story.',
      company: 'Pittsburgh Post-Gazette',
      year: 2020,
      month: 1,
      url: 'https://newsinteractive.post-gazette.com/13-luminaries-to-meet-2020/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/luminaries.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Election 2020',
      description: 'The landing page for the Post-Gazette\'s Election 2020 coverage.  Content is taken directly from the PG\'s CMS so updates to the page aren\'t necessary.',
      company: 'Pittsburgh Post-Gazette',
      year: 2020,
      month: 2,
      url: 'https://newsinteractive.post-gazette.com/election/2020/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/election-2020.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Fish Fry Map 2020',
      description: 'Find a fish fry for the 2020 Lent season.',
      company: 'Pittsburgh Post-Gazette',
      year: 2020,
      month: 3,
      url: 'https://newsinteractive.post-gazette.com/fish-fries-pittsburgh/2020/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/fish-fries-2020.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Coronavirus Landing Page',
      description: 'Landing page for the Post-Gazette\'s coverage of COVID-19.  Content is taken directly from the PG\'s CMS so updates to the page aren\'t necessary.',
      company: 'Pittsburgh Post-Gazette',
      year: 2020,
      month: 4,
      url: 'https://newsinteractive.post-gazette.com/coronavirus/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/coronavirus.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: '4D COVID-19 Cases/Deaths Map',
      description: 'Coronavirus cases and deaths over time in Pennsylvania by county.  This map uses the New York Times\' COVID-19 data hosted on GitHub.  When the NYT updates their data, the map will automatically update.',
      company: 'Pittsburgh Post-Gazette',
      year: 2020,
      month: 4,
      url: 'https://newsinteractive.post-gazette.com/coronavirus/cases-deaths-by-county-over-time.html',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/coronavirus-map.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    },
    {
      title: 'Pittsburgh Police Tracker',
      description: 'Filter through official Pittsburgh police data to discover trends and keep up-to-date!  This dashboard allows you to filter data by date, neighborhood, and crimes committed.  It then generates a SQL query that leverages 4 databases from the Western Pennsylvania Regional Data Center (WPRDC).  The data returned is generated into a Leaflet.js map, jQuery.dataTables table, and Chart.js charts.  Data can also be downloaded as CSV and PDF.',
      company: 'Pittsburgh Post-Gazette',
      year: 2020,
      month: 6,
      url: 'https://newsinteractive.post-gazette.com/tools/police-incidents/',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/web-dev/police-incidents.jpg',
      avatar: 'https://newsinteractive.post-gazette.com/media/pg-logos/pg-logo-white.png'
    }
  ]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // Filter the projects by company
    let company = this.activatedRoute.snapshot.queryParamMap.get('company');
    if (company) {
      this.projects = this.projects.filter(p => {
        return company == p.company.replace(/\W+/g, '-').toLowerCase();
      });
    }

    // Sort the projects by date
    this.projects.sort((a, b) => {
      if (a.year == b.year) {
        return b.month - a.month;
      }
      return b.year - a.year;
    })
  }

  open (url: string): void {
    window.open(url, '_blank');
  }

  getDate (project: any): Date {
    if (!project) {
      return null;
    }
    return new Date(project.year, project.month - 1);
  }
}
