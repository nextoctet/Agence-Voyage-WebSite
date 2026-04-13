export interface Offre {
  id: string;
  titre: string;
  description: string;
  prix: string;
  images: string[];
  details: {
    inclus: string[];
    duree: string;
  };
}

export const OFFRES: Offre[] = [
  {
    id: "andalousie-2026",
    titre: "Andalousie & Séville",
    description: "Découvrez la beauté de l'Andalousie avec ses paysages pittoresques et sa riche histoire.",
    prix: "7.200 Dhs",
    images: [
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80",
      "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?q=80",
      "https://images.unsplash.com/photo-1562883676-8c6e5d9e4b7a?q=80"
    ],
    details: {
      inclus: [
        "Vols aller-retour",
        "Hôtel 4 étoiles",
        "Petit-déjeuner inclus",
        "Visites guidées",
        "Transport local"
      ],
      duree: "7 jours / 6 nuits"
    }
  },
  {
    id: "costa-del-sol",
    titre: "Costa Del Sol / Malaga",
    description: "Profitez des plages magnifiques et du climat méditerranéen de la Costa del Sol.",
    prix: "3.990 Dhs",
    images: [
      "https://images.unsplash.com/photo-1504019347908-b45f9b0b8dd5?q=80",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80"
    ],
    details: {
      inclus: [
        "Vols aller-retour",
        "Hôtel 4 étoiles vue mer",
        "Formule all-inclusive",
        "Accès plage",
        "Activités nautiques"
      ],
      duree: "5 jours / 4 nuits"
    }
  },
  {
    id: "dubai-premium",
    titre: "Dubaï Expérience",
    description: "Vivez l'expérience luxe à Dubaï avec modernité et confort.",
    prix: "9.990 Dhs",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80",
      "https://images.unsplash.com/photo-1512216547050-74e8f8e6dcd3?q=80",
      "https://images.unsplash.com/photo-1512885981623-e7e7a1f39b1e?q=80"
    ],
    details: {
      inclus: [
        "Vols premium",
        "Hôtel 5 étoiles",
        "Tour Burj Khalifa",
        "Dubai Mall",
        "Safari dans le désert"
      ],
      duree: "8 jours / 7 nuits"
    }
  },
  {
    id: "istanbul-city",
    titre: "Istanbul Magic",
    description: "Explorez la ville des deux continents avec ses monuments historiques et sa culture vibrante.",
    prix: "6.500 Dhs",
    images: [
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80",
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aXN0YW5idWx8fHx8fHwxNjc5NTkwMDA5&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
      "https://images.unsplash.com/photo-1516110582095-3e8e00f5f3be?q=80"
    ],
    details: {
      inclus: [
        "Vols aller-retour",
        "Hôtel 4 étoiles",
        "Croisière sur le Bosphore",
        "Mosquée Bleue",
        "Bazar du Grand",
        "Petit-déjeuner buffet"
      ],
      duree: "6 jours / 5 nuits"
    }
  },
  {
    id: "marrakech-riad",
    titre: "Marrakech Prestige",
    description: "Immergez-vous dans la magie de Marrakech et ses riads traditionnels.",
    prix: "2.500 Dhs",
    images: [
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80",
      "https://images.unsplash.com/photo-1590181754000-1c5d07a088ca?q=80",
      "https://images.unsplash.com/photo-1599599810494-ff3a547e05c6?q=80"
    ],
    details: {
      inclus: [
        "Riad traditionnel",
        "Petit-déjeuner marocain",
        "Visite médina",
        "Excursion désert",
        "Guide francophone"
      ],
      duree: "3 jours / 2 nuits"
    }
  },
  {
    id: "omra-2026",
    titre: "Omra Ramadan",
    description: "Complétez votre Omra avec nos packages spirituels et confortables.",
    prix: "14.500 Dhs",
    images: [
      "https://images.unsplash.com/photo-1565037604118-28564a2753a8?q=80",
      "https://images.unsplash.com/photo-1582552938529-37acec290c75?q=80",
      "https://images.unsplash.com/photo-1565037611428-af19b76c1798?q=80"
    ],
    details: {
      inclus: [
        "Vols directs",
        "Hôtel près de la Kaaba",
        "Visa Omra",
        "Transferts VIP",
        "Accompagnateur religieux",
        "Petit-déjeuner et dîner"
      ],
      duree: "10 jours / 9 nuits"
    }
  }
];
