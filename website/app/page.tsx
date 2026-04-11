import Navbar from '../components/Navbar';

export default function Home() {
  const destinations = [
    {
      id: 1,
      name: "Voyage de Rêve",
      description: "Profitez d'un séjour inoubliable à un prix exceptionnel. Détente complète et paysages spectaculaires.",
      price: "2500 DH",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop",
      duration: "7 jours"
    },
    {
      id: 2,
      name: "Aventure Saharienne",
      description: "Explorez les dunes dorées du Sahara et vivez une expérience authentique inoubliable au cœur du désert.",
      price: "1800 DH",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      duration: "5 jours"
    },
    {
      id: 3,
      name: "Plages de Luxe",
      description: "Détendez-vous au bord de l'eau cristalline dans nos resorts 5 étoiles partenaires exclusifs.",
      price: "3200 DH",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
      duration: "10 jours"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop')",
            filter: "brightness(0.4)"
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Almas Voyages
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-100 font-light">
            Explorez les Plus Belles Destinations du Monde
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Des expériences inoubliables à des prix exceptionnels
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 text-lg shadow-lg transform hover:scale-105">
            Voir les Offres Exclusives
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Pourquoi Nous Choisir?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4 text-orange-500">✈️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Destinations Exclusives</h3>
              <p className="text-gray-600">Accès à des destinations sélectionnées avec soin pour vous offrir les meilleures expériences.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4 text-orange-500">💰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Prix Compétitifs</h3>
              <p className="text-gray-600">Les meilleures offres du marché avec des tarifs dégressifs pour les groupes.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4 text-orange-500">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Service Premium</h3>
              <p className="text-gray-600">Une équipe dédiée disponible 24/7 pour assurer votre satisfaction complète.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Nos Meilleures Destinations
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Sélectionnées pour vous offrir les expériences les plus mémorables
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div 
                key={destination.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105"
              >
                <div className="relative h-64 bg-gray-200 overflow-hidden">
                  <img 
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {destination.duration}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-blue-700">{destination.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-bold text-2xl">{destination.price}</span>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition">
                      Détails
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à Partir?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactez-nous dès aujourd'hui pour réserver votre voyage des rêves
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 text-lg">
            Réserver Maintenant
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4">Almas Voyages</h4>
            <p className="text-sm">Votre partenaire de confiance pour des voyages inoubliables.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Destinations</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">Afrique</a></li>
              <li><a href="#" className="hover:text-white transition">Europe</a></li>
              <li><a href="#" className="hover:text-white transition">Asie</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Informations</h4>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-white transition">À propos</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Conditions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Nous Contacter</h4>
            <ul className="text-sm space-y-2">
              <li>📞 +212 5XX XXX XXX</li>
              <li>✉️ info@almasvoyages.com</li>
              <li>📍 Marrakech, Maroc</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Almas Voyages. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}