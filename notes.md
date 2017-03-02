# Project Notes / Objective List

Generate random pairs from a list of people in a room

User Stories:
- Many users can add their name to a room (potentially via disposable url)
- When room is full, user can generate pairs of users in groups of 2 or more

Components:
  - App Skeleton
  - Nav/Header
  - NameContainer
    - NameInput
    - NameList
  - PairContainer
    - PairItem

Plan:
  - Initialize project skeleton, dependencies, and github repo
  - create folder structure for components
  - initialize redux store

Next Step:
  - Write functions that will do pairing procedure and add pairs to PairContainer in a PairItem

Step by Step:
  - take names state and randomly pair up one name with a different one
  - Add each pair to state in an array of arrays
  - each pair should be an array of 2 names
  - PairContainer should map through the pairs state and render a PairItem for each pair array element
  - That's it
