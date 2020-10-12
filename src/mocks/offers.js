import {AVATAR_URL} from "../const";

export const offers = [
  {
    type: `hotel`,
    city: `Paris`,
    rating: 2,
    price: 119,
    isPremium: false,
    shortDesc: `Jardins de Mademoiselle Hôtel & Spa`,
    desc: `Featuring a fitness center, bar, garden and free WiFi, Jardins de Mademoiselle Hôtel & Spa is located in Paris, a 20-minute walk from Paris Expo – Porte de Versailles and 1.7 miles from Eiffel Tower. Safe neighborhood, nice view, specious, clean.`,
    countBedrooms: 3,
    maxGuests: 3,
    conditions: [`Free WiFi`, `Family rooms`, `Spa`, `Non-smoking rooms`, `Fitness Center`, `24-hour front desk`, `Bar`],
    photos: [
      `https://cf.bstatic.com/images/hotel/max1024x768/208/208041564.jpg`,
      `https://cf.bstatic.com/images/hotel/max200/176/176051798.jpg`,
      `https://cf.bstatic.com/images/hotel/max1024x768/208/208043649.jpg`,
      `https://cf.bstatic.com/images/hotel/max1024x768/151/151237164.jpg`,
      `https://cf.bstatic.com/images/hotel/max1024x768/208/208041582.jpg`,
      `https://cf.bstatic.com/images/hotel/max1024x768/208/208041578.jpg`,
    ],
    isFavorite: true,
    householder: {
      name: `Jonathan Lebovskiy`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      super: false,
    }
  },
  {
    type: `apartment`,
    city: `Cologne`,
    rating: 3,
    price: 48,
    isPremium: true,
    shortDesc: `Nice apartment, central, calm, cosy`,
    desc: `Beside a small park the new renovated (September 2012) flat is located in the third floor (USA 4th floor, no elevator) to the inner green courtyard (usually silent at night) of this old "Gruenderzeit-house" (2,90 m ceiling height). From the central station you walk 9 minutes, to the next underground (Ebertplatz) and to the river Rhine it is only 3 minutes, to the Cathedral (Dom) 12 minutes.`,
    countBedrooms: 1,
    maxGuests: 3,
    conditions: [`WiFi`, `Kitchen`, `Dryer`, `Hangers`, `Iron`],
    photos: [
      `https://a0.muscache.com/im/pictures/10645576/3968c2da_original.jpg?im_w=1200`,
      `https://a0.muscache.com/im/pictures/10645570/fdea93cd_original.jpg?im_w=1200`,
      `https://a0.muscache.com/im/pictures/10645605/7a8d1fb4_original.jpg?im_w=1200`,
      `https://a0.muscache.com/im/pictures/10645640/17b7ba19_original.jpg?im_w=1200`,
      `https://a0.muscache.com/im/pictures/10645640/17b7ba19_original.jpg?im_w=1200`,
    ],
    isFavorite: false,
    householder: {
      name: `Renate`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      super: false,
    }
  },
  {
    type: `house`,
    city: `Cologne`,
    rating: 4,
    price: 49,
    isPremium: true,
    shortDesc: `Seecontainer mit Hafenblick neben der Messe`,
    desc: `Du wohnst in einem umgebauten Seecontainer inmitten des Köln-Mülheimer Hafens. Vom Balkon blickst Du direkt auf das Hafenbecken und kannst beobachten wie bei der Köln-Deutzer-Werft 110m lange Binnenschiffe aus dem Wasser gezogen werden. Der Hafen liegt unmittelbar neben dem Messegelände welches über die Zoobrücke zu Fuß zu erreichen ist. Direkt vor der Hafeneinfahrt befindet sich die Claudius-Therme, die Seilbahn zum Zoo und der Rheinpark.`,
    countBedrooms: 1,
    maxGuests: 1,
    conditions: [`Free parking on premises`, `Wifi`, `Hangers`, `Laptop-friendly workspace`, `Hair dryer`],
    photos: [
      `https://a0.muscache.com/im/pictures/467c707f-e10d-49d0-80ed-58aef24e895f.jpg?im_w=1200`,
      `https://a0.muscache.com/im/pictures/5ceb3d2c-d260-4282-a7d2-06a2dacb5141.jpg?im_w=1200`,
      `https://a0.muscache.com/im/pictures/67bc2f78-0a66-4c62-bc8d-b5becbbacf85.jpg?im_w=1200`,
      `https://a0.muscache.com/im/pictures/fdda6de9-48c2-4a70-b083-3f8c1cf75c5a.jpg?im_w=1200`,
      `https://a0.muscache.com/im/pictures/fdda6de9-48c2-4a70-b083-3f8c1cf75c5a.jpg?im_w=1200`,
    ],
    isFavorite: true,
    householder: {
      name: `Jörg`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      super: false,
    }
  },
  {
    type: `room`,
    city: `Brussels`,
    rating: 5,
    price: 119,
    isPremium: false,
    shortDesc: `Just across the Royal Palace (Room 4)!`,
    desc: `Looking for a cozy place in Brussels? Welcome to our beautiful house across the street from the Royal Palace and a few minutes away from the Atomium, Expo Heisel, Tour&Taxi! Great connection (around 20 minutes) to the city center by metro & tram.`,
    countBedrooms: 1,
    maxGuests: 1,
    conditions: [`Wifi`, `Kitchen`, `Iron`, `Laptop-friendly workspace`, `Hangers`],
    photos: [
      `https://a0.muscache.com/im/pictures/36953775/ac25f6fa_original.jpg?im_w=1200`,
      `https://a0.muscache.com/im/pictures/35017832/91e979d3_original.jpg?im_w=1200`,
      `https://a0.muscache.com/im/pictures/35017866/71693b81_original.jpg?im_w=1200`,
    ],
    isFavorite: false,
    householder: {
      name: `Leo`,
      avatar: `${AVATAR_URL}/${Math.random()}`,
      super: false,
    }
  },
];
