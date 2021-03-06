
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
    // electronOptions: {
    //     fullscreen: false,
    //     width: 800,
    //     height: 1000
    // },

    modules: [
        {
            module: "alert",
        },
        {
            module: "MMM-network-signal",
            position: "top_bar",
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
                },
                notifications: {
                    ASSISTANT_ACTIVATED: "HOTWORD_PAUSE",
                    ASSISTANT_DEACTIVATED: "HOTWORD_RESUME",
                },
            }
        },
        {
            module: "MMM-Hotword",
            config: {
                record: {
                    recordProgram: "arecord"
                },
                autostart: true,
                autorestart: false,
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
                        url: "https://www.kayaposoft.com/enrico/ics/v2.0/?country=rou&fromDate=01-01-2019&toDate=31-12-2019&region=&holidayType=public_holiday&lang=ro"
                    }
                ]
            }
        },
        {
            module: 'MMM-Tools',
            header: 'System Status',
            position: 'bottom_left',
            config: {
                device: "ATB", // "RPI" is also available
                refresh_interval_ms: 10000,
                warning_interval_ms: 1000 * 60 * 5,
                enable_warning: false,
                warning: {
                    CPU_TEMPERATURE: 80,
                    GPU_TEMPERATURE: 80,
                    CPU_USAGE: 90,
                    STORAGE_USED_PERCENT: 80,
                    MEMORY_USED_PERCENT: 80
                }
            }
        },
        {
            module: "MMM-google-route",
            header: "Route to work",
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
            module: "MMM-MovieListings",
            position: "top_left",

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
            module: "MMM-DarkSkyForecast",
            position: "top_right",
            classes: "default everyone",
            disabled: false,
            config: {
                apikey: "e9ea011fbb954b99670e297125a27a84",
                latitude: "44.3816",
                longitude: "25.9957",
                iconset: "4c",
                hourlyForecastInterval: 2,
                maxHourliesToShow: 3,
                maxDailiesToShow: 6,
                concise: true,
                showCurrentConditions: false,
                showExtraCurrentConditions: false,
                showSummary: false,
                forecastLayout: "tiled"
            }
        },
        {
            module: "MMM-Arduino-Control",
            position: "top_right",
            header: "Home Status"
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

