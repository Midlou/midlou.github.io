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
            "link": ""
        },
        */
        {
            "profile": "Steam",
            "name": "Midlou", 
            "link": "https://steamcommunity.com/profiles/76561198062956433",
            "active": true
        },
        {
            "profile": "Youtube",
            "name": "Midlou", 
            "link": "https://www.youtube.com/c/Midlou/",
            "active": true
        },
        {
            "profile": "Github",
            "name": "Midlou",
            "link": "https://github.com/Midlou",
            "active": true
        },
        {
            "profile": "Planet Minecraft",
            "name": "Midlou",
            "link": "https://www.planetminecraft.com/member/midlou/",
            "active": true
        },
        {
            "profile": "TF2Maps",
            "name": "Midlou",
            "link": "https://tf2maps.net/members/midlou.22389/",
            "active": true
        },
        {
            "profile": "Steam",
            "name": "Midloiro",
            "link": "https://steamcommunity.com/profiles/76561198061125336",
            "active": false
        },
        {
            "profile": "Youtube",
            "name": "GamesStuff",
            "link": "https://www.youtube.com/channel/UCqq3o9rGKkGT1xSHcgpx5NQ",
            "active": false
        },
        {
            "profile": "Twitter",
            "name": "Midlou",
            "link": "https://twitter.com/MidlouBR",
            "active": false
        },
        {
            "profile": "Github",
            "name": "miceblocks",
            "link": "https://github.com/miceblocks",
            "active": false
        },
    ]

    $scope.levelDesignList = [
        /*{
            "game": "",
            "type" : "",
            "name": "",
            "steam": "",
            "tf2maps": "",
            "alternative" : {
                "alternative" : "",
                "name" : "",
                "steam" : "",
                "tf2maps" : ""
            },
        },
        */
        {
            "game": "Garry's Mod",
            "type" : "Map",
            "name": "GM Edge",
            "steam": "https://steamcommunity.com/sharedfiles/filedetails/?id=2143662013"
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Gamma",
            "tf2maps": "https://tf2maps.net/downloads/gamma.7966/",
            "alternative" : {
                "alternative" : "Halloween",
                "name" : "Tomb Town",
                "steam" : "https://steamcommunity.com/sharedfiles/filedetails/?id=1865735968",
                "tf2maps" : "https://tf2maps.net/downloads/tomb-town.8624/"
            },
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Icetower",
            "steam": "https://steamcommunity.com/sharedfiles/filedetails/?id=1356347293",
            "tf2maps": "https://tf2maps.net/downloads/ice-tower.5884/",
            "alternative" : {
                "alternative" : "Halloween",
                "name" : "Frost Moon",
                "steam" : "https://steamcommunity.com/sharedfiles/filedetails/?id=1530568601",
                "tf2maps" : "https://tf2maps.net/downloads/frost-moon.7109/"
            },
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Stormylab",
            "steam": "https://steamcommunity.com/sharedfiles/filedetails/?id=1233357991",
            "tf2maps": "https://tf2maps.net/downloads/stormy-lab.5579/",
            "alternative" : {
                "alternative" : "Event",
                "name" : "NBS - Winter 2017",
                "link" : "http://smissmas.mods.tf/",
            },
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Discover",
            "steam": "https://steamcommunity.com/sharedfiles/filedetails/?id=936149990",
            "tf2maps": "https://tf2maps.net/downloads/discover.4103/",
            "alternative" : {
                "alternative" : "72hour TF2Jam",
                "name" : "Discover 72hour",
                "steam" : "https://steamcommunity.com/sharedfiles/filedetails/?id=863015377",
                "tf2maps" : "https://tf2maps.net/downloads/discover.3544/"
            },
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Facility",
            "steam": "https://steamcommunity.com/sharedfiles/filedetails/?id=859099039",
            "tf2maps": "https://tf2maps.net/downloads/facility.2976/",
        },
        {
            "game": "Team Fortress 2",
            "type" : "Map",
            "name": "Collision Route",
            "steam": "https://steamcommunity.com/sharedfiles/filedetails/?id=733950177",
            "tf2maps": "https://tf2maps.net/downloads/collision-route.2410/",
            "alternative" : {
                "alternative" : "Halloween",
                "name" : "Collision Route Event",
                "steam" : "https://steamcommunity.com/sharedfiles/filedetails/?id=773066563"
            }
        },
        {
            "game": "Team Fortress 2",
            "type" : "Prefab",
            "name": "Pickup Timer",
            "tf2maps": "https://tf2maps.net/downloads/prefab-pickup-timer.6082/",
        },
        {
            "game": "Team Fortress 2",
            "type" : "Prefab",
            "name": "Frontline Tank",
            "tf2maps": "https://tf2maps.net/downloads/prefab-semi-functional-frontline-tank.7169/",
        },
        {
            "game": "Team Fortress 2",
            "type" : "Prefab",
            "name": "Compact Door",
            "tf2maps": "https://tf2maps.net/downloads/prefab-compact-door.7362/",
        },
        {
            "game": "Team Fortress 2",
            "type" : "Prefab",
            "name": "Keypad with password",
            "tf2maps": "https://tf2maps.net/downloads/prefab-keypad-with-password.7428/",
        },
        {
            "game": "Team Fortress 2",
            "type" : "Prefab",
            "name": "Slide Door",
            "tf2maps": "https://tf2maps.net/downloads/prefab-slide-door.7859/",
        },
        {
            "game": "Team Fortress 2",
            "type" : "Texture",
            "name": "Water Caustic",
            "tf2maps": "https://tf2maps.net/downloads/overlay-water-caustic-water-reflection.8484/",
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
            "link": "https://www.planetminecraft.com/texture-pack/mice-blocks-x16/"
        },
        {
            "topic": "Podcast",
            "type" : "Audio editing",
            "name": "R4YL - Trânsito dos condenados",
            "link": "https://www.youtube.com/watch?v=8g0-1mNZ_Z0",
            "info": "A collaboration with Kentiaque O Celestial"
        },
        {
            "topic": "Podcast",
            "type" : "Audio editing",
            "name": "R4YL - Edifício abandonado",
            "link": "https://www.youtube.com/watch?v=pO_Dt_ntB24",
            "info": "A collaboration with Kentiaque O Celestial"
        }, 
        {
            "topic": "Team Fortress 2",
            "type" : "Map",
            "name": "Munitions",
            "link": "https://tf2maps.net/downloads/munitions.7424/",
            "info": "Collab between xB33, Jusa, Bakscratch"
        },
    ]
});
