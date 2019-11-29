import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const movies = () => {
  return [{ "id": 1, "title": "Reel Rock 7 ", "description": "Anterior subluxation of unspecified humerus, initial encounter", "available": false },
  { "id": 2, "title": "Reprise", "description": "Breakdown (mechanical) of internal fixation device of left humerus, initial encounter", "available": true },
  { "id": 3, "title": "Seduced and Abandoned (Sedotta e abbandonata)", "description": "Person boarding or alighting a three-wheeled motor vehicle injured in collision with car, pick-up truck or van", "available": true },
  { "id": 4, "title": "Sacrificio: Who Betrayed Che Guevara", "description": "Other maternal infectious and parasitic diseases complicating pregnancy", "available": true },
  { "id": 5, "title": "Badding", "description": "Corrosion of unspecified degree of left palm", "available": false },
  { "id": 6, "title": "It's the Easter Beagle, Charlie Brown!", "description": "Pedestrian injured in nontraffic accident involving military vehicle, subsequent encounter", "available": false },
  { "id": 7, "title": "Casey Jones", "description": "Displaced fracture of medial cuneiform of unspecified foot, subsequent encounter for fracture with delayed healing", "available": false },
  { "id": 8, "title": "Bratz: The Movie", "description": "Subluxation of distal interphalangeal joint of right ring finger", "available": false },
  { "id": 9, "title": "Lisbon Story", "description": "Leakage of unspecified vascular graft, initial encounter", "available": true },
  { "id": 10, "title": "Sense and Sensibility", "description": "Infection and inflammatory reaction due to internal left knee prosthesis, initial encounter", "available": false },
  { "id": 11, "title": "Gay Bed and Breakfast of Terror, The", "description": "Other fracture of left talus, subsequent encounter for fracture with routine healing", "available": false },
  { "id": 12, "title": "Foosball (Metegol)", "description": "Punctate keratitis, bilateral", "available": true },
  { "id": 13, "title": "Phantasm IV: Oblivion", "description": "Bilious vomiting", "available": false },
  { "id": 14, "title": "Undercurrent", "description": "Other superficial bite of right lesser toe(s), initial encounter", "available": true },
  { "id": 15, "title": "America's Sweethearts", "description": "Primary blast injury of ascending [right] colon, initial encounter", "available": false },
  { "id": 16, "title": "Cargo", "description": "Exposure to ignition of highly flammable material, sequela", "available": true },
  { "id": 17, "title": "Children of the Decree (Das Experiment 770 - Gebären auf Befehl)", "description": "Underdosing of emetics, sequela", "available": true },
  { "id": 18, "title": "Over Your Dead Body", "description": "NIHSS score 6", "available": false },
  { "id": 19, "title": "Colors", "description": "Nondisplaced segmental fracture of shaft of right femur, subsequent encounter for open fracture type I or II with routine healing", "available": true },
  { "id": 20, "title": "The New Girlfriend", "description": "Poisoning by other nonsteroidal anti-inflammatory drugs [NSAID], assault, subsequent encounter", "available": false },
  { "id": 21, "title": "Bowling for Columbine", "description": "Laceration with foreign body of right ring finger without damage to nail, initial encounter", "available": true },
  { "id": 22, "title": "Elevator to the Gallows (a.k.a. Frantic) (Ascenseur pour l'échafaud)", "description": "Osteonecrosis due to drugs, right fibula", "available": true },
  { "id": 23, "title": "We Need to Talk About Kevin", "description": "Urogenital trichomoniasis", "available": false },
  { "id": 24, "title": "Executioner, The (Massacre Mafia Style)", "description": "Conjunctivitis due to adenovirus", "available": true },
  { "id": 25, "title": "Castle of Sand, The (Suna no utsuwa)", "description": "Activity, ice skating", "available": true },
  { "id": 26, "title": "Fright Night", "description": "Chronic mastoiditis, unspecified ear", "available": false },
  { "id": 27, "title": "Where East Is East", "description": "Nondisplaced fracture of olecranon process with intraarticular extension of right ulna, initial encounter for closed fracture", "available": true },
  { "id": 28, "title": "Ape, The", "description": "Osteopathy after poliomyelitis, right hand", "available": false },
  { "id": 29, "title": "World's Greatest Lover, The", "description": "Malignant neoplasm of unspecified cornea", "available": false },
  { "id": 30, "title": "Code 46", "description": "Cicatricial ectropion of eyelid", "available": true },
  { "id": 31, "title": "Salaam-E-Ishq", "description": "Felty's syndrome, left shoulder", "available": true },
  { "id": 32, "title": "O.C. and Stiggs", "description": "Adverse effect of unspecified fibrinolysis-affecting drugs, initial encounter", "available": true },
  { "id": 33, "title": "Big Bird Cage, The", "description": "Laceration without foreign body of lower back and pelvis without penetration into retroperitoneum, initial encounter", "available": true },
  { "id": 34, "title": "Head of State", "description": "Other personal history of psychological trauma, not elsewhere classified", "available": true },
  { "id": 35, "title": "Ghosts of the Abyss", "description": "Nondisplaced fracture of medial malleolus of unspecified tibia, subsequent encounter for closed fracture with nonunion", "available": false },
  { "id": 36, "title": "Keys to Tulsa", "description": "Sprain of interphalangeal joint of other finger", "available": true },
  { "id": 37, "title": "Two Moon Junction", "description": "Displaced transverse fracture of shaft of left ulna, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing", "available": false },
  { "id": 38, "title": "Officer and a Gentleman, An", "description": "Torus fracture of lower end of unspecified ulna", "available": true },
  { "id": 39, "title": "Soldier's Sweetheart, A", "description": "Other superficial bite of unspecified elbow, initial encounter", "available": false },
  { "id": 40, "title": "Leaves of Grass", "description": "Infection and inflammatory reaction due to implanted electronic neurostimulator of brain, electrode (lead)", "available": false },
  { "id": 41, "title": "Piccadilly", "description": "Other instability, unspecified joint", "available": false },
  { "id": 42, "title": "Rat", "description": "Traumatic subarachnoid hemorrhage with loss of consciousness greater than 24 hours without return to pre-existing conscious level with patient surviving", "available": false },
  { "id": 43, "title": "Father Takes a Wife", "description": "Ocular laceration and rupture with prolapse or loss of intraocular tissue", "available": true },
  { "id": 44, "title": "The Butterfly Effect 2", "description": "Varicose veins of right lower extremity with both ulcer other part of foot and inflammation", "available": true },
  { "id": 45, "title": "Tokyo Joe", "description": "Other specified injury of muscle, fascia and tendon at neck level", "available": true },
  { "id": 46, "title": "Signal, The", "description": "Terrorism involving destruction of aircraft, civilian injured, sequela", "available": false },
  { "id": 47, "title": "Radio Inside", "description": "Corrosion involving larynx and trachea with lung, sequela", "available": false },
  { "id": 48, "title": "5 Deadly Venoms, The (Wu du) (Five Deadly Venoms)", "description": "Papyraceous fetus, first trimester, fetus 1", "available": true },
  { "id": 49, "title": "Back in the Day", "description": "Puncture wound with foreign body of left upper arm, initial encounter", "available": true },
  { "id": 50, "title": "Dead Times (Temps morts, Les)", "description": "Displacement of heart valve prosthesis, sequela", "available": false },
  { "id": 51, "title": "Faust", "description": "Military operations involving explosion of improvised explosive device [IED], military personnel, sequela", "available": false },
  { "id": 52, "title": "Perils of Pauline, The", "description": "Personal history of other (healed) physical injury and trauma", "available": false },
  { "id": 53, "title": "Dirty Story", "description": "Idiopathic corneal edema", "available": false },
  { "id": 54, "title": "Pulling John", "description": "Salter-Harris Type I physeal fracture of upper end of unspecified tibia, initial encounter for closed fracture", "available": true },
  { "id": 55, "title": "Eden", "description": "Other paralytic syndrome following unspecified cerebrovascular disease affecting unspecified side", "available": true },
  { "id": 56, "title": "Camille", "description": "Other abnormalities of breathing", "available": true },
  { "id": 57, "title": "Frankenstein and the Monster from Hell", "description": "Unspecified intracranial injury with loss of consciousness of any duration with death due to other cause prior to regaining consciousness, subsequent encounter", "available": true },
  { "id": 58, "title": "Above the Street, Below the Water (Over gaden under vandet)", "description": "Pedestrian on other rolling-type pedestrian conveyance colliding with stationary object, subsequent encounter", "available": false },
  { "id": 59, "title": "Lollilove", "description": "Toxic effect of trichloroethylene, assault", "available": false },
  { "id": 60, "title": "Western Union", "description": "Jumping or diving into swimming pool striking water surface causing other injury", "available": true },
  { "id": 61, "title": "I Am David", "description": "Exposure to sofa fire due to unspecified burning material", "available": true },
  { "id": 62, "title": "Quick Change", "description": "Poisoning by calcium-channel blockers, undetermined", "available": true },
  { "id": 63, "title": "Cass", "description": "Other specified injury of unspecified muscle and tendon at ankle and foot level, right foot, initial encounter", "available": false },
  { "id": 64, "title": "Satin Rouge", "description": "Other specified disorders of amniotic fluid and membranes", "available": true },
  { "id": 65, "title": "Running Mates", "description": "Other injury of extensor or abductor muscles, fascia and tendons of left thumb at forearm level, subsequent encounter", "available": false },
  { "id": 66, "title": "Hey, Hey, It's Esther Blueburger", "description": "Injury of right internal carotid artery, intracranial portion, not elsewhere classified with loss of consciousness of unspecified duration, initial encounter", "available": true },
  { "id": 67, "title": "Riptide", "description": "Burn of third degree of left ankle, initial encounter", "available": false },
  { "id": 68, "title": "Saddest Music in the World, The", "description": "Nondisplaced fracture of medial phalanx of left ring finger, subsequent encounter for fracture with delayed healing", "available": true },
  { "id": 69, "title": "Von Ryan's Express", "description": "Complete traumatic transphalangeal amputation of other finger, sequela", "available": true },
  { "id": 70, "title": "Red Squirrel, The (Ardilla roja, La)", "description": "Other specified injury of unspecified tibial artery, right leg, sequela", "available": true },
  { "id": 71, "title": "Tenth Man, The", "description": "Encounter for adjustment and management of other implanted devices", "available": true },
  { "id": 72, "title": "Herod's Law (Ley de Herodes, La)", "description": "Defects of catalase and peroxidase", "available": true },
  { "id": 73, "title": "Just 4 Kicks", "description": "Counseling related to combined concerns regarding sexual attitude, behavior and orientation", "available": true },
  { "id": 74, "title": "Next of Kin", "description": "Other sprain of right foot, initial encounter", "available": true },
  { "id": 75, "title": "SpongeBob Movie: Sponge Out of Water, The", "description": "Fracture of one rib, left side", "available": true },
  { "id": 76, "title": "And the Band Played On", "description": "Car driver injured in collision with sport utility vehicle in nontraffic accident, initial encounter", "available": true },
  { "id": 77, "title": "Christmas Carol, A", "description": "Abnormal biochemical finding on antenatal screening of mother", "available": true },
  { "id": 78, "title": "River, The", "description": "Other complications of anesthesia during pregnancy, first trimester", "available": true },
  { "id": 79, "title": "Food Stamped", "description": "Poisoning by antithyroid drugs, assault, subsequent encounter", "available": false },
  { "id": 80, "title": "Two Mrs. Carrolls, The", "description": "Displaced oblique fracture of shaft of left ulna, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing", "available": true },
  { "id": 81, "title": "Wartorn: 1861-2010", "description": "Acquired absence of left great toe", "available": false },
  { "id": 82, "title": "A Cinderella Story: Once Upon a Song", "description": "Laceration of dorsal artery of left foot, initial encounter", "available": true },
  { "id": 83, "title": "Read It and Weep", "description": "Babystroller colliding with stationary object", "available": true },
  { "id": 84, "title": "Hills Have Eyes, The", "description": "Malocclusion, unspecified", "available": false },
  { "id": 85, "title": "Double, The", "description": "Nondisplaced segmental fracture of shaft of ulna, right arm", "available": true },
  { "id": 86, "title": "Chained for Life", "description": "Stable burst fracture of second thoracic vertebra", "available": false },
  { "id": 87, "title": "Game Plan, The", "description": "Edema of eyelid", "available": true },
  { "id": 88, "title": "New Jack City", "description": "Cocaine dependence", "available": true },
  { "id": 89, "title": "He Walked by Night", "description": "Acquired absence of right upper limb below elbow", "available": false },
  { "id": 90, "title": "Brubaker", "description": "Nondisplaced oblique fracture of shaft of left radius, subsequent encounter for closed fracture with nonunion", "available": true },
  { "id": 91, "title": "Cleopatra", "description": "Passenger in pick-up truck or van injured in collision with pedal cycle in traffic accident, initial encounter", "available": true },
  { "id": 92, "title": "Irma Vep", "description": "Neoplasm of uncertain behavior of renal pelvis", "available": false },
  { "id": 93, "title": "It Came from Outer Space", "description": "Ring staphyloma, left eye", "available": false },
  { "id": 94, "title": "Evening with Kevin Smith 2: Evening Harder, An", "description": "Nondisplaced fracture of distal phalanx of right ring finger, subsequent encounter for fracture with delayed healing", "available": false },
  { "id": 95, "title": "Arnulf Rainer", "description": "Asymptomatic varicose veins of right lower extremity", "available": false },
  { "id": 96, "title": "Tribute to a Bad Man", "description": "Other specified bursopathies, ankle and foot", "available": false },
  { "id": 97, "title": "Boat That Rocked, The (a.k.a. Pirate Radio)", "description": "Intraoperative and postprocedural complications and disorders of circulatory system, not elsewhere classified", "available": true },
  { "id": 98, "title": "41", "description": "Other fracture of unspecified patella, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with nonunion", "available": true },
  { "id": 99, "title": "Rise and Fall of Legs Diamond, The", "description": "Nondisplaced oblique fracture of shaft of right radius, subsequent encounter for closed fracture with nonunion", "available": false },
  { "id": 100, "title": "Funny Lady", "description": "Unspecified injury of flexor muscle, fascia and tendon of right ring finger at forearm level, sequela", "available": true }]
}
export default new Vuex.Store({
  state: {
    movies: movies(),
    filter: {
      query: '',
      available: true
    }
  },
  mutations: {
    SET_QUERY(state, query) {
      state.filter.query = query;
    },
    SET_AVALAIBLE(state) {
      state.filter.available = !state.filter.available;
    }
  },
  getters: {
    filteredMovies(state) {
      let movies = state.movies.filter(movie => movie.available === state.filter.available);
      if (state.filter.query.length > 2) {
        return movies.filter(movie => movie.title.toLowerCase().includes(state.filter.query.toLowerCase()));
      }
      return movies;
    }
  }
})
