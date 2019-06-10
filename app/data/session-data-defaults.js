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

  "warning": "true",

  "public_goods": [
    {
      "id": "1",
      "type": "Woodland",
      "species": "Ash",
      "area": "10.1 hectares",
      "value": "£1,056",
      "status": "Decision required",
      "issue": "Ash dieback"
    },
    {
      "id": "2",
      "type": "Meadowmat for birds and bees",
      "species": "Wildflower",
      "area": "1.85 hectares",
      "value": "£800"
    },
    {
      "id": "3",
      "type": "Hedgerow",
      "species": "Green Beech",
      "area": "0.8 hectares",
      "value": "£670"
    },
    {
      "id": "4",
      "type": "Winter bird feed",
      "species": "Mixed",
      "area": "1.1 hectares",
      "value": "£459"
    },
    {
      "id": "5",
      "type": "Wetland",
      "area": "2 hectares",
      "value": "1150"
    }
  ]

}
