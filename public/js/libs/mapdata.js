function returnSize() {
  if(window.matchMedia('(min-width: 40rem)').matches){
    return '400';
  }
  else {
    return '300';
  }
}
var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: returnSize(), //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    state_description: "",
    state_color: "black",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "no",

    //Location defaults
    location_description: "Location description",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "no",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    manual_zoom: "no"
  },
  state_specific: {
    "1": {
      name: "Andaman and Nicobar"
    },
    "2": {
      name: "Andhra Pradesh",
      iso:'AP'
    },
    "3": {
      name: "Arunachal Pradesh"
      // iso:'AP'
    },
    "4": {
      name: "Assam",
      iso:'AS'
    },
    "5": {
      name: "Bihar",
      iso:'BR'
    },
    "6": {
      name: "Chandigarh",
      iso:'CG'
    },
    "7": {
      name: "Chhattisgarh",
      iso:'CH'
    },
    "8": {
      name: "Dadra and Nagar Haveli"
    },
    "9": {
      name: "Daman and Diu"
    },
    "10": {
      name: "Delhi",
      iso: "DL"
    },
    "11": {
      name: "Goa",
      iso:'GA'
    },
    "12": {
      name: "Gujarat",
      iso:'GJ'
    },
    "13": {
      name: "Haryana",
      iso:'HR'
    },
    "14": {
      name: "Himachal Pradesh",
      iso:'HP'
    },
    "16": {
      name: "Jharkhand",
      iso:'JH'
    },
    "17": {
      name: "Karnataka",
      iso:'KA'
    },
    "18": {
      name: "Kerala",
      iso:'KL'
    },
    "19": {
      name: "Lakshadweep"
    },
    "20": {
      name: "Madhya Pradesh",
      iso:'MP'
    },
    "21": {
      name: "Maharashtra",
      iso:'MH'
    },
    "22": {
      name: "Manipur",
      iso:'MN'
    },
    "23": {
      name: "Meghalaya"
    },
    "24": {
      name: "Mizoram",
      iso:'MZ'
    },
    "25": {
      name: "Nagaland"
    },
    "26": {
      name: "Orissa",
      iso:'OR'
    },
    "27": {
      name: "Puducherry",
      iso:'PY'
    },
    "28": {
      name: "Punjab",
      iso:'PB'
    },
    "29": {
      name: "Rajasthan",
      iso: "RJ"
    },
    "30": {
      name: "Sikkim"
    },
    "31": {
      name: "Tamil Nadu",
      iso:'TN'
    },
    "32": {
      name: "Tripura",
      iso:'TR'
    },
    "33": {
      name: "Uttar Pradesh",
      iso:'UP'
    },
    "34": {
      name: "Uttarakhand"
    },
    "35": {
      name: "West Bengal",
      iso:'WB'
    },
    "36": {
      name: "Jammu and Kashmir",
      iso:'JK'
    },
    "37": {
      name: "Telangana",
      iso:'TG'
    }
  },
  locations: {},
  labels: {},
  regions: {}
};
