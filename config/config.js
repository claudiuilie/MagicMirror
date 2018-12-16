
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
    address: "0.0.0.0",
    port: 8080,
    ipWhitelist: [],
    language: "en",
    timeFormat: 24,
    units: "metric",
    electronOptions: {
        fullscreen: false,
        width: 800,
        height: 1000
    },

    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar",

        },
        {
            module: "MMM-AssistantMk2",
            position: "bottom_bar",
            config: {
                deviceLocation: {
                  coordinates: { 
                    latitude: 44.385886, 
                    longitude: 26.010775,
                  },
                }
            }
        },
        {
            module: "MMM-Hotword",
            config: {
                record: {
                    recordProgram: "arecord"
                },
                autostart: true,
                autorestart: true,
                onDetected: {
                    notification: (payload) => {
                        return "ASSISTANT_ACTIVATE"
                    },
                    payload: (payload) => {
                        return {
                            profile: payload.hotword
                        }
                    }
                },
            },
        },
        {
            module: "MMM-MovieListings",
            position: "top_center",

        },
        {
            module: "clock",
            position: "top_left"
        },
        {
            module: 'MMM-Remote-Control',
            position: 'bottom_left'
        },
        {
            module: "calendar",
            header: "Ro Holidays",
            position: "top_left",
            config: {
                calendars: [
                    {
                        symbol: "far fa-calendar-check",
                        url: "https://www.kayaposoft.com/enrico/ics/v2.0/?country=rou&fromDate=01-01-2018&toDate=31-12-2018&region=&holidayType=public_holiday&lang=ro"
                    }
                ]
            }
        },
        {
            module: "MMM-google-route",
            position: "top_left",
            config: {
                key: "AIzaSyBEbAhBQYMul4rmpONye8UNJJsYltbTHXM",
                directionsRequest: {
                    origin: "44.385886,26.010775",
                    destination: "44.489606,26.126148"
                }
            }
        },
        {
            module: "currentweather",
            position: "top_right",
            config: {
                location: "Bucharest",
                locationID: "",
                appid: "cd86b6b78b174125bfddf3cc26d7105a"
            }
        },
        {
            module: 'MMM-darksky-hourly',
            position: 'top_right',
            config: {
                apiKey: 'e9ea011fbb954b99670e297125a27a84', 
                latitude: 44.3816,
                longitude: 25.9957
            }
        },
        {
            module: "weatherforecast",
            position: "top_right",
            header: "Weather Forecast",
            config: {
                location: "Bucharest",
                locationID: "",
                appid: "cd86b6b78b174125bfddf3cc26d7105a"
            }
        },
        {
            module: "MMM-Arduino-Control",
            position: "top_right",
            header: "Home Status"
        },
        {
            module: 'MMM-syslog',
            position: 'bottom_left',
            config: {
                max: 5
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
        }

    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }

