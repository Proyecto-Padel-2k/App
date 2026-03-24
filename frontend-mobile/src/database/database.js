const database = {
  users: [
    {
      id: 1,
      name: "Carlos Pérez",
      email: "carlos@email.com",
      password_hash: "hash123",
      age: 28,
      gender: "M",
      city: "Madrid",
      zone: "Centro",
      profile_photo: "carlos.jpg",
      language: "es",
      verified: true,
      created_at: "2025-01-10",
      attendance_percentage: 90
    },
    {
      id: 2,
      name: "Laura Gómez",
      email: "laura@email.com",
      password_hash: "hash456",
      age: 24,
      gender: "F",
      city: "Barcelona",
      zone: "Eixample",
      profile_photo: "laura.jpg",
      language: "es",
      verified: true,
      created_at: "2025-02-15",
      attendance_percentage: 85
    }
  ],

  player_profiles: [
    {
      id: 1,
      user_id: 1,
      declared_level: 7,
      validated_level: 6,
      years_experience: 5,
      laterality: "right",
      position_preferred: "forward",
      game_style: "aggressive"
    },
    {
      id: 2,
      user_id: 2,
      declared_level: 5,
      validated_level: 5,
      years_experience: 3,
      laterality: "left",
      position_preferred: "defense",
      game_style: "defensive"
    }
  ],

  preferences: [
    {
      id: 1,
      user_id: 1,
      match_type: "friendly",
      format: "5v5",
      min_level: 5,
      max_level: 8,
      min_age: 20,
      max_age: 35
    }
  ],

  availability: [
    {
      id: 1,
      user_id: 1,
      week_day: "Monday",
      start_hour: "18:00",
      end_hour: "20:00"
    },
    {
      id: 2,
      user_id: 2,
      week_day: "Wednesday",
      start_hour: "19:00",
      end_hour: "21:00"
    }
  ],

  locations: [
    {
      id: 1,
      user_id: 1,
      club_id: 101,
      tipo_pista: "indoor",
      indoor: true,
      radio_km: 10,
      enabled: true
    }
  ],

  matches: [
    {
      id: 1,
      fecha: "2025-03-20",
      hora: "19:00",
      club: "Club Deportivo Madrid",
      resultado: null,
      nivel_requerido: 6,
      tipo_necesidad: "players",
      coste: 10,
      estado: "open"
    }
  ],

  player_match: [
    {
      id: 1,
      user_id: 1,
      match_id: 1,
      order: 1,
      rol: "player",
      accepted: true
    },
    {
      id: 2,
      user_id: 2,
      match_id: 1,
      order: 2,
      rol: "player",
      accepted: false
    }
  ],

  ratings: [
    {
      id: 1,
      match_id: 1,
      rater_id: 1,
      rated_id: 2,
      puntuacion: 4,
      comentario: "Buen jugador pero llegó tarde"
    }
  ]
};

// Funciones simuladas tipo "queries"

function getUserById(id) {
  return database.users.find(user => user.id === id);
}

function getMatchesByUser(userId) {
  return database.player_match
    .filter(pm => pm.user_id === userId)
    .map(pm => database.matches.find(m => m.id === pm.match_id));
}

function getRatingsForUser(userId) {
  return database.ratings.filter(r => r.rated_id === userId);
}

// Exportar (Node.js)
module.exports = {
  database,
  getUserById,
  getMatchesByUser,
  getRatingsForUser
};