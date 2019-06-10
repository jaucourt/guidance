/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  "public_goods": [
    {
      "id": "W17754",
      "name": "Woodland",
      "type": "Woodland",
      "species": "Ash",
      "area": "10.1 hectares",
      "warning": "true"
    },
    {
      "id": "WF00243",
      "name": "Wildflowers in far field",
      "type": "Meadowmat for Birds and Bees",
      "species": "Wildflower",
      "area": "1.85 hectares"
    }
  ]

}
