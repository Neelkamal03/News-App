import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Reaction as Man Utd squeeze into FA Cup final and Liverpool go second in PL",
      "description": "Reaction as Manchester United edge past Coventry in memorable FA Cup semi-final, while Liverpool return to winning ways at the top of the Premier League, plus all the latest football news.",
      "url": "http://www.bbc.co.uk/sport/football/live/cl7lqj57zlrt",
      "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
      "publishedAt": "2024-04-22T06:37:13.6217045Z",
      "content": "Coventry City 3-3 Man Utd (2-4 pens)\r\nSimon StoneBBC Sport at Wembley Stadium\r\nMedia caption, Manchester United's winning penalty in the FA Cup semi-final\r\nIn case you missed it, Manchester United sc… [+690 chars]"
    },
    {
      "source": {
        "id": "news-com-au",
        "name": "News.com.au"
      },
      "author": null,
      "title": "Footy player suffers ‘life-altering’ injuries",
      "description": "A 24-year-old Adelaide footballer has been hospitalised in a serious condition after an incident at a Port Lincoln pub on Sunday.",
      "url": "https://www.news.com.au/sport/afl/west-adelaide-sanfl-player-sam-may-hospitalised-in-difficult-situation/news-story/0aa47dbf38ae1c788759669fc4725e6d",
      "urlToImage": "https://content.api.news/v3/images/bin/7a1cfbc79a1dcb86e53b8bf3916e5afc",
      "publishedAt": "2024-04-22T05:41:00Z",
      "content": "A 24-year-old Adelaide footballer has been hospitalised in a serious condition after an incident at a Port Lincoln pub on Sunday.\r\nWest Adelaide SANFL player Sam May was injured in an incident at the… [+2322 chars]"
    },
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Who is the striker of the moment? Garth Crooks' Team of the Week",
      "description": "Which players impressed our football pundit Garth Crooks enough to make his latest Team of the Week?",
      "url": "http://www.bbc.co.uk/sport/football/68871256",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/0CD0/production/_133208230_-8a217f37-f9ca-4b8d-ac1b-0282117e5cb6.png",
      "publishedAt": "2024-04-21T21:52:17.5751049Z",
      "content": "After every Premier League weekend, BBC football pundit Garth Crooks gathers his thoughts and gives you his Team of the Week.\r\nHere are this week's choices and, as ever, Garth also discusses the game… [+11372 chars]"
    },
    {
      "source": {
        "id": "fox-news",
        "name": "Fox News"
      },
      "author": "Scott Thompson",
      "title": "Former Colorado player takes shot at Deion Sanders' football program: 'Don't want to play for clicks'",
      "description": "Cormani McClain, a five-start cornerback recruit who entered the transfer portal to leave Colorado, took a shot at Deion Sanders' Buffaloes program.",
      "url": "https://www.foxnews.com/sports/former-colorado-player-takes-shot-deion-sanders-football-program",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/04/Cormani-McClain-2.jpg",
      "publishedAt": "2024-04-21T20:04:18Z",
      "content": "Cormani McClain, a five-star recruit to Colorado last year, is leaving Deion Sanders program and throwing some shots on his way out. \r\nMcClain, the top-ranked cornerback in this past years high schoo… [+2599 chars]"
    },
    {
      "source": {
        "id": "abc-news-au",
        "name": "ABC News (AU)"
      },
      "author": "Jeremy Story Carter",
      "title": "Wahgunyah, the country footy team that became famous for losing, records a famous win",
      "description": "The country football club that made headlines for its big losses records its first win in more than 1,000 days. It marks a special moment for the community in Wahgunyah amid the club's fight for survival.",
      "url": "https://www.abc.net.au/news/2024-04-21/wahgunyah-records-famous-first-win-in-years/103749700",
      "urlToImage": "https://live-production.wcms.abc-cdn.net.au/239abfac9cb41c807528b6c35fb0e103?impolicy=wcms_watermark_news&cropH=1735&cropW=3085&xPos=5&yPos=417&width=862&height=485&imformat=generic",
      "publishedAt": "2024-04-21T01:31:19Z",
      "content": "Wahgunyah, the country footy team that became famous for losing, has finally won a game.\r\nThe proud club from a small Victorian community on the banks of the Murray River made national headlines for … [+3719 chars]"
    },
    {
      "source": {
        "id": "gruenderszene",
        "name": "Gruenderszene"
      },
      "author": null,
      "title": "Euro-Football-Liga: Wie dieser frühere TV-Chef das schaffen will, woran die NFL scheiterte",
      "description": "Zeljko Karajicader holte American Football in Deutschland aus der Nische. Heute führt er mit Ex-Spieler Patrick Esume eine eigene Liga.",
      "url": "https://www.businessinsider.de/gruenderszene/business/warum-der-fruehere-prosieben-chef-eine-europaeische-football-liga-hochzieht-nachdem-die-nfl-daran-scheiterte/",
      "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2024/04/FionaNoever_Schalke_Stadion_012-scaled.jpg?ver=1713444308",
      "publishedAt": "2024-04-19T04:00:00+00:00",
      "content": "Den Hype um Football hat Zeljko Karajicader in Deutschland selbst beschworen. Um europäische Teams zu stärken, hat er mit Patrick Esume die European League of Football gegründet. 750.000 Fans sind ih… [+11732 chars]"
    },
    {
      "source": {
        "id": "fox-sports",
        "name": "Fox Sports"
      },
      "author": null,
      "title": "National Football League\n     <!----> \n        Five potential Cowboys picks to track at the NFL Draft Combine\n       \n      1 hour ago",
      "description": null,
      "url": "http://www.foxsports.com/stories/nfl/five-potential-cowboys-picks-to-track-at-the-nfl-draft-combine",
      "urlToImage": null,
      "publishedAt": "2024-02-29T18:37:22.5746516Z",
      "content": null
    },
    {
      "source": {
        "id": "bleacher-report",
        "name": "Bleacher Report"
      },
      "author": "David Kenyon",
      "title": "Unique Stats from the 2023 College Football Regular Season",
      "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
      "url": "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
      "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
      "publishedAt": "2023-12-12T12:00:00Z",
      "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
      "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
      "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
      "publishedAt": "2020-04-27T07:20:43Z",
      "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
    }
  ]

  constructor() {
    super();
    console.log("inside constructor from news component");
    this.state={
      articles:this.articles,
      loading:false
    }
  }
  render() {
    return (
      <div className="container my-4">
        <h2>NewsApp- Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" newsUrl="Work" imageUrl="https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" imageUrl="https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" imageUrl="https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="myDescription" imageUrl="https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png" />
          </div>
        </div>
      </div>
    )
  }
}

