
/* Magic Mirror Config Sample
*
* By Michael Teeuw http://michaelteeuw.nl
* MIT Licensed.
*
* For more information how you can configurate this file
* See https://github.com/MichMich/MagicMirror#configuration
*
*/

var config = {
address: "localhost", // Address to listen on, can be:
                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
                      // - another specific IPv4/6 to listen on a specific interface
                      // - "", "0.0.0.0", "::" to listen on any interface
                      // Default, when address config is left out, is "localhost"
port: 8080,
ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
                                                       // or add a specific IPv4 of 192.168.1.5 :
                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

language: "en",
timeFormat: 24,
units: "metric",
electronOptions: {
    fullscreen: false,
    width: 800,
    height: 600
},

modules: [
    {
        module: "alert",
    },
    {
        module: "updatenotification",
        position: "top_bar"
    },
    {
        module: "clock",
        position: "top_left"
    },
    {
        module: "calendar",
        header: "Ro Holidays",
        position: "top_left",
        config: {
            calendars: [
                {
                    symbol: "calendar-check-o ",
                    url: "https://www.kayaposoft.com/enrico/ics/v2.0/?country=rou&fromDate=01-01-2018&toDate=31-12-2018&region=&holidayType=public_holiday&lang=ro"
                }
            ]
        }
    },
    // {
    //     module: "compliments",
    //     position: "lower_third"
    // },
    {
        module: "currentweather",
        position: "top_right",
        config: {
            location: "Bucharest",
            locationID: "",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
            appid: "cd86b6b78b174125bfddf3cc26d7105a"
        }
    },
    {
        module: 'MMM-darksky-hourly',
        position: 'top_right',  // This can be any of the regions.
        config: {
          // See 'Configuration options' for more information.
          apiKey: 'e9ea011fbb954b99670e297125a27a84', // Dark Sky API key.
          latitude:   44.3816,
          longitude: 25.9957
        }
      },
    {
        module: "weatherforecast",
        position: "top_right",
        header: "Weather Forecast",
        config: {
            location: "Bucharest",
            locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
            appid: "cd86b6b78b174125bfddf3cc26d7105a"
        }
    },
    {
        module: "newsfeed",
        position: "bottom_bar",
        config: {
            feeds: [
                {
                    title: "Realitatea",
                    url: "http://stiri.tvr.ro/rss/stiri.xml"
                }
            ],
            showSourceTitle: true,
            showPublishDate: true
        }
    },
]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

