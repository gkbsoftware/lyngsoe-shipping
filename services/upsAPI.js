require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
var url = "mongodb://" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_NAME;
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});

var upsAPI = require('shipping-ups');

var ups = new upsAPI({
  environment: 'sandbox', // or live
  username: process.env.UPS_USERNAME,
  password: process.env.UPS_PASSWORD,
  access_key: process.env.UPS_KEY,
  imperial: true // set to false for metric
});


data = {
  pickup_type: 'daily_pickup', // optional, can be: 'daily_pickup', 'customer_counter', 'one_time_pickup', 'on_call_air', 'suggested_retail_rates', 'letter_center', 'air_service_center'
  // pickup_type_code: '01', // optional, overwrites pickup_type
  customer_classification: '00', // optional, need more details about what this does
  shipper: {
    name: 'GKB Software',
    shipper_number: process.env.UPS_SHIPPERNUMBER, // UPS account #
    phone_number: '', // optional
    fax_number: '', // optional
    email_address: '', // optional
    tax_identification_number: '', // optional
    address: {
      address_line_1: '401 Cormorant Pl',
      address_line_2: 'Apt 3102',
      city: 'Frederick',
      state_code: 'MD',
      country_code: 'US',
      postal_code: '21701'
    }
  },
  ship_to: {
    company_name: 'Lyngsoe Systems', // or person's name
    attention_name: 'GKB', // optional
    phone_number: '3013600912', // optional
    fax_number: '', // optional
    email_address: 'gkb@lyngsoesystems.com', // optional
    tax_identification_number: '', // optional
    location_id: '', //optional, for specific locations
    address: {
      address_line_1: '7470 New Technology Way', // optional
      city: 'Frederick', // optional
      state_code: 'MD', // optional, required for negotiated rates
      country_code: 'US',
      postal_code: '21703',
      residential: false // optional, can be useful for accurate rating
    }
  },
  // ship_from: { // optional, use if different from shipper address
  //   company_name: 'Company Name', // or person's name
  //   attention_name: 'Attention Name',
  //   phone_number: '', // optional
  //   tax_identification_number: '', // optional
  //   address: {
  //     address_line_1: '123 Fake Address',
  //     city: 'Dover',
  //     state_code: 'OH',
  //     country_code: 'US',
  //     postal_code: '44622'
  //   }
  // },
  // sold_to: { // optional, The person or company who imports and pays any duties due on the current shipment, required if Invoice of NAFTA CO is requested
  //   option: '01', // optional, applies to NAFTA CO form
  //   company_name: 'Company Name', // or person's name
  //   attention_name: 'Attention Name',
  //   phone_number: '', // optional
  //   tax_identification_number: '', // optional
  //   address: {
  //     address_line_1: '123 Fake Address',
  //     city: 'Dover',
  //     state_code: 'OH',
  //     country_code: 'US',
  //     postal_code: '44622'
  //   }
  // },
  service: '03', // optional, will rate this specific service.
  services: [ // optional, you can specify which rates to look for -- performs multiple requests, so be careful not to do too many
    '03', '01', '12', '14'
  ],
  // return_service: '9', // optional, will provide a UPS Return Service specification
  packages: [
    {
      packaging_type: '02', // optional, packaging type code 02=customersupplied
      weight: 1,
      description: 'Computer', // optional
      // delivery_confirmation_type: 2, // optional, 1 or 2
      // insured_value: 1000.00, // optional, 2 decimals
      dimensions: { // optional, integers: 0-108 for imperial, 0-270 for metric
        length: 12,
        width: 12,
        height: 24
      }
    }
  ]
}

// options = {
//   // negotiated_rates: true // Optional, but if truthy then the NegotiatedRatesIndicator will always be placed (even without state/province code). Useful for countries without provinces.
// }






var services = {
  myTracker: function(trackingNumber) {
    // 1Z6V49000191550455
    
    console.log("user input tracking number: " + trackingNumber)
    
    ups.track(trackingNumber, function(err, result) {
      if(err) {
        console.log('***ERROR STARTS HERE***')
        console.log(err);
        console.log('***ERROR ENDS HERE***')
      }
      if(result) {
        // console.log("return addrln1= " + result.Shipment.Shipper.Address.AddressLine1)
        // console.log("return city= " + result.Shipment.Shipper.Address.City)
        // console.log("return State= " + result.Shipment.Shipper.Address.StateProvinceCode)
        // console.log("return Zip= " + result.Shipment.Shipper.Address.PostalCode)
        console.log("shipto city= " + result.Shipment.ShipTo.Address.City)
        // console.log("shipto state= " + result.Shipment.ShipTo.Address.StateProvinceCode)
        // console.log("shipto zip= " + result.Shipment.ShipTo.Address.PostalCode)
        // console.log("service= " + result.Shipment.Service.Description)
        // console.log("service_code= " + result.Shipment.Service.Code)
        // console.log("date sent= " + result.Shipment.PickupDate)
        // console.log("expected time= " + result.Shipment.ScheduledDeliveryTime)
        // console.log("expected delivery= " + result.Shipment.ScheduledDeliveryDate)
        // console.log("ref number= " + result.Shipment.ReferenceNumber.Value)
        // console.log("tracking number= " + result.Shipment.Package.TrackingNumber)
        // 
        // console.log(result.Shipment.ScheduledDeliveryDate)
      }
    });
  }, // END myTracker
  
  myRate: function() {
    ups.rates(data, function(err, result) {
      if(err) {
        console.log('***ERROR STARTS HERE***')
        console.log(err.RatingServiceSelectionResponse);
        console.log('***ERROR ENDS HERE***')
      }
      else {
        console.log(result.RatedShipment)
      }
    })
  }
}


// services.myTracker('1Z6V49000191550455') //UPS Next Day Air 001
// services.myTracker('1Z6V49000296505912') //UPS 2nd Day Air 002
// services.myTracker('1Z6V49009094406064') //UPS Ground Service 003 
// services.myTracker('1Z6V49006898892976') //UPS Standard 011
// services.myTracker('1Z6V49001297761160') //UPS 3 Day Select 012
// services.myTracker('1Z6V49001594930898') //UPS Next Day Air® Early 014
// services.myTracker('1Z6V49000499242778') //UPS Worldwide Saver (Express) 065

module.exports = services;
