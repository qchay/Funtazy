// import { Client } from 'espn-fantasy-football-api';
const { Client } = require("espn-fantasy-football-api/node");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//  leagueId: 740173
//  espnS2:"AEBIJZd1OrRBt7sERbqWswPlRRDp16NPu7JjnARe56buNkAr%2FZdTM4SRFI0ucEV1VTyjTomVm82WELm2TFl%2BvaAqAOaYayFKr%2Fak7%2BVuK6APdEYmIyvfaXwdfnO2utESkw25JoMX0%2F5orBcL6YluzOYiYnJADjZbkXABNqdihKsFT5zQv49%2Bs2Q%2BaChgPyIpfyg7GmUxFwIwRoYtyWHg1V4ZgISR%2BjHxQrMHfwMgvIy3ujaA8LmTc0um2s%2FvJ166cz8%3D"
//  SWID: "{AE02EDC8-D5B0-4142-AA44-C25FCEB8048E}"
let leagueID, espnS2, swid;

var myClient;
var authenticated = false;

app.get("/week/:num", function(req, res) {
  try {
    myClient
      .getBoxscoreForWeek({
        seasonId: 2019,
        scoringPeriodId: Number(req.params.num),
        matchupPeriodId: Number(req.params.num)
      })
      .then(boxscores => {
        res.send(boxscores);
      })
      .catch(error => {
        res.send("You do not have access");
      });
  } catch (err) {
    res.send("You need to authenticate to retrieve results");
  }
});

// app.get("/api", function (req, res) {
//   myClient.getBoxscoreForWeek({ seasonId: 2018, scoringPeriodId: 1, matchupPeriodId: 1 }).then((boxscores) => {
//      res.json(boxscores)
//   })
//   .catch(error => {
//         res.send(error)
//     })
// });
// res.status(200).send(data);

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.post("/api/credentials", (req, res) => {
  leagueID = req.body.post.leagueID;
  espnS2 = req.body.post.espnS2;
  swid = req.body.post.swid;

  myClient = new Client({ leagueId: leagueID });
  myClient.setCookies({
    espnS2: espnS2,
    SWID: swid
  });
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: LeagueID:${leagueID} espnS2:${espnS2} swid:${swid}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
