import { Component, OnInit } from '@angular/core'
import { Playlist } from 'src/app/objects/playlist'

@Component({
  selector: 'app-visualizers',
  templateUrl: './visualizers.component.html',
  styleUrls: ['./visualizers.component.scss']
})
export class VisualizersComponent implements OnInit {
  playlists:Playlist[] = [
    {
      name: '2D',
      url: 'https://www.youtube.com/playlist?list=PLHSK04x2gyOShbTgxOP4ieFBjD04KL0nn',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/visualizers/space-pink.jpg',
      videos: [
        {
          src: 'https://www.youtube.com/embed/CEHM2tFNQVw',
          poster: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/visualizers/space-pink.jpg'
        },
        {
          src: 'https://www.youtube.com/embed/FrXSu7RebKI',
          poster: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/visualizers/space-violet.jpg'
        },
        {
          src: 'https://www.youtube.com/embed/BDt-mOmtv3k',
          poster: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/visualizers/space-green.jpg'
        }
      ]
    },
    {
      name: '360°',
      url: 'https://www.youtube.com/playlist?list=PLHSK04x2gyOTyral2ZunzJuQKsonHvV2R',
      image: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/visualizers/space-violet.jpg',
      videos: [
        {
          src: 'https://www.youtube.com/embed/o1ZwQtpi5Fg',
          poster: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/visualizers/space-pink.jpg'
        },
        {
          src: 'https://www.youtube.com/embed/rr_zoSjqg_k',
          poster: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/visualizers/space-violet.jpg'
        },
        {
          src: 'https://www.youtube.com/embed/0PoBGeGjpIc',
          poster: 'https://static-ux.s3.us-east-2.amazonaws.com/sunderapps/visualizers/space-green.jpg'
        }
      ]
    }
  ]
  constructor() { }
  ngOnInit() { }
}
