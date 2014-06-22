#conf talks

Watch awesome conference talks by awesome people.

##To run:
- Go to root directory
- npm install
- npm start
- watch for less changes with `wr " npm run-script less" app/less`
- navigate to http://localhost:9966

##Run tests
- npm install -g karma
- npm install -g karma-browserify
- npm test

##Links
 - angular: http://angularjs.org/
 - browserify: http://browserify.org/
 - beefy: https://github.com/chrisdickinson/beefy
 - napa: https://github.com/shama/napa


##Data Schema
{
  conferenceName-country-year: {
    "title": <String>,
    "talks": [
      {
        "url": <String>,
        "tags": [<String>, ... ],
      },
      ...
    ]
  },
  ...
}
