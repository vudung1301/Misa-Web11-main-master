import axios from "axios";
import BaseService from "./BaseService";

class EmployeeService extends BaseService {
  constructor(apiUrl = "", controller = "") {
    controller = controller ? controller : "api/v1/Employees";
    apiUrl = apiUrl ? apiUrl : "http://localhost:5168/api/v1/Employees";
    super(apiUrl, controller);
  }

  getNewEmployeeCode(params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.apiUrl}/${this.controller}/newEmployeeCode`, params)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default EmployeeService;