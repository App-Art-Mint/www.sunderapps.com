import { Component, OnInit } from '@angular/core';
import { Contribution } from 'src/app/objects/contribution';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.scss']
})
export class ContributeComponent implements OnInit {
  contributions:Contribution[] = [
    {
      title: 'Donations',
      description: 'Help a guy out!',
      actions: [
        {
          url: 'https://www.venmo.com/SunderApps',
          logo: 'data:image/png;base64,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',
          title: 'Venmo',
          description: 'Buy me a <i class="fas fa-joint"></i>'
        },
        {
          url: 'https://cash.app/$SunderApps',
          logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUA1jL///8A1S0A1SkA0xMA1CIA1BsA1SYA0w7u++/k+uj8//3m+ur5/voL1ziW6qKi7K2b66cm2knz/fW58MGW6aLd+OLO9dWr7rVO3mV644cw21Ad2UPX99yw77mQ6J3F88xq4nyI55ZX32xN3mRD3V1f4HK48MB15IY93FiI55fR9thu4n7K9NDD8smB5pConxb5AAALb0lEQVR4nN2d2WKiMBSGQ1bcKIrWDbXW3Wr7/m83gmPrQsJ2AoTvYq6mym/ISXJyFmSlwmt/ffTdt8+fyXK13hymPd9xkE4cx+9ND5v1ajn5+Xxz+x+zhpfukVHS//jeH5wODqecMyYEIQRf0Cruj+CrLt8oBGP88gTO4TTotyEVeufFmlLOSFGK4sCEcRtvu8MOhMKmuxGcVUXbPReZYuPGjmWMwt3GrqS6G5jZm112hd4A8yrLu3J5xoHK+CgUvnFW9tMnhLG3DAp3xBR9AYz0Uypsb2jZD50SupbYnGiFrk3KfuLUEDpKrLCz4mU/bib4qpVM4QyJsp81IwK9J1H4Tau/QsjA9DteYdcu+zFzYbtxChem2dBnaFet0HiBF4kDlcIaCHwZxQeFc7Pn4A27L1M4rIfAyyjOohV2KnPCzQtGrUiFa/N2ajLEKkph18ytWjR89KqwWZdJeIU2XhQe6jIJr5D1s8J5nd7RANp/VNgy9TghBaNHhQuTXBbJYO69Qq9u72iA6NwprOEQ/g4iqucsDPg/E1EtDekV3v9VWLO18Abe3BS267Wd+cNu/1fo1tHOBIS2JlC4KeElxZy+Av1Lk/FVYacES8qm/XbjmaaLgQ9wpBMqPBdvSdneiqTTg32d+DlUWPxyj6fRAi3rHfbXZoNQ4brwacii71ACxqDvKVmFCot/SWnE9cJ/FrBGgQUK34v3kdpSgdYnrELavijsFz6G+CBXOAY2Nd8XhYPCDY34kQpsAX8V614ULgt3InJ5fEgTeMqQ/UXhtHBTSptShTvgKXOZEMjSG3kXSdRl9JUf4P0V9i1UvAMDr6UC4c9xwkPtwhcLsZArBP+5aQMNCx9D/nrXfgN40xZ82Qx9F60Q2/JwwhH4ysU/0K6o5RCTIP6VOD3Fer8HP8ixPuoWcTrEjNvOcjEfxoQwwzuM2AgdtSsknG0WHw2ltCsd+BkjBuhH75aGcLrsJ409P9vgYyiOaKJToaBjaVRkBI2FT6H9GD9I47ZU0L18fyZhuIQNKicTtNK1LSV0n2TuveC5PmDsNVkiTa5ETMepx++XOZxGvEV6PPoCf2TWF7BzgMwqHqMpzCc9QrdJcj2UjAjIMoY3qAfxOU+fast9acnxThBrBz4gP/+nPH8onsU/fxKGfv4dJZ4i8AMwJomTrmKZ5B/GHrhCjDKtERKGTt7ZCK+QwY1gQO68AfBZSL9ABVpB7keuB4JWyF8CyfPzkWsbB6yQrOIfOD1tJ4dEYIUiZY5uUok5Vg1YO8MhVvoocrhRQRViX5PAPNfUoAoV9xE5+aqGQuwkeNbObLfYn7br1fY0WeyGCeftPPtEhFTInvNxXvBGY0IZC5L5r+n1nDtbV34h/EuOQyykQh4zIF9bm724TDBhFE9iDpPHHPsaQIUxa6G3lTuZBEdHxWavm+dqBVChIsDiwjDmQCvs8Vnyp25VkrGoasv9FZ+2SeghUuOoOnGFCoFeoiIhmG5evVe7qowgIkuFwlPCPQmhz0EM/eqMoKqsgZf8MZnzcPw6V2YEbyHH0aS5FsT28e8PK5UvyBVH30mqjTMf3yIZZpWKP6cK98w23d2IcJoVFIi4wgecUiHCrOtZXtXSBZliz5b+eMcoA4+JzotKIXwAQhmo3tJGlUxiZpQni7QTsZKobKnVqJjRyARXXsd81+A9VcRyBezgwyyKhsV4u2eO6QaVSJJEfmntoSNJCiaBs/R9ZWCBrTviHFHhq7o1pspdBKrj0x/to+CmDqTykH/Pbl3NWprxsMQRJg23ZwsDRcatFw+8fzrUuAzyRPcWd3xNmGlTks/TSbSs/tasKYlVLlMJntszaSPAPtNLDG9szJmR6gOGlPYnNmUjkNbY/NJyTdEosoebdJEZGvkks0Sry42Yj1SRtxWHtzSidmoeidbZiHMyjzsLK5lU6LZJClvnifLOF6hXEATlicFs+AYYHJxrMrbWRkzGaZ5w9q0JHmRsT3KEYi5NGEUk2CBeioy1AXMRBR0LXHnqvZqWb4BFDWB4kXHleDfmpoPxSYLgwwiqdsmtQNDNPMtAFl+wIzuY8336xePLmPc0RNCem3b1WBnkwAnAjC/TpV3miO4uC8LJTxqzY9JM/EXQwzzxGtk1YmfzAmb0lPDoUXxlGSgInSZLzQAuMlgkmKMkG7p0QY0VAzMUf1eVI5OkEvBpnGGtWPxlejCNuRmvQSyVrb6Q6xi2q4nCVr+oZT8eAPJirSGmnINVUFkyUEgdKo0rCmFa1dqZYpHNKqiKmVZpU4P5+nOS6QJQfalaQtnKaIgfmsRMTc2UCquyWpDefz/MPL1E3FMIbFRk1/YrMEg1SztxyEmhsIQqzlHcCbzsJNMWjleGGUGXpM3Gg0DL8g7pnkoZlqq/5GECngQGj5XmMl4dZFRG14ZnXgUGhYESGwhMVOfgVgVe0iiB4TAmnI3qgj0f5SskvsRd394miR7FtjpJo3wnhmQEQ973NC7k4Cnn95XSZyH2lc4kr+tTRayzoD8xvqjCSxy/EB+JOPv0bRbV/JMwO77yJ2yviwyoTwU3mqOtzzlnghAcQAjjFG0T3LeVf0dKEgfpNb523Z/T6jD1/d5q/9ZPVvez+JYGLwqXSRVmYlaBPWnWcNlkADkwcp0w44sK5WAEZEidXBpp6vSDxOQp0Qao8LVVOxhgDpqcChHNlH8QzwnscJ9XIeJaKiUO4Oyon7tSlPBhC5YGQFaG8vPXhsQiTWH5JIwgV0IAhQjZp6zxeZF0QXdrPZBq18IZwgncw+5lpjAVy7G9Bapc2pjCukjxFKrqvIDZ4MwJ8HYbb+A6BzCUuz5rewy+28ZjBNesDnM/1y6uc9SQNItXaAvoDMEcdbMmk7S6WvLzyBKdYH83xk9Z7Kq3EHouYcgEvs8Mof4xZbjsecl0XTJdFGroFYQFFaekHUo654nOOhLiiIBbm96wE4UffnXHRG9apRggTU25aczItc+jyZrz17K7wLCRpr5rKk+juzr4JPAvFuHSZn1NvfOEwtPYE4nqtcLAPzT1P2TytV9DczUFfKaph6Wia3OxLSVpA3l65qH8xKjJtEkgHT29ZFWGplBnfdBLVkvomFC44PK040gN3mjq6ayoilVs2O/FpiPrTcOeQtG1OUerigyEfbl19FYn8pe02DwYfr4o1BBZhcdyhcWWMrUbF4XwfZQR2SoMDfi3qcBWoHANbtwUNRSLTWUKfmqkJXiMS4O3i41UC0rIIS2RR9iRuE+LtaSIzkKFOvZtmLnNxhXvRqfT/iw4vOIyDQOFekL+Gb3AQxgLYk0I1nycfyW0eKjwJapAwsYwgcJm6aE5mgj71IeFAKsQqKoBEm48QoXVCKcG57r/vxZzLD2+Sgf/C1Ve/x3U0db8rxh7VajHlVEypHOn0Hqrn8RbS9RbUdXazcTfjLGbwtqZU/r9pNA61GsU/zr5/Sqs2cbmr6HIX3Fjt07v6V1c6F355nV93lNx50a5U+hFpQ0YyUPm7X0J7mEFYsdBeLgXeigyPq+HtbEfylE9llHPlKpcNezH2KynQvFH8yXaT2VvnkvhGz+K9nN03Uuxf9j41cKhLwWoXtsZ9I2oqR0NjuikGdGwYYZMXfpZVFR9VEuKztjMDRyNLF4Q3XTDNbD1FGHRF8+StiLtjWHDiKks0lzaOGVHTHJscF962yVvDdNamNJBDHOsCDFX9gtfEF79lYNwf6TKaIlp77Pb2JUu5E8Y3SpLacUqtKymu2H6w0CzcFGHtvPYTJYkLZq889tKUB6ZWF8GGBPGbbwdJapnm7gJVbM/WB4Qp8GFpwgvPHFhYaLXPH4iBGOcU+Jv9u5Q1bo2m8KQltf++u67b58/++VqvTlMe76jN3zE8f3e9LBZr5aTn+Ob2/+YNVJmdPwDLd+WiP3rPTgAAAAASUVORK5CYII=',
          title: 'Cash App',
          description: 'Buy me a 🍺!'
        },
        {
          url: '',
          logo: 'https://dq4tmpgykghg0.cloudfront.net/tape/wp-content/uploads/2017/08/Basic-Attention-Token.png',
          title: 'BAT',
          description: 'Verified Brave Creator - click the BAT logo next to the address bar to donate! (Brave required: see below)',
          className: 'bat'
        },
        {
          url: 'https://checkout.square.site/pay/e55df92e4f2d464980d3fe7c7622ad41',
          logo: 'https://www.stickpng.com/assets/images/58482d7fcef1014c0b5e4a5a.png',
          title: 'Credit Card',
          description: 'I also accept credit card donations.  Other payment methods are preferred.'
        }
      ]
    },
    {
      title: 'Referrals',
      description: 'Try these services to earn me some extra cash and crypto!',
      actions: [
        {
          url: 'https://brave.com/sun458',
          logo: 'https://brave.com/wp-content/uploads/2018/02/brave_icon_512x_twitter.png',
          title: 'Brave Browser',
          description: 'Get paid to browse the web!  Brave replaces ugly ads with system notifications and repays you with cryptocurrency.',
          className: 'brave'
        },
        {
          url: 'https://join.robinhood.com/samuelu82',
          logo: 'https://mlxhogga1bdz.i.optimole.com/o79Y-A-MdOAh6s4/w:90/h:90/q:90/rt:fill/g:ce/https://creditcapsandcapital.com/wp-content/uploads/2019/02/Robinhood-logo.png',
          title: 'Robinhood Stock App',
          description: 'Try Robinhood with my referral link, and we both get a free stock!',
          className: 'robinhood'
        },
        /*{
          url: 'https://www.earnest.com/invite/samuel1523',
          logo: 'data:image/png;base64,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',
          title: 'Earnest Loan Refinancing',
          description: 'After months of searching for the best deal to refinance my student loans, Earnest gave me the best interest rate BY FAR!  Refinance your loans to save money, and get me $200.',

        },*/
        {
          url: 'https://squareup.com/i/SUNDERAPPS',
          logo: 'https://www.stickpng.com/assets/images/58482d7fcef1014c0b5e4a5a.png',
          title: 'SquareUp',
          description: 'Need to accept credit cards for your small business?  Square is the way I do it!',
        },
        {
          url: 'https://www.sofi.com/share/invest/2875766',
          logo: 'https://pbs.twimg.com/profile_images/1175183777229750273/AtiQMZuy_400x400.jpg',
          title: 'SoFi Invest',
          description: 'Open a SoFi Invest account with $1000 or more and we\'ll receive $75 in stock!'
        }
      ]
    },
    {
      title: 'Social',
      description: 'Throw me a like or subscribe.  It means a lot.',
      actions: [
        {
          url: 'https://www.facebook.com/SunderApps',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/768px-Facebook_logo_36x36.svg.png',
          title: 'Facebook',
          description: 'Follow me on Facebook!',
        },
        {
          url: 'https://www.instagram.com/SunderApps',
          logo: 'https://i.pinimg.com/originals/ff/0e/20/ff0e20de4718fe14cdd256c81c5db771.png',
          title: 'Instagram',
          description: 'Prepare for cat and Pittsburgh shots!',
        },
        {
          url: 'https://www.youtube.com/channel/UCThq5LcMaofJqx0emzWMLgA',
          logo: 'https://i.pinimg.com/originals/98/df/87/98df87df9dd9694b31b5ccc522320850.png',
          title: 'YouTube',
          description: 'Find visual coding projects I\'m working on and watch educational videos.',
          className: 'youtube'
        },
        {
          url: 'https://twitter.com/sunderapps',
          logo: 'https://www.aps.edu/sapr/images/pnglot.comtwitterbirdlogopng139932.png/image',
          title: 'Twitter',
          description: 'I\'m not on twitter as much, but I might stop on by every once in a while.'
        }
      ]
    },
  ]

  constructor () { }
  ngOnInit () { }
}
