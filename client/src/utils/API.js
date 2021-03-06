import axios from "axios";

export default {
  // Place search API call that accepts manual search
  getPlaces: function (query, lat, lng) {
    return axios.get('/api/maps/' + query + "/" + lat + "/" + lng);
  },
  // Place search DOES NOT use user search
  autoPlaces: function (lat, lng) {
    return axios.get('/api/maps/' + lat + "/" + lng);
  },
  // Gets all businesses (findAll)
  getBusinesses: function () {
    return axios.get("/api/businesses");
  },
  // Gets the business with the given id (findById)
  getBusiness: function (id) {
    return axios.get("/api/businesses/" + id);
  },
  // Deletes the business with the given id
  deleteBusiness: function (id) {
    return axios.delete("/api/businesses/" + id);
  },
  // Saves a business to the database
  saveBusiness: function (businessData) {
    return axios.post("/api/businesses", businessData);
  },
  // Saves a deal to the Deals collection, populates it within the appropriate deals[] for a business document.
  saveDeal: function (id, dealData) {
    return axios.post("/api/businesses/" + id + "/deals", dealData);
  },
  // saveDeal: function (id, dealData) {
  //   return axios.post(`/api/businesses/${id}/deals`, dealData);
  // }
  // Get all the deals from the deals collection (d-findAllDeals)
  getAllDeals: function() {
    return axios.get("/api/deals");
  },
  // Get the deals with the given id (findDeals)
  getDeals: function (id) {
    return axios.get("/api/businesses/" + id + "/deals");
  },
  // Get specific deal by its id. (d-findDealById)
  getDeal: function (id) {
    return axios.get("/api/deals/" + id);
  },
  // Update a specific deal by its id (updateDeal)
  modifyDeal: function (id, dealData) {
    return axios.put("/api/deals/" + id, dealData);
  }
};