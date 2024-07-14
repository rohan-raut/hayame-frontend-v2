import React, { useEffect, useState, useContext } from "react";
import Select from "react-select";

const FormPart2 = ({ FormInputs, setFormInputs }) => {
    const [coordinates, setCoordinates] = useState({
        lat: 37.39094933041195,
        lng: -122.02503913145092,
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs((values) => ({ ...values, [name]: value }));
    };

    const options = [
        { value: "Condominium", label: "Condominium" },
        { value: "Landed Property", label: "Landed Property" },
        { value: "Shophouse", label: "Shophouse" }
    ];


    const reverseGeocode = (latitude, longitude) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {

                let api = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latitude + "," + longitude + "&key=AIzaSyDECJ4Zx4x_Iz5iRSTCvewjuDcaCNmz6l8";

                fetch(api, {
                    method: "GET",
                })
                    .then((response) => response.json())
                    .then((json) => {
                        console.log(json["results"][0]["formatted_address"]);
                        setFormInputs(values => ({ ...values, ["address"]: json["results"][0]["formatted_address"] }));
                        document.getElementById('address-field').value = json["results"][0]["formatted_address"];
                    });

            }, function (error) {
                console.error("Error getting location:", error.message);
            });
        }
        else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    useEffect(() => {
        if(FormInputs.no_of_hours !== ""){
            let element = document.getElementById('book-movers-packers-select-location-section');
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, []);


    useEffect(() => {
        async function initMap() {
            // Request needed libraries.
            const google = window.google;
            const { Map, InfoWindow } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await google.maps.importLibrary(
                "marker"
            );
            const map = new Map(document.getElementById("map"), {
                center: { lat: coordinates.lat, lng: coordinates.lng },
                zoom: 17,
                mapId: "4504f8b37365c3d0",
                disableDefaultUI: true,
            });
            const infoWindow = new InfoWindow();
            const draggableMarker = new AdvancedMarkerElement({
                map,
                position: { lat: coordinates.lat, lng: coordinates.lng },
                gmpDraggable: true,
                title: "Drag to your location",
            });

            draggableMarker.addListener("dragend", (event) => {
                const position = draggableMarker.position;
                reverseGeocode(position.lat, position.lng);

                infoWindow.close();
                // infoWindow.setContent(`Pin dropped at: ${position.lat}, ${position.lng}`);
                // infoWindow.open(draggableMarker.map, draggableMarker);
            });

        }

        initMap();
    }, [coordinates]);

    const handleJobLocation = (e) => {
        var id = "address-field";
        const google = window.google;

        var autocomplete;
        autocomplete = new google.maps.places.Autocomplete(
            document.getElementById(id),
            {
                types: ["geocode", "establishment"],
                componentRestrictions: { country: "my" },
            }
        );

        autocomplete.addListener("place_changed", function () {
            var near_place = autocomplete.getPlace();
            setCoordinates({
                lat: near_place['geometry']['location'].lat(),
                lng: near_place['geometry']['location'].lng()
            })
            setFormInputs((values) => ({ ...values, ["address"]: near_place["formatted_address"] }));
        });
    };

    const getCurrentLocation = async () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                async function (position) {

                    setCoordinates({
                        lat: await position.coords.latitude,
                        lng: await position.coords.longitude,
                    });

                    reverseGeocode(position.coords.latitude, position.coords.longitude);
                },
                function (error) {
                    console.error("Error getting location:", error.message);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    };

    return (
        <div>
            <form>
                <div className="row m-0" id="book-movers-packers-select-location-section">
                    <div className="form-label-bold">Select your location</div>
                    <div id="map" className="mb-4"></div>
                    <div class="mb-4 col-12 col-sm-12 col-md-6 col-lg-8">
                        <label for="exampleInputEmail1" class="form-label">
                            Address
                        </label>
                        <input
                            type="text"
                            className="input-field"
                            id="address-field"
                            defaultValue={FormInputs.address}
                            onChange={handleJobLocation}
                        />
                    </div>
                    <div class="mb-4 col-12 col-sm-12 col-md-6 col-lg-4 booking-current-location-div">
                        <button
                            type="button"
                            onClick={getCurrentLocation}
                            className="booking-current-location-btn"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 -960 960 960"
                                width="24"
                            >
                                <path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z" />
                            </svg>{" "}
                            Get Current Location
                        </button>
                    </div>
                    <div className="row mx-0 my-4 justify-content-between">
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 p-0">
                            <div class="mb-4">
                                <label class="form-label">Post code</label>
                                <input
                                    type="text"
                                    className="input-field"
                                    name="postCode"
                                    onChange={handleChange}
                                    defaultValue={FormInputs.postCode}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-5 col-lg-5 p-0">
                            <div class="mb-4">
                                <label class="form-label" style={{ width: "max-content" }}>
                                    Type of Property
                                </label>
                                <div>
                                    <Select
                                        options={options}
                                        onChange={(e) => {
                                            setFormInputs((values) => ({ ...values, ['propertyType']: e.value }));
                                            setFormInputs((values) => ({ ...values, ['propertyTypeLabel']: e.label }));
                                        }}
                                        defaultValue={{ label: FormInputs.propertyTypeLabel, value: FormInputs.propertyType }}
                                        required

                                        theme={(theme) => ({
                                            ...theme,
                                            borderRadius: 6,
                                            minHeight: 40,
                                            colors: {
                                                ...theme.colors,
                                                primary25: '#A4E2D5',
                                                primary: '#58BBA6',
                                            },
                                        })}

                                        styles={{
                                            control: (baseStyles, state) => ({
                                                ...baseStyles,
                                                borderColor: state.isFocused ? '#A4E2D5' : 'gray',
                                                padding: '4px'
                                            }),
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormPart2;