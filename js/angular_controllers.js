var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.themes = [
        /*{
            "theme:" : "",
            "source" : ""
        },*/
        {
            "theme:" : "Default",
            "source" : "css/bootstrap/default/bootstrap.min.css"
        },
        {
            "theme:" : "Cyborg",
            "source" : "css/bootstrap/cyborg/bootstrap.min.css"
        },
        {
            "theme:" : "Darkly",
            "source" : "css/bootstrap/darkly/bootstrap.min.css"
        },
    ]

    $scope.profilesList = [
        /*
        {
            "profile": "",
            "name": "", 
            "links": [
                {
                    "link" : "",
                }
            ],
            "active": true
        },
        */
        {
            "profile": "Steam",
            "name": "Midlou", 
            "links": [
                {
                    "link" : "https://steamcommunity.com/profiles/76561198062956433",
                }
            ],
            "active": true
        },
        {
            "profile": "Youtube",
            "name": "Midlou",
            "links": [
                {
                    "link" : "https://www.youtube.com/c/Midlou/",
                }
            ],
            "active": true
        },
        {
            "profile": "Github",
            "name": "Midlou",
            "links": [
                {
                    "link" : "https://github.com/Midlou",
                }
            ],
            "active": true
        },
        {
            "profile": "Planet Minecraft",
            "name": "Midlou",
            "links": [
                {
                    "link" : "https://www.planetminecraft.com/member/midlou/",
                }
            ],
            "active": true
        },
        {
            "profile": "TF2Maps",
            "name": "Midlou",
            "links": [
                {
                    "link" : "https://tf2maps.net/members/midlou.22389/",
                }
            ],
            "active": true
        },
        {
            "profile": "Steam",
            "name": "Midloiro",
            "links": [
                {
                    "link" : "https://steamcommunity.com/profiles/76561198061125336",
                }
            ],
            "active": false
        },
        {
            "profile": "Youtube",
            "name": "GamesStuff",
            "links": [
                {
                    "link" : "https://www.youtube.com/channel/UCqq3o9rGKkGT1xSHcgpx5NQ",
                }
            ],
            "active": false
        },
        {
            "profile": "Twitter",
            "name": "Midlou",
            "links": [
                {
                    "link" : "https://twitter.com/MidlouBR",
                }
            ],
            "active": false
        },
        {
            "profile": "Github",
            "name": "miceblocks",
            "links": [
                {
                    "link" : "https://github.com/miceblocks",
                }
            ],
            "active": false
        },
    ]

    $scope.levelDesignList = [
        /*{
            "game": "",
            "type" : "",
            "name": "",
            "release" : "",
            "links" : [
                {
                    "name" : "",
                    "link" : "",  
                },
            ],
        },
        */
        {
            "game": "Garry's Mod",
            "type" : "Map",
            "name": "GM Edge",
            "release" : "Jun 27, 2020",
            "links" : [
                {
                    "name" : "Steam",
                    "link" : "https://steamcommunity.com/sharedfiles/filedetails/?id=2143662013",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Tomb Town",
            "release" : "Sep 17, 2019",
            "links" : [
                {
                    "name" : "Steam",
                    "link" : "https://steamcommunity.com/sharedfiles/filedetails/?id=1865735968",  
                },
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/tomb-town.8624/",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Gamma",
            "release" : "Jul 31, 2019",
            "links" : [
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/gamma.7966/",
                }
            ]
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Frost Moon",
            "release" : "Oct 5, 2018",
            "links" : [
                {
                    "name" : "Steam",
                    "link" : "https://steamcommunity.com/sharedfiles/filedetails/?id=1530568601",  
                },
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/frost-moon.7109/",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Ice tower",
            "release" : "Apr 8, 2018",
            "links" : [
                {
                    "name" : "Steam",
                    "link" : "https://steamcommunity.com/sharedfiles/filedetails/?id=1356347293",  
                },
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/ice-tower.5884/",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Stormylab",
            "release" : "Dec 16, 2017",
            "links" : [
                {
                    "name" : "Steam",
                    "link" : "https://steamcommunity.com/sharedfiles/filedetails/?id=1233357991",  
                },
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/stormy-lab.5579/",  
                },
                {
                    "name" : "NBS - Winter 2017",
                    "link" : "http://smissmas.mods.tf/",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Discover",
            "release" : "May 30, 2017",
            "links" : [
                {
                    "name" : "Steam",
                    "link" : "https://steamcommunity.com/sharedfiles/filedetails/?id=936149990",  
                },
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/discover.4103/",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Discover 72hour",
            "release" : "Feb 12, 2017",
            "links" : [
                {
                    "name" : "Steam",
                    "link" : "https://steamcommunity.com/sharedfiles/filedetails/?id=863015377",  
                },
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/discover.3544/",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Facility",
            "release" : "Feb 7, 2017",
            "links" : [
                {
                    "name" : "Steam",
                    "link" : "https://steamcommunity.com/sharedfiles/filedetails/?id=859099039",  
                },
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/facility.2976/",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Collision Route Event",
            "release" : "Oct 1, 2016",
            "links" : [
                {
                    "name" : "Steam",
                    "link" : "https://steamcommunity.com/sharedfiles/filedetails/?id=773066563",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Collision Route",
            "release" : "Jul 29, 2016",
            "links" : [
                {
                    "name" : "Steam",
                    "link" : "https://steamcommunity.com/sharedfiles/filedetails/?id=733950177",  
                },
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/collision-route.2410/",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Texture",
            "name": "Water Caustic",
            "release" : "Aug 15, 2019",
            "links" : [
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/overlay-water-caustic-water-reflection.8484/",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Prefab",
            "name": "Slide Door",
            "release" : "Jul 16, 2019",
            "links" : [
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/prefab-slide-door.7859/",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Prefab",
            "name": "Keypad with password",
            "release" : "Feb 12, 2019",
            "links" : [
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/prefab-keypad-with-password.7428/",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Prefab",
            "name": "Compact Door",
            "release" : "Jan 7, 2019",
            "links" : [
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/prefab-compact-door.7362/",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Prefab",
            "name": "Frontline Tank",
            "release" : "Oct 26, 2018",
            "links" : [
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/prefab-semi-functional-frontline-tank.7169/",  
                },
            ],
        },
        {
            "game": "Team Fortress 2",
            "type" : "Prefab",
            "name": "Pickup Timer",
            "release" : "Jun 16, 2018",
            "links" : [
                {
                    "name" : "TF2maps",
                    "link" : "https://tf2maps.net/downloads/prefab-pickup-timer.6082/",  
                },
            ],
        },
    ]

    $scope.miscList = [
        /*{
            "topic": "",
            "type" : "",
            "name": "",
            "link": "",
            "info": ""
        },
        */
        {
            "topic": "Minecraft",
            "type" : "Texture",
            "name": "Mice Blocks 16x",
            "release" : "May 21, 2020",
            "links" : [
                {
                    "link": "https://www.planetminecraft.com/texture-pack/mice-blocks-x16/"
                },
            ],
        },
        {
            "topic": "Podcast",
            "type" : "Audio editing",
            "name": "R4YL - Edifício abandonado",
            "release" : "Fev 10, 2020",
            "links" : [
                {
                    "link": "https://www.youtube.com/watch?v=pO_Dt_ntB24"
                },
            ],
            "info": "A collaboration with Kentiaque O Celestial"
        }, 
        {
            "topic": "Podcast",
            "type" : "Audio editing",
            "name": "R4YL - Trânsito dos condenados",
            "release" : "Jan 16, 2020",
            "links" : [
                {
                    "link": "https://www.youtube.com/watch?v=8g0-1mNZ_Z0"
                },
            ],
            "info": "A collaboration with Kentiaque O Celestial"
        },
        {
            "topic": "Team Fortress 2",
            "type" : "Map",
            "name": "Munitions",
            "release" : "Feb 8, 2019",
            "links" : [
                {
                    "link": "https://tf2maps.net/downloads/munitions.7424/"
                },
            ],
            "info": "Collab between xB33, Jusa, Bakscratch"
        },
    ]
});
