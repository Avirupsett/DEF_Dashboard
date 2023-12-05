import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { Loader } from "@googlemaps/js-api-loader";
import truckleft from '/assets/truck (left).png';
import truckright from '/assets/truck (right).png';
import greenflag from '/assets/green flag.png';
import blueflag from '/assets/blue flag.png';
import { useParams } from 'react-router-dom';



function MyMapComponent(props) {
    const [gmapWin, setGmapWin] = useState(false);
    const [gmapObj, setGmapObj] = useState(null);
    const [lastlocation, setLastlocation] = useState(null)
    const { deliveryPlanId } = useParams();
    const mapBox = useRef();

    // Load map
    useEffect(() => {
        const abortController = new AbortController();
        if (props.deliveryPlanId || deliveryPlanId) {
            // Street Map
            const loader = new Loader({
                apiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY,
                version: "weekly"
            });


            (async () => {
                try {
                    await loader.load();
                    if (!abortController.signal.aborted && window.google?.maps && !gmapWin) {
                        setGmapWin(true);
                    }
                    if (gmapWin) {
                        setGmapObj(new window.google.maps.Map(mapBox.current, { zoom: 15 }));
                    }
                } catch (error) {
                    console.error("Error loading Google Maps:", error);
                }
            })();
        }

        return () => abortController.abort();
    }, [gmapWin]);

    const radiansToDegrees = (radians) => {
        return radians * (180 / Math.PI);
    }

    const fetchData = async (fetchActive) => {
        if (props.deliveryPlanId || deliveryPlanId) {
            const directionsService = new google.maps.DirectionsService();


            const directionsRenderer = new google.maps.DirectionsRenderer({ map: gmapObj, suppressMarkers: true, polylineOptions: { strokeColor: "#4074f8", strokeOpacity: 0.8, strokeWeight: 6 } }); // Planned Route

            const Driver_directionsRenderer = new google.maps.DirectionsRenderer({ map: gmapObj, suppressMarkers: true, polylineOptions: { strokeColor: "#ff474c", zIndex: 5 } }); // Driver Route

            const Driver_completed_directionsRenderer = new google.maps.DirectionsRenderer({ map: gmapObj, suppressMarkers: true, polylineOptions: { strokeColor: "transparent", zIndex: -1 } }); // Driver Route


            directionsRenderer.setMap(gmapObj);
            Driver_directionsRenderer.setMap(gmapObj);
            Driver_completed_directionsRenderer.setMap(gmapObj);

            let waypt = []
            let pump_status = []
            let driver_waypt = []
            let completeted_point = []
            let intimate_point = []

            let start_Latitude = 0.0
            let start_Longitude = 0.0


            if (fetchActive === 1) {
                await fetch(`https://dev-def-dash-route-api.inspirigenceworks.co.in/api/v1/driver_route/${props.deliveryPlanId || deliveryPlanId}`,)
                    .then((response) => response.json())
                    .then((json) => {
                        props.setMapComponentData(json)
                        let json1 = json["plannedRoute"]
                        start_Latitude = json1[0].startLatitude
                        start_Longitude = json1[0].startLongitude
                        for (let index = 0; index < json1.length; index++) {
                            const latitude = json1[index]["latitude"];
                            const longitude = json1[index]["longitude"];

                            waypt.push({
                                location: new google.maps.LatLng(latitude, longitude),

                            });
     
                            pump_status.push({
                                location: new google.maps.LatLng(latitude, longitude),
                                officeName: json1[index]["officeName"],
                                address: json1[index]["officeaddress"],
                                currentQuantity: json1[index]["currentQuantity"],
                                availableQuantity: json1[index]["availableQuantity"],
                                plannedQuantity: json1[index]["plannedQuantity"],
                            });

                        }

                        let json2 = json["driverRoute"]
                        for (let index = 0; index < json2.length; index++) {
                            const latitude = json2[index]["latitude"];
                            const longitude = json2[index]["longitude"];


                            driver_waypt.push({
                                location: new google.maps.LatLng(latitude, longitude),
                                stopover: true,
                            });
                            if (json2[index]["deliveryTrackerStatusId"] === 2) {
                                completeted_point.push({
                                    location: new google.maps.LatLng(latitude, longitude),
                                    lastUpdatetime: json2[index]["locationUpdateTime"],
                                    officeName: json2[index]["officeName"]
                                });
                            }
                            // if (json2[index]["deliveryTrackerStatusId"] === 3) {
                            //     completeted_point.push({
                            //         location: new google.maps.LatLng(latitude, longitude),
                            //         lastUpdatetime: json2[index]["locationUpdateTime"],
                            //     });
                            // }
                            if (json2[index]["deliveryTrackerStatusId"] === 4) {
                                intimate_point.push({
                                    location: new google.maps.LatLng(latitude, longitude),
                                    lastUpdatetime: json2[index]["locationUpdateTime"],
                                });
                            }

                        }
                    }
                    );
            }
            else {
                let json1 = props.mapComponentData["plannedRoute"]
                start_Latitude = json1[0].startLatitude
                start_Longitude = json1[0].startLongitude
                for (let index = 0; index < json1.length; index++) {
                    const latitude = json1[index]["latitude"];
                    const longitude = json1[index]["longitude"];

                    waypt.push({
                        location: new google.maps.LatLng(latitude, longitude),

                    });
                    pump_status.push({
                        location: new google.maps.LatLng(latitude, longitude),
                        officeName: json1[index]["officeName"],
                    })

                }

                let json2 = props.mapComponentData["driverRoute"]
                for (let index = 0; index < json2.length; index++) {
                    const latitude = json2[index]["latitude"];
                    const longitude = json2[index]["longitude"];


                    driver_waypt.push({
                        location: new google.maps.LatLng(latitude, longitude),
                        stopover: true,
                    });
                    if (json2[index]["deliveryTrackerStatusId"] === 2) {
                        completeted_point.push({
                            location: new google.maps.LatLng(latitude, longitude),
                            lastUpdatetime: json2[index]["locationUpdateTime"],
                            officeName: json2[index]["officeName"]
                        });
                    }
                    // if (json2[index]["deliveryTrackerStatusId"] === 3) {
                    //     completeted_point.push({
                    //         location: new google.maps.LatLng(latitude, longitude),
                    //         lastUpdatetime: json2[index]["locationUpdateTime"],
                    //     });
                    // }
                    if (json2[index]["deliveryTrackerStatusId"] === 4) {
                        intimate_point.push({
                            location: new google.maps.LatLng(latitude, longitude),
                            lastUpdatetime: json2[index]["locationUpdateTime"],
                        });
                    }

                }
            }


            // This function is for driver current location and status from start point
            // await fetch('https://dev-def-dash-route-api.inspirigenceworks.co.in/api/v1/driver_route/1',)
            //     .then((response) => response.json())
            //     .then((json) => {
            //         json = json["driverRoute"]
            //         for (let index = 0; index < json.length; index++) {
            //             const latitude = json[index]["latitude"];
            //             const longitude = json[index]["longitude"];


            //             driver_waypt.push({
            //                 location: new google.maps.LatLng(latitude, longitude),
            //                 stopover: true,
            //             });
            //             if (json[index]["deliveryTrackerStatusId"] === 2) {
            //                 completeted_point.push({
            //                     location: new google.maps.LatLng(latitude, longitude),
            //                     lastUpdatetime: json[index]["locationUpdateTime"],
            //                     officeName: json[index]["officeName"]
            //                 });
            //             }
            //             if (json[index]["deliveryTrackerStatusId"] === 3) {
            //                 completeted_point.push({
            //                     location: new google.maps.LatLng(latitude, longitude),
            //                     lastUpdatetime: json[index]["locationUpdateTime"],
            //                 });
            //             }

            //         }
            //     }

            //     );

            // This function is to add markers on the route -- For pumps
            directionsService
                .route({
                    origin: new google.maps.LatLng(start_Latitude, start_Longitude), //Varanasi location
                    destination: new google.maps.LatLng(start_Latitude, start_Longitude),//Varanasi location
                    waypoints: waypt,
                    optimizeWaypoints: false,
                    travelMode: google.maps.TravelMode.DRIVING,
                })
                .then((response) => {
                    directionsRenderer.setDirections(response);
                    var my_route = response.routes[0];



                    let contentString =
                        '<div id="content">' +
                        '<div id="siteNotice">' +
                        "</div>" +
                        '<h4 id="firstHeading" class="firstHeading fs-3 fw-bold" style="color: red">' + 'Starting Point' + '</h4>' +

                        "</div>";
                    var startmarker = new google.maps.Marker({
                        position: my_route.legs[0].start_location,
                        label: { text: "SP", color: "white" },
                        optimized: false,
                        zIndex: 99,
                        map: gmapObj
                    });
                    let infowindow = new google.maps.InfoWindow({
                        content: contentString,
                        ariaLabel: "StartPoint",
                    });
                    startmarker.addListener("click", () => {
                        infowindow.open({
                            anchor: startmarker,
                            map: gmapObj,
                            shouldFocus: false,
                        });
                    });


                })


            // This function is to add truck icon on the route -- For the current driver location
            if (driver_waypt.length > 0) {
                directionsService
                    .route({
                        origin: new google.maps.LatLng(start_Latitude, start_Longitude), //Varanasi location
                        destination: driver_waypt[driver_waypt.length - 1].location,//Varanasi location
                        waypoints: driver_waypt,
                        optimizeWaypoints: false,
                        travelMode: google.maps.TravelMode.DRIVING,
                    })
                    .then((response) => {
                        Driver_directionsRenderer.setDirections(response);
                        var my_route = response.routes[0];

                        for (var i = 0; i < my_route.legs.length; i++) {
                            if (i === my_route.legs.length - 1) {
                                // icon = truckright
                                // setLastlocation(my_route.legs[i].start_location)
                                if (my_route.legs.length > 1) {
                                    var angle = Math.atan(((my_route.legs[i].start_location).toJSON().lng - (my_route.legs[i - 1].start_location).toJSON().lng) / ((my_route.legs[i].start_location).toJSON().lat - (my_route.legs[i - 1].start_location).toJSON().lat))

                                    if (radiansToDegrees(angle) > 90 || radiansToDegrees(angle) < 0) {
                                        
                                        // icon = truckleft
                                        new google.maps.Marker({
                                            position: my_route.legs[i].start_location,
                                            icon: truckleft,
                                            zIndex: 10,
                                            map: gmapObj
                                        });
                                    }
                                    else {
                                        // icon = truckright
                                        new google.maps.Marker({
                                            position: my_route.legs[i].start_location,
                                            icon: truckright,
                                            zIndex: 10,
                                            map: gmapObj
                                        });
                                    }
                                }
                                else {
                                    var marker = new google.maps.Marker({
                                        position: my_route.legs[i].start_location,
                                        icon: truckright,
                                        zIndex: 10,
                                        map: gmapObj
                                    });
                                }


                            }

                        }
                    })
            }





            // This function is to add markers on the route -- For completed points
            for (var i = 0; i < completeted_point.length; i++) {
                let contentString =
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h2 id="firstHeading" class="firstHeading fs-3 fw-bold" style="color: green;">Delivered</h2>' +
                    '<div id="bodyContent" class="fs-6">' +
                    '<p><b>Pump: </b> ' + completeted_point[i].officeName +
                    "</p>" +
                    '<p><b>Last updated: </b>' + new Date(completeted_point[i].lastUpdatetime).toDateString() +
                    "</p>" +
                    "</div>" +
                    "</div>";
                let infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    ariaLabel: "Delivered",

                });
                const completedMarker = new google.maps.Marker({
                    position: completeted_point[i].location,
                    icon: {
                        url: greenflag,
                        size: new google.maps.Size(30, 32),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(10, 18),
                    },
                    zIndex: 100,
                    map: gmapObj
                });

                completedMarker.addListener("click", () => {
                    infowindow.open({
                        anchor: completedMarker,
                        map: gmapObj,
                        shouldFocus: false,
                    });
                });
            }

            // This function is to add markers on the route -- For Intimate points
            for (var i = 0; i < intimate_point.length; i++) {
                let contentString =
                    '<div id="content">' +
                    '<div id="siteNotice">' +
                    "</div>" +
                    '<h2 id="firstHeading" class="firstHeading" style="color: blue;">Intimate</h4>' +
                    '<div id="bodyContent">' +

                    '<p><b>Last updated: </b>' + new Date(completeted_point[i].lastUpdatetime).toDateString() +
                    "</p>" +
                    "</div>" +
                    "</div>";
                let infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    ariaLabel: "Intimate",

                });
                const intimateMarker = new google.maps.Marker({
                    position: intimate_point[i].location,
                    icon: {
                        url: blueflag,
                        size: new google.maps.Size(30, 32),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(10, 18),
                    },
                    zIndex: 100,
                    map: gmapObj
                });
                intimateMarker.addListener("click", () => {
                    infowindow.open({
                        anchor: intimateMarker,
                        gmapObj,
                        shouldFocus: false,
                    });
                });

            }

            for (var i = 0; i < pump_status.length; i++) {

                // <p class="fs-6 mb-2">Address: ${pump_status[i]['address']}</p>
                let contentString =
                    `<div class="box-shadow">
                <h3 class="fs-3 mb-2 fw-bold">${pump_status[i]['officeName']}</h3>
                <div class="d-flex flex-row justify-content-between flex-wrap" >
                    <div class=" d-flex flex-column justify-content-between mx-1 my-1  fs-6">
                        <div class="border-bottom border-dark font-weight-bold">Current </div>
                        <div class="mt-1 fw-bold">${(pump_status[i]['currentQuantity'])}</div>
                    </div>
                    <div class=" d-flex flex-column justify-content-between mx-1 my-1 fs-6">
                        <div class="border-bottom border-dark font-weight-bold">Available </div>
                        <div class="mt-1 fw-bold">${(pump_status[i]['availableQuantity'])}</div>
                    </div>
                    <div class=" d-flex flex-column justify-content-between mx-1 my-1 fs-6">
                        <div class="border-bottom border-dark font-weight-bold">Suggested </div>
                        <div class="mt-1 fw-bold">${(pump_status[i]['plannedQuantity'])}</div>
                    </div>
                </div>
                <p class="mt-4 text-danger fs-6"><b>Next Stop: </b><u>${(i == (pump_status.length - 1)) ? 'Starting Point' : pump_status[i + 1]['officeName']}</u>
                   </p>
               </div>`
                let infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    ariaLabel: "Pump Status",

                });
                const pumpMarker = new google.maps.Marker({
                    position: pump_status[i].location,
                    label: { text: (i + 1).toString(), color: "white" },
                    optimized: false,
                    zIndex: 99,
                    map: gmapObj
                });
                pumpMarker.addListener("click", () => {

                    infowindow.open({
                        anchor: pumpMarker,
                        gmapObj,
                        shouldFocus: false,
                    });

                });


            }

        }

    }

    useEffect(() => {
        if (gmapObj) {
            if ((props.deliveryPlanId || deliveryPlanId) && props.mapComponentData.length == 0) {
                fetchData(1)
            }
            else if (props.deliveryPlanId || deliveryPlanId) {
                fetchData(0)
            }


        }
    }, [gmapObj]);


    // fetchData every 5 mins

    useEffect(() => {
        const intervalId = setInterval(fetchData(1), 300000); // Fetch data every 5 minutes

        return () => {
            clearInterval(intervalId); // Clean up the interval when the component is unmounted
        };
    }, []);






    return <>{(props.deliveryPlanId || deliveryPlanId) ? <div className="map" ref={mapBox} style={{ height: '100%', borderRadius: "5px" }} /> : <div className="text-center py-3 fs-5">No Ongoing Trip !</div>}</>;
}

export default MyMapComponent