import * as types from "../constants/ActionTypes";

const initialState = {
  playersById: [
    {
      name: "LeBron James",
      team: "LOS ANGELES LAKERS",
      position: "SF",
      starred: true
    },
    {
      name: "Kevin Duran",
      team: "GOLDEN STATE WARRIORS",
      position: "SF",
      starred: false
    },
    {
      name: "Anthony Davis",
      team: "NEW ORLEANS PELICANS",
      position: "PF",
      starred: false
    },
    {
      name: "Stephen Curry",
      team: "GOLDEN STATE WARRIORS",
      position: "PG",
      starred: false
    },
    {
      name: "James Harden",
      team: "HOUSTON ROCKETS",
      position: "SG",
      starred: false
    },
    {
      name: "Kawhi Leonard",
      team: "TORONTO RAPTORS",
      position: "SF",
      starred: false
    },
    {
      name: "Kawhi Leonard2",
      team: "TORONTO RAPTORS",
      position: "SF",
      starred: false
    },
    {
      name: "Kawhi Leonard3",
      team: "TORONTO RAPTORS",
      position: "SF",
      starred: false
    },
    {
      name: "Kawhi Leonard4",
      team: "TORONTO RAPTORS",
      position: "SF",
      starred: false
    },
    {
      name: "Kawhi Leonard5",
      team: "TORONTO RAPTORS",
      position: "SF",
      starred: false
    },
    {
      name: "Kawhi Leonard66",
      team: "TORONTO RAPTORS",
      position: "SF",
      starred: false
    }
  ]
};

export default function players(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PLAYER:
      return {
        ...state,
        playersById: [
          ...state.playersById,
          {
            name: action.name,
            team: "LOS ANGELES LAKERS",
            position: "SF"
          }
        ]
      };
    case types.DELETE_PLAYER:
      return {
        ...state,
        playersById: state.playersById.filter(
          (item, index) => index !== action.id
        )
      };
    case types.STAR_PLAYER:
      let players = [...state.playersById];
      let player = players.find((item, index) => index === action.id);
      player.starred = !player.starred;
      return {
        ...state,
        playersById: players
      };
    case types.HANDLE_SHOW:
      console.log(action);
      if (action.id === "ALL") {
        return {
          ...state,
          playersById: initialState.playersById
        };
      }
      return {
        ...state,
        playersById: initialState.playersById.filter(
          item => item.position === action.id
        )
      };
    default:
      return state;
  }
}
