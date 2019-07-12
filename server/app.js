// import { Client } from 'espn-fantasy-football-api';
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
// app.set("view engine", "ejs");
// app.use("/assets", express.static("assets"));
//
// const { Client } = require("espn-fantasy-football-api/node");
// const myClient = new Client({ leagueId: 740173 });
// myClient.setCookies({
//   espnS2:
//     "AEBIJZd1OrRBt7sERbqWswPlRRDp16NPu7JjnARe56buNkAr%2FZdTM4SRFI0ucEV1VTyjTomVm82WELm2TFl%2BvaAqAOaYayFKr%2Fak7%2BVuK6APdEYmIyvfaXwdfnO2utESkw25JoMX0%2F5orBcL6YluzOYiYnJADjZbkXABNqdihKsFT5zQv49%2Bs2Q%2BaChgPyIpfyg7GmUxFwIwRoYtyWHg1V4ZgISR%2BjHxQrMHfwMgvIy3ujaA8LmTc0um2s%2FvJ166cz8%3D",
//   SWID: "{AE02EDC8-D5B0-4142-AA44-C25FCEB8048E}"
// });
// let data;
// // myClient.getBoxscoreForWeek({ seasonId: 2018, scoringPeriodId: 1, matchupPeriodId: 1 }).then((boxscores) => {
// //    data = boxscores;
// // });
//
// app.get("/week/:num", function(req, res) {
//   myClient
//     .getBoxscoreForWeek({
//       seasonId: 2018,
//       scoringPeriodId: Number(req.params.num),
//       matchupPeriodId: Number(req.params.num)
//     })
//     .then(boxscores => {
//       res.render("week", { week: req.params.num, data: boxscores });
//     })
//     .catch(error => {
//       res.send(error);
//     });
// });
//
// // app.get("/api", function (req, res) {
// //   myClient.getBoxscoreForWeek({ seasonId: 2018, scoringPeriodId: 1, matchupPeriodId: 1 }).then((boxscores) => {
// //      res.json(boxscores)
// //   })
// //   .catch(error => {
// //         res.send(error)
// //     })
// // });
// // res.status(200).send(data);
//
// app.get("/", function(req, res) {
//   res.render("index");
// });
//
// app.use(function(req, res, next) {
//   res.status(404).render("error_404");
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));